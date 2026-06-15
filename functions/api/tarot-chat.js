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

  const { messages, cardContext } = await request.json();

  const systemPrompt = `你是一位神秘而睿智的塔罗占卜师，拥有深厚的塔罗知识与直觉洞察力。
当前牌阵信息：
${cardContext}

占卜规则：
- 结合当前抽到的牌来回答提问者的疑惑
- 语气神秘、温柔、有洞察力，但不故弄玄虚
- 每次回答控制在150字以内
- 不要说"我是AI"之类的话，始终保持占卜师身份`;

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
