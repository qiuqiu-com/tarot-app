/* ============================================================
   牌阵定义 — 6种专业牌阵
   ============================================================ */
const SPREADS = [
    {
        id: 'single',
        name: '单张牌占卜',
        desc: '快速解答当下的困惑，获得直观指引',
        icon: '🃏',
        cardCount: 1,
        positions: [
            { label: '当下指引', desc: '此刻最需要知道的讯息' }
        ]
    },
    {
        id: 'yesno',
        name: '是非占卜',
        desc: '明确的是非答案，适合二元选择问题',
        icon: '⚖️',
        cardCount: 1,
        positions: [
            { label: '答案', desc: '正位为"是" · 逆位为"否" · 大牌为"时机未到"' }
        ]
    },
    {
        id: 'three',
        name: '三张牌牌阵',
        desc: '过去 · 现在 · 未来，洞悉事件发展脉络',
        icon: '📜',
        cardCount: 3,
        positions: [
            { label: '过去', desc: '影响当前局面的根源' },
            { label: '现在', desc: '当下的真实处境' },
            { label: '未来', desc: '即将到来的发展' }
        ]
    },
    {
        id: 'relationship',
        name: '关系之镜',
        desc: '深入剖析情感关系，看清双方的内心',
        icon: '💞',
        cardCount: 5,
        positions: [
            { label: '自己', desc: '你在关系中的状态' },
            { label: '对方', desc: 'Ta在关系中的状态' },
            { label: '关系本质', desc: '这段关系的核心能量' },
            { label: '阻碍', desc: '需要面对的挑战' },
            { label: '建议', desc: '促进关系的方向' }
        ]
    },
    {
        id: 'career',
        name: '事业抉择',
        desc: '职业发展的深度指引，看清选择的方向',
        icon: '💼',
        cardCount: 5,
        positions: [
            { label: '现状', desc: '当前事业的局面' },
            { label: '机会', desc: '正在靠近的可能性' },
            { label: '风险', desc: '需要注意的隐患' },
            { label: '内在资源', desc: '你拥有的优势' },
            { label: '建议', desc: '最佳行动方向' }
        ]
    },
    {
        id: 'celtic',
        name: '凯尔特十字',
        desc: '最经典的全面牌阵，深入剖析复杂问题',
        icon: '✡️',
        cardCount: 10,
        positions: [
            { label: '现状', desc: '问题的核心能量' },
            { label: '阻碍', desc: '交叉的挑战' },
            { label: '根基', desc: '问题的深层根源' },
            { label: '过往', desc: '近期的影响因素' },
            { label: '目标', desc: '你意识层面的追求' },
            { label: '未来', desc: '即将展现的局面' },
            { label: '自我', desc: '你内心的真实态度' },
            { label: '环境', desc: '他人与外界的影响' },
            { label: '希望与恐惧', desc: '内心的期待与不安' },
            { label: '结果', desc: '最终的发展走向' }
        ]
    }
];

/* ---------- 占卜核心逻辑 ---------- */

/**
 * 执行一次占卜
 * @param {string} spreadId
 * @param {string} [question] - 用户的问题
 * @returns {object}
 */
function performReading(spreadId, question) {
    const spread = SPREADS.find(s => s.id === spreadId);
    if (!spread) throw new Error('未知牌阵: ' + spreadId);

    const deck = shuffleDeck([...TAROT_CARDS]);
    const drawn = deck.slice(0, spread.cardCount);

    const cards = drawn.map((card, i) => ({
        card: card,
        position: spread.positions[i],
        reversed: Math.random() < 0.5
    }));

    return {
        id: Date.now(),
        spread: spread,
        question: question || '',
        date: new Date(),
        cards: cards
    };
}

/** Fisher-Yates 洗牌 */
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

/** 获取牌在占卜中的解读文本 */
function getCardReading(cardData, reversed) {
    return {
        meaning: reversed ? cardData.meaningRev : cardData.meaningUp,
        orientation: reversed ? '逆位' : '正位',
        keywords: cardData.keywords
    };
}

/** 根据 suit 返回元素与花色名 */
function getSuitMeta(suit) {
    const map = {
        wands: { name: '权杖', element: '火', elementCn: '火元素 · 行动与创造' },
        cups:  { name: '圣杯', element: '水', elementCn: '水元素 · 情感与直觉' },
        swords: { name: '宝剑', element: '风', elementCn: '风元素 · 思想与挑战' },
        pentacles: { name: '星币', element: '土', elementCn: '土元素 · 物质与事业' }
    };
    return map[suit] || { name: '', element: '', elementCn: '' };
}

/** 是非占卜判断 */
function getYesNoReading(card, reversed) {
    if (card.arcana === 'major') {
        return { answer: '时机未到', detail: '大阿卡纳意味着更深刻的力量在运作，答案并非简单的是与否。建议深入探索后再做决定。' };
    }
    if (reversed) {
        return { answer: '否', detail: '能量受阻或时机未成熟。这张牌逆位建议你调整方向或等待更合适的时机。' };
    }
    return { answer: '是', detail: '能量流通顺畅。这张牌正位肯定了你的问题，可以积极行动。' };
}
