/* ============================================================
   塔罗牌数据 — 全部78张牌
   ============================================================ */

const TAROT_CARDS = [
    // ==================================================================
    // 大阿卡纳 (Major Arcana) — 22张
    // ==================================================================
    {
        id: 0, name: '愚者', nameEn: 'The Fool',
        number: '0', arcana: 'major',
        symbol: '🃏',
        keywords: ['开始', '冒险', '天真', '无限可能'],
        meaningUp: '新的开始即将到来，带着天真与信任踏上未知的旅程。放下过去的包袱，以开放的心态拥抱生命中的可能性。这张牌鼓励你跟随内心的冲动，相信宇宙会为你铺路。',
        meaningRev: '鲁莽的行为、不切实际的梦想或回避责任。小心不要被天真蒙蔽双眼，在行动之前需要更谨慎地评估风险。可能有人在利用你的信任。'
    },
    {
        id: 1, name: '魔术师', nameEn: 'The Magician',
        number: 'I', arcana: 'major',
        symbol: '✨',
        keywords: ['创造力', '技能', '自信', '专注'],
        meaningUp: '你拥有实现目标所需的一切资源。专注你的意志力，将想法转化为现实。这是行动的时刻，善用你的技能和创造力，万物已为你准备就绪。',
        meaningRev: '才能被浪费、操纵他人或缺乏方向。可能你未能充分发挥自己的潜力，或者在利用自己的能力操纵局面。需要重新审视你的意图。'
    },
    {
        id: 2, name: '女祭司', nameEn: 'The High Priestess',
        number: 'II', arcana: 'major',
        symbol: '🌙',
        keywords: ['直觉', '潜意识', '神秘', '内在智慧'],
        meaningUp: '静下心来倾听内在的声音。答案不在外界，而在你的内心深处。信任你的直觉，它比理性思考更能引导你。此刻是观察和感受的时候，而非行动。',
        meaningRev: '压抑直觉、表面化的认知或秘密被隐藏。你可能忽视了自己的第六感，或者有些信息尚未显露。需要更深入地探索内在和外在的真相。'
    },
    {
        id: 3, name: '女皇', nameEn: 'The Empress',
        number: 'III', arcana: 'major',
        symbol: '🌸',
        keywords: ['丰收', '孕育', '自然', '温柔'],
        meaningUp: '丰饶与成长的季节到来了。无论是创造力、财富还是情感都在蓬勃生长。以温柔和耐心对待自己和他人，享受生活的丰盛馈赠。',
        meaningRev: '创造力受阻、依赖他人或过度自我放纵。可能在情感或物质上过度索取，或忽视了自身的创造力。需要找回内在的平衡与滋养。'
    },
    {
        id: 4, name: '皇帝', nameEn: 'The Emperor',
        number: 'IV', arcana: 'major',
        symbol: '👑',
        keywords: ['权威', '稳定', '秩序', '保护'],
        meaningUp: '建立秩序与结构的时候到了。用理性和纪律来管理你的生活。坚定、可靠、有担当——这些品质将助你达成目标。需要你展现出领导力。',
        meaningRev: '过度控制、专断或缺乏纪律。可能是权威被滥用，或者你抗拒应有的秩序。需要找到权威与同理心的平衡，避免过于强势或软弱。'
    },
    {
        id: 5, name: '教皇', nameEn: 'The Hierophant',
        number: 'V', arcana: 'major',
        symbol: '⛪',
        keywords: ['传统', '信仰', '教导', '精神指引'],
        meaningUp: '寻求精神上的指引或向有经验的人学习。传统和规范能为你提供安全感。通过既定的仪式或教育体系来获得智慧和成长。',
        meaningRev: '打破常规、质疑权威或独立的思考。你可能正在挑战传统观念，或需要建立自己的信仰体系。也可能暗示某个导师或机构不值得信任。'
    },
    {
        id: 6, name: '恋人', nameEn: 'The Lovers',
        number: 'VI', arcana: 'major',
        symbol: '💕',
        keywords: ['爱情', '选择', '合一', '价值观'],
        meaningUp: '重大的选择摆在你面前，跟随内心而非头脑。这张牌也代表深刻的爱情连接和灵魂伴侣的相遇。忠于你的价值观，做出与真我一致的选择。',
        meaningRev: '分裂、关系失衡或错误的选择。可能面临价值观的冲突，或一段关系正在经历考验。需要诚实地审视你在关系中的真实感受。'
    },
    {
        id: 7, name: '战车', nameEn: 'The Chariot',
        number: 'VII', arcana: 'major',
        symbol: '⚡',
        keywords: ['胜利', '意志力', '决心', '征服'],
        meaningUp: '通过坚定的意志和自律获得胜利。控制住对立的情绪和力量，将它们导向同一个方向。勇往直前，你将克服一切障碍。',
        meaningRev: '缺乏方向、意志力薄弱或侵略性。可能你失去了对局面的控制，或者过于横冲直撞。需要重新找到内心的方向感和平衡。'
    },
    {
        id: 8, name: '力量', nameEn: 'Strength',
        number: 'VIII', arcana: 'major',
        symbol: '🦁',
        keywords: ['勇气', '内在力量', '耐心', '温柔'],
        meaningUp: '真正的力量来自内心——温柔而坚定。用耐心和同理心面对挑战，而非蛮力。你比想象中更坚强，信任自己能够渡过难关。',
        meaningRev: '自我怀疑、软弱或恐惧占据上风。你可能低估了自己的力量，或正在被内在的恐惧所支配。需要重新连接内心的勇气。'
    },
    {
        id: 9, name: '隐士', nameEn: 'The Hermit',
        number: 'IX', arcana: 'major',
        symbol: '🏮',
        keywords: ['内省', '独处', '寻找真理', '内在指引'],
        meaningUp: '放慢脚步，退回到自己的内心世界。独处不是孤独，而是为了寻找更深层的智慧。手持明灯，照亮前行的道路，答案在静默中浮现。',
        meaningRev: '孤立过度、拒绝帮助或迷失方向。可能你与世隔绝太久，或拒绝了他人善意的指引。需要找到独处与连接外界的平衡。'
    },
    {
        id: 10, name: '命运之轮', nameEn: 'Wheel of Fortune',
        number: 'X', arcana: 'major',
        symbol: '🎡',
        keywords: ['变化', '循环', '机遇', '命运'],
        meaningUp: '命运的齿轮正在转动。变化即将到来，这是你无法阻止的。拥抱转变，因为每一个结束都是新的开始。好运正在向你靠近。',
        meaningRev: '厄运、不可控的变化或抗拒改变。变化来临时感到无力，或好运暂时离你而去。记住命运之轮终将再次转动，耐心等待时机。'
    },
    {
        id: 11, name: '正义', nameEn: 'Justice',
        number: 'XI', arcana: 'major',
        symbol: '⚖️',
        keywords: ['公正', '真理', '因果', '平衡'],
        meaningUp: '你的决定将产生公正的结果。诚实面对自己和他人，真相终将大白。种什么因得什么果，现在的选择需要深思熟虑。',
        meaningRev: '不公正、逃避责任或法律纠纷。可能你对自己的判断不够客观，或正在承受不公平的对待。需要审视自己的行为是否问心无愧。'
    },
    {
        id: 12, name: '倒吊人', nameEn: 'The Hanged Man',
        number: 'XII', arcana: 'major',
        symbol: '🌀',
        keywords: ['牺牲', '暂停', '新的视角', '放下'],
        meaningUp: '停下来，换一个角度看问题。此刻需要你做出牺牲或暂时搁置某些事情。看似被困住了，但这种静止蕴含着深刻的智慧。',
        meaningRev: '拖延、抗拒变化或无谓的牺牲。可能你在拒绝必要的暂停，或是在无意义的事情上浪费精力。需要辨别什么是真正的放手。'
    },
    {
        id: 13, name: '死神', nameEn: 'Death',
        number: 'XIII', arcana: 'major',
        symbol: '💀',
        keywords: ['结束', '转变', '重生', '放手'],
        meaningUp: '旧的篇章必须结束，新的篇章才能开始。不要害怕改变——死亡只是转化的过程。放下不再服务于你的一切，为新生腾出空间。',
        meaningRev: '抗拒改变、停滞不前或害怕结束。紧紧抓住已经死去的东西只会带来痛苦。接受变化是生命自然循环的一部分。'
    },
    {
        id: 14, name: '节制', nameEn: 'Temperance',
        number: 'XIV', arcana: 'major',
        symbol: '🕊️',
        keywords: ['平衡', '适度', '耐心', '调和'],
        meaningUp: '找到中庸之道。在生活中创造平衡与和谐，以耐心和温和的方式前进。融合对立的力量，创造更完整的自我。',
        meaningRev: '极端、失衡或缺乏耐心。你可能在某个方面过度了，或生活失去了平衡。需要重新调整节奏，找到身心的和谐。'
    },
    {
        id: 15, name: '恶魔', nameEn: 'The Devil',
        number: 'XV', arcana: 'major',
        symbol: '😈',
        keywords: ['束缚', '欲望', '物质主义', '依赖'],
        meaningUp: '检视你被什么所束缚——可能是上瘾、物欲、或有害的关系。这张牌邀请你正视自己的阴影面，意识到枷锁只是幻象，你有力量挣脱。',
        meaningRev: '觉醒、挣脱束缚或戒除不良习惯。你正在意识到那些限制你的力量，并开始做出改变。黑暗即将过去，光明就在前方。'
    },
    {
        id: 16, name: '高塔', nameEn: 'The Tower',
        number: 'XVI', arcana: 'major',
        symbol: '🗼',
        keywords: ['剧变', '崩塌', '觉醒', '重建'],
        meaningUp: '旧有结构突然崩塌，看似毁灭性的打击，实则是为了让你重建更坚固的根基。真相有时是残酷的，但唯有如此才能获得真正的自由。',
        meaningRev: '避免灾难、抵抗必要的改变或危机延期。你可能暂时避开了冲击，但根本问题仍未解决。抗拒改变只会让最终的转变更加剧烈。'
    },
    {
        id: 17, name: '星星', nameEn: 'The Star',
        number: 'XVII', arcana: 'major',
        symbol: '⭐',
        keywords: ['希望', '灵感', '宁静', '治愈'],
        meaningUp: '在黑暗中看到了希望的光芒。让内心充满平静和信任，宇宙正在为你指引方向。这是治愈和恢复的时期，重新与内心的梦想连接。',
        meaningRev: '失望、丧失信念或创意枯竭。你可能暂时失去了对未来的信心。但星星从未消失，只是被乌云遮蔽。重新找回内心的火花。'
    },
    {
        id: 18, name: '月亮', nameEn: 'The Moon',
        number: 'XVIII', arcana: 'major',
        symbol: '🌙',
        keywords: ['幻觉', '恐惧', '潜意识', '不确定'],
        meaningUp: '事物并非表面看起来那样。你的恐惧和幻觉正在影响判断。信任你的直觉，但不要急于下结论。潜藏的情绪需要被看见和面对。',
        meaningRev: '恐惧消散、困惑解除或真相显露。漫长的迷茫期即将结束，隐藏在阴影中的事物将被照亮。你正在从幻觉中醒来。'
    },
    {
        id: 19, name: '太阳', nameEn: 'The Sun',
        number: 'XIX', arcana: 'major',
        symbol: '☀️',
        keywords: ['喜悦', '成功', '活力', '清晰'],
        meaningUp: '最积极的牌之一！快乐、成功和满足正在到来。一切都变得清晰明朗，你的能量和热情高涨。享受这阳光灿烂的时刻吧。',
        meaningRev: '短暂的阴霾、热情消退或暂时的挫折。成功可能被延迟，但太阳终将再次照耀。保持积极的心态，不要被暂时的阴影所迷惑。'
    },
    {
        id: 20, name: '审判', nameEn: 'Judgement',
        number: 'XX', arcana: 'major',
        symbol: '📯',
        keywords: ['觉醒', '重生', '评估', '召唤'],
        meaningUp: '觉醒的时刻到了。你正在被召唤去实现更高的使命。这是一个自我评估和重生的时期，过去的经历为你带来了深刻的智慧。',
        meaningRev: '自我怀疑、拒绝召唤或害怕评判。你可能在逃避重要的决定或自我反省。不要忽视内心深处的召唤，它不会消失。'
    },
    {
        id: 21, name: '世界', nameEn: 'The World',
        number: 'XXI', arcana: 'major',
        symbol: '🌍',
        keywords: ['完成', '成就', '完整', '旅行'],
        meaningUp: '一个周期圆满完成了！你达到了目标，实现了完整的循环。这是庆祝和感到满足的时刻。一个阶段的结束意味着下一个伟大旅程的开始。',
        meaningRev: '未完成、延迟或缺乏大局观。某些环节尚未闭合，或你正在寻找更大的意义。不要着急，最后的拼图即将到位。'
    },

    // ==================================================================
    // 权杖牌组 (Wands) — 火元素 · 行动 · 创意 · 14张
    // ==================================================================
    {
        id: 22, name: '权杖王牌', nameEn: 'Ace of Wands',
        number: 'Ace', suit: 'wands', arcana: 'minor',
        symbol: '🔥',
        keywords: ['新开始', '创意火花', '灵感', '激情'],
        meaningUp: '握紧它——你的手将看到前所未有的创造力和可能性。全新的开始正等待着你，也许是事业，也许是热忱的爱好。机会的火花已被点燃，不要让它在犹豫中熄灭。',
        meaningRev: '创意被压抑、错失良机或缺乏动力。可能的项目未能启动，或你的热情正在消退。重新审视自己的内在火种。'
    },
    {
        id: 23, name: '权杖二', nameEn: 'Two of Wands',
        number: '2', suit: 'wands', arcana: 'minor',
        symbol: '🔥',
        keywords: ['规划', '未来', '选择', '扩张'],
        meaningUp: '站在十字路口俯瞰自己的领地。你已有了基础，现在需要决定下一步的方向。大胆梦想并制定计划，世界在你的掌握之中。',
        meaningRev: '恐惧未知、计划受阻或缺乏远见。可能的冒险被推迟，或你害怕走出舒适区。不要被恐惧限制了自己的格局。'
    },
    {
        id: 24, name: '权杖三', nameEn: 'Three of Wands',
        number: '3', suit: 'wands', arcana: 'minor',
        symbol: '🔥',
        keywords: ['远见', '探索', '贸易', '合作'],
        meaningUp: '远眺地平线，你的计划开始开花结果。合作与探索将带来丰硕的成果。坚持下去，你播下的种子正在成长为参天大树。',
        meaningRev: '进展缓慢、缺乏远见或合作受阻。可能的项目延误或团队分歧。需要耐心等待，或调整你的策略。'
    },
    {
        id: 25, name: '权杖四', nameEn: 'Four of Wands',
        number: '4', suit: 'wands', arcana: 'minor',
        symbol: '🔥',
        keywords: ['庆祝', '和谐', '归属', '稳定'],
        meaningUp: '这是一个值得庆祝的时刻！家庭和谐、事业稳步推进。你正在收获努力的成果。与身边的人一起分享这份喜悦吧。',
        meaningRev: '不稳定的基础、庆祝取消或缺乏归属感。可能计划中的喜悦被打破，或你对现状感到不满。需要重新审视那些让你感到安稳的基础。'
    },
    {
        id: 26, name: '权杖五', nameEn: 'Five of Wands',
        number: '5', suit: 'wands', arcana: 'minor',
        symbol: '🔥',
        keywords: ['竞争', '冲突', '挑战', '多样性'],
        meaningUp: '激烈的竞争和意见冲突让你充满压力。但这是良性的较量，能激发更好的方案。保持开放心态，从不同角度中寻找智慧。',
        meaningRev: '冲突化解、避免对抗或合作共赢。紧张局势在缓解，各方正在寻找共同点。也可能是在回避必要的竞争。'
    },
    {
        id: 27, name: '权杖六', nameEn: 'Six of Wands',
        number: '6', suit: 'wands', arcana: 'minor',
        symbol: '🔥',
        keywords: ['胜利', '认可', '称赞', '领导'],
        meaningUp: '胜利的凯歌奏响！你的成就被众人认可和称赞。享受这份荣耀吧，这是你应得的。同时保持谦逊，成功是团队的努力。',
        meaningRev: '失败、缺乏认可或骄傲自满。你可能没有得到预期的赞誉，或有小人嫉妒。不要让他人的看法影响你的自我价值。'
    },
    {
        id: 28, name: '权杖七', nameEn: 'Seven of Wands',
        number: '7', suit: 'wands', arcana: 'minor',
        symbol: '🔥',
        keywords: ['防守', '坚持', '勇气', '竞争'],
        meaningUp: '站穩腳跟，捍卫你的立场！虽然面临多方挑战和质疑，但你有充分的理由坚持下去。自信地表明你的态度，不要被压力击垮。',
        meaningRev: '不堪重负、放弃或失去优势。可能你感到孤立无援，或正在考虑让步。重新评估是否值得继续战斗。'
    },
    {
        id: 29, name: '权杖八', nameEn: 'Eight of Wands',
        number: '8', suit: 'wands', arcana: 'minor',
        symbol: '🔥',
        keywords: ['速度', '进展', '消息', '行动'],
        meaningUp: '一切都在快速推进！事情以你意想不到的速度发展，好消息即将到来。抓住这股势头，趁着能量高涨时果断行动。',
        meaningRev: '延误、沟通不畅或计划停滞。快速的节奏突然慢下来，可能有意外阻碍。需要检查是否有细节被忽略。'
    },
    {
        id: 30, name: '权杖九', nameEn: 'Nine of Wands',
        number: '9', suit: 'wands', arcana: 'minor',
        symbol: '🔥',
        keywords: ['韧性', '坚持', '警觉', '边界'],
        meaningUp: '你已经走了这么远，再坚持一下！虽然疲惫但斗志仍在。这是最后的考验，守护好你的边界，不要功亏一篑。',
        meaningRev: '精疲力竭、放弃或过度防御。可能你已经到了极限，需要休息。记住寻求帮助并不是软弱的表现。'
    },
    {
        id: 31, name: '权杖十', nameEn: 'Ten of Wands',
        number: '10', suit: 'wands', arcana: 'minor',
        symbol: '🔥',
        keywords: ['负担', '压力', '责任', '辛苦'],
        meaningUp: '你肩上扛着太多责任了。虽然你是个可靠的人，但过度的负担正在消耗你。学会分配任务，把精力放在真正重要的事情上。',
        meaningRev: '卸下重担、学会委托或放手。你正在意识到不必独自承担一切。减轻负担后，你将感觉轻松许多。'
    },
    {
        id: 32, name: '权杖侍从', nameEn: 'Page of Wands',
        number: '侍从', suit: 'wands', arcana: 'minor',
        symbol: '🔥',
        keywords: ['探索', '热情', '新消息', '自由'],
        meaningUp: '充满热情和好奇心的年轻能量。新的消息或机会正在接近你。保持开放和勇敢，像孩子一样对世界充满探索欲。',
        meaningRev: '缺乏方向、计划天折或幼稚行为。可能你的热情来得快去得也快，或收到令人失望的消息。需要培养专注和坚持。'
    },
    {
        id: 33, name: '权杖骑士', nameEn: 'Knight of Wands',
        number: '骑士', suit: 'wands', arcana: 'minor',
        symbol: '🔥',
        keywords: ['冒险', '冲动', '魅力', '追求'],
        meaningUp: '勇往直前的骑士！热情、自信、充满行动力。这是追逐梦想的时候，不要犹豫。你的魅力和冲劲会吸引志同道合的人。',
        meaningRev: '鲁莽、半途而废或冲动行事。热情有余而耐力不足，可能匆忙开始又草率结束。需要在行动前多一些计划。'
    },
    {
        id: 34, name: '权杖王后', nameEn: 'Queen of Wands',
        number: '王后', suit: 'wands', arcana: 'minor',
        symbol: '🔥',
        keywords: ['自信', '温暖', '果决', '魅力'],
        meaningUp: '充满魅力和自信的女性力量。你很清楚自己的价值，并勇敢展现真实的自我。用你的热情和感染力鼓舞身边的人。',
        meaningRev: '嫉妒、占有欲或缺乏自信。可能你的光芒被遮挡，或产生了不安全感。重新找回内在的自信和温暖。'
    },
    {
        id: 35, name: '权杖国王', nameEn: 'King of Wands',
        number: '国王', suit: 'wands', arcana: 'minor',
        symbol: '🔥',
        keywords: ['领导力', '远见', '创业', '荣誉'],
        meaningUp: '天生的领导者！你有远见、有魄力，知道如何激励他人。大胆去开拓事业吧，你的决策力和行动力将带领所有人走向成功。',
        meaningRev: '专横、缺乏远见或滥用权力。可能领导风格过于强势，或承诺无法兑现。需要以更谦逊和包容的方式发挥影响力。'
    },

    // ==================================================================
    // 圣杯牌组 (Cups) — 水元素 · 情感 · 关系 · 14张
    // ==================================================================
    {
        id: 36, name: '圣杯王牌', nameEn: 'Ace of Cups',
        number: 'Ace', suit: 'cups', arcana: 'minor',
        symbol: '💧',
        keywords: ['新感情', '爱', '直觉', '喜悦'],
        meaningUp: '爱的泉源正在你的心中涌现。无论是爱情、友情还是自爱，你感受到情感的充盈。敞开心扉去接受和给予吧。',
        meaningRev: '情感空虚、爱被堵塞或压抑情绪。你可能关上了心门，或情感上感到干涸。需要先学会爱自己。'
    },
    {
        id: 37, name: '圣杯二', nameEn: 'Two of Cups',
        number: '2', suit: 'cups', arcana: 'minor',
        symbol: '💧',
        keywords: ['连接', '亲密', '平等', '合作'],
        meaningUp: '两个人之间的深刻连接正在形成。这是平等互惠的关系，充满了相互尊重和真诚的情感。无论爱情还是友情，都很美好。',
        meaningRev: '关系破裂、不平等或沟通不良。一段关系正在出现裂痕，或连接变得不平衡。需要双方共同付出努力来修复。'
    },
    {
        id: 38, name: '圣杯三', nameEn: 'Three of Cups',
        number: '3', suit: 'cups', arcana: 'minor',
        symbol: '💧',
        keywords: ['友谊', '庆祝', '姐妹情', '欢乐'],
        meaningUp: '和姐妹们／朋友们一起庆祝！这是友谊和欢乐的时光。分享快乐会让喜悦加倍。珍惜这些温暖的关系，她们是你最宝贵的财富。',
        meaningRev: '过度放纵、社交孤立或小团体矛盾。欢乐可能过头了，或朋友间出现不愉快。需要保持适度和真诚。'
    },
    {
        id: 39, name: '圣杯四', nameEn: 'Four of Cups',
        number: '4', suit: 'cups', arcana: 'minor',
        symbol: '💧',
        keywords: ['沉思', '不满', '冥想', '机会'],
        meaningUp: '你有些心不在焉，对眼前的事物感到不满。但你可能忽略了一个正在靠近的新机会。从自省中抬起头来，看看周围还有什么可能。',
        meaningRev: '清醒、开始行动或抓住机会。你从消极中走出来，愿意重新参与生活。新的可能性正在被你看见和把握。'
    },
    {
        id: 40, name: '圣杯五', nameEn: 'Five of Cups',
        number: '5', suit: 'cups', arcana: 'minor',
        symbol: '💧',
        keywords: ['失落', '悲伤', '后悔', '放下'],
        meaningUp: '你沉浸在失去的痛苦中，注视着那三只倒下的杯子。但请转身——还有两只杯子在你身后。不要因为失去而忽略了依然存在的美好。',
        meaningRev: '接受、释怀、向前看。你开始接受现实，从悲伤中走出来。宽恕自己和他人，重新发现生活中值得珍惜的部分。'
    },
    {
        id: 41, name: '圣杯六', nameEn: 'Six of Cups',
        number: '6', suit: 'cups', arcana: 'minor',
        symbol: '💧',
        keywords: ['回忆', '怀旧', '纯洁', '赠予'],
        meaningUp: '温暖的回忆涌上心头。过去的经历正在滋养你的现在。也许是和老朋友重聚，或是收到一份充满心意的礼物。珍惜这份纯真。',
        meaningRev: '困于过去、无法向前或拒绝成长。过度的怀旧让你无法活在当下。需要放下对过去的执着，创造新的美好记忆。'
    },
    {
        id: 42, name: '圣杯七', nameEn: 'Seven of Cups',
        number: '7', suit: 'cups', arcana: 'minor',
        symbol: '💧',
        keywords: ['幻想', '选择过多', '欲望', '白日梦'],
        meaningUp: '眼前浮现众多可能性，让人眼花缭乱。但要小心——并非所有发光的东西都是金子。区分幻想与现实，专注于最真实的那一个选择。',
        meaningRev: '集中注意力、做出决定或幻灭。你从白日梦中清醒，开始脚踏实地。过多的选择让你疲惫，简化是此刻的主题。'
    },
    {
        id: 43, name: '圣杯八', nameEn: 'Eight of Cups',
        number: '8', suit: 'cups', arcana: 'minor',
        symbol: '💧',
        keywords: ['放下', '离开', '寻找更深', '转变'],
        meaningUp: '你决定离开某些不再满足你的事物。虽然很难，但你内心知道必须去寻找更深层的精神满足。信任这个离开的决定。',
        meaningRev: '犹豫不决、害怕离开或停滞。你可能知道该走了，却缺乏行动的勇气。继续待在舒适区只会让内心的空虚感加深。'
    },
    {
        id: 44, name: '圣杯九', nameEn: 'Nine of Cups',
        number: '9', suit: 'cups', arcana: 'minor',
        symbol: '💧',
        keywords: ['满足', '心愿', '幸福', '自信'],
        meaningUp: '通常被称为"心想事成"的牌！你的愿望正在实现，内心充满满足和喜悦。享受这份成就和幸福，你值得拥有这一切。',
        meaningRev: '不满意、愿望落空或过度追求物质。表面上的满足掩盖了内心的空虚。需要审视什么是真正让你快乐的事。'
    },
    {
        id: 45, name: '圣杯十', nameEn: 'Ten of Cups',
        number: '10', suit: 'cups', arcana: 'minor',
        symbol: '💧',
        keywords: ['幸福', '美满', '家庭', '和谐'],
        meaningUp: '完美的家庭幸福牌！情感圆满、家庭和谐、心灵安宁。这是真正持久的幸福，你和你爱的人正在共享这份美好。',
        meaningRev: '家庭冲突、梦想破灭或不和谐。理想中的幸福被现实打破，或你对家庭关系感到不满。需要沟通和理解来修复裂痕。'
    },
    {
        id: 46, name: '圣杯侍从', nameEn: 'Page of Cups',
        number: '侍从', suit: 'cups', arcana: 'minor',
        symbol: '💧',
        keywords: ['创意', '敏感', '直觉', '邀请'],
        meaningUp: '柔和的灵感和创意正在萌芽。保持敏感和开放，像孩子一样对世界充满好奇。也许一个情感上的邀请或消息正在路上。',
        meaningRev: '情感不成熟、创意受阻或逃避现实。你的想象力可能脱离了实际，或选择了幼稚的应对方式。需要培养更多的情绪韧性。'
    },
    {
        id: 47, name: '圣杯骑士', nameEn: 'Knight of Cups',
        number: '骑士', suit: 'cups', arcana: 'minor',
        symbol: '💧',
        keywords: ['追求', '浪漫', '梦想', '邀请'],
        meaningUp: '浪漫的骑士正在策马而来！他带着情感和梦想向你靠近。也许是一次浪漫的邀约，或是一个追随内心热情的机会。',
        meaningRev: '幻灭、不切实际或情感欺骗。可能期望过高导致失望，或有人的浪漫承诺并不可信。需要保持清醒的判断力。'
    },
    {
        id: 48, name: '圣杯王后', nameEn: 'Queen of Cups',
        number: '王后', suit: 'cups', arcana: 'minor',
        symbol: '💧',
        keywords: ['慈悲', '直觉', '温暖', '疗愈'],
        meaningUp: '温柔而富有同理心的女性力量。你的直觉和慈悲心让你能够深深理解他人的感受。用你的温暖去疗愈和关怀身边的人。',
        meaningRev: '过度敏感、情绪化或牺牲自我。你可能过度吸收他人的情绪，或忽略了自己的边界。需要在关怀他人和照顾自己之间找到平衡。'
    },
    {
        id: 49, name: '圣杯国王', nameEn: 'King of Cups',
        number: '国王', suit: 'cups', arcana: 'minor',
        symbol: '💧',
        keywords: ['情绪平衡', '智慧', '成熟', '包容'],
        meaningUp: '成熟的情绪掌控者。你拥有丰富的内心世界，同时能够保持冷静和平衡。以智慧和宽容对待自己和他人。',
        meaningRev: '情绪压抑、情绪失控或冷漠。可能你关闭了情感通道，或情绪管理出了问题。需要重新学习健康的情感表达。'
    },

    // ==================================================================
    // 宝剑牌组 (Swords) — 风元素 · 思想 · 挑战 · 14张
    // ==================================================================
    {
        id: 50, name: '宝剑王牌', nameEn: 'Ace of Swords',
        number: 'Ace', suit: 'swords', arcana: 'minor',
        symbol: '⚔️',
        keywords: ['真理', '清晰', '突破', '智慧'],
        meaningUp: '一把锋利的宝剑划破迷雾！清晰的思考、真理和正义将战胜一切。这是做出果断决定的时刻，用理性之光指引你的行动。',
        meaningRev: '混乱、错误判断或滥用智力。可能你的思维不够清晰，或有人在用言语伤害你。需要找回内心的清明。'
    },
    {
        id: 51, name: '宝剑二', nameEn: 'Two of Swords',
        number: '2', suit: 'swords', arcana: 'minor',
        symbol: '⚔️',
        keywords: ['为难', '选择', '僵局', '自保'],
        meaningUp: '你正面临一个两难的选择，闭上眼睛试图逃避。但问题不会自行消失。摘掉眼罩，勇敢面对现实吧。',
        meaningRev: '犹豫解除、信息揭露或做出决定。你终于能够看清局面并做出选择。真相虽然可能带来不安，但好过一直被蒙蔽。'
    },
    {
        id: 52, name: '宝剑三', nameEn: 'Three of Swords',
        number: '3', suit: 'swords', arcana: 'minor',
        symbol: '⚔️',
        keywords: ['心碎', '痛苦', '悲伤', '真相'],
        meaningUp: '一颗心被三把剑刺穿。痛苦、悲伤和失落无法回避。允许自己哭泣和感受这份伤痛，这是疗愈的第一步。',
        meaningRev: '痛苦缓解、释放悲伤或开始愈合。最痛的阶段已经过去，伤口正在慢慢愈合。学会从经历中获得智慧。'
    },
    {
        id: 53, name: '宝剑四', nameEn: 'Four of Swords',
        number: '4', suit: 'swords', arcana: 'minor',
        symbol: '⚔️',
        keywords: ['休息', '静养', '冥想', '恢复'],
        meaningUp: '疲惫的心灵需要休息。这不是逃避，而是为下一段旅程积蓄力量。退一步，让自己在宁静中得到恢复和疗愈。',
        meaningRev: '焦躁不安、无法休息或急于行动。你的内心无法平静，即便身体在休息思绪仍然纷乱。需要真正放下焦虑。'
    },
    {
        id: 54, name: '宝剑五', nameEn: 'Five of Swords',
        number: '5', suit: 'swords', arcana: 'minor',
        symbol: '⚔️',
        keywords: ['冲突', '失败', '损失', '屈辱'],
        meaningUp: '一场没有真正赢家的冲突。你可能赢了这场争论，但伤了人心。问问自己：争个对错真的值得吗？',
        meaningRev: '和解、妥协或放下争端。你意识到争执的无意义，选择了和平。也可能从过去的失败中吸取了教训。'
    },
    {
        id: 55, name: '宝剑六', nameEn: 'Six of Swords',
        number: '6', suit: 'swords', arcana: 'minor',
        symbol: '⚔️',
        keywords: ['过渡', '疗愈', '前行', '释放'],
        meaningUp: '你乘船驶向平静的水域。虽然带着过往的伤痛，但你正在向更好的地方进发。放下沉重的包袱，新的平静在前方等待。',
        meaningRev: '无法前进、被困在痛苦中或拒绝过渡。你可能陷入了过去的泥沼，或这次过渡比预想中更艰难。继续前行，不要回头。'
    },
    {
        id: 56, name: '宝剑七', nameEn: 'Seven of Swords',
        number: '7', suit: 'swords', arcana: 'minor',
        symbol: '⚔️',
        keywords: ['策略', '保密', '欺骗', '谋略'],
        meaningUp: '需要智取而非力敌。用策略和智慧解决问题，而非正面冲突。但也要小心——有人可能在暗中图谋不轨。',
        meaningRev: '坦诚面对、真相败露或放下伪装。秘密即将被揭露，或你决定不再隐藏。诚实是最好的策略。'
    },
    {
        id: 57, name: '宝剑八', nameEn: 'Eight of Swords',
        number: '8', suit: 'swords', arcana: 'minor',
        symbol: '⚔️',
        keywords: ['束缚', '消极', '自限', '无助'],
        meaningUp: '你被自己的负面思维所困——那些限制你的并不是现实，而是你的想法。眼罩取下后你会发现，束缚是虚幻的。',
        meaningRev: '觉醒、解放或新视角。你开始看清自己是如何困住自己的。放下消极的自我对话，寻找新的可能性。'
    },
    {
        id: 58, name: '宝剑九', nameEn: 'Nine of Swords',
        number: '9', suit: 'swords', arcana: 'minor',
        symbol: '⚔️',
        keywords: ['焦虑', '噩梦', '失眠', '恐惧'],
        meaningUp: '深夜被噩梦惊醒，脑海中盘旋着最坏的担忧。但请记住——你所恐惧的事情大多只在你的想象中发生。寻求帮助，你不必独自承受。',
        meaningRev: '焦虑减轻、放下担忧或寻求帮助。你开始面对自己的恐惧，发现事情并没有想象中那么糟糕。黑暗即将过去。'
    },
    {
        id: 59, name: '宝剑十', nameEn: 'Ten of Swords',
        number: '10', suit: 'swords', arcana: 'minor',
        symbol: '⚔️',
        keywords: ['终结', '谷底', '背叛', '重生'],
        meaningUp: '最糟糕的时刻已经过去。虽然被十把剑刺穿显得无比惨烈，但这是黎明前最后的黑暗。结束就是新的开始。',
        meaningRev: '触底反弹、缓慢恢复或拒绝结束。即使身处谷底，你仍在坚持。这是从废墟中站起来的时刻。'
    },
    {
        id: 60, name: '宝剑侍从', nameEn: 'Page of Swords',
        number: '侍从', suit: 'swords', arcana: 'minor',
        symbol: '⚔️',
        keywords: ['好奇', '警觉', '沟通', '学习'],
        meaningUp: '敏锐的头脑和强烈的求知欲。你充满好奇心，渴望学习新事物。保持警惕，但不要过于尖锐。言语是你的利剑，谨慎使用。',
        meaningRev: '轻率言论、传播流言或沟通失误。可能说话不经大脑，或卷入了不必要的口舌之争。学会三思而后言。'
    },
    {
        id: 61, name: '宝剑骑士', nameEn: 'Knight of Swords',
        number: '骑士', suit: 'swords', arcana: 'minor',
        symbol: '⚔️',
        keywords: ['冲刺', '决心', '行动', '直言'],
        meaningUp: '势如破竹的骑士全速前进！目标明确，行动迅速，不容任何阻挡。但注意不要因为速度而忽略了细节和感受。',
        meaningRev: '冲动、傲慢或被迫暂停。过于急躁可能导致失误。可能需要放慢速度，重新考虑你的策略。'
    },
    {
        id: 62, name: '宝剑王后', nameEn: 'Queen of Swords',
        number: '王后', suit: 'swords', arcana: 'minor',
        symbol: '⚔️',
        keywords: ['清晰', '独立', '智慧', '直率'],
        meaningUp: '独立思考、目光如炬的女性。她用清晰的头脑看透一切伪装，言语精准有力。在需要的时候，她既不畏惧孤独，也不回避真相。',
        meaningRev: '刻薄、冷漠或过于挑剔。理性变成了冷漠，客观变成了苛责。需要平衡理性与感性的表达方式。'
    },
    {
        id: 63, name: '宝剑国王', nameEn: 'King of Swords',
        number: '国王', suit: 'swords', arcana: 'minor',
        symbol: '⚔️',
        keywords: ['权威', '理性', '规则', '专业'],
        meaningUp: '以理性和专业著称的领导者。依靠清晰的思维和公正的判断来治理。追求真理和公平，不受情感干扰。',
        meaningRev: '滥用权力、冷酷无情或判断失误。权威可能被误用，或理性变成了冷漠。需要提醒自己保持同理心。'
    },

    // ==================================================================
    // 星币牌组 (Pentacles) — 土元素 · 物质 · 事业 · 14张
    // ==================================================================
    {
        id: 64, name: '星币王牌', nameEn: 'Ace of Pentacles',
        number: 'Ace', suit: 'pentacles', arcana: 'minor',
        symbol: '💎',
        keywords: ['新机遇', '财富', '踏实', '开始'],
        meaningUp: '一枚闪耀的金币出现在你面前！新的财务机会或物质收获即将到来。这是一个稳健的开始，脚踏实地地从基础做起吧。',
        meaningRev: '错失机会、财务不稳或缺乏规划。可能一个赚钱的机会溜走了，或你在财务上缺乏安全感。需要更务实的财务规划。'
    },
    {
        id: 65, name: '星币二', nameEn: 'Two of Pentacles',
        number: '2', suit: 'pentacles', arcana: 'minor',
        symbol: '💎',
        keywords: ['平衡', '适应', '多任务', '理财'],
        meaningUp: '你正在同时处理多项事务，像杂耍一样保持平衡。收入支出、工作生活都需要兼顾。保持灵活和节奏感，你应付得来。',
        meaningRev: '失衡、财务困难或过度操劳。太多事情同时进行导致手忙脚乱。需要减少承诺，找到更可持续的节奏。'
    },
    {
        id: 66, name: '星币三', nameEn: 'Three of Pentacles',
        number: '3', suit: 'pentacles', arcana: 'minor',
        symbol: '💎',
        keywords: ['合作', '技能', '团队', '精进'],
        meaningUp: '团队合作让梦想成真。你在自己的专业领域发光发热，与他人协作创造出更大的价值。持续学习和精进你的手艺。',
        meaningRev: '缺乏合作、技能不足或团队冲突。可能团队内部出现摩擦，或你的能力还有提升空间。需要加强沟通和学习。'
    },
    {
        id: 67, name: '星币四', nameEn: 'Four of Pentacles',
        number: '4', suit: 'pentacles', arcana: 'minor',
        symbol: '💎',
        keywords: ['节俭', '保守', '掌控', '吝啬'],
        meaningUp: '你紧紧抓住你的资源和财富不放。节俭是美德，但过于保守可能阻碍了成长。在保存和给予之间找到平衡。',
        meaningRev: '挥霍无度、财务失控或过度慷慨。可能你花钱如流水，或对物质的安全感过于放松。需要重建健康的财务边界。'
    },
    {
        id: 68, name: '星币五', nameEn: 'Five of Pentacles',
        number: '5', suit: 'pentacles', arcana: 'minor',
        symbol: '💎',
        keywords: ['匮乏', '困境', '孤立', '精神空虚'],
        meaningUp: '你在寒风中瑟瑟发抖，物质或精神上感到匮乏。但注意——那扇通往温暖的窗户就在你身边，你看见了吗？寻求帮助吧。',
        meaningRev: '走出困境、恢复或找到帮助。最困难的时期正在过去，你找到了支持或资源。心灵的富足比物质更重要。'
    },
    {
        id: 69, name: '星币六', nameEn: 'Six of Pentacles',
        number: '6', suit: 'pentacles', arcana: 'minor',
        symbol: '💎',
        keywords: ['施予', '接受', '慷慨', '公平'],
        meaningUp: '慷慨的给予者和感恩的接受者之间的平衡。你正在分享你的财富，或从他人那里得到帮助。记住——施比受更有福，但也要懂得接受。',
        meaningRev: '不平衡、债务或条件性给予。给予可能带有附加条件，或你感到接受他人的帮助很难。需要建立更健康的互惠关系。'
    },
    {
        id: 70, name: '星币七', nameEn: 'Seven of Pentacles',
        number: '7', suit: 'pentacles', arcana: 'minor',
        symbol: '💎',
        keywords: ['评估', '投资', '等待', '耐心'],
        meaningUp: '你停下来审视自己播下的种子。投资和努力正在慢慢生长，需要耐心等待收获。评估目前的进展，决定下一步的投入。',
        meaningRev: '浪费努力、回报不佳或急躁。你感觉投入和产出不成正比，或对自己的进展感到失望。调整策略，继续前进。'
    },
    {
        id: 71, name: '星币八', nameEn: 'Eight of Pentacles',
        number: '8', suit: 'pentacles', arcana: 'minor',
        symbol: '💎',
        keywords: ['专注', '精练', '学徒', '勤奋'],
        meaningUp: '全神贯注于你的手艺！勤奋和专注是通往卓越的途径。用心打磨每一个细节，你的努力终将得到回报。',
        meaningRev: '马虎、缺乏动力或技能停滞。你可能对工作失去了热情，或不愿意花时间提升自己。需要重新找到学习和进步的动力。'
    },
    {
        id: 72, name: '星币九', nameEn: 'Nine of Pentacles',
        number: '9', suit: 'pentacles', arcana: 'minor',
        symbol: '💎',
        keywords: ['丰盛', '自足', '优雅', '惬意'],
        meaningUp: '通过自己的努力获得了丰盛的成果。你独立、优雅、自给自足。享受这份通过奋斗得来的安逸和美好吧，你值得拥有。',
        meaningRev: '依赖他人、财务问题或表面的光鲜。看似拥有实则空虚，或财务出现状况。需要审视是否真的物有所值。'
    },
    {
        id: 73, name: '星币十', nameEn: 'Ten of Pentacles',
        number: '10', suit: 'pentacles', arcana: 'minor',
        symbol: '💎',
        keywords: ['传承', '家族', '财富', '长久'],
        meaningUp: '家族的财富和传承正在延续。这是世代积累的成果，代表着稳定、安全和长久的价值。你属于一个更大的整体。',
        meaningRev: '家族问题、事业失败或传承断裂。家族内部出现矛盾，或你与根源失去了连接。需要重新审视家庭和传统对你的意义。'
    },
    {
        id: 74, name: '星币侍从', nameEn: 'Page of Pentacles',
        number: '侍从', suit: 'pentacles', arcana: 'minor',
        symbol: '💎',
        keywords: ['学习', '务实', '新技能', '目标'],
        meaningUp: '对物质世界充满好奇的学生。你正在认真学习一门新技能或开始一个新项目。脚踏实地，一步一个脚印地前进。',
        meaningRev: '拖延、不切实际或缺乏目标。可能你制定了很多计划却没有行动，或目标不够务实。需要从小事做起，建立信心。'
    },
    {
        id: 75, name: '星币骑士', nameEn: 'Knight of Pentacles',
        number: '骑士', suit: 'pentacles', arcana: 'minor',
        symbol: '💎',
        keywords: ['踏实', '勤奋', '可靠', '耐心'],
        meaningUp: '一步一个脚印的实干家。虽然速度不快，但你的可靠和坚持终将带你到达目的地。认真完成手头的每一件小事。',
        meaningRev: '停滞、无聊或过于保守。可能你太过于谨慎而错失了机会，或对重复的工作感到倦怠。需要给生活加点新鲜感。'
    },
    {
        id: 76, name: '星币王后', nameEn: 'Queen of Pentacles',
        number: '王后', suit: 'pentacles', arcana: 'minor',
        symbol: '💎',
        keywords: ['丰饶', '务实', '滋养', '母性'],
        meaningUp: '温暖而务实的女性力量。她既创造财富又懂得享受生活，既关爱家人又保持独立。物质与精神的完美平衡。',
        meaningRev: '忽视家庭、过度工作或物质至上。可能事业和家庭的平衡出了问题，或过于看重物质而忽略了精神的滋养。'
    },
    {
        id: 77, name: '星币国王', nameEn: 'King of Pentacles',
        number: '国王', suit: 'pentacles', arcana: 'minor',
        symbol: '💎',
        keywords: ['富裕', '成功', '稳定', '慷慨'],
        meaningUp: '成功的商业领袖！通过多年的努力积累了可观的财富。他慷慨而稳重的品格让人信赖。物质世界的王者，懂得如何让财富增值。',
        meaningRev: '贪婪、财务困境或过度物欲。财富可能让人变得固执或贪婪，或你正面临财务上的挑战。需要重新定义成功和价值的含义。'
    }
];

/* ---------- 扩展元信息 ---------- */

// 元素映射
const ELEMENT_MAP = {
    wands:     { element: '🔥 火', elementEn: 'Fire', nature: '行动、创造、意志、热情' },
    cups:      { element: '💧 水', elementEn: 'Water', nature: '情感、直觉、感受、关系' },
    swords:    { element: '🌪️ 风', elementEn: 'Air', nature: '思想、沟通、挑战、智慧' },
    pentacles: { element: '🌍 土', elementEn: 'Earth', nature: '物质、事业、财富、健康' }
};

// 数字灵数含义
const NUMBER_MEANINGS = {
    'Ace':   { meaning: '开端 · 潜能 · 纯粹能量' },
    '2':     { meaning: '平衡 · 选择 · 二元性' },
    '3':     { meaning: '成长 · 合作 · 表达' },
    '4':     { meaning: '稳定 · 结构 · 秩序' },
    '5':     { meaning: '冲突 · 变化 · 突破' },
    '6':     { meaning: '和谐 · 沟通 · 平衡' },
    '7':     { meaning: '内省 · 智慧 · 评估' },
    '8':     { meaning: '力量 · 前进 · 循环' },
    '9':     { meaning: '完成 · 积累 · 转化' },
    '10':    { meaning: '圆满 · 结束 · 新循环' }
};

// 大阿卡纳占星关联
const MAJOR_ASTROLOGY = {
    0:  '天王星 ♅',     1:  '水星 ☿',   2:  '月亮 ☽',
    3:  '金星 ♀',       4:  '白羊座 ♈', 5:  '金牛座 ♉',
    6:  '双子座 ♊',     7:  '巨蟹座 ♋', 8:  '狮子座 ♌',
    9:  '处女座 ♍',     10: '木星 ♃',   11: '天秤座 ♎',
    12: '海王星 ♆',     13: '天蝎座 ♏', 14: '射手座 ♐',
    15: '摩羯座 ♑',     16: '火星 ♂',   17: '水瓶座 ♒',
    18: '双鱼座 ♓',     19: '太阳 ☉',   20: '冥王星 ♇',
    21: '土星 ♄'
};

// 大阿卡纳希伯来字母关联 (传统)
const MAJOR_HEBREW = {
    0: 'א (Aleph)', 1: 'ב (Beth)', 2: 'ג (Gimel)', 3: 'ד (Daleth)',
    4: 'ה (Heh)', 5: 'ו (Vav)', 6: 'ז (Zayin)', 7: 'ח (Chet)',
    8: 'ט (Tet)', 9: 'י (Yod)', 10: 'כ (Kaph)', 11: 'ל (Lamed)',
    12: 'מ (Mem)', 13: 'נ (Nun)', 14: 'ס (Samekh)', 15: 'ע (Ayin)',
    16: 'פ (Peh)', 17: 'צ (Tsade)', 18: 'ק (Qoph)', 19: 'ר (Resh)',
    20: 'ש (Shin)', 21: 'ת (Tav)'
};

/**
 * 获取卡牌的专业元信息
 * @param {object} card
 * @returns {object}
 */
function getCardMeta(card) {
    const meta = {};

    if (card.arcana === 'major') {
        meta.type = '大阿卡纳';
        meta.typeEn = 'Major Arcana';
        meta.typeKey = 'filter-major';
        meta.astrology = MAJOR_ASTROLOGY[card.id] || '';
        meta.hebrew = MAJOR_HEBREW[card.id] || '';
        meta.numberMeaning = '关键牌 · 人生大课题';
    } else {
        const suitMeta = ELEMENT_MAP[card.suit] || {};
        meta.type = getSuitName(card.suit) + '牌组';
        meta.typeEn = card.suit.charAt(0).toUpperCase() + card.suit.slice(1);
        meta.typeKey = 'suit-' + card.suit + '-full';
        meta.element = suitMeta.element || '';
        meta.elementNature = suitMeta.nature || '';
        meta.numberMeaning = NUMBER_MEANINGS[card.number]
            ? `${card.number} · ${NUMBER_MEANINGS[card.number].meaning}`
            : '宫廷牌 · 人物原型';
    }

    return meta;
}

function getSuitName(suit) {
    const map = { wands: 'suit-wands', cups: 'suit-cups', swords: 'suit-swords', pentacles: 'suit-pentacles' };
    return typeof __ === 'function' ? __(map[suit] || '') : (map[suit] || '');
}

function getElementName(suit) {
    const map = { wands: 'elem-fire-nature', cups: 'elem-water-nature',
        swords: 'elem-air-nature', pentacles: 'elem-earth-nature' };
    return typeof __ === 'function' ? __(map[suit] || '') : (map[suit] || '');
}

/* ==================================================================
   专业 SVG 花色图标
   ================================================================== */

/**
 * 获取花色 SVG 图标 HTML
 * @param {string} suit - 'wands'|'cups'|'swords'|'pentacles'
 * @param {number} [size=32] - 图标尺寸 px
 * @param {string} [color='#c9a84c'] - 颜色
 * @returns {string} SVG HTML
 */
function getSuitSvg(suit, size = 32, color = '#c9a84c') {
    const svgs = {
        wands: `
            <svg width="${size}" height="${size}" viewBox="0 0 48 48" fill="none">
                <!-- 权杖杖身 -->
                <path d="M24 6 L24 38" stroke="${color}" stroke-width="2.8" stroke-linecap="round"/>
                <!-- 杖头火焰 -->
                <path d="M24 6 Q24 2 22 4 Q20 6 24 8 Q28 6 26 4 Q24 2 24 6Z" fill="${color}" opacity="0.9"/>
                <!-- 杖身叶片左 -->
                <path d="M24 16 Q18 14 16 18 Q20 18 24 20" stroke="${color}" stroke-width="1.5" fill="none" stroke-linecap="round"/>
                <!-- 杖身叶片右 -->
                <path d="M24 22 Q30 20 32 24 Q28 24 24 26" stroke="${color}" stroke-width="1.5" fill="none" stroke-linecap="round"/>
                <!-- 底部弧线 -->
                <path d="M20 38 Q24 42 28 38" stroke="${color}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
                <!-- 装饰光点 -->
                <circle cx="24" cy="12" r="1.5" fill="${color}" opacity="0.4"/>
                <circle cx="24" cy="30" r="1" fill="${color}" opacity="0.3"/>
            </svg>`,
        cups: `
            <svg width="${size}" height="${size}" viewBox="0 0 48 48" fill="none">
                <!-- 杯口椭圆 -->
                <ellipse cx="24" cy="14" rx="12" ry="5" stroke="${color}" stroke-width="1.8" fill="none"/>
                <!-- 杯身 -->
                <path d="M12 14 Q12 28 18 32 L18 34 Q18 36 24 36 Q30 36 30 34 L30 32 Q36 28 36 14" stroke="${color}" stroke-width="1.8" fill="none"/>
                <!-- 杯脚 -->
                <path d="M20 36 L20 40 L28 40 L28 36" stroke="${color}" stroke-width="1.8" fill="none"/>
                <!-- 底座 -->
                <path d="M16 40 L32 40" stroke="${color}" stroke-width="2.2" stroke-linecap="round"/>
                <!-- 水面波纹 -->
                <path d="M16 22 Q20 19 24 22 Q28 25 32 22" stroke="${color}" stroke-width="1" fill="none" opacity="0.5"/>
                <path d="M18 26 Q22 23 26 26 Q30 29 34 26" stroke="${color}" stroke-width="0.8" fill="none" opacity="0.3"/>
                <!-- 杯面光点 -->
                <circle cx="20" cy="16" r="1.2" fill="${color}" opacity="0.3"/>
            </svg>`,
        swords: `
            <svg width="${size}" height="${size}" viewBox="0 0 48 48" fill="none">
                <!-- 剑刃 -->
                <path d="M24 4 L24 26" stroke="${color}" stroke-width="2.2" stroke-linecap="round"/>
                <!-- 剑尖 -->
                <path d="M24 4 L22 8 L26 8 Z" fill="${color}" opacity="0.8"/>
                <!-- 护手 -->
                <path d="M14 18 L34 18" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
                <!-- 护手装饰 -->
                <circle cx="24" cy="18" r="3" stroke="${color}" stroke-width="1.2" fill="none"/>
                <!-- 剑柄 -->
                <path d="M22 18 L22 30 L26 30 L26 18" stroke="${color}" stroke-width="1.5" fill="none"/>
                <!-- 剑柄缠绕纹 -->
                <path d="M22 22 Q26 20 26 22" stroke="${color}" stroke-width="0.8" fill="none" opacity="0.5"/>
                <path d="M22 25 Q26 23 26 25" stroke="${color}" stroke-width="0.8" fill="none" opacity="0.5"/>
                <path d="M22 28 Q26 26 26 28" stroke="${color}" stroke-width="0.8" fill="none" opacity="0.5"/>
                <!-- 剑首 -->
                <circle cx="24" cy="32" r="3" stroke="${color}" stroke-width="1.5" fill="none"/>
                <circle cx="24" cy="32" r="1.2" fill="${color}" opacity="0.5"/>
                <!-- 剑锋光芒 -->
                <path d="M24 4 Q28 8 24 10 Q20 8 24 4Z" fill="${color}" opacity="0.2"/>
            </svg>`,
        pentacles: `
            <svg width="${size}" height="${size}" viewBox="0 0 48 48" fill="none">
                <!-- 外圈 -->
                <circle cx="24" cy="24" r="16" stroke="${color}" stroke-width="2" fill="none"/>
                <!-- 内圈 -->
                <circle cx="24" cy="24" r="13" stroke="${color}" stroke-width="0.8" fill="none" opacity="0.4"/>
                <!-- 五角星 -->
                <path d="M24 8 L27.2 16.4 L36.2 16.4 L29 21.6 L31.6 30 L24 25 L16.4 30 L19 21.6 L11.8 16.4 L20.8 16.4 Z"
                    stroke="${color}" stroke-width="1.5" fill="none" stroke-linejoin="round"/>
                <!-- 星星内接小圆 -->
                <circle cx="24" cy="24" r="4" stroke="${color}" stroke-width="0.6" fill="none" opacity="0.3"/>
                <!-- 四角装饰点 -->
                <circle cx="24" cy="8" r="1.5" fill="${color}" opacity="0.4"/>
                <circle cx="40" cy="24" r="1.5" fill="${color}" opacity="0.4"/>
                <circle cx="24" cy="40" r="1.5" fill="${color}" opacity="0.4"/>
                <circle cx="8" cy="24" r="1.5" fill="${color}" opacity="0.4"/>
                <!-- 星币中心 -->
                <circle cx="24" cy="24" r="1.8" fill="${color}" opacity="0.3"/>
            </svg>`
    };

    return svgs[suit] || '';
}

/* ---------- 辅助函数 ---------- */

// 计算卡牌图片路径
function getCardImageUrl(card) {
    if (card.arcana === 'major') {
        const num = String(card.id).padStart(2, '0');
        return `images/m${num}.jpg`;
    }
    // 小阿卡纳：计算花色内序号 (1-14)
    const suitPrefix = { wands: 'w', cups: 'c', swords: 's', pentacles: 'p' };
    const prefix = suitPrefix[card.suit] || '';
    const suitStarts = { wands: 22, cups: 36, swords: 50, pentacles: 64 };
    const pos = card.id - (suitStarts[card.suit] || 0) + 1;
    const num = String(pos).padStart(2, '0');
    return `images/${prefix}${num}.jpg`;
}

// 按ID获取牌
function getCardById(id) {
    return TAROT_CARDS.find(c => c.id === id);
}

// 按名称搜索牌
function findCardsByName(keyword) {
    const kw = keyword.toLowerCase();
    return TAROT_CARDS.filter(c =>
        c.name.includes(kw) || c.nameEn.toLowerCase().includes(kw)
    );
}

// 获取分组
function getCardsByArcana(arcana) {
    return TAROT_CARDS.filter(c => c.arcana === arcana);
}

function getCardsBySuit(suit) {
    return TAROT_CARDS.filter(c => c.suit === suit);
}
