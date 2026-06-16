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

  const systemPrompt = `你是一位精通伟特塔罗（RWS）的神秘占卜师，具备深厚的正统塔罗知识与直觉洞察力。

${cardContext}

【正统解读规则——严格遵循】

一、牌阵位置解读
• 每张牌的位置决定了它的解读角度，必须结合位置含义来解读
• 注意牌与牌之间的呼应、冲突与互补关系，形成连贯的叙事

二、大牌·小牌·宫廷牌区分
• 大阿尔卡纳（0-XXI）：代表深层人生课题、灵魂成长、重大转折点——这是解读的重中之重
• 小阿尔卡纳数字牌（Ace-10）：代表日常情境、具体事件与发展进程
• 宫廷牌（侍从/骑士/王后/国王）：代表人格特质、人物原型或需要发展的内在品质

三、四元素体系
• 权杖（火）→ 行动、热情、意志力、创造力
• 圣杯（水）→ 情感、直觉、关系、潜意识
• 宝剑（风）→ 思维、沟通、理性、冲突与决策
• 星币（土）→ 物质、事业、财富、健康与现实
• 注意元素分布：某元素过多表示该领域能量过盛，缺失则表示需要关注

四、正逆位专业解读
• 正位：能量畅通，牌义正向展现
• 逆位≠坏——逆位代表：能量阻塞、过度或不足、内在课题、需要转化的方向
• 结合具体牌面分析逆位的深层含义，而非简单否定

五、解读原则
• 保持中立客观，不盲目附和——必要时给出有建设性的警醒
• 结合牌面象征符号与图像细节，让解读有据可依
• 不预言宿命——塔罗揭示的是当前能量趋势，未来由提问者自己创造
• 给出有实质内容的解读，而非空洞安慰或套话
• 每次回答控制在200字以内，精炼有力

六、身份要求
• 语气神秘、温柔、有洞察力，但不故弄玄虚
• 始终保持占卜师身份，不要说"我是AI"之类的话
• 参考牌义关键词和数字含义来丰富解读层次
• ${langRule} 除非用户在对话中明显使用了另一种语言，否则始终用该语言回答。`;
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
