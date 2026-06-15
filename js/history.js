/* ============================================================
   占卜历史记录 — localStorage 管理
   ============================================================ */

const HISTORY_KEY = 'tarot_history';

/**
 * 获取所有历史记录
 */
function getHistory() {
    try {
        const data = localStorage.getItem(HISTORY_KEY);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        console.warn('读取历史记录失败:', e);
        return [];
    }
}

/**
 * 保存一条占卜记录
 * @param {object} reading - performReading() 的返回结果
 * @returns {number} 记录ID
 */
function saveReading(reading) {
    const history = getHistory();

    const record = {
        id: Date.now(),
        date: reading.date.toISOString(),
        question: reading.question || '',
        spreadId: reading.spread.id,
        spreadName: reading.spread.name,
        spreadIcon: reading.spread.icon || '',
        cards: reading.cards.map(c => ({
            cardId: c.card.id,
            cardName: c.card.name,
            cardNameEn: c.card.nameEn,
            symbol: c.card.symbol,
            reversed: c.reversed,
            position: c.position.label,
            meaning: c.reversed ? c.card.meaningRev : c.card.meaningUp
        }))
    };

    history.unshift(record);  // 最新的在前面

    // 限制最多保存50条
    if (history.length > 50) {
        history.length = 50;
    }

    try {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    } catch (e) {
        console.warn('保存历史记录失败:', e);
        return -1;
    }

    return record.id;
}

/**
 * 删除一条记录
 */
function deleteHistory(id) {
    const history = getHistory();
    const filtered = history.filter(r => r.id !== id);
    if (filtered.length === history.length) return false;
    try {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(filtered));
        return true;
    } catch (e) {
        console.warn('删除历史记录失败:', e);
        return false;
    }
}

/**
 * 清空所有记录
 */
function clearHistory() {
    try {
        localStorage.removeItem(HISTORY_KEY);
        return true;
    } catch (e) {
        console.warn('清空历史记录失败:', e);
        return false;
    }
}

/**
 * 格式化日期
 */
function formatDate(dateStr) {
    const d = new Date(dateStr);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const h = String(d.getHours()).padStart(2, '0');
    const min = String(d.getMinutes()).padStart(2, '0');
    return `${y}年${m}月${day}日 ${h}:${min}`;
}
