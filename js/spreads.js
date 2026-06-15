/* ============================================================
   牌阵定义 — 6种专业牌阵
   ============================================================ */
const SPREADS = [
    {
        id: 'single',
        name: '', desc: '', icon: '🃏', cardCount: 1,
        positions: [
            { labelKey: 'pos-guidance', descKey: 'pos-guidance-d' }
        ]
    },
    {
        id: 'yesno',
        name: '', desc: '', icon: '⚖️', cardCount: 1,
        positions: [
            { labelKey: 'pos-answer', descKey: 'pos-answer-d' }
        ]
    },
    {
        id: 'three',
        name: '', desc: '', icon: '📜', cardCount: 3,
        positions: [
            { labelKey: 'pos-past', descKey: 'pos-past-d' },
            { labelKey: 'pos-present', descKey: 'pos-present-d' },
            { labelKey: 'pos-future', descKey: 'pos-future-d' }
        ]
    },
    {
        id: 'relationship',
        name: '', desc: '', icon: '💞', cardCount: 5,
        positions: [
            { labelKey: 'pos-self', descKey: 'pos-self-d' },
            { labelKey: 'pos-other', descKey: 'pos-other-d' },
            { labelKey: 'pos-core', descKey: 'pos-core-d' },
            { labelKey: 'pos-block', descKey: 'pos-block-d' },
            { labelKey: 'pos-advice', descKey: 'pos-advice-d2' }
        ]
    },
    {
        id: 'career',
        name: '', desc: '', icon: '💼', cardCount: 5,
        positions: [
            { labelKey: 'pos-current', descKey: 'pos-current-d' },
            { labelKey: 'pos-opportunity', descKey: 'pos-opportunity-d' },
            { labelKey: 'pos-risk', descKey: 'pos-risk-d' },
            { labelKey: 'pos-resource', descKey: 'pos-resource-d' },
            { labelKey: 'pos-advice', descKey: 'pos-advice-d' }
        ]
    },
    {
        id: 'celtic',
        name: '', desc: '', icon: '✡️', cardCount: 10,
        positions: [
            { labelKey: 'pos-center', descKey: 'pos-center-d' },
            { labelKey: 'pos-cross', descKey: 'pos-cross-d' },
            { labelKey: 'pos-foundation', descKey: 'pos-foundation-d' },
            { labelKey: 'pos-recent', descKey: 'pos-recent-d' },
            { labelKey: 'pos-goal', descKey: 'pos-goal-d' },
            { labelKey: 'pos-near', descKey: 'pos-near-d' },
            { labelKey: 'pos-attitude', descKey: 'pos-attitude-d' },
            { labelKey: 'pos-environment', descKey: 'pos-environment-d' },
            { labelKey: 'pos-hopefear', descKey: 'pos-hopefear-d' },
            { labelKey: 'pos-outcome', descKey: 'pos-outcome-d' }
        ]
    }
];

// 牌阵名称/描述 i18n key 映射
const SPREAD_NAMES = {
    single: 'sp-single', yesno: 'sp-yesno', three: 'sp-three',
    relationship: 'sp-relationship', career: 'sp-career', celtic: 'sp-celtic'
};
const SPREAD_DESCS = {
    single: 'sp-single-desc', yesno: 'sp-yesno-desc', three: 'sp-three-desc',
    relationship: 'sp-rel-desc', career: 'sp-career-desc', celtic: 'sp-celtic-desc'
};

/* ---------- 占卜核心逻辑 ---------- */

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

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

function getCardReading(cardData, reversed) {
    const lang = typeof getLang === 'function' ? getLang() : 'zh';
    const oriMap = { zh: ['逆位', '正位'], en: ['Reversed', 'Upright'], ru: ['Перевёрнуто', 'Прямое'] };
    const ori = oriMap[lang] || oriMap.zh;
    return {
        meaning: reversed ? t(cardData, 'meaningRev') : t(cardData, 'meaningUp'),
        orientation: reversed ? ori[0] : ori[1],
        keywords: t(cardData, 'keywords')
    };
}

function getSuitMeta(suit) {
    const map = {
        wands: { name: '', element: '🔥', elementCn: '' },
        cups:  { name: '', element: '💧', elementCn: '' },
        swords: { name: '', element: '⚔️', elementCn: '' },
        pentacles: { name: '', element: '💎', elementCn: '' }
    };
    return map[suit] || { name: '', element: '', elementCn: '' };
}

function getYesNoReading(card, reversed) {
    if (card.arcana === 'major') {
        return { answer: '…', detail: '…' };
    }
    if (reversed) {
        return { answer: '…', detail: '…' };
    }
    return { answer: '…', detail: '…' };
}
