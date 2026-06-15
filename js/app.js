/* ============================================================
   神秘塔罗 Pro — 主应用逻辑
   ============================================================ */

// ==================================================================
// 状态
// ==================================================================
let currentReading = null;
let shuffleTimer = null;
let shuffleCount = 0;
const SHUFFLE_MS = 3000;

// ==================================================================
// DOM 工具
// ==================================================================
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

// ==================================================================
// 页面切换
// ==================================================================
function showPage(pageId) {
    $$('.page').forEach(p => p.classList.remove('active'));
    const t = document.getElementById(pageId);
    if (t) { t.classList.add('active'); window.scrollTo(0, 0); }
}

// ==================================================================
// Toast
// ==================================================================
function showToast(msg, dur = 2200) {
    const old = document.querySelector('.toast');
    if (old) old.remove();
    const t = document.createElement('div');
    t.className = 'toast'; t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity 0.4s';
        setTimeout(() => t.remove(), 400); }, dur);
}

// ==================================================================
// 1. 欢迎页
// ==================================================================

// Enter 键快速开始
$('#question-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') $('#btn-start').click();
});

$('#btn-start').addEventListener('click', () => {
    renderSpreadGrid();
    showPage('page-spread');
});

$('#btn-daily').addEventListener('click', () => {
    renderDailyCard();
    showPage('page-daily');
});

$('#btn-index').addEventListener('click', () => {
    renderCardIndex();
    showPage('page-index');
});

$('#btn-history').addEventListener('click', () => {
    renderHistory();
    showPage('page-history');
});

// 通用返回
$$('.btn-back').forEach(btn => {
    btn.addEventListener('click', () => {
        const t = btn.dataset.target;
        if (t === 'page-welcome') currentReading = null;
        showPage(t);
    });
});

// ==================================================================
// 2. 渲染牌阵列表
// ==================================================================
function renderSpreadGrid() {
    const grid = $('#spread-grid');
    grid.innerHTML = SPREADS.map(s => {
        const spName = __(SPREAD_NAMES?.[s.id] || s.name);
        const spDesc = __(SPREAD_DESCS?.[s.id] || s.desc);
        const posLabels = s.positions.map(p => __(p.labelKey));
        return `
        <div class="spread-card" data-spread="${s.id}">
            <div class="spread-icon">${s.icon}</div>
            <div class="spread-info">
                <h3>${spName}</h3>
                <p>${spDesc}</p>
                <div class="card-count">${s.cardCount} ${__('card-count')}${__('cards-and')}${posLabels.join(' · ')}</div>
            </div>
            <div class="spread-arrow">›</div>
        </div>
    `}).join('');

    grid.querySelectorAll('.spread-card').forEach(el => {
        el.addEventListener('click', () => {
            startShuffle(el.dataset.spread);
        });
    });
}

// ==================================================================
// 3. 洗牌动画（专业版）
// ==================================================================
function startShuffle(spreadId) {
    currentReading = null;
    const spread = SPREADS.find(s => s.id === spreadId);
    if (!spread) return;

    showPage('page-shuffle');

    // 显示问题
    const q = $('#question-input').value.trim();
    $('#shuffle-question').textContent = q ? `「${q}」` : '';

    // 洗牌卡堆
    const table = $('#shuffle-table');
    table.innerHTML = '';
    const cardCount = Math.min(10, 78);
    for (let i = 0; i < cardCount; i++) {
        const el = document.createElement('div');
        el.className = 'shuffle-card-el';
        el.innerHTML = '<div class="mandala"></div>';
        el.style.zIndex = cardCount - i;
        el.style.animationDelay = (i * 0.03) + 's';
        table.appendChild(el);
    }

    const progress = $('#progress-bar');
    progress.style.width = '0%';
    shuffleCount = 0;

    const allCards = table.querySelectorAll('.shuffle-card-el');
    let frame = 0;

    shuffleTimer = setInterval(() => {
        shuffleCount++;
        const pct = Math.min(100, (shuffleCount / (SHUFFLE_MS / 60)) * 100);
        progress.style.width = pct + '%';
        frame++;

        allCards.forEach((c, i) => {
            const spread = 30 + (i * 5);
            const angle = (frame * 0.05 + i * 0.8) * Math.PI * 2;
            const rx = Math.sin(angle) * spread * (0.3 + 0.7 * Math.sin(frame * 0.02));
            const ry = Math.cos(angle * 0.7) * spread * 0.4;
            const rz = Math.sin(frame * 0.03 + i) * 6;
            c.style.transform = `translate(calc(-50% + ${rx}px), calc(-50% + ${ry}px)) rotate(${rz}deg)`;
            c.style.opacity = 0.3 + 0.7 * (1 - Math.abs(rx) / (spread * 1.5));
        });
    }, 60);

    setTimeout(() => {
        clearInterval(shuffleTimer);
        progress.style.width = '100%';
        setTimeout(() => enterDrawPhase(spreadId), 500);
    }, SHUFFLE_MS);
}

// ==================================================================
// 4. 翻牌阶段
// ==================================================================
function enterDrawPhase(spreadId) {
    showPage('page-draw');

    const spread = SPREADS.find(s => s.id === spreadId);
    const area = $('#draw-area');
    const hint = $('#draw-hint');
    area.innerHTML = '';

    hint.textContent = `${__('draw-click-hint')} ${spread.cardCount} ${__('draw-cards')}`;

    let flippedCount = 0;
    let readingStarted = false;

    for (let i = 0; i < spread.cardCount; i++) {
        const wrapper = document.createElement('div');
        wrapper.className = 'draw-card-el';
        wrapper.style.animationDelay = (i * 0.12) + 's';
        wrapper.style.opacity = '0';
        wrapper.style.transform = 'translateY(20px)';
        wrapper.style.transition = `opacity 0.5s ease ${i * 0.12}s, transform 0.5s ease ${i * 0.12}s`;

        wrapper.innerHTML = `
            <div class="draw-card-inner">
                <div class="card-back-face">
                    <div class="card-back-corner tl"></div>
                    <div class="card-back-corner tr"></div>
                    <div class="card-back-corner bl"></div>
                    <div class="card-back-corner br"></div>
                </div>
                <div class="card-front-face"></div>
            </div>
        `;

        const front = wrapper.querySelector('.card-front-face');
        const cornerNum = (n) => {
            // Minor arcana suit symbols for corners
            if (i >= 0) return '';
        };

        wrapper.addEventListener('click', () => {
            if (wrapper.classList.contains('flipped')) return;

            if (!readingStarted) {
                readingStarted = true;
                const q = $('#question-input').value.trim();
                currentReading = performReading(spreadId, q);
            }

            const item = currentReading.cards[i];
            const reading = getCardReading(item.card, item.reversed);
            const meta = getCardMeta(item.card);
            const imgUrl = getCardImageUrl(item.card);

            // 牌面 = 真实塔罗牌图片
            const revBadge = item.reversed ? `<span style="position:absolute;bottom:6px;right:6px;background:rgba(139,68,128,0.85);color:#fff;font-size:0.55rem;padding:2px 8px;border-radius:8px;letter-spacing:1px;z-index:2;">▼ ${__('draw-rev')}</span>` : '';
            const frontHtml = `
                <img src="${imgUrl}"
                     alt="${item.card.name} - ${item.card.nameEn}"
                     class="card-image"
                     style="width:100%;height:100%;object-fit:cover;border-radius:8px;display:block;"
                     loading="lazy"
                     onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                <div style="display:none;position:absolute;inset:0;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(180deg,#f5f0e8,#ede4d6);color:#1a1728;padding:10px;border-radius:8px;">
                    <div style="font-size:1.8rem;">${item.card.symbol}</div>
                    <div style="font-size:0.85rem;font-weight:700;margin-top:4px;">${item.card.name}</div>
                </div>
                ${revBadge}
            `;

            front.innerHTML = frontHtml;
            wrapper.classList.add('flipped');
            flippedCount++;

            if (flippedCount >= spread.cardCount) {
                hint.textContent = __('draw-revealed');
                setTimeout(() => showReading(), 1000);
            } else {
                hint.textContent = `${__('draw-next')} (${flippedCount}/${spread.cardCount})`;
            }
        });

        area.appendChild(wrapper);

        // Trigger entrance
        requestAnimationFrame(() => {
            wrapper.style.opacity = '1';
            wrapper.style.transform = 'translateY(0)';
        });
    }
}

// ==================================================================
// 5. 占卜全局总览分析
// ==================================================================

/**
 * 生成占卜全局总览
 * @param {object} reading - performReading() 返回结果
 * @returns {object} { html, stats }
 */
function generateReadingSummary(reading) {
    const cards = reading.cards;
    const total = cards.length;

    // 统计数据
    const majorCount = cards.filter(c => c.card.arcana === 'major').length;
    const minorCount = total - majorCount;
    const reversedCount = cards.filter(c => c.reversed).length;
    const uprightCount = total - reversedCount;

    // 元素分布
    const suitMap = { wands: 0, cups: 0, swords: 0, pentacles: 0 };
    cards.forEach(c => {
        if (c.card.suit) suitMap[c.card.suit]++;
    });

    // 收集所有关键词
    const allKeywords = [];
    cards.forEach(c => {
        t(c.card, 'keywords').forEach(kw => {
            if (!allKeywords.includes(kw)) allKeywords.push(kw);
        });
    });

    // 决定主要能量
    const energyTraits = [];
    if (majorCount > total / 2) energyTraits.push(__('overview-major'));
    if (reversedCount > total / 2) energyTraits.push(__('overview-rev'));
    if (uprightCount > total / 2 && uprightCount > reversedCount) energyTraits.push(__('overview-upright'));

    // 元素分析
    const elemKeys = { wands: 'elem-fire', cups: 'elem-water', swords: 'elem-air', pentacles: 'elem-earth' };
    const presentElements = Object.entries(suitMap)
        .filter(([_, count]) => count > 0)
        .map(([suit, count]) => `${__(elemKeys[suit])}×${count}`);

    let elementAnalysis = '';
    if (presentElements.length === 0) {
        elementAnalysis = __('overview-only-major');
    } else if (presentElements.length === 1) {
        const suit = Object.entries(suitMap).find(([_, c]) => c > 0)[0];
        const el = __(elemKeys[suit]);
        elementAnalysis = `${el}${__('overview-elem1')}`;
    } else if (presentElements.length === 2) {
        elementAnalysis = `${presentElements.join('、')}${__('overview-elem2')}`;
    } else if (presentElements.length >= 3) {
        elementAnalysis = `${presentElements.join('、')}${__('overview-elem3')}`;
    }

    // 核心主题
    const topThemes = allKeywords.slice(0, 5);

    // 综合解读（模板化）
    let overview = '';
    const firstCard = cards[0].card;
    const lastCard = cards[cards.length - 1].card;
    const fn = (c) => t(c, 'name');

    if (total === 1) {
        overview = t(firstCard, 'keywords').slice(0,2);
        overview = `${__('overview-1card')}「${fn(firstCard)}」。${firstCard.arcana === 'major' ? __('overview-1major') : ''}` +
            `${__('overview-1card2')}「${overview.join('、')}」。` +
            `${cards[0].reversed ? __('overview-1rev') : __('overview-1up')}`;
    } else if (total === 3) {
        overview = `${__('overview-3from')}${fn(cards[0].card)}${__('overview-3to')}${fn(cards[1].card)}${__('overview-3to2')}${fn(cards[2].card)}${__('overview-3to3')}` +
            `${majorCount >= 2 ? __('overview-3major') : __('overview-3minor')}` +
            `${cards[2].reversed ? __('overview-3rev') : __('overview-3up')}`;
    } else if (total === 5) {
        overview = `${__('overview-5')}${fn(firstCard)}${__('overview-5and')}${fn(lastCard)}${__('overview-5end')}` +
            `${reversedCount >= 2 ? __('overview-5rev') : __('overview-5up')}`;
    } else if (total === 10) {
        overview = `${__('overview-10')}${fn(firstCard)}${__('overview-10mid')}${fn(lastCard)}${__('overview-10end')}` +
            `${majorCount >= 3 ? __('overview-10major') : __('overview-10minor')}` +
            `${reversedCount >= 4 ? __('overview-10rev') : ''}`;
    } else {
        overview = `${__('overview-gen')} ${total} ${__('overview-gen-mid')} ${majorCount} ${__('overview-gen-end')} ${minorCount} ` +
            `${__('stat-upright')} ${uprightCount} ${__('stat-reversed')} ${reversedCount}。${elementAnalysis}`;
    }

    // 小卡牌缩略图行
    const thumbnailsHtml = cards.map((item, idx) => {
        const imgUrl = getCardImageUrl(item.card);
        return `
            <div style="text-align:center;flex:1;min-width:0;position:relative;">
                <div style="width:100%;aspect-ratio:2/3;border-radius:4px;overflow:hidden;border:1.5px solid ${item.reversed ? '#8b4480' : 'var(--gold)'};background:#ede4d6;position:relative;">
                    <img src="${imgUrl}" alt="${item.card.name}" loading="lazy"
                         style="width:100%;height:100%;object-fit:cover;display:block;"
                         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                    <div style="display:none;position:absolute;inset:0;align-items:center;justify-content:center;font-size:1.2rem;color:#1a1728;" class="sum-fb">${item.card.symbol}</div>
                </div>
                <div style="font-size:0.55rem;color:var(--text-dim);margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${__(item.position.labelKey)}</div>
                <div style="font-size:0.5rem;color:${item.reversed ? '#8b4480' : 'var(--gold-dark)'};">${item.reversed ? __('draw-rev') : __('draw-upright')}</div>
            </div>
        `;
    }).join('');

    const html = `
        <!-- 全局总览 -->
        <div style="background:linear-gradient(135deg,rgba(201,168,76,0.08),rgba(91,58,138,0.08));border:1px solid rgba(201,168,76,0.2);border-radius:16px;padding:18px 16px;margin-bottom:20px;">

            <!-- 牌阵缩略图 -->
            <div style="display:flex;gap:4px;margin-bottom:14px;">
                ${thumbnailsHtml}
            </div>

            <!-- 统计数据 -->
            <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px;justify-content:center;">
                <span style="background:rgba(201,168,76,0.1);color:var(--gold-light);font-size:0.7rem;padding:3px 10px;border-radius:10px;">🃏 ${__('stat-major')} ${majorCount}${__('stat-of')}${total}</span>
                <span style="background:rgba(201,168,76,0.1);color:var(--gold-light);font-size:0.7rem;padding:3px 10px;border-radius:10px;">${__('stat-upright')} ${uprightCount}</span>
                <span style="background:rgba(139,68,128,0.15);color:#b07cb0;font-size:0.7rem;padding:3px 10px;border-radius:10px;">${__('stat-reversed')} ${reversedCount}</span>
                ${presentElements.length > 0 ? `<span style="background:rgba(201,168,76,0.1);color:var(--gold-light);font-size:0.7rem;padding:3px 10px;border-radius:10px;">✦ ${presentElements.join(' ')}</span>` : ''}
            </div>

            <!-- 核心主题 -->
            <div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:12px;justify-content:center;">
                ${topThemes.map(t => `<span style="background:rgba(201,168,76,0.15);color:var(--gold);font-size:0.72rem;padding:2px 12px;border-radius:10px;font-weight:500;">${t}</span>`).join('')}
            </div>

            <!-- 综合解读 -->
            <div style="border-top:1px solid rgba(201,168,76,0.12);padding-top:12px;">
                <div style="font-size:0.75rem;color:var(--gold);letter-spacing:2px;margin-bottom:6px;">${__('summary-title')}</div>
                <div style="font-size:0.88rem;line-height:1.9;color:var(--text-light);">
                    <p style="margin-bottom:6px;">${overview}</p>
                    <p>${elementAnalysis}</p>
                    ${energyTraits.length > 0 ? `<p style="margin-top:6px;color:var(--gold-light);">${energyTraits.join('</p><p style="color:var(--gold-light);">')}</p>` : ''}
                </div>
            </div>
        </div>

        <!-- 分割标题 -->
        <div style="text-align:center;margin:4px 0 16px;position:relative;">
            <div style="position:absolute;top:50%;left:10%;right:10%;height:1px;background:linear-gradient(90deg,transparent,rgba(201,168,76,0.2),transparent);"></div>
            <span style="background:var(--bg-deep);position:relative;z-index:1;padding:0 12px;font-size:0.78rem;color:var(--text-dim);letter-spacing:2px;">${__('detail-divider')}</span>
        </div>
    `;

    return { html, stats: { majorCount, minorCount, reversedCount, uprightCount, topThemes } };
}

// ==================================================================
// 6. 解读展示（含全局总览）
// ==================================================================
function showReading() {
    if (!currentReading) return;
    showPage('page-reading');

    const area = $('#reading-area');
    const spread = currentReading.spread;
    area.innerHTML = '';

    // Header
    const header = document.createElement('div');
    header.className = 'reading-header';
    header.innerHTML = `
        <div class="spread-name">✦ ${spread.icon} ${spread.name} ✦</div>
        ${currentReading.question ? `<div class="reading-question">「${currentReading.question}」</div>` : ''}
        <div class="reading-date">${formatDate(currentReading.date.toISOString())}</div>
    `;
    area.appendChild(header);

    // ★ 全局总览
    const summary = generateReadingSummary(currentReading);
    const summaryDiv = document.createElement('div');
    summaryDiv.innerHTML = summary.html;
    area.appendChild(summaryDiv);

    // ═══ 【询问占卜师】按钮 ═══
    const askBtn = document.createElement('div');
    askBtn.className = 'ask-reader-section';
    askBtn.innerHTML = `
      <div class="ask-reader-entry">
        <button id="btn-ask-reader">${__('btn-ask')}</button>
      </div>
      <div id="reader-chat" class="reader-chat hidden">
        <div id="chat-messages" class="chat-messages"></div>
        <div class="chat-input-row">
          <input id="chat-input" type="text" placeholder="${__('chat-placeholder')}" maxlength="100" />
          <button id="chat-send">${__('chat-send')}</button>
        </div>
      </div>
    `;
    area.appendChild(askBtn);

    // 构建牌阵上下文
    const chatHistory = [];

    document.getElementById('btn-ask-reader').addEventListener('click', () => {
      document.getElementById('btn-ask-reader').style.display = 'none';
      document.getElementById('reader-chat').classList.remove('hidden');
      appendMessage('assistant', __('chat-welcome'));
    });

    async function sendMessage() {
      const input = document.getElementById('chat-input');
      const text = input.value.trim();
      if (!text) return;

      input.value = '';
      appendMessage('user', text);
      chatHistory.push({ role: 'user', content: text });

      const typingEl = appendMessage('assistant', '……');

      try {
        const cardContext = buildCardContext();

        const res = await fetch('/api/tarot-chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: chatHistory,
            cardContext,
            language: getLang()
          })
        });
        const data = await res.json();
        const reply = data.choices?.[0]?.message?.content || __('chat-error');
        chatHistory.push({ role: 'assistant', content: reply });
        typingEl.textContent = reply;
      } catch {
        typingEl.textContent = __('chat-error');
      }
    }

    document.getElementById('chat-send').addEventListener('click', sendMessage);
    document.getElementById('chat-input').addEventListener('keydown', e => {
      if (e.key === 'Enter') sendMessage();
    });

    // Cards — 逐牌详解
    currentReading.cards.forEach((item, idx) => {
        const reading = getCardReading(item.card, item.reversed);
        const meta = getCardMeta(item.card);

        const div = document.createElement('div');
        div.className = 'reading-card-item';
        div.style.animationDelay = (idx * 0.12) + 's';

        const cardSymbol = item.card.arcana === 'minor'
            ? getSuitSvg(item.card.suit, 20, '#a8872e')
            : item.card.symbol;
        const imgUrl = getCardImageUrl(item.card);

        div.innerHTML = `
            <div class="rci-mini ${item.reversed ? 'reversed' : ''}" style="position:relative;overflow:hidden;">
                <img src="${imgUrl}" alt="${item.card.name}" loading="lazy"
                     style="width:100%;height:100%;object-fit:cover;border-radius:5px;position:absolute;inset:0;"
                     onerror="this.style.display='none'">
                <div style="display:none;position:absolute;inset:0;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(180deg,#f5f0e8,#ede4d6);color:#1a1728;" class="mini-fallback">
                    <div style="font-size:0.8rem;">${cardSymbol}</div>
                </div>
            </div>
            <div class="rci-content">
                <div class="rci-position">${__(item.position.labelKey)}</div>
                <div class="rci-position-desc">${item.position.descKey ? __(item.position.descKey) : ''}</div>
                <div class="rci-card-name">${t(item.card, 'name')}${getLang() === 'zh' ? ` <span style="font-weight:400;font-size:0.85rem;color:var(--text-dim);">· ${item.card.nameEn}</span>` : ''}</div>
                <div class="rci-card-sub">${meta.typeKey && typeof __ === 'function' ? __(meta.typeKey) : meta.type} · ${meta.astrology || (meta.elementTransKey && typeof __ === 'function' ? __(meta.elementTransKey) : meta.element) || ''}</div>
                <div class="rci-orientation">${reading.orientation} · ${item.card.number}</div>
                <div class="rci-meaning">${reading.meaning}</div>
                <div class="rci-tags">
                    ${reading.keywords.map(k => `<span>${k}</span>`).join('')}
                </div>
            </div>
        `;

        div.addEventListener('click', () => showCardDetail(item.card, item.reversed));
        area.appendChild(div);
    });
}

// ==================================================================
// 7. 卡牌详情弹窗（专业版）
// ==================================================================
function showCardDetail(card, reversed) {
    const overlay = $('#modal-overlay');
    const dialog = $('#modal-dialog');
    const reading = getCardReading(card, reversed);
    const meta = getCardMeta(card);

    const orientationSymbol = reversed ? '▼' : '▲';
    const orientationClass = reading.orientation;

    let infoGrid = `
        <div class="modal-info-grid">
            <div class="info-item">
                <div class="ii-label">${__('meta-type')}</div>
                <div class="ii-value">${meta.typeKey && typeof __ === 'function' ? __(meta.typeKey) : meta.type}</div>
            </div>
            <div class="info-item">
                <div class="ii-label">${__('meta-number')}</div>
                <div class="ii-value">${card.number}</div>
            </div>
    `;

    if (card.arcana === 'minor') {
        infoGrid += `
            <div class="info-item">
                <div class="ii-label">${__('meta-element')}</div>
                <div class="ii-value">${meta.element || '—'}</div>
            </div>
            <div class="info-item">
                <div class="ii-label">${__('meta-numerology')}</div>
                <div class="ii-value">${meta.numberMeaning || '—'}</div>
            </div>
        `;
    } else {
        infoGrid += `
            <div class="info-item">
                <div class="ii-label">${__('meta-astrology')}</div>
                <div class="ii-value">${meta.astrology || '—'}</div>
            </div>
            <div class="info-item">
                <div class="ii-label">${__('meta-hebrew')}</div>
                <div class="ii-value">${meta.hebrew || '—'}</div>
            </div>
        `;
    }

    infoGrid += '</div>';

    const imgUrl = getCardImageUrl(card);

    dialog.innerHTML = `
        <button class="modal-close" id="modal-close-btn">✕</button>
        <!-- 卡牌大图 -->
        <div style="text-align:center;margin:-28px -24px 16px;border-radius:18px 18px 0 0;overflow:hidden;max-height:340px;background:linear-gradient(180deg,#f5f0e8,#ede4d6);">
            <img src="${imgUrl}" alt="${card.name}"
                 style="width:auto;height:280px;object-fit:contain;display:block;margin:0 auto;"
                 loading="lazy"
                 onerror="this.style.display='none'">
        </div>
        <div class="modal-name">${t(card, 'name')}</div>
        <div class="modal-sub">${card.nameEn} · ${orientationClass}</div>
        <div class="modal-meta">${meta.typeKey && typeof __ === 'function' ? __(meta.typeKey) : meta.type} · ${__('meta-number')} ${card.number}</div>

        ${infoGrid}

        <div class="modal-section">
            <h4>${orientationClass} ${__('modal-reading')}</h4>
            <p>${reading.meaning}</p>
        </div>

        <div class="modal-section">
            <h4>${__('modal-keywords')}</h4>
            <div class="modal-tags">
                ${reading.keywords.map(k => `<span>${k}</span>`).join('')}
            </div>
        </div>

        <div class="modal-section" style="margin-top:8px;padding-top:12px;border-top:1px solid rgba(201,168,76,0.1);">
            <h4>${__('modal-insight')}</h4>
            <p style="color:var(--gold-light);font-style:italic;">
                ${card.arcana === 'major'
                    ? `${t(card, 'name')} — ${__('insight-major')} ${t(card, 'keywords').slice(0,2).join(' & ')}。`
                    : `${__('insight-minor')} ${meta.typeKey && typeof __ === 'function' ? __(meta.typeKey) : meta.type}。${__('insight-minor2')} ${card.number} ${__('insight-in')}。`}
            </p>
        </div>
    `;

    overlay.classList.remove('hidden');

    $('#modal-close-btn').addEventListener('click', closeModal);
    overlay.addEventListener('click', e => {
        if (e.target === overlay) closeModal();
    });
}

function closeModal() {
    $('#modal-overlay').classList.add('hidden');
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});

// ==================================================================
// 7. 保存 & 重来 & 分享
// ==================================================================
$('#btn-save').addEventListener('click', () => {
    if (!currentReading) return;
    const id = saveReading(currentReading);
    if (id !== -1) showToast('✅ ' + __('btn-save'));
    else showToast('❌ ' + __('chat-error'));
});

$('#btn-redo').addEventListener('click', () => {
    currentReading = null;
    renderSpreadGrid();
    showPage('page-spread');
});

// 分享
$('#btn-share-toggle').addEventListener('click', () => {
    const box = $('#share-text-box');
    const ta = $('#share-textarea');
    if (box.style.display === 'block') {
        box.style.display = 'none';
        return;
    }

    if (!currentReading) return;
    const r = currentReading;
    let text = `${__('share-title')}\n`;
    text += `${r.spread.id ? __(SPREAD_NAMES[r.spread.id]) : r.spread.name}\n`;
    if (r.question) text += `${r.question}\n`;
    text += `${formatDate(r.date.toISOString())}\n`;
    text += `━`.repeat(18) + `\n`;
    r.cards.forEach(c => {
        const o = c.reversed ? __('draw-rev') : __('draw-upright');
        text += `${__(c.position.labelKey)}：${t(c.card, 'name')}（${o}）\n`;
        text += `  ${getCardReading(c.card, c.reversed).meaning.slice(0, 40)}……\n`;
    });
    text += `━`.repeat(18) + `\n`;
    text += `${__('share-from')}`;

    ta.value = text;
    box.style.display = 'block';
});

$('#btn-copy-share').addEventListener('click', async () => {
    const ta = $('#share-textarea');
    try {
        await navigator.clipboard.writeText(ta.value);
        showToast('✅ ' + __('btn-copy'));
    } catch {
        ta.select();
        document.execCommand('copy');
        showToast('✅ ' + __('btn-copy'));
    }
});

// ==================================================================
// 8. 卡牌百科
// ==================================================================
function renderCardIndex(filter = 'all', search = '') {
    const grid = $('#index-grid');
    let cards = TAROT_CARDS;

    // Filter
    if (filter === 'major') cards = cards.filter(c => c.arcana === 'major');
    else if (filter !== 'all') cards = cards.filter(c => c.suit === filter);

    // Search
    if (search.trim()) {
        const kw = search.trim().toLowerCase();
        cards = cards.filter(c =>
            c.name.includes(kw) ||
            c.nameEn.toLowerCase().includes(kw) ||
            c.keywords.some(k => k.includes(kw))
        );
    }

    if (cards.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-dim);">${__('no-results')}</div>`;
        return;
    }

    grid.innerHTML = cards.map(c => {
        const suitMeta = c.arcana === 'minor' ? getSuitMeta(c.suit) : null;
        const imgUrl = getCardImageUrl(c);
        return `
            <div class="index-card" data-id="${c.id}" style="position:relative;overflow:hidden;padding:0;">
                <img src="${imgUrl}" alt="${c.name}" loading="lazy"
                     style="width:100%;height:100%;object-fit:cover;border-radius:6px;position:absolute;inset:0;"
                     onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                <div style="display:none;position:absolute;inset:0;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(180deg,#f5f0e8,#ede4d6);color:#1a1728;padding:10px;" class="index-card-fallback">
                    ${c.arcana === 'minor' ? getSuitSvg(c.suit, 28, '#a8872e') : `<span style="font-size:1.8rem;">${c.symbol}</span>`}
                    <div class="ic-name" style="font-size:0.65rem;margin-top:4px;">${t(c, 'name')}</div>
                </div>
            </div>
        `;
    }).join('');

    grid.querySelectorAll('.index-card').forEach(el => {
        el.addEventListener('click', () => {
            const id = parseInt(el.dataset.id);
            const card = getCardById(id);
            if (card) showCardDetail(card, false);
        });
    });
}

// 百科搜索
let indexFilter = 'all';
$('#index-search').addEventListener('input', e => {
    renderCardIndex(indexFilter, e.target.value);
});

// 百科筛选
$('#index-filters').addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;
    $('#index-filters').querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    indexFilter = btn.dataset.filter;
    renderCardIndex(indexFilter, $('#index-search').value);
});

// ==================================================================
// 9. 每日塔罗
// ==================================================================
function renderDailyCard() {
    const area = $('#daily-card-area');

    // 基于日期种子生成每日一牌（确保每天同一张）
    const today = new Date();
    const dateSeed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const cardIndex = dateSeed % TAROT_CARDS.length;
    const card = TAROT_CARDS[cardIndex];
    const reversed = today.getDate() % 3 === 0; // 每3天一次逆位
    const reading = getCardReading(card, reversed);
    const meta = getCardMeta(card);

    const lang = getLang();
    const weekDays = lang === 'en'
        ? ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
        : lang === 'ru'
        ? ['Вс','Пн','Вт','Ср','Чт','Пт','Сб']
        : ['日', '一', '二', '三', '四', '五', '六'];
    const dateStr = lang === 'zh'
        ? `${today.getFullYear()}年${today.getMonth()+1}月${today.getDate()}日 星期${weekDays[today.getDay()]}`
        : `${weekDays[today.getDay()]}, ${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}`;

    area.innerHTML = `
        <div style="margin-bottom:20px;">
            <div style="font-size:0.85rem;color:var(--text-dim);">${dateStr}</div>
        </div>

        <div class="daily-card-display" id="daily-card-click">
            <div style="width:var(--card-w);height:var(--card-h);margin:0 auto;border-radius:var(--radius);overflow:hidden;border:2px solid var(--gold);box-shadow:0 8px 40px rgba(201,168,76,0.15);position:relative;background:linear-gradient(180deg,#f5f0e8,#ede4d6);">
                <img src="${getCardImageUrl(card)}" alt="${card.name}"
                     style="width:100%;height:100%;object-fit:cover;display:block;"
                     loading="lazy"
                     onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                <div style="display:none;position:absolute;inset:0;flex-direction:column;align-items:center;justify-content:center;padding:12px;" class="daily-fallback">
                    <div style="font-size:2.5rem;">${card.symbol}</div>
                    <div style="font-size:1rem;font-weight:700;color:#1a1728;">${t(card, 'name')}</div>
                </div>
            </div>
        </div>

        <div class="daily-card-text">
            <p>${reading.meaning}</p>
        </div>

        <div class="daily-affirmation">
            ✦ ${t(card, 'keywords')[0]} · ${t(card, 'keywords')[1]} ✦
        </div>

        <div style="margin-top:20px;display:flex;gap:8px;flex-wrap:wrap;justify-content:center;">
            ${reading.keywords.map(k => `<span style="background:rgba(201,168,76,0.08);color:var(--gold-light);font-size:0.75rem;padding:3px 12px;border-radius:12px;border:1px solid rgba(201,168,76,0.15);">${k}</span>`).join('')}
        </div>

        <div style="margin-top:24px;">
            <button class="btn-gold small" onclick="showPage('page-welcome')">${__('daily-start')}</button>
        </div>
    `;

    // 点击进入详情
    $('#daily-card-click').addEventListener('click', () => showCardDetail(card, reversed));
}

// ==================================================================
// 10. 历史记录
// ==================================================================
function renderHistory() {
    const list = $('#history-list');
    const empty = $('#history-empty');
    const records = getHistory();
    list.innerHTML = '';

    if (records.length === 0) {
        empty.style.display = 'block';
        return;
    }
    empty.style.display = 'none';

    records.forEach(rec => {
        const div = document.createElement('div');
        div.className = 'history-item';

        const cardSummary = rec.cards.map(c =>
            `${c.symbol} ${c.cardName}${c.reversed ? '(' + __('draw-rev') + ')' : ''}`
        ).join(' · ');

        div.innerHTML = `
            <button class="hi-delete" data-id="${rec.id}">✕</button>
            <div class="hi-date">${formatDate(rec.date)}</div>
            ${rec.question ? `<div class="hi-question">「${rec.question}」</div>` : ''}
            <div class="hi-spread">${rec.spreadName}</div>
            <div class="hi-cards">${cardSummary}</div>
        `;

        div.addEventListener('click', e => {
            if (e.target.classList.contains('hi-delete')) return;
            showHistoryDetail(rec);
        });

        div.querySelector('.hi-delete').addEventListener('click', e => {
            e.stopPropagation();
            if (confirm(__('confirm-delete'))) {
                deleteHistory(rec.id);
                renderHistory();
                showToast('🗑️');
            }
        });

        list.appendChild(div);
    });
}

function showHistoryDetail(record) {
    const overlay = $('#modal-overlay');
    const dialog = $('#modal-dialog');

    let cardsHtml = record.cards.map(c => {
        const card = getCardById(c.cardId);
        const meaning = c.meaning || (card ? (c.reversed ? card.meaningRev : card.meaningUp) : '');
        const meta = card ? getCardMeta(card) : { type: '', astrology: '', element: '' };
        const orientation = c.reversed ? __('draw-rev') : __('draw-upright');
        const imgUrl = card ? getCardImageUrl(card) : '';
        return `
            <div class="reading-card-item" style="margin-bottom:10px;cursor:default;">
                <div class="rci-mini ${c.reversed ? 'reversed' : ''}" style="position:relative;overflow:hidden;">
                    <img src="${imgUrl}" alt="${c.cardName}" loading="lazy"
                         style="width:100%;height:100%;object-fit:cover;border-radius:5px;position:absolute;inset:0;"
                         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                    <div style="display:none;position:absolute;inset:0;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(180deg,#f5f0e8,#ede4d6);color:#1a1728;" class="hf">
                        <div class="mini-symbol">${c.symbol}</div>
                    </div>
                    <div class="mini-name" style="position:relative;z-index:1;align-self:flex-end;margin-top:auto;background:rgba(0,0,0,0.5);color:#fff;width:100%;text-align:center;padding:2px 0;font-size:0.55rem;">${c.cardName}</div>
                </div>
                <div class="rci-content">
                    <div class="rci-position">${c.position}</div>
                    <div class="rci-card-name">${c.cardName}</div>
                    <div class="rci-card-sub">${meta.typeKey && typeof __ === 'function' ? __(meta.typeKey) : meta.type} · ${meta.astrology || (meta.elementTransKey && typeof __ === 'function' ? __(meta.elementTransKey) : meta.element) || ''}</div>
                    <div class="rci-orientation">${orientation}</div>
                    <div class="rci-meaning">${meaning}</div>
                </div>
            </div>
        `;
    }).join('');

    dialog.innerHTML = `
        <button class="modal-close" id="modal-close-btn2">✕</button>
        <div style="text-align:center;margin-bottom:16px;">
            <div style="font-size:1.1rem;color:var(--gold);font-weight:600;">📖 ${record.spreadName}</div>
            ${record.question ? `<div style="font-size:0.85rem;color:var(--gold-light);font-style:italic;margin:4px 0;">「${record.question}」</div>` : ''}
            <div style="font-size:0.78rem;color:var(--text-dim);">${formatDate(record.date)}</div>
        </div>
        ${cardsHtml}
    `;

    overlay.classList.remove('hidden');
    $('#modal-close-btn2').addEventListener('click', closeModal);
    overlay.addEventListener('click', e => {
        if (e.target === overlay) closeModal();
    });
}

// ==================================================================
// 11. 聊天辅助函数
// ==================================================================

/** 构建传给 AI 占卜师的牌阵上下文 */
function buildCardContext() {
  const question = currentReading?.question
    ? `${__('q-label')}：${currentReading.question}\n\n`
    : '';
  return question + currentReading.cards.map(item =>
    `${item.card.name}（${item.reversed ? '逆位' : '正位'}）- ${item.position.label}`
  ).join('\n');
}

function appendMessage(role, text) {
  const el = document.createElement('div');
  el.className = role === 'user' ? 'chat-msg-user' : 'chat-msg-assistant';
  el.textContent = text;
  document.getElementById('chat-messages').appendChild(el);
  el.scrollIntoView({ behavior: 'smooth' });
  return el;
}

// ==================================================================
// 12. 就地刷新解读页文字（不销毁 DOM，保留聊天）
// ==================================================================
function refreshReadingText() {
  if (!currentReading) return;
  const items = document.querySelectorAll('.reading-card-item');
  const cards = currentReading.cards;

  // 更新每张牌的解读卡片
  items.forEach((el, i) => {
    if (i >= cards.length) return;
    const item = cards[i];
    const r = getCardReading(item.card, item.reversed);
    const meta = getCardMeta(item.card);

    const posLabel = el.querySelector('.rci-position');
    const posDesc = el.querySelector('.rci-position-desc');
    const cardName = el.querySelector('.rci-card-name');
    const cardSub = el.querySelector('.rci-card-sub');
    const orient = el.querySelector('.rci-orientation');
    const meaning = el.querySelector('.rci-meaning');
    const tags = el.querySelector('.rci-tags');

    if (posLabel) posLabel.textContent = __(item.position.labelKey);
    if (posDesc) posDesc.textContent = item.position.descKey ? __(item.position.descKey) : '';
    if (cardName) cardName.innerHTML = `${t(item.card, 'name')}${getLang() === 'zh' ? ` <span style="font-weight:400;font-size:0.85rem;color:var(--text-dim);">· ${item.card.nameEn}</span>` : ''}`;
    if (cardSub) cardSub.textContent = `${meta.typeKey && typeof __ === 'function' ? __(meta.typeKey) : meta.type} · ${meta.astrology || (meta.elementTransKey && typeof __ === 'function' ? __(meta.elementTransKey) : meta.element) || ''}`;
    if (orient) orient.textContent = `${r.orientation} · ${item.card.number}`;
    if (meaning) meaning.textContent = r.meaning;
    if (tags) tags.innerHTML = r.keywords.map(k => `<span>${k}</span>`).join('');
  });

  // 更新总览区
  const summaryDiv = document.querySelector('.reading-area > div:first-child + div');
  if (summaryDiv) {
    const newSummary = generateReadingSummary(currentReading);
    summaryDiv.innerHTML = newSummary.html;
  }

  // 更新页头
  const headerName = document.querySelector('.reading-header .spread-name');
  if (headerName) {
    const sid = currentReading.spread.id;
    headerName.textContent = `✦ ${currentReading.spread.icon} ${__(SPREAD_NAMES?.[sid] || '')} ✦`;
  }
}

// ==================================================================
// 13. UI 文字国际化
// ==================================================================
function applyUILang() {
  const lang = getLang();
  document.title = __('title', lang);
  // data-i18n: 替换 textContent
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = __(el.dataset.i18n, lang);
  });
  // data-i18n-placeholder: 替换 placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = __(el.dataset.i18nPlaceholder, lang);
  });
}

// ==================================================================
// 13. 语言切换
// ==================================================================
document.querySelectorAll('#lang-switcher button').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    if (lang === getLang()) return;
    setLang(lang);
    document.querySelectorAll('#lang-switcher button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // 翻译静态 UI
    applyUILang();

    // 刷新动态内容（尽量就地更新，不销毁 DOM）
    const activePage = document.querySelector('.page.active');
    if (!activePage) return;
    const id = activePage.id;
    if (id === 'page-reading' && currentReading) refreshReadingText();
    else if (id === 'page-daily') renderDailyCard();
    else if (id === 'page-index') renderCardIndex(indexFilter, $('#index-search').value);
    else if (id === 'page-history') renderHistory();
    else if (id === 'page-draw') { /* 不刷新翻牌页，下次重来 */ }
    else if (id === 'page-spread') renderSpreadGrid();
  });
});

// 恢复上次语言
const savedLang = getLang();
document.querySelectorAll('#lang-switcher button').forEach(b => {
  b.classList.toggle('active', b.dataset.lang === savedLang);
});

// ==================================================================
// 14. 初始化
// ==================================================================

// 应用UI语言
applyUILang();

console.log(`✦ 神秘塔罗 Pro 已加载 ✦`);
console.log(`📜 共 ${TAROT_CARDS.length} 张塔罗牌 · ${SPREADS.length} 种牌阵待命`);

// 为欢迎页聚焦输入框添加体验
setTimeout(() => {
    const input = $('#question-input');
    if (input) {
        // 不自动聚焦以保留欢迎页的优雅展示，但点击可以输入
    }
}, 100);
