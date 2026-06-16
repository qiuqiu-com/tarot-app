/**
 * Cloudflare Pages Function — 塔罗占卜师聊天接口
 * 将请求转发给 DeepSeek API，保持占卜师身份
 *
 * 环境变量（在 Pages 面板设置）:
 *   DEEPSEEK_API_KEY — DeepSeek API 密钥
 */

export async function onRequest(context) {
  const { request, env } = context;

  // CORS 预检
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const { messages, cardContext, language, question } = await request.json();

  // 检测问题语言，优先级高于 UI 语言
  let detectedLang = language || 'zh';
  if (question && question.trim()) {
    const cyrillic = (question.match(/[а-яё]/gi) || []).length;
    const latin   = (question.match(/[a-z]/gi) || []).length;
    const cjk     = (question.match(/[一-鿿]/g) || []).length;
    const total   = cyrillic + latin + cjk;
    if (total > 0) {
      if (cyrillic > latin && cyrillic > cjk) detectedLang = 'ru';
      else if (latin > cjk) detectedLang = 'en';
      else detectedLang = 'zh';
    }
  }

  const langRule = {
    zh: '用中文回答。',
    en: 'Answer in English.',
    ru: 'Отвечай на русском языке.'
  }[detectedLang] || '用中文回答。';

  const systemPrompt = `你是一位神秘而睿智的塔罗占卜师，拥有深厚的塔罗知识与直觉洞察力。
当前牌阵信息：
${cardContext}

占卜规则：
- 结合当前抽到的牌来回答提问者的疑惑
- 语气神秘、温柔、有洞察力，但不故弄玄虚
- 每次回答控制在150字以内
- 保持中立客观，不要一味肯定或附和提问者，必要时给出有建设性的警醒
- 不要说"我是AI"之类的话，始终保持占卜师身份
- ${langRule} 除非用户在对话中明显使用了另一种语言，否则始终用该语言回答。`;

  const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${env.DEEPSEEK_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages,
      ],
      max_tokens: 300,
      temperature: 0.9,
    }),
  });

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
