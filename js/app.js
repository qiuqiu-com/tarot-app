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
    grid.innerHTML = SPREADS.map(s => `
        <div class="spread-card" data-spread="${s.id}">
            <div class="spread-icon">${s.icon}</div>
            <div class="spread-info">
                <h3>${s.name}</h3>
                <p>${s.desc}</p>
                <div class="card-count">${s.cardCount} 张牌 · ${s.positions.map(p => p.label).join(' · ')}</div>
            </div>
            <div class="spread-arrow">›</div>
        </div>
    `).join('');

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

    hint.textContent = `点击牌面揭开 · 共 ${spread.cardCount} 张`;

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
            const revBadge = item.reversed ? '<span style="position:absolute;bottom:6px;right:6px;background:rgba(139,68,128,0.85);color:#fff;font-size:0.55rem;padding:2px 8px;border-radius:8px;letter-spacing:1px;z-index:2;">▼ 逆位</span>' : '';
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
                hint.textContent = '✨ 所有牌已揭开 · 解读中……';
                setTimeout(() => showReading(), 1000);
            } else {
                hint.textContent = `点击下一张 (${flippedCount}/${spread.cardCount})`;
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
    const elementNames = { wands: '火', cups: '水', swords: '风', pentacles: '土' };

    // 收集所有关键词
    const allKeywords = [];
    cards.forEach(c => {
        c.card.keywords.forEach(kw => {
            if (!allKeywords.includes(kw)) allKeywords.push(kw);
        });
    });

    // 决定主要能量
    const energyTraits = [];
    if (majorCount > total / 2) energyTraits.push('大阿卡纳主导 — 强烈的命运力量在运作，这是重要的人生课题时刻');
    if (reversedCount > total / 2) energyTraits.push('逆位偏多 — 能量受阻或需要内省，建议放慢节奏');
    if (uprightCount > total / 2 && uprightCount > reversedCount) energyTraits.push('正位为主 — 能量流通顺畅，适合采取行动');

    // 元素分析
    const presentElements = Object.entries(suitMap)
        .filter(([_, count]) => count > 0)
        .map(([suit, count]) => `${elementNames[suit]}×${count}`);

    let elementAnalysis = '';
    if (presentElements.length === 0) {
        elementAnalysis = '大阿卡纳集中，元素能量超越四元素的范畴——这是超越日常的精神力量在主导。';
    } else if (presentElements.length === 1) {
        const suit = Object.entries(suitMap).find(([_, c]) => c > 0)[0];
        const el = elementNames[suit];
        const elNature = { wands: '行动与创造的火热能量', cups: '情感与直觉的流动力量',
            swords: '思想与挑战的风暴之力', pentacles: '物质与事业的坚实根基' };
        elementAnalysis = `${el}元素(${elNature[suit]})占据主导，问题的核心围绕这一领域展开。`;
    } else if (presentElements.length === 2) {
        elementAnalysis = `${presentElements.join('、')}——两股能量在交织作用，需要找到平衡点。`;
    } else if (presentElements.length >= 3) {
        elementAnalysis = `${presentElements.join('、')}——多种能量汇聚，局面复杂但充满可能性。`;
    }

    // 核心主题
    const topThemes = allKeywords.slice(0, 5);

    // 综合解读（模板化）
    let overview = '';
    const firstCard = cards[0].card;
    const lastCard = cards[cards.length - 1].card;

    if (total === 1) {
        overview = `本次占卜抽到了「${firstCard.name}」。${firstCard.arcana === 'major' ? '这是一张大阿卡纳牌，象征着重要的生命课题。' : ''}` +
            `这张牌的核心讯息围绕「${firstCard.keywords.slice(0,2).join('、')}」展开。` +
            `${cards[0].reversed ? '逆位出现提示你需要以不同的视角看待这个问题。' : '正位出现意味着能量正向流动，宜顺势而为。'}`;
    } else if (total === 3) {
        overview = `从「${cards[0].card.name}」(过去) 到「${cards[1].card.name}」(现在)，再到「${cards[2].card.name}」(未来)，` +
            `显示出${majorCount >= 2 ? '强大的命运轨迹，' : '一条清晰的发展脉络。'}` +
            `${cards[2].reversed ? '未来的逆位牌提醒你，结果取决于当下的选择。' : '未来的正位牌预示着积极的发展方向。'}`;
    } else if (total === 5) {
        overview = `五张牌的配置呈现出问题的多面性。核心能量集中在「${firstCard.name}」与「${lastCard.name}」之间的对话上。` +
            `${reversedCount >= 2 ? '多张逆位提示需要先解决内在的阻碍。' : '正位能量为主，外部条件对你有利。'}`;
    } else if (total === 10) {
        overview = `凯尔特十字牌阵全面展开了问题的各个层面。起始的「${firstCard.name}」描绘了核心处境，而最终的「${lastCard.name}」指向发展的归宿。` +
            `${majorCount >= 3 ? '多张大阿卡纳的出现表明这是你人生旅途中的重要节点。' : '小阿卡纳为主，问题更贴近日常生活的具体领域。'}` +
            `${reversedCount >= 4 ? '较多逆位牌意味着在行动之前需要深入的内省和调整。' : ''}`;
    } else {
        overview = `本次共抽出 ${total} 张牌。其中大阿卡纳 ${majorCount} 张、小阿卡纳 ${minorCount} 张，` +
            `正位 ${uprightCount} 张、逆位 ${reversedCount} 张。${elementAnalysis}`;
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
                <div style="font-size:0.55rem;color:var(--text-dim);margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${item.position.label}</div>
                <div style="font-size:0.5rem;color:${item.reversed ? '#8b4480' : 'var(--gold-dark)'};">${item.reversed ? '逆' : '正'}</div>
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
                <span style="background:rgba(201,168,76,0.1);color:var(--gold-light);font-size:0.7rem;padding:3px 10px;border-radius:10px;">🃏 大牌 ${majorCount}/${total}</span>
                <span style="background:rgba(201,168,76,0.1);color:var(--gold-light);font-size:0.7rem;padding:3px 10px;border-radius:10px;">▲ 正位 ${uprightCount}</span>
                <span style="background:rgba(139,68,128,0.15);color:#b07cb0;font-size:0.7rem;padding:3px 10px;border-radius:10px;">▼ 逆位 ${reversedCount}</span>
                ${presentElements.length > 0 ? `<span style="background:rgba(201,168,76,0.1);color:var(--gold-light);font-size:0.7rem;padding:3px 10px;border-radius:10px;">✦ ${presentElements.join(' ')}</span>` : ''}
            </div>

            <!-- 核心主题 -->
            <div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:12px;justify-content:center;">
                ${topThemes.map(t => `<span style="background:rgba(201,168,76,0.15);color:var(--gold);font-size:0.72rem;padding:2px 12px;border-radius:10px;font-weight:500;">${t}</span>`).join('')}
            </div>

            <!-- 综合解读 -->
            <div style="border-top:1px solid rgba(201,168,76,0.12);padding-top:12px;">
                <div style="font-size:0.75rem;color:var(--gold);letter-spacing:2px;margin-bottom:6px;">✦ 全局总览 ✦</div>
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
            <span style="background:var(--bg-deep);position:relative;z-index:1;padding:0 12px;font-size:0.78rem;color:var(--text-dim);letter-spacing:2px;">逐牌详解</span>
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
        <button id="btn-ask-reader">🔮 询问占卜师</button>
      </div>
      <div id="reader-chat" class="reader-chat hidden">
        <div id="chat-messages" class="chat-messages"></div>
        <div class="chat-input-row">
          <input id="chat-input" type="text" placeholder="向占卜师提问……" maxlength="100" />
          <button id="chat-send">发送</button>
        </div>
      </div>
    `;
    area.appendChild(askBtn);

    // 构建牌阵上下文
    const chatHistory = [];

    document.getElementById('btn-ask-reader').addEventListener('click', () => {
      document.getElementById('btn-ask-reader').style.display = 'none';
      document.getElementById('reader-chat').classList.remove('hidden');
      appendMessage('assistant', '🔮 牌已为你展开，有何疑惑，尽管道来……');
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
        const cardContext = currentReading.cards.map(item =>
          `${item.card.name}（${item.reversed ? '逆位' : '正位'}）- ${item.position.label}`
        ).join('\n');

        const res = await fetch('/api/tarot-chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: chatHistory,
            cardContext
          })
        });
        const data = await res.json();
        const reply = data.choices?.[0]?.message?.content || '占卜师暂时无法感应，请稍后再试……';
        chatHistory.push({ role: 'assistant', content: reply });
        typingEl.textContent = reply;
      } catch {
        typingEl.textContent = '占卜师暂时无法感应，请稍后再试……';
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
                <div class="rci-position">${item.position.label}</div>
                <div class="rci-position-desc">${item.position.desc}</div>
                <div class="rci-card-name">${item.card.name} <span style="font-weight:400;font-size:0.85rem;color:var(--text-dim);">· ${item.card.nameEn}</span></div>
                <div class="rci-card-sub">${meta.type} · ${meta.astrology || meta.element || ''}</div>
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
    const orientationClass = reversed ? '逆位' : '正位';

    let infoGrid = `
        <div class="modal-info-grid">
            <div class="info-item">
                <div class="ii-label">类型</div>
                <div class="ii-value">${meta.type}</div>
            </div>
            <div class="info-item">
                <div class="ii-label">编号</div>
                <div class="ii-value">${card.number}</div>
            </div>
    `;

    if (card.arcana === 'minor') {
        infoGrid += `
            <div class="info-item">
                <div class="ii-label">元素</div>
                <div class="ii-value">${meta.element || '—'}</div>
            </div>
            <div class="info-item">
                <div class="ii-label">灵数</div>
                <div class="ii-value">${meta.numberMeaning || '—'}</div>
            </div>
        `;
    } else {
        infoGrid += `
            <div class="info-item">
                <div class="ii-label">占星</div>
                <div class="ii-value">${meta.astrology || '—'}</div>
            </div>
            <div class="info-item">
                <div class="ii-label">希伯来</div>
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
        <div class="modal-name">${card.name}</div>
        <div class="modal-sub">${card.nameEn} · ${orientationClass}</div>
        <div class="modal-meta">${meta.type} · 第 ${card.number} 号牌</div>

        ${infoGrid}

        <div class="modal-section">
            <h4>${orientationClass} 解读</h4>
            <p>${reading.meaning}</p>
        </div>

        <div class="modal-section">
            <h4>关键词</h4>
            <div class="modal-tags">
                ${reading.keywords.map(k => `<span>${k}</span>`).join('')}
            </div>
        </div>

        <div class="modal-section" style="margin-top:8px;padding-top:12px;border-top:1px solid rgba(201,168,76,0.1);">
            <h4>灵性启示</h4>
            <p style="color:var(--gold-light);font-style:italic;">
                ${card.arcana === 'major'
                    ? `大阿卡纳第 ${card.number} 号牌「${card.name}」是人生旅程中的重要课题。它邀请你深入体悟${card.keywords.slice(0,2).join('与')}的能量。`
                    : `这张「${card.name}」属于${meta.type}。${meta.elementNature ? '其元素为' + meta.elementNature + '。' : ''}关注牌面数字${card.number}在当下情境中的启示。`}
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
    if (id !== -1) showToast('✅ 占卜记录已保存');
    else showToast('保存失败，请稍后再试');
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
    let text = `✦ 神秘塔罗 · 占卜分享 ✦\n`;
    text += `牌阵：${r.spread.name}\n`;
    if (r.question) text += `问题：${r.question}\n`;
    text += `日期：${formatDate(r.date.toISOString())}\n`;
    text += `━`.repeat(18) + `\n`;
    r.cards.forEach(c => {
        const o = c.reversed ? '逆位' : '正位';
        text += `${c.position.label}：${c.card.name}（${o}）\n`;
        text += `  ${getCardReading(c.card, c.reversed).meaning.slice(0, 40)}……\n`;
    });
    text += `━`.repeat(18) + `\n`;
    text += `✨ 由「神秘塔罗」生成`;

    ta.value = text;
    box.style.display = 'block';
});

$('#btn-copy-share').addEventListener('click', async () => {
    const ta = $('#share-textarea');
    try {
        await navigator.clipboard.writeText(ta.value);
        showToast('✅ 已复制到剪贴板');
    } catch {
        ta.select();
        document.execCommand('copy');
        showToast('✅ 已复制到剪贴板');
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
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-dim);">没有找到匹配的牌</div>`;
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
                    <div class="ic-name" style="font-size:0.65rem;margin-top:4px;">${c.name}</div>
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

    const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
    const dateStr = `${today.getFullYear()}年${today.getMonth()+1}月${today.getDate()}日 星期${weekDays[today.getDay()]}`;

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
                    <div style="font-size:1rem;font-weight:700;color:#1a1728;">${card.name}</div>
                </div>
            </div>
        </div>

        <div class="daily-card-text">
            <p>${reading.meaning}</p>
        </div>

        <div class="daily-affirmation">
            ✦ ${card.keywords[0]} · ${card.keywords[1]} ✦
        </div>

        <div style="margin-top:20px;display:flex;gap:8px;flex-wrap:wrap;justify-content:center;">
            ${reading.keywords.map(k => `<span style="background:rgba(201,168,76,0.08);color:var(--gold-light);font-size:0.75rem;padding:3px 12px;border-radius:12px;border:1px solid rgba(201,168,76,0.15);">${k}</span>`).join('')}
        </div>

        <div style="margin-top:24px;">
            <button class="btn-gold small" onclick="showPage('page-welcome')">开始占卜 →</button>
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
            `${c.symbol} ${c.cardName}${c.reversed ? '(逆)' : ''}`
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
            if (confirm('确定删除这条记录吗？')) {
                deleteHistory(rec.id);
                renderHistory();
                showToast('已删除');
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
        const orientation = c.reversed ? '逆位' : '正位';
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
                    <div class="rci-card-sub">${meta.type} · ${meta.astrology || meta.element || ''}</div>
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

function appendMessage(role, text) {
  const el = document.createElement('div');
  el.className = role === 'user' ? 'chat-msg-user' : 'chat-msg-assistant';
  el.textContent = text;
  document.getElementById('chat-messages').appendChild(el);
  el.scrollIntoView({ behavior: 'smooth' });
  return el;
}

// ==================================================================
// 12. 初始化
// ==================================================================
console.log(`✦ 神秘塔罗 Pro 已加载 ✦`);
console.log(`📜 共 ${TAROT_CARDS.length} 张塔罗牌 · ${SPREADS.length} 种牌阵待命`);

// 为欢迎页聚焦输入框添加体验
setTimeout(() => {
    const input = $('#question-input');
    if (input) {
        // 不自动聚焦以保留欢迎页的优雅展示，但点击可以输入
    }
}, 100);
