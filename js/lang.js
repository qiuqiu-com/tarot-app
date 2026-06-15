/* ============================================================
   多语言翻译数据 — 英/俄
   结构: LANG[cardId] = { en: {...}, ru: {...} }
   ============================================================ */

const LANG = {
  // ==================================================================
  // 大阿卡纳
  // ==================================================================
  0: {
    en: { keywords: ['Beginnings', 'Adventure', 'Innocence', 'Spontaneity'],
      meaningUp: 'A new journey beckons. Step forward with faith and an open heart, leaving the familiar behind. Trust the universe to guide your path.',
      meaningRev: 'Reckless action, naivety, or avoiding responsibility. Think before you leap — not every risk is worth taking.' },
    ru: { name: 'Шут', keywords: ['Начало', 'Приключение', 'Невинность', 'Спонтанность'],
      meaningUp: 'Новое путешествие зовёт. Шагни вперёд с верой и открытым сердцем, оставив привычное позади. Доверься вселенной.',
      meaningRev: 'Безрассудство, наивность, избегание ответственности. Думай, прежде чем прыгать — не каждый риск оправдан.' }
  },
  1: {
    en: { keywords: ['Power', 'Skill', 'Focus', 'Willpower'],
      meaningUp: 'You have all the tools you need. Channel your will and transform vision into reality. The universe aligns with your focused intent.',
      meaningRev: 'Manipulation, untapped talent, or lack of direction. Your gifts are being wasted — realign with your true purpose.' },
    ru: { name: 'Маг', keywords: ['Сила', 'Мастерство', 'Фокус', 'Воля'],
      meaningUp: 'У тебя есть все необходимые инструменты. Направь волю и преврати видение в реальность. Вселенная на твоей стороне.',
      meaningRev: 'Манипуляция, нереализованный талант, отсутствие направления. Твои дары растрачиваются впустую.' }
  },
  2: {
    en: { keywords: ['Intuition', 'Mystery', 'Inner knowledge', 'Subconscious'],
      meaningUp: 'Be still and listen to your inner voice. The answers you seek lie not in the outer world but deep within. Trust your intuition.',
      meaningRev: 'Ignoring intuition, secrets withheld, or superficial knowledge. The truth is hidden — look deeper beneath the surface.' },
    ru: { name: 'Верховная Жрица', keywords: ['Интуиция', 'Тайна', 'Внутреннее знание', 'Подсознание'],
      meaningUp: 'Замолчи и прислушайся к внутреннему голосу. Ответы не снаружи — они глубоко внутри. Доверяй интуиции.',
      meaningRev: 'Игнорирование интуиции, скрытые тайны, поверхностное знание. Истина скрыта — смотри глубже.' }
  },
  3: {
    en: { keywords: ['Abundance', 'Nurturing', 'Nature', 'Fertility'],
      meaningUp: 'A season of growth and abundance is upon you. Creativity, wealth, and love flourish. Nurture yourself and those around you.',
      meaningRev: 'Creative block, dependence on others, or overindulgence. You may be neglecting your own needs — find balance.' },
    ru: { name: 'Императрица', keywords: ['Изобилие', 'Забота', 'Природа', 'Плодородие'],
      meaningUp: 'Сезон роста и изобилия наступил. Творчество, богатство и любовь процветают. Заботься о себе и близких.',
      meaningRev: 'Творческий кризис, зависимость, излишества. Возможно, ты пренебрегаешь своими потребностями.' }
  },
  4: {
    en: { keywords: ['Authority', 'Structure', 'Stability', 'Protection'],
      meaningUp: 'Establish order and take command. Use discipline and reason to lead. Be firm, reliable, and accountable — the foundation you build will last.',
      meaningRev: 'Tyranny, rigidity, or lack of discipline. Power may be misused. Find the balance between authority and compassion.' },
    ru: { name: 'Император', keywords: ['Власть', 'Структура', 'Стабильность', 'Защита'],
      meaningUp: 'Установи порядок и возьми командование. Используй дисциплину и разум. Фундамент, который ты построишь, будет прочным.',
      meaningRev: 'Тирания, жёсткость, отсутствие дисциплины. Власть может быть использована во вред.' }
  },
  5: {
    en: { keywords: ['Tradition', 'Conformity', 'Mentorship', 'Wisdom'],
      meaningUp: 'Seek guidance from established wisdom. Trust in tradition and learn from those who walked before you. Spiritual knowledge awaits.',
      meaningRev: 'Rebellion against convention, questioning authority, or independence. Time to find your own truth beyond dogma.' },
    ru: { name: 'Верховный Жрец', keywords: ['Традиция', 'Наставничество', 'Мудрость', 'Духовность'],
      meaningUp: 'Ищи руководство в устоявшейся мудрости. Доверяй традициям и учись у тех, кто прошёл этот путь до тебя.',
      meaningRev: 'Бунт против условностей, сомнение в авторитетах. Пора найти свою истину за пределами догм.' }
  },
  6: {
    en: { keywords: ['Love', 'Harmony', 'Choices', 'Values'],
      meaningUp: 'A significant choice stands before you. Follow your heart, not your head. This card also speaks of deep soul connections.',
      meaningRev: 'Imbalance, broken relationships, or poor decisions. A values conflict may be at play — be honest with yourself.' },
    ru: { name: 'Влюблённые', keywords: ['Любовь', 'Гармония', 'Выбор', 'Ценности'],
      meaningUp: 'Значительный выбор стоит перед тобой. Следуй сердцу, не разуму. Эта карта говорит о глубоких связях.',
      meaningRev: 'Дисбаланс, разрыв отношений, неверные решения. Будь честен с самим собой.' }
  },
  7: {
    en: { keywords: ['Victory', 'Willpower', 'Determination', 'Control'],
      meaningUp: 'Through focus and self-discipline you will triumph. Harness opposing forces and direct them toward your goal. Onward!',
      meaningRev: 'Lack of direction, aggression, or loss of control. You may be charging ahead without a clear plan — pause and realign.' },
    ru: { name: 'Колесница', keywords: ['Победа', 'Сила воли', 'Решимость', 'Контроль'],
      meaningUp: 'Через сосредоточенность и самодисциплину ты одержишь победу. Направь силы к своей цели. Вперёд!',
      meaningRev: 'Отсутствие направления, агрессия, потеря контроля. Остановись и перестройся.' }
  },
  8: {
    en: { keywords: ['Courage', 'Inner strength', 'Compassion', 'Patience'],
      meaningUp: 'True strength comes from within — gentle yet unyielding. Face challenges with patience and empathy, not brute force.',
      meaningRev: 'Self-doubt, weakness, or fear taking over. You are stronger than you believe — reconnect with your inner courage.' },
    ru: { name: 'Сила', keywords: ['Мужество', 'Внутренняя сила', 'Сострадание', 'Терпение'],
      meaningUp: 'Истинная сила идёт изнутри — мягкая, но несгибаемая. Встречай вызовы с терпением и сочувствием.',
      meaningRev: 'Неуверенность, слабость, страх. Ты сильнее, чем думаешь — восстанови связь с внутренней смелостью.' }
  },
  9: {
    en: { keywords: ['Solitude', 'Introspection', 'Guidance', 'Inner light'],
      meaningUp: 'Withdraw from the noise of the world. Solitude is not loneliness — it is the search for deeper truth. The light within guides you.',
      meaningRev: 'Isolation, refusal of help, or losing your way. You may have withdrawn too far — seek connection again.' },
    ru: { name: 'Отшельник', keywords: ['Уединение', 'Интроспекция', 'Мудрость', 'Внутренний свет'],
      meaningUp: 'Отойди от шума мира. Уединение — не одиночество, а поиск глубинной истины. Внутренний свет ведёт тебя.',
      meaningRev: 'Изоляция, отказ от помощи, потеря пути. Ты ушёл слишком далеко — вернись к людям.' }
  },
  10: {
    en: { keywords: ['Change', 'Cycles', 'Fate', 'Opportunity'],
      meaningUp: 'The wheel turns. Change is inevitable — embrace it. Every ending makes way for a new beginning. Fortune favors the bold.',
      meaningRev: 'Bad luck, resistance to change, or feeling stuck. The wheel will turn again — patience, your moment will come.' },
    ru: { name: 'Колесо Фортуны', keywords: ['Перемены', 'Циклы', 'Судьба', 'Возможность'],
      meaningUp: 'Колесо вращается. Перемены неизбежны — прими их. Каждый конец открывает путь новому началу.',
      meaningRev: 'Неудача, сопротивление переменам. Колесо повернётся вновь — наберись терпения.' }
  },
  11: {
    en: { keywords: ['Justice', 'Truth', 'Fairness', 'Accountability'],
      meaningUp: 'Your decisions will have fair consequences. Be honest with yourself and others. The truth will come to light.',
      meaningRev: 'Injustice, dishonesty, or legal trouble. You may be avoiding accountability — examine your conscience.' },
    ru: { name: 'Справедливость', keywords: ['Правосудие', 'Истина', 'Честность', 'Ответственность'],
      meaningUp: 'Твои решения приведут к справедливым последствиям. Будь честен с собой и другими. Истина выйдет на свет.',
      meaningRev: 'Несправедливость, обман, юридические проблемы. Изучи свою совесть.' }
  },
  12: {
    en: { keywords: ['Surrender', 'Pause', 'New perspective', 'Sacrifice'],
      meaningUp: 'Pause and see things from a different angle. This stillness holds profound wisdom. What appears as stagnation is transformation.',
      meaningRev: 'Stalling, resisting necessary change, or pointless sacrifice. Let go of what no longer serves you.' },
    ru: { name: 'Повешенный', keywords: ['Приостановка', 'Жертва', 'Новый взгляд', 'Отпускание'],
      meaningUp: 'Остановись и посмотри на вещи под другим углом. В этой неподвижности скрыта глубокая мудрость.',
      meaningRev: 'Промедление, сопротивление переменам, напрасная жертва. Отпусти то, что больше не служит тебе.' }
  },
  13: {
    en: { keywords: ['Endings', 'Transformation', 'Release', 'Renewal'],
      meaningUp: 'The old must die for the new to be born. Do not fear change — death is merely transformation. Clear space for rebirth.',
      meaningRev: 'Resisting change, stagnation, or fear of endings. Clinging to the past only prolongs the pain — let go.' },
    ru: { name: 'Смерть', keywords: ['Конец', 'Трансформация', 'Освобождение', 'Обновление'],
      meaningUp: 'Старое должно умереть, чтобы родилось новое. Не бойся перемен — смерть это лишь преображение.',
      meaningRev: 'Сопротивление переменам, застой. Цепляться за прошлое — только продлевать боль.' }
  },
  14: {
    en: { keywords: ['Balance', 'Moderation', 'Patience', 'Harmony'],
      meaningUp: 'Find the middle path. Create balance and harmony in your life. Blend opposing forces into a more complete whole.',
      meaningRev: 'Extremes, imbalance, or impatience. You may be overdoing something. Restore equilibrium mind-body-spirit.' },
    ru: { name: 'Умеренность', keywords: ['Баланс', 'Умеренность', 'Терпение', 'Гармония'],
      meaningUp: 'Найди срединный путь. Создай баланс и гармонию в жизни. Слей противоположности в единое целое.',
      meaningRev: 'Крайности, дисбаланс, нетерпение. Восстанови равновесие тела, ума и духа.' }
  },
  15: {
    en: { keywords: ['Bondage', 'Materialism', 'Addiction', 'Shadow self'],
      meaningUp: 'Examine what enslaves you — addiction, greed, or toxic patterns. The chains are an illusion; you have the power to break free.',
      meaningRev: 'Awakening, release, or overcoming addiction. You are recognizing your limitations and beginning to break free.' },
    ru: { name: 'Дьявол', keywords: ['Рабство', 'Материализм', 'Зависимость', 'Тень'],
      meaningUp: 'Изучи то, что порабощает тебя — зависимости, жадность, токсичные шаблоны. Цепи иллюзорны.',
      meaningRev: 'Пробуждение, освобождение от зависимостей. Ты осознаёшь свои ограничения и начинаешь освобождаться.' }
  },
  16: {
    en: { keywords: ['Upheaval', 'Collapse', 'Awakening', 'Revelation'],
      meaningUp: 'Sudden destruction of old structures. What seems like disaster is actually liberation — the truth sets you free.',
      meaningRev: 'Avoiding disaster, resisting necessary change. The collapse may be delayed but not avoided — rebuild on solid ground.' },
    ru: { name: 'Башня', keywords: ['Разрушение', 'Потрясение', 'Пробуждение', 'Откровение'],
      meaningUp: 'Внезапное разрушение старых структур. То, что кажется катастрофой — на самом деле освобождение.',
      meaningRev: 'Избегание катастрофы, сопротивление переменам. Разрушение может быть отсрочено.' }
  },
  17: {
    en: { keywords: ['Hope', 'Inspiration', 'Serenity', 'Healing'],
      meaningUp: 'A light shines in the darkness. Peace and hope are restored. Trust in the universe — it is guiding you toward your true path.',
      meaningRev: 'Despair, loss of faith, creative drought. The stars are still there, hidden by clouds. Reconnect with your inner light.' },
    ru: { name: 'Звезда', keywords: ['Надежда', 'Вдохновение', 'Спокойствие', 'Исцеление'],
      meaningUp: 'Свет сияет во тьме. Мир и надежда возвращаются. Доверься вселенной — она ведёт тебя.',
      meaningRev: 'Отчаяние, потеря веры, творческий кризис. Звёзды всё ещё там, скрытые облаками.' }
  },
  18: {
    en: { keywords: ['Illusion', 'Fear', 'Subconscious', 'Uncertainty'],
      meaningUp: 'Things are not as they seem. Fear and illusion cloud your judgment. Trust your intuition but do not rush to conclusions.',
      meaningRev: 'Fear dissolving, confusion clearing, truth emerging. The long night is ending — what was hidden comes to light.' },
    ru: { name: 'Луна', keywords: ['Иллюзия', 'Страх', 'Подсознание', 'Неопределённость'],
      meaningUp: 'Всё не так, как кажется. Страх и иллюзии затуманивают суждение. Доверяй интуиции, но не торопи выводы.',
      meaningRev: 'Страх рассеивается, путаница проясняется. Долгая ночь заканчивается.' }
  },
  19: {
    en: { keywords: ['Joy', 'Success', 'Vitality', 'Clarity'],
      meaningUp: 'The sun is shining! Joy, success, and fulfillment are here. Everything becomes clear. Celebrate this radiant moment.',
      meaningRev: 'Temporary setback, diminished enthusiasm, or delayed success. The sun will shine again — keep faith.' },
    ru: { name: 'Солнце', keywords: ['Радость', 'Успех', 'Энергия', 'Ясность'],
      meaningUp: 'Солнце сияет! Радость, успех и удовлетворение здесь. Всё становится ясным. Наслаждайся этим моментом.',
      meaningRev: 'Временная неудача, упадок энтузиазма. Солнце снова засияет — сохраняй веру.' }
  },
  20: {
    en: { keywords: ['Judgment', 'Rebirth', 'Evaluation', 'Calling'],
      meaningUp: 'A moment of awakening. You are being called to fulfill a higher purpose. Reflect on your journey and rise renewed.',
      meaningRev: 'Self-doubt, refusing the call, or fear of judgment. Do not ignore the inner calling — it will not disappear.' },
    ru: { name: 'Суд', keywords: ['Возрождение', 'Пробуждение', 'Оценка', 'Призвание'],
      meaningUp: 'Момент пробуждения. Ты призван исполнить высшее предназначение. Поднимись обновлённым.',
      meaningRev: 'Неуверенность, отказ от призвания, страх осуждения. Не игнорируй внутренний зов.' }
  },
  21: {
    en: { keywords: ['Completion', 'Wholeness', 'Achievement', 'Travel'],
      meaningUp: 'The cycle is complete. You have reached your goal and achieved fulfillment. Celebrate — and prepare for the next great journey.',
      meaningRev: 'Incompletion, delays, or lack of closure. The final piece has not yet fallen into place. Patience — it will come.' },
    ru: { name: 'Мир', keywords: ['Завершение', 'Целостность', 'Достижение', 'Путешествие'],
      meaningUp: 'Цикл завершён. Ты достиг цели и обрёл полноту. Отпразднуй — и готовься к следующему великому путешествию.',
      meaningRev: 'Незавершённость, задержки. Последний кусочек пазла ещё не встал на место. Терпение.' }
  },

  // ==================================================================
  // 权杖 Wands
  // ==================================================================
  22: {
    en: { keywords: ['New beginning', 'Inspiration', 'Creative spark', 'Passion'],
      meaningUp: 'A spark of inspiration has been ignited. A new venture, creative project, or passionate endeavor awaits. Seize the moment.',
      meaningRev: 'Creative block, missed opportunity, or lack of motivation. The spark has died — find what reignites your fire.' },
    ru: { name: 'Туз Жезлов', keywords: ['Новое начало', 'Вдохновение', 'Творчество', 'Страсть'],
      meaningUp: 'Искра вдохновения зажжена. Новое предприятие, творческий проект или страстное начинание ждёт тебя.',
      meaningRev: 'Творческий кризис, упущенная возможность. Искра погасла — найди, что разожжёт твой огонь.' }
  },
  23: {
    en: { keywords: ['Planning', 'Future', 'Discovery', 'Expansion'],
      meaningUp: 'You stand at a crossroads surveying your domain. The foundation is laid — now decide your next move. Dream big.',
      meaningRev: 'Fear of the unknown, stalled plans, or lack of vision. Do not let fear limit your horizon.' },
    ru: { name: 'Двойка Жезлов', keywords: ['Планирование', 'Будущее', 'Открытие', 'Расширение'],
      meaningUp: 'Ты стоишь на перекрёстке, оглядывая свои владения. Фундамент заложен — решай, куда двигаться дальше.',
      meaningRev: 'Страх неизвестности, остановленные планы. Не позволяй страху ограничивать твой горизонт.' }
  },
  24: {
    en: { keywords: ['Foresight', 'Exploration', 'Commerce', 'Cooperation'],
      meaningUp: 'Your plans begin to bear fruit. Look to the horizon — collaboration and exploration will bring abundance. Keep going.',
      meaningRev: 'Slow progress, lack of foresight, or partnership issues. Adjust your strategy and exercise patience.' },
    ru: { name: 'Тройка Жезлов', keywords: ['Предвидение', 'Исследование', 'Сотрудничество', 'Рост'],
      meaningUp: 'Твои планы начинают приносить плоды. Сотрудничество и исследования приведут к изобилию.',
      meaningRev: 'Медленный прогресс, отсутствие предвидения. Скорректируй стратегию.' }
  },
  25: {
    en: { keywords: ['Celebration', 'Harmony', 'Home', 'Stability'],
      meaningUp: 'A time of celebration and joy! Harmony in the home, stability in work. Share this happiness with those you love.',
      meaningRev: 'Unstable foundations, canceled celebrations, or lack of belonging. Something is disrupting your peace.' },
    ru: { name: 'Четвёрка Жезлов', keywords: ['Праздник', 'Гармония', 'Дом', 'Стабильность'],
      meaningUp: 'Время праздника и радости! Гармония в доме, стабильность в работе. Раздели счастье с близкими.',
      meaningRev: 'Нестабильный фундамент, отменённые праздники. Что-то нарушает твой покой.' }
  },
  26: {
    en: { keywords: ['Competition', 'Conflict', 'Tension', 'Diversity'],
      meaningUp: 'Fierce competition and clashing opinions create pressure. This is healthy friction that forges better solutions.',
      meaningRev: 'Conflict resolution, avoiding confrontation, or finding common ground. Tensions are easing.' },
    ru: { name: 'Пятёрка Жезлов', keywords: ['Конкуренция', 'Конфликт', 'Напряжение', 'Соревнование'],
      meaningUp: 'Жёсткая конкуренция и столкновение мнений создают давление. Это здоровая напряжённость для поиска решений.',
      meaningRev: 'Разрешение конфликта, избегание confrontation. Напряжение спадает.' }
  },
  27: {
    en: { keywords: ['Victory', 'Recognition', 'Praise', 'Leadership'],
      meaningUp: 'Triumph! Your achievements are recognized and celebrated. Enjoy this moment of glory — you have earned it.',
      meaningRev: 'Failure, lack of recognition, or arrogance. Do not let others\' opinions diminish your self-worth.' },
    ru: { name: 'Шестёрка Жезлов', keywords: ['Победа', 'Признание', 'Похвала', 'Лидерство'],
      meaningUp: 'Триумф! Твои достижения признаны и отмечены. Наслаждайся этим моментом славы — ты заслужил его.',
      meaningRev: 'Неудача, отсутствие признания, высокомерие. Не позволяй чужому мнению влиять на твою самооценку.' }
  },
  28: {
    en: { keywords: ['Defense', 'Standing ground', 'Courage', 'Challenge'],
      meaningUp: 'Hold your ground! Though facing multiple challenges, you have every reason to persevere. Stand firm in your convictions.',
      meaningRev: 'Overwhelmed, giving up, or losing ground. You may feel outnumbered — reassess whether this battle is worth fighting.' },
    ru: { name: 'Семёрка Жезлов', keywords: ['Защита', 'Стойкость', 'Мужество', 'Вызов'],
      meaningUp: 'Держись! Несмотря на множество вызовов, у тебя есть все причины стоять на своём.',
      meaningRev: 'Перегруженность, отступление. Возможно, эта битва не стоит усилий.' }
  },
  29: {
    en: { keywords: ['Speed', 'Progress', 'News', 'Action'],
      meaningUp: 'Things move quickly! Events accelerate beyond expectation. Good news is on its way — ride this wave of momentum.',
      meaningRev: 'Delays, miscommunication, or stalled plans. Abrupt slowdown after rapid progress — check for overlooked details.' },
    ru: { name: 'Восьмёрка Жезлов', keywords: ['Скорость', 'Прогресс', 'Новости', 'Действие'],
      meaningUp: 'Всё движется быстро! События ускоряются. Хорошие новости в пути — лови волну.',
      meaningRev: 'Задержки, недопонимание, остановленные планы. Проверь детали.' }
  },
  30: {
    en: { keywords: ['Resilience', 'Persistence', 'Boundaries', 'Defense'],
      meaningUp: 'You have come so far — keep going! Though weary, your spirit remains unbroken. Guard your boundaries.',
      meaningRev: 'Exhaustion, giving up, or over-defensiveness. You may have reached your limit — rest is not surrender.' },
    ru: { name: 'Девятка Жезлов', keywords: ['Стойкость', 'Упорство', 'Границы', 'Защита'],
      meaningUp: 'Ты прошёл так далеко — продолжай! Устал, но дух несломлен. Защищай свои границы.',
      meaningRev: 'Истощение, капитуляция. Ты достиг предела — отдых не поражение.' }
  },
  31: {
    en: { keywords: ['Burden', 'Pressure', 'Responsibility', 'Overload'],
      meaningUp: 'You carry too many responsibilities on your shoulders. Delegate what you can and focus on what truly matters.',
      meaningRev: 'Releasing burdens, delegating, or letting go. You are learning you do not have to do everything alone.' },
    ru: { name: 'Десятка Жезлов', keywords: ['Бремя', 'Давление', 'Ответственность', 'Перегрузка'],
      meaningUp: 'Ты несёшь слишком много обязанностей. Делегируй и сосредоточься на главном.',
      meaningRev: 'Освобождение от бремени, делегирование. Ты учишься не делать всё в одиночку.' }
  },
  32: {
    en: { keywords: ['Exploration', 'Enthusiasm', 'Messenger', 'Freedom'],
      meaningUp: 'A youthful, curious energy enters your life. New消息 or opportunities approach. Stay open and adventurous.',
      meaningRev: 'Lack of direction, immature behavior, or disappointing news. Cultivate focus and follow through.' },
    ru: { name: 'Паж Жезлов', keywords: ['Исследование', 'Энтузиазм', 'Новости', 'Свобода'],
      meaningUp: 'Юная любознательная энергия входит в твою жизнь. Новые возможности приближаются.',
      meaningRev: 'Отсутствие направления, незрелость. Развивай сосредоточенность.' }
  },
  33: {
    en: { keywords: ['Adventure', 'Impulse', 'Charm', 'Pursuit'],
      meaningUp: 'Charge forward with passion! Confident, charismatic, and action-oriented. Chase your dreams with bold enthusiasm.',
      meaningRev: 'Recklessness, burnout, or haste. Passion without planning leads to collapse — pace yourself.' },
    ru: { name: 'Рыцарь Жезлов', keywords: ['Приключение', 'Импульс', 'Харизма', 'Стремление'],
      meaningUp: 'Рвись вперёд со страстью! Уверенный, харизматичный, ориентированный на действие.',
      meaningRev: 'Безрассудство, выгорание, спешка. Страсть без плана ведёт к краху.' }
  },
  34: {
    en: { keywords: ['Confidence', 'Warmth', 'Determination', 'Charisma'],
      meaningUp: 'Confident and charismatic feminine energy. You know your worth and inspire others with your warmth and courage.',
      meaningRev: 'Jealousy, possessiveness, or lack of confidence. Your light may be dimmed — reclaim your self-assurance.' },
    ru: { name: 'Королева Жезлов', keywords: ['Уверенность', 'Теплота', 'Решимость', 'Харизма'],
      meaningUp: 'Уверенная и харизматичная женская энергия. Ты знаешь себе цену и вдохновляешь других.',
      meaningRev: 'Ревность, собственничество, неуверенность. Верни свою самооценку.' }
  },
  35: {
    en: { keywords: ['Leadership', 'Vision', 'Entrepreneurship', 'Honor'],
      meaningUp: 'A natural-born leader. Bold, visionary, and inspiring. Take charge — your decisions will guide everyone to success.',
      meaningRev: 'Tyranny, lack of vision, or misuse of power. Leadership without humility breeds resentment.' },
    ru: { name: 'Король Жезлов', keywords: ['Лидерство', 'Видение', 'Предпринимательство', 'Честь'],
      meaningUp: 'Прирождённый лидер. Смелый, дальновидный, вдохновляющий. Возьми командование на себя.',
      meaningRev: 'Тирания, отсутствие видения, злоупотребление властью.' }
  },

  // ==================================================================
  // 圣杯 Cups
  // ==================================================================
  36: {
    en: { keywords: ['New love', 'Emotion', 'Intuition', 'Joy'],
      meaningUp: 'Love overflows from your heart. A new relationship, deepened friendship, or self-love awakens. Open your heart.',
      meaningRev: 'Emotional emptiness, blocked love, or suppressed feelings. Your heart is closed — learn to love yourself first.' },
    ru: { name: 'Туз Кубков', keywords: ['Новая любовь', 'Эмоция', 'Интуиция', 'Радость'],
      meaningUp: 'Любовь переполняет твоё сердце. Новые отношения, deepened дружба или самолюбовь пробуждаются.',
      meaningRev: 'Эмоциональная пустота, блокированная любовь. Твоё сердце закрыто.' }
  },
  37: {
    en: { keywords: ['Connection', 'Intimacy', 'Partnership', 'Unity'],
      meaningUp: 'A deep connection forms between two people. Equal, respectful, and sincere — whether in love or friendship.',
      meaningRev: 'Broken relationship, imbalance, or poor communication. The bond is strained — both must work to heal it.' },
    ru: { name: 'Двойка Кубков', keywords: ['Связь', 'Близость', 'Партнёрство', 'Единство'],
      meaningUp: 'Глубокая связь формируется между двумя людьми. Равная, уважительная, искренняя.',
      meaningRev: 'Разрыв, дисбаланс, нарушение коммуникации. Оба должны работать над исцелением.' }
  },
  38: {
    en: { keywords: ['Friendship', 'Celebration', 'Creativity', 'Joy'],
      meaningUp: 'Celebrate with friends! This is a time of joy, creativity, and community. Shared happiness multiplies.',
      meaningRev: 'Overindulgence, social isolation, or gossip. Too much of a good thing — maintain moderation.' },
    ru: { name: 'Тройка Кубков', keywords: ['Дружба', 'Праздник', 'Творчество', 'Радость'],
      meaningUp: 'Празднуй с друзьями! Время радости, творчества и единения. Разделённое счастье умножается.',
      meaningRev: 'Излишества, социальная изоляция, сплетни. Соблюдай меру.' }
  },
  39: {
    en: { keywords: ['Meditation', 'Contemplation', 'Discontent', 'Opportunity'],
      meaningUp: 'You are distracted and dissatisfied with what is before you. But a new opportunity approaches — look up from your reverie.',
      meaningRev: 'Clarity, action, or seizing an opportunity. You emerge from apathy and engage with the world again.' },
    ru: { name: 'Четвёрка Кубков', keywords: ['Медитация', 'Неудовлетворённость', 'Апатия', 'Возможность'],
      meaningUp: 'Ты рассеян и недоволен тем, что перед тобой. Но новая возможность приближается — подними голову.',
      meaningRev: 'Ясность, действие, использование шанса.' }
  },
  40: {
    en: { keywords: ['Loss', 'Grief', 'Regret', 'Release'],
      meaningUp: 'You dwell on loss, staring at what has fallen. But turn around — there is still much worth cherishing behind you.',
      meaningRev: 'Acceptance, moving on, forgiveness. You begin to heal and see what remains rather than what is lost.' },
    ru: { name: 'Пятёрка Кубков', keywords: ['Потеря', 'Скорбь', 'Сожаление', 'Прощание'],
      meaningUp: 'Ты застыл в скорби, глядя на упавшее. Но обернись — позади ещё много ценного.',
      meaningRev: 'Принятие, прощение, движение вперёд.' }
  },
  41: {
    en: { keywords: ['Nostalgia', 'Memories', 'Innocence', 'Gift'],
      meaningUp: 'Warm memories rise from the past. A reunion with an old friend, a heartfelt gift, or simple pure joy.',
      meaningRev: 'Stuck in the past, unable to move forward. Living in memories prevents you from creating new ones.' },
    ru: { name: 'Шестёрка Кубков', keywords: ['Ностальгия', 'Воспоминания', 'Невинность', 'Подарок'],
      meaningUp: 'Тёплые воспоминания из прошлого. Встреча со старым другом, душевный подарок, чистая радость.',
      meaningRev: 'Застревание в прошлом, неспособность двигаться вперёд.' }
  },
  42: {
    en: { keywords: ['Fantasy', 'Choices', 'Illusion', 'Daydream'],
      meaningUp: 'Multiple possibilities float before you like dreams. Not everything that glitters is gold — distinguish fantasy from reality.',
      meaningRev: 'Focus, decisiveness, or disillusionment. The daydream fades — time to get grounded.' },
    ru: { name: 'Семёрка Кубков', keywords: ['Фантазия', 'Выбор', 'Иллюзия', 'Мечты'],
      meaningUp: 'Множество возможностей плывут перед тобой как сны. Отличи фантазию от реальности.',
      meaningRev: 'Сосредоточенность, решительность, отрезвление.' }
  },
  43: {
    en: { keywords: ['Departure', 'Letting go', 'Search for truth', 'Transition'],
      meaningUp: 'You leave behind what no longer fulfills you. Though difficult, you know a deeper truth awaits. Trust this departure.',
      meaningRev: 'Hesitation, fear of leaving, or stagnation. You know it is time to go — courage is all that is missing.' },
    ru: { name: 'Восьмёрка Кубков', keywords: ['Уход', 'Отпускание', 'Поиск истины', 'Переход'],
      meaningUp: 'Ты оставляешь позади то, что больше не удовлетворяет. Трудный, но необходимый уход.',
      meaningRev: 'Колебание, страх ухода, застой. Тебе не хватает только смелости.' }
  },
  44: {
    en: { keywords: ['Contentment', 'Wish fulfillment', 'Satisfaction', 'Confidence'],
      meaningUp: 'Often called the "wish card"! Your desires are manifesting. Enjoy this moment of fulfillment and self-satisfaction.',
      meaningRev: 'Discontent, unfulfilled wishes, or materialism. Outer success masks inner emptiness — examine what truly satisfies you.' },
    ru: { name: 'Девятка Кубков', keywords: ['Удовлетворение', 'Исполнение желаний', 'Счастье', 'Уверенность'],
      meaningUp: 'Часто называют «картой желаний»! Твои мечты сбываются. Наслаждайся моментом.',
      meaningRev: 'Неудовлетворённость, материализм. Внешний успех скрывает внутреннюю пустоту.' }
  },
  45: {
    en: { keywords: ['Happiness', 'Harmony', 'Family', 'Fulfillment'],
      meaningUp: 'Complete emotional fulfillment! Family harmony, domestic bliss, and lasting happiness. Share this joy with those you love.',
      meaningRev: 'Family conflict, broken dreams, or disharmony. The ideal is disrupted — communication and patience are needed.' },
    ru: { name: 'Десятка Кубков', keywords: ['Счастье', 'Гармония', 'Семья', 'Благополучие'],
      meaningUp: 'Полное эмоциональное удовлетворение! Семейная гармония и домашнее счастье.',
      meaningRev: 'Семейный конфликт, разбитые мечты. Необходимы общение и терпение.' }
  },
  46: {
    en: { keywords: ['Creativity', 'Sensitivity', 'Intuition', 'Invitation'],
      meaningUp: 'Gentle inspiration stirs within. Stay sensitive and open — a creative idea or emotional invitation may arrive.',
      meaningRev: 'Emotional immaturity, creative block, or escapism. Your imagination may have drifted too far from reality.' },
    ru: { name: 'Паж Кубков', keywords: ['Творчество', 'Чувствительность', 'Интуиция', 'Приглашение'],
      meaningUp: 'Нежное вдохновение пробуждается внутри. Оставайся открытым — творческая идея уже в пути.',
      meaningRev: 'Эмоциональная незрелость, творческий кризис. Воображение ушло слишком далеко от реальности.' }
  },
  47: {
    en: { keywords: ['Romance', 'Pursuit', 'Dreamer', 'Invitation'],
      meaningUp: 'The romantic knight approaches! Carrying emotions and dreams, he brings a romantic invitation or creative opportunity.',
      meaningRev: 'Disillusionment, unrealistic expectations, or emotional deception. Not every promise is genuine.' },
    ru: { name: 'Рыцарь Кубков', keywords: ['Романтика', 'Стремление', 'Мечта', 'Приглашение'],
      meaningUp: 'Романтический рыцарь приближается! Он несёт эмоции, мечты и романтическое приглашение.',
      meaningRev: 'Разочарование, нереалистичные ожидания. Не каждое обещание искренне.' }
  },
  48: {
    en: { keywords: ['Compassion', 'Intuition', 'Warmth', 'Healing'],
      meaningUp: 'Gentle and empathetic feminine energy. Your intuition and compassion allow you to deeply understand and heal others.',
      meaningRev: 'Over-sensitivity, emotional overwhelm, or self-sacrifice. You absorb others\' pain — protect your own boundaries.' },
    ru: { name: 'Королева Кубков', keywords: ['Сострадание', 'Интуиция', 'Теплота', 'Исцеление'],
      meaningUp: 'Нежная и чуткая женская энергия. Твоя интуиция и сострадание исцеляют других.',
      meaningRev: 'Сверхчувствительность, эмоциональное истощение. Защищай свои границы.' }
  },
  49: {
    en: { keywords: ['Emotional balance', 'Wisdom', 'Maturity', 'Compassion'],
      meaningUp: 'A master of emotions. You possess deep inner wisdom while maintaining calm composure. Lead with heart and mind in harmony.',
      meaningRev: 'Emotional repression, volatility, or coldness. Your emotions are suppressed — learn healthy expression.' },
    ru: { name: 'Король Кубков', keywords: ['Эмоциональный баланс', 'Мудрость', 'Зрелость', 'Сострадание'],
      meaningUp: 'Мастер эмоций. Ты обладаешь глубокой мудростью, сохраняя спокойствие. Веди в гармонии сердца и ума.',
      meaningRev: 'Эмоциональная подавленность, холодность. Учись здоровому выражению чувств.' }
  },

  // ==================================================================
  // 宝剑 Swords
  // ==================================================================
  50: {
    en: { keywords: ['Truth', 'Clarity', 'Breakthrough', 'Intellect'],
      meaningUp: 'A sharp blade cuts through confusion! Clear thinking, truth, and justice prevail. Make the decisive choice with confidence.',
      meaningRev: 'Confusion, misinformation, or misuse of power. Your judgment is clouded — seek clarity before acting.' },
    ru: { name: 'Туз Мечей', keywords: ['Истина', 'Ясность', 'Прорыв', 'Интеллект'],
      meaningUp: 'Острый клинок рассекает туман! Ясное мышление, истина и справедливость торжествуют.',
      meaningRev: 'Путаница, дезинформация. Твоё суждение затуманено.' }
  },
  51: {
    en: { keywords: ['Dilemma', 'Stalemate', 'Avoidance', 'Protection'],
      meaningUp: 'You face a difficult choice and close your eyes to avoid it. But the problem will not disappear — face reality bravely.',
      meaningRev: 'Release from indecision, information revealed, or making a choice. Clarity breaks through.' },
    ru: { name: 'Двойка Мечей', keywords: ['Дилемма', 'Тупик', 'Избегание', 'Защита'],
      meaningUp: 'Ты стоишь перед трудным выбором и закрываешь глаза. Но проблема не исчезнет — взгляни правде в глаза.',
      meaningRev: 'Освобождение от нерешительности, раскрытие информации.' }
  },
  52: {
    en: { keywords: ['Heartbreak', 'Sorrow', 'Pain', 'Grief'],
      meaningUp: 'A heart pierced by three swords. Pain, sorrow, and loss cannot be avoided. Allow yourself to grieve — it is the first step to healing.',
      meaningRev: 'Recovery, releasing pain, or healing. The worst is over — the wound begins to mend.' },
    ru: { name: 'Тройка Мечей', keywords: ['Разбитое сердце', 'Скорбь', 'Боль', 'Печаль'],
      meaningUp: 'Сердце, пронзённое тремя мечами. Боль, скорбь и потерю не избежать. Позволь себе горевать.',
      meaningRev: 'Восстановление, исцеление. Худшее позади — рана начинает заживать.' }
  },
  53: {
    en: { keywords: ['Rest', 'Recovery', 'Meditation', 'Peace'],
      meaningUp: 'Your weary mind needs rest. This is not逃避 but preparation for the next leg of your journey. Recharge in stillness.',
      meaningRev: 'Restlessness, inability to rest, or burnout. Your mind will not quiet — force yourself to pause.' },
    ru: { name: 'Четвёрка Мечей', keywords: ['Отдых', 'Восстановление', 'Медитация', 'Покой'],
      meaningUp: 'Твой уставший разум нуждается в отдыхе. Это не逃避, а подготовка к следующему этапу.',
      meaningRev: 'Беспокойство, неспособность отдохнуть. Заставь себя остановиться.' }
  },
  54: {
    en: { keywords: ['Conflict', 'Defeat', 'Loss', 'Dishonor'],
      meaningUp: 'A battle with no real winner. You may have won the argument but lost the relationship. Was it worth the cost?',
      meaningRev: 'Reconciliation, compromise, or放下 conflict. You realize the fight was futile — peace is the wiser path.' },
    ru: { name: 'Пятёрка Мечей', keywords: ['Конфликт', 'Поражение', 'Потеря', 'Бесславие'],
      meaningUp: 'Битва без победителя. Ты выиграл спор, но потерял отношения. Стоило ли оно того?',
      meaningRev: 'Примирение, компромисс. Ты понял, что борьба была напрасной.' }
  },
  55: {
    en: { keywords: ['Transition', 'Moving on', 'Healing', 'Release'],
      meaningUp: 'You sail toward calmer waters. Though carrying past pain, you are moving toward a better place. Leave burdens behind.',
      meaningRev: 'Stuck in the past, unable to move on. The transition is harder than expected — keep going, do not look back.' },
    ru: { name: 'Шестёрка Мечей', keywords: ['Переход', 'Движение', 'Исцеление', 'Освобождение'],
      meaningUp: 'Ты плывёшь к более спокойным водам. Несмотря на боль прошлого, ты движешься к лучшему.',
      meaningRev: 'Застревание в прошлом. Переход труднее, чем ожидалось — продолжай, не оглядывайся.' }
  },
  56: {
    en: { keywords: ['Strategy', 'Deception', 'Cunning', 'Escape'],
      meaningUp: 'Use wit, not force. Outmaneuver obstacles through clever strategy. But beware — someone may be acting in secret.',
      meaningRev: 'Truth revealed, deception exposed, or放下 pretense. Secrets come to light — honesty is the best path.' },
    ru: { name: 'Семёрка Мечей', keywords: ['Стратегия', 'Хитрость', 'Избегание', 'Уловка'],
      meaningUp: 'Используй ум, а не силу. Обходи препятствия хитростью. Но будь осторожен — кто-то действует втайне.',
      meaningRev: 'Правда раскрыта, обман暴露. Секреты выходят на свет.' }
  },
  57: {
    en: { keywords: ['Bondage', 'Negative thinking', 'Limitation', 'Helplessness'],
      meaningUp: 'You are trapped by your own negative thoughts. The blindfold is self-imposed — the束缚 is in your mind, not reality.',
      meaningRev: 'Awakening, liberation, or new perspective. You realize how you have been limiting yourself — freedom begins.' },
    ru: { name: 'Восьмёрка Мечей', keywords: ['Оковы', 'Негативное мышление', 'Ограничение', 'Беспомощность'],
      meaningUp: 'Ты в плену собственных негативных мыслей. Повязка на глазах — твой собственный выбор.',
      meaningRev: 'Пробуждение, освобождение. Ты осознаёшь свои самоограничения.' }
  },
  58: {
    en: { keywords: ['Anxiety', 'Nightmares', 'Worry', 'Despair'],
      meaningUp: 'Waking in the dark night, tormented by your worst fears. But most of what you fear exists only in your mind — seek help.',
      meaningRev: 'Relief from anxiety, facing fears, or reaching out. The darkness begins to lift.' },
    ru: { name: 'Девятка Мечей', keywords: ['Тревога', 'Кошмары', 'Страх', 'Отчаяние'],
      meaningUp: 'Пробуждение тёмной ночью в муках страха. Но большая часть страхов — лишь в твоём воображении.',
      meaningRev: 'Облегчение тревоги, преодоление страхов. Тьма начинает рассеиваться.' }
  },
  59: {
    en: { keywords: ['Rock bottom', 'End', 'Betrayal', 'Rebirth'],
      meaningUp: 'The darkest moment has arrived. But even in this lowest point, dawn is near. This ending is a new beginning.',
      meaningRev: 'Recovery, slow healing, or refusing to end. Even at rock bottom, you rise — survival is your triumph.' },
    ru: { name: 'Десятка Мечей', keywords: ['Дно', 'Конец', 'Предательство', 'Возрождение'],
      meaningUp: 'Самый тёмный момент наступил. Но даже в этой низшей точке рассвет близок. Конец — это новое начало.',
      meaningRev: 'Восстановление, медленное исцеление. Даже на дне ты поднимаешься.' }
  },
  60: {
    en: { keywords: ['Curiosity', 'Alertness', 'Communication', 'Learning'],
      meaningUp: 'A sharp, curious mind. You hunger for knowledge and new ideas. Stay alert — but wield your words with care.',
      meaningRev: 'Hasty speech, gossip, or miscommunication. Think before you speak — words can wound.' },
    ru: { name: 'Паж Мечей', keywords: ['Любопытство', 'Бдительность', 'Коммуникация', 'Обучение'],
      meaningUp: 'Острый, любознательный ум. Ты жаждешь знаний и новых идей. Будь бдителен — слова требуют осторожности.',
      meaningRev: 'Поспешные слова, сплетни. Думай, прежде чем говорить.' }
  },
  61: {
    en: { keywords: ['Charge', 'Determination', 'Action', 'Directness'],
      meaningUp: 'Full speed ahead! Clear focus and rapid action. Nothing will stand in your way — but don\'t let speed compromise tact.',
      meaningRev: 'Impulsiveness, aggression, or forced pause. Your haste has caused mistakes — slow down and regroup.' },
    ru: { name: 'Рыцарь Мечей', keywords: ['Натиск', 'Решимость', 'Действие', 'Прямота'],
      meaningUp: 'Полный вперёд! Ясный фокус и стремительные действия. Ничто не встанет на пути.',
      meaningRev: 'Импульсивность, агрессия. Спешка привела к ошибкам — замедлись.' }
  },
  62: {
    en: { keywords: ['Clarity', 'Independence', 'Perception', 'Honesty'],
      meaningUp: 'Independent thinker with razor-sharp clarity. She sees through all伪装 and speaks the truth without fear of being alone.',
      meaningRev: 'Harshness, coldness, or over-critical nature. Rationality without heart becomes cruelty.' },
    ru: { name: 'Королева Мечей', keywords: ['Ясность', 'Независимость', 'Проницательность', 'Честность'],
      meaningUp: 'Независимый мыслитель с острой ясностью. Она видит сквозь любую маскировку.',
      meaningRev: 'Резкость, холодность, критика. Рациональность без сердца становится жестокостью.' }
  },
  63: {
    en: { keywords: ['Authority', 'Reason', 'Rules', 'Intellectual power'],
      meaningUp: 'A leader governed by logic and truth. Fair, rational, and authoritative. Justice is served through clear thinking.',
      meaningRev: 'Abuse of power, coldness, or flawed judgment. Authority without empathy becomes tyranny.' },
    ru: { name: 'Король Мечей', keywords: ['Власть', 'Разум', 'Правила', 'Интеллект'],
      meaningUp: 'Лидер, управляемый логикой и истиной. Справедливый, рациональный, авторитетный.',
      meaningRev: 'Злоупотребление властью, холодность. Власть без сочувствия становится тиранией.' }
  },

  // ==================================================================
  // 星币 Pentacles
  // ==================================================================
  64: {
    en: { keywords: ['New beginning', 'Prosperity', 'Opportunity', 'Grounding'],
      meaningUp: 'A golden coin appears! A new financial opportunity or material beginning. Plant the seeds of prosperity with care.',
      meaningRev: 'Missed opportunity, financial instability, or poor planning. A chance slips away — prepare better next time.' },
    ru: { name: 'Туз Пентаклей', keywords: ['Новое начало', 'Процветание', 'Возможность', 'Стабильность'],
      meaningUp: 'Золотая монета появилась! Новая финансовая возможность или материальное начало.',
      meaningRev: 'Упущенная возможность, финансовая нестабильность.' }
  },
  65: {
    en: { keywords: ['Balance', 'Adaptability', 'Multi-tasking', 'Resource management'],
      meaningUp: 'Juggling multiple priorities with skill. Work-life, income-expense —保持 flexibility and rhythm, you can handle it.',
      meaningRev: 'Imbalance, financial stress, or being overwhelmed. Too many balls in the air — drop some.' },
    ru: { name: 'Двойка Пентаклей', keywords: ['Баланс', 'Адаптация', 'Многозадачность', 'Управление'],
      meaningUp: 'Ты жонглируешь множеством приоритетов. Сохраняй гибкость и ритм — ты справишься.',
      meaningRev: 'Дисбаланс, финансовый стресс. Слишком много шаров в воздухе — отпусти некоторые.' }
  },
  66: {
    en: { keywords: ['Teamwork', 'Skill', 'Craftsmanship', 'Collaboration'],
      meaningUp: 'Collaboration makes dreams work. Your expertise shines when combined with others. Keep learning and refining your craft.',
      meaningRev: 'Lack of teamwork, skill deficit, or team conflict. Improve communication and invest in your skills.' },
    ru: { name: 'Тройка Пентаклей', keywords: ['Командная работа', 'Мастерство', 'Сотрудничество', 'Труд'],
      meaningUp: 'Сотрудничество воплощает мечты. Твоё мастерство сияет в сочетании с другими.',
      meaningRev: 'Отсутствие командной работы, конфликты. Улучши коммуникацию.' }
  },
  67: {
    en: { keywords: ['Security', 'Conservatism', 'Control', 'Greed'],
      meaningUp: 'You hold tightly to your resources. Frugality is a virtue, but hoarding stifles growth. Find balance between saving and giving.',
      meaningRev: 'Financial recklessness, overspending, or失控. Money management needs attention.' },
    ru: { name: 'Четвёрка Пентаклей', keywords: ['Безопасность', 'Консерватизм', 'Контроль', 'Жадность'],
      meaningUp: 'Ты крепко держишься за свои ресурсы. Бережливость — добродетель, но накопление душит рост.',
      meaningRev: 'Финансовая безрассудность, перерасход.' }
  },
  68: {
    en: { keywords: ['Poverty', 'Hardship', 'Isolation', 'Spiritual emptiness'],
      meaningUp: 'You shiver in the cold, feeling lack — material or spiritual. But the door to warmth is right beside you — do you see it?',
      meaningRev: 'Recovery from hardship, finding help, or spiritual fulfillment. The hardest days are ending.' },
    ru: { name: 'Пятёрка Пентаклей', keywords: ['Бедность', 'Трудности', 'Изоляция', 'Пустота'],
      meaningUp: 'Ты дрожишь от холода, чувствуя нужду. Но дверь к теплу рядом — ты её видишь?',
      meaningRev: 'Выход из трудностей, обретение помощи. Тяжёлые дни заканчиваются.' }
  },
  69: {
    en: { keywords: ['Generosity', 'Charity', 'Sharing', 'Balance'],
      meaningUp: 'The dance of giving and receiving. You share your wealth or receive help from others. To give is blessed — but receive with grace.',
      meaningRev: 'Strings-attached giving, debt, or imbalance. Examine the conditions behind gifts.' },
    ru: { name: 'Шестёрка Пентаклей', keywords: ['Щедрость', 'Благотворительность', 'Дарение', 'Баланс'],
      meaningUp: 'Танец даяния и получения. Ты делишься богатством или получаешь помощь. Давать — благо.',
      meaningRev: 'Даяние с условиями, долги. Изучи условия за подарками.' }
  },
  70: {
    en: { keywords: ['Assessment', 'Investment', 'Patience', 'Growth'],
      meaningUp: 'You pause to examine your growing investments. Seeds have been planted — now wait patiently. Evaluate and plan next steps.',
      meaningRev: 'Wasted effort, poor returns, or impatience. Growth is slower than expected — adjust your approach.' },
    ru: { name: 'Семёрка Пентаклей', keywords: ['Оценка', 'Инвестиции', 'Терпение', 'Рост'],
      meaningUp: 'Ты останавливаешься, чтобы оценить свои вложения. Семена посажены — жди с терпением.',
      meaningRev: 'Напрасные усилия, плохая отдача. Рост медленнее ожидаемого.' }
  },
  71: {
    en: { keywords: ['Diligence', 'Mastery', 'Apprenticeship', 'Focus'],
      meaningUp: 'Complete focus on your craft! Diligence and dedication lead to mastery. Every detail polished with care.',
      meaningRev: 'Carelessness, lack of motivation, or skill stagnation. Your work has lost its soul — reignite your passion.' },
    ru: { name: 'Восьмёрка Пентаклей', keywords: ['Усердие', 'Мастерство', 'Ученичество', 'Фокус'],
      meaningUp: 'Полная сосредоточенность на ремесле! Усердие и dedication ведут к мастерству.',
      meaningRev: 'Небрежность, отсутствие мотивации. Твоя работа потеряла душу.' }
  },
  72: {
    en: { keywords: ['Abundance', 'Self-sufficiency', 'Elegance', 'Luxury'],
      meaningUp: 'Through hard work you have achieved abundance. Independent, elegant, self-sufficient. Enjoy the fruits of your labor.',
      meaningRev: 'Dependence on others, financial issues, or superficial appearances. Looks can deceive — check your real situation.' },
    ru: { name: 'Девятка Пентаклей', keywords: ['Изобилие', 'Независимость', 'Элегантность', 'Роскошь'],
      meaningUp: 'Трудом ты достиг изобилия. Независимый, элегантный, самодостаточный. Наслаждайся плодами труда.',
      meaningRev: 'Зависимость, финансовые проблемы. Внешность обманчива.' }
  },
  73: {
    en: { keywords: ['Legacy', 'Family', 'Wealth', 'Tradition'],
      meaningUp: 'Generations of wealth and tradition continue. This is stable, lasting value built over time. You belong to something greater.',
      meaningRev: 'Family issues, business failure, or broken legacy. Connection to your roots is severed — rebuild.' },
    ru: { name: 'Десятка Пентаклей', keywords: ['Наследие', 'Семья', 'Богатство', 'Традиция'],
      meaningUp: 'Поколения богатства и традиций продолжаются. Стабильная, lasting ценность, созданная временем.',
      meaningRev: 'Семейные проблемы, деловой крах. Связь с корнями утеряна.' }
  },
  74: {
    en: { keywords: ['Learning', 'Diligence', 'New skill', 'Ambition'],
      meaningUp: 'A dedicated student of the material world. You are learning a new skill or starting a project. One step at a time.',
      meaningRev: 'Procrastination, lack of planning, or unrealistic goals. Dreams without action remain dreams.' },
    ru: { name: 'Паж Пентаклей', keywords: ['Обучение', 'Усердие', 'Новый навык', 'Цель'],
      meaningUp: 'Прилежный ученик материального мира. Ты осваиваешь новый навык или начинаешь проект.',
      meaningRev: 'Прокрастинация, отсутствие плана. Мечты без действий остаются мечтами.' }
  },
  75: {
    en: { keywords: ['Reliability', 'Hard work', 'Patience', 'Methodical'],
      meaningUp: 'Steady and reliable. Slow but sure, your methodical approach will reach the destination. One foot in front of the other.',
      meaningRev: 'Stagnation, boredom, or excessive caution. Too conservative — you may miss opportunities.' },
    ru: { name: 'Рыцарь Пентаклей', keywords: ['Надёжность', 'Труд', 'Терпение', 'Методичность'],
      meaningUp: 'Устойчивый и надёжный. Медленно, но верно ты достигнешь цели. Шаг за шагом.',
      meaningRev: 'Застой, скука, излишняя осторожность. Ты можешь упустить возможности.' }
  },
  76: {
    en: { keywords: ['Nurturing', 'Practicality', 'Motherhood', 'Abundance'],
      meaningUp: 'Warm and practical feminine energy. She creates wealth and enjoys life, cares for family while maintaining independence.',
      meaningRev: 'Neglecting family, overwork, or materialism. The balance between work and home is lost.' },
    ru: { name: 'Королева Пентаклей', keywords: ['Забота', 'Практичность', 'Материнство', 'Изобилие'],
      meaningUp: 'Тёплая и практичная женская энергия. Она создаёт богатство и наслаждается жизнью.',
      meaningRev: 'Пренебрежение семьёй, переработки. Баланс между работой и домом утерян.' }
  },
  77: {
    en: { keywords: ['Success', 'Wealth', 'Leadership', 'Generosity'],
      meaningUp: 'A successful business leader! Years of hard work have brought wealth. Generous, stable, and trustworthy — a true king.',
      meaningRev: 'Greed, financial trouble, or overindulgence. Wealth may corrupt — redefine what success means to you.' },
    ru: { name: 'Король Пентаклей', keywords: ['Успех', 'Богатство', 'Лидерство', 'Щедрость'],
      meaningUp: 'Успешный бизнес-лидер! Годы труда принесли богатство. Щедрый, стабильный, надёжный.',
      meaningRev: 'Жадность, финансовые проблемы. Богатство может испортить — переопредели успех.' }
  }
};

/* ---------- 语言工具函数 ---------- */

let _currentLang = localStorage.getItem('tarot_lang') || 'zh';

function getLang() { return _currentLang; }

function setLang(lang) {
  _currentLang = lang;
  localStorage.setItem('tarot_lang', lang);
}

/**
 * 获取卡牌在当前语言下的文本
 * @param {object} card - 卡牌数据对象
 * @param {string} field - 'name' | 'keywords' | 'meaningUp' | 'meaningRev'
 * @param {string} [lang] - 默认使用当前语言
 * @returns {string|string[]}
 */
function t(card, field, lang) {
  lang = lang || _currentLang;
  if (lang === 'zh') return card[field];

  // 名字特殊处理：EN用 nameEn，RU用 LANG 里的 name
  if (field === 'name') {
    if (lang === 'en') return card.nameEn || card[field];
    const ruName = LANG[card.id]?.ru?.name;
    return ruName || card[field];
  }

  const l = LANG[card.id];
  if (!l) return card[field];

  const map = {
    keywords: { en: 'keywords', ru: 'keywords' },
    meaningUp:  { en: 'meaningUp', ru: 'meaningUp' },
    meaningRev: { en: 'meaningRev', ru: 'meaningRev' }
  };

  const langField = map[field];
  if (!langField) return card[field];

  const key = langField[lang];
  if (!key) return card[field];

  const val = l[lang]?.[key];
  return val !== undefined ? val : card[field];
}

/* ==================================================================
   UI 界面文字翻译
   ================================================================== */
const UI = {

  // ====== 欢迎页 ======
  'title':           { zh: '塔罗', en: 'Tarot', ru: 'Таро' },
  'tagline':         { zh: '命运正注视着你，但他对我们无能为力', en: 'Fate watches you, but it cannot control us', ru: 'Судьба наблюдает за тобой, но не может управлять нами' },
  'q-label':         { zh: '▎你想问什么？（可选）', en: '▎ Your question? (optional)', ru: '▎ Ваш вопрос? (необязательно)' },
  'q-placeholder':   { zh: '例如：我最近的事业运如何……', en: 'e.g. How is my career lately...', ru: 'Например: как моя карьера...' },
  'btn-start':       { zh: '开始占卜', en: 'Start Reading', ru: 'Начать гадание' },
  'btn-daily':       { zh: '🌅 每日塔罗', en: '🌅 Daily Card', ru: '🌅 Карта дня' },
  'btn-index':       { zh: '📖 卡牌百科', en: '📖 Card Index', ru: '📖 Все карты' },
  'btn-history':     { zh: '📋 占卜记录', en: '📋 History', ru: '📋 История' },

  // ====== 页面标题 ======
  'page-spread':     { zh: '选择牌阵', en: 'Choose a Spread', ru: 'Выберите расклад' },
  'spread-desc':     { zh: '根据你的问题选择最合适的牌阵', en: 'Pick the spread that fits your question', ru: 'Выберите расклад под ваш вопрос' },
  'page-shuffle':    { zh: '灵性洗牌', en: 'Spiritual Shuffle', ru: 'Духовное тасование' },
  'shuffle-hint':    { zh: '集中精神 · 默念你的问题 · 深呼吸', en: 'Focus · Think of your question · Breathe', ru: 'Сосредоточься · Думай о вопросе · Дыши' },
  'page-draw':       { zh: '翻牌仪式', en: 'Reveal the Cards', ru: 'Откройте карты' },
  'draw-hint':       { zh: '依次点击牌面，揭开命运的面纱', en: 'Click each card to reveal your fate', ru: 'Нажимайте карты, чтобы открыть судьбу' },
  'page-reading':    { zh: '占卜解读', en: 'Your Reading', ru: 'Ваше гадание' },
  'page-index':      { zh: '卡牌百科', en: 'Card Index', ru: 'Все карты' },
  'index-desc':      { zh: '浏览全部 78 张塔罗牌', en: 'Browse all 78 tarot cards', ru: 'Просмотр всех 78 карт Таро' },
  'page-daily':      { zh: '🌅 每日塔罗', en: '🌅 Daily Card', ru: '🌅 Карта дня' },
  'daily-desc':      { zh: '今日的灵性指引', en: "Today's spiritual guidance", ru: 'Сегодняшнее духовное руководство' },
  'page-history':    { zh: '占卜记录', en: 'Reading History', ru: 'История гаданий' },
  'history-desc':    { zh: '你的占卜旅程', en: 'Your journey through the cards', ru: 'Твой путь через карты' },

  // ====== 按钮 ======
  'btn-save':        { zh: '💾 保存记录', en: '💾 Save', ru: '💾 Сохранить' },
  'btn-share':       { zh: '📤 分享解读', en: '📤 Share', ru: '📤 Поделиться' },
  'btn-redo':        { zh: '🔄 重新占卜', en: '🔄 New Reading', ru: '🔄 Новое гадание' },
  'btn-copy':        { zh: '📋 复制到剪贴板', en: '📋 Copy to Clipboard', ru: '📋 Копировать' },
  'btn-ask':         { zh: '🔮 询问占卜师', en: '🔮 Ask the Reader', ru: '🔮 Спросить таролога' },
  'chat-placeholder':{ zh: '向占卜师提问……', en: 'Ask the tarot reader...', ru: 'Спросите таролога...' },
  'chat-send':       { zh: '发送', en: 'Send', ru: 'Отправить' },
  'chat-welcome':    { zh: '🔮 牌已为你展开，有何疑惑，尽管道来……', en: '🔮 The cards are laid. What troubles you...', ru: '🔮 Карты раскрыты. Что тревожит тебя...' },
  'chat-error':      { zh: '占卜师暂时无法感应，请稍后再试……', en: 'The reader cannot reach you now. Try again...', ru: 'Таролог не может ответить сейчас. Попробуйте позже...' },

  // ====== 牌阵名称 ======
  'sp-single':       { zh: '单张牌占卜', en: 'Single Card', ru: 'Одна карта' },
  'sp-single-desc':  { zh: '快速解答当下的困惑，获得直观指引', en: 'Quick guidance for the moment', ru: 'Быстрый ответ на текущий вопрос' },
  'sp-yesno':        { zh: '是非占卜', en: 'Yes / No', ru: 'Да / Нет' },
  'sp-yesno-desc':   { zh: '明确的是非答案，适合二元选择问题', en: 'Clear yes/no for binary questions', ru: 'Чёткий ответ на вопросы да/нет' },
  'sp-three':        { zh: '三张牌牌阵', en: 'Three Cards', ru: 'Три карты' },
  'sp-three-desc':   { zh: '过去 · 现在 · 未来，洞悉事件发展脉络', en: 'Past · Present · Future', ru: 'Прошлое · Настоящее · Будущее' },
  'sp-relationship': { zh: '关系之镜', en: 'Relationship Mirror', ru: 'Зеркало отношений' },
  'sp-rel-desc':     { zh: '深入剖析情感关系，看清双方的内心', en: 'Deep insight into relationships', ru: 'Глубокий анализ отношений' },
  'sp-career':       { zh: '事业抉择', en: 'Career Choice', ru: 'Карьерный выбор' },
  'sp-career-desc':  { zh: '职业发展的深度指引，看清选择的方向', en: 'Deep career guidance', ru: 'Глубокое руководство по карьере' },
  'sp-celtic':       { zh: '凯尔特十字', en: 'Celtic Cross', ru: 'Кельтский крест' },
  'sp-celtic-desc':  { zh: '最经典的全面牌阵，深入剖析复杂问题', en: 'Classic 10-card spread for complex issues', ru: 'Классический расклад для сложных вопросов' },

  // ====== 牌阵位置标签 ======
  'pos-guidance':    { zh: '当下指引', en: 'Guidance', ru: 'Руководство' },
  'pos-guidance-d':  { zh: '此刻最需要知道的讯息', en: 'What you need to know now', ru: 'Что важно знать сейчас' },
  'pos-answer':      { zh: '答案', en: 'Answer', ru: 'Ответ' },
  'pos-answer-d':    { zh: '正位为"是" · 逆位为"否" · 大牌为"时机未到"', en: 'Upright=Yes · Reversed=No · Major=Not yet', ru: 'Прямое=Да · Перевёрнутое=Нет · Старший=Не время' },
  'pos-past':        { zh: '过去', en: 'Past', ru: 'Прошлое' },
  'pos-past-d':      { zh: '影响当前局面的根源', en: 'Root of the current situation', ru: 'Корень текущей ситуации' },
  'pos-present':     { zh: '现在', en: 'Present', ru: 'Настоящее' },
  'pos-present-d':   { zh: '当下的真实处境', en: 'Your current reality', ru: 'Ваша текущая реальность' },
  'pos-future':      { zh: '未来', en: 'Future', ru: 'Будущее' },
  'pos-future-d':    { zh: '即将到来的发展', en: 'What is coming', ru: 'Что грядёт' },
  'pos-self':        { zh: '自己', en: 'Yourself', ru: 'Вы сами' },
  'pos-self-d':      { zh: '你在关系中的状态', en: 'Your state in the relationship', ru: 'Ваше состояние в отношениях' },
  'pos-other':       { zh: '对方', en: 'The Other', ru: 'Другой' },
  'pos-other-d':     { zh: 'Ta在关系中的状态', en: 'Their state in the relationship', ru: 'Их состояние в отношениях' },
  'pos-core':        { zh: '关系本质', en: 'Core Essence', ru: 'Суть отношений' },
  'pos-core-d':      { zh: '这段关系的核心能量', en: 'Core energy of this bond', ru: 'Основная энергия связи' },
  'pos-block':       { zh: '阻碍', en: 'Obstacle', ru: 'Препятствие' },
  'pos-block-d':     { zh: '需要面对的挑战', en: 'Challenge to face', ru: 'Вызов, который нужно принять' },
  'pos-advice':      { zh: '建议', en: 'Advice', ru: 'Совет' },
  'pos-advice-d':    { zh: '最佳行动方向', en: 'Best course of action', ru: 'Лучший путь действий' },
  'pos-current':     { zh: '现状', en: 'Current State', ru: 'Текущее состояние' },
  'pos-current-d':   { zh: '当前事业的局面', en: 'Current career situation', ru: 'Текущая карьерная ситуация' },
  'pos-opportunity': { zh: '机会', en: 'Opportunity', ru: 'Возможность' },
  'pos-opportunity-d':{ zh: '正在靠近的可能性', en: 'Opportunity approaching', ru: 'Приближающаяся возможность' },
  'pos-risk':        { zh: '风险', en: 'Risk', ru: 'Риск' },
  'pos-risk-d':      { zh: '需要注意的隐患', en: 'Hidden danger to watch', ru: 'Скрытая опасность' },
  'pos-resource':    { zh: '内在资源', en: 'Inner Resource', ru: 'Внутренний ресурс' },
  'pos-resource-d':  { zh: '你拥有的优势', en: 'Your strength', ru: 'Ваша сила' },
  'pos-center':      { zh: '现状', en: 'Center', ru: 'Центр' },
  'pos-center-d':    { zh: '问题的核心能量', en: 'Core energy of the issue', ru: 'Основная энергия вопроса' },
  'pos-cross':       { zh: '阻碍', en: 'Crossing', ru: 'Пересечение' },
  'pos-cross-d':     { zh: '交叉的挑战', en: 'Crossing challenge', ru: 'Пересекающий вызов' },
  'pos-foundation':  { zh: '根基', en: 'Foundation', ru: 'Основа' },
  'pos-foundation-d':{ zh: '问题的深层根源', en: 'Deep root of the issue', ru: 'Глубокий корень вопроса' },
  'pos-recent':      { zh: '过往', en: 'Recent Past', ru: 'Недавнее прошлое' },
  'pos-recent-d':    { zh: '近期的影响因素', en: 'Recent influences', ru: 'Недавние влияния' },
  'pos-goal':        { zh: '目标', en: 'Goal', ru: 'Цель' },
  'pos-goal-d':      { zh: '你意识层面的追求', en: 'Your conscious aim', ru: 'Ваша сознательная цель' },
  'pos-near':        { zh: '未来', en: 'Near Future', ru: 'Ближайшее будущее' },
  'pos-near-d':      { zh: '即将展现的局面', en: 'What will unfold soon', ru: 'Что скоро проявится' },
  'pos-attitude':    { zh: '自我', en: 'Attitude', ru: 'Отношение' },
  'pos-attitude-d':  { zh: '你内心的真实态度', en: 'Your inner attitude', ru: 'Ваше внутреннее отношение' },
  'pos-environment': { zh: '环境', en: 'Environment', ru: 'Окружение' },
  'pos-environment-d':{ zh: '他人与外界的影响', en: 'External influences', ru: 'Внешние влияния' },
  'pos-hopefear':    { zh: '希望与恐惧', en: 'Hope & Fear', ru: 'Надежда и страх' },
  'pos-hopefear-d':  { zh: '内心的期待与不安', en: 'Inner hopes and fears', ru: 'Внутренние надежды и страхи' },
  'pos-outcome':     { zh: '结果', en: 'Outcome', ru: 'Итог' },
  'pos-outcome-d':   { zh: '最终的发展走向', en: 'Final outcome', ru: 'Конечный результат' },
  'pos-advice-d2':   { zh: '促进关系的方向', en: 'Direction to improve', ru: 'Направление для улучшения' },

  // ====== 元素与花色 ======
  'suit-wands':    { zh: '权杖', en: 'Wands', ru: 'Жезлы' },
  'suit-cups':     { zh: '圣杯', en: 'Cups', ru: 'Кубки' },
  'suit-swords':   { zh: '宝剑', en: 'Swords', ru: 'Мечи' },
  'suit-pentacles':{ zh: '星币', en: 'Pentacles', ru: 'Пентакли' },
  'suit-wands-full':{ zh: '权杖牌组', en: 'Wands', ru: 'Жезлы' },
  'suit-cups-full': { zh: '圣杯牌组', en: 'Cups', ru: 'Кубки' },
  'suit-swords-full':{ zh: '宝剑牌组', en: 'Swords', ru: 'Мечи' },
  'suit-pentacles-full':{ zh: '星币牌组', en: 'Pentacles', ru: 'Пентакли' },
  'elem-fire':     { zh: '火', en: 'Fire', ru: 'Огонь' },
  'elem-water':    { zh: '水', en: 'Water', ru: 'Вода' },
  'elem-air':      { zh: '风', en: 'Air', ru: 'Воздух' },
  'elem-earth':    { zh: '土', en: 'Earth', ru: 'Земля' },
  'elem-fire-nature': { zh: '火元素 · 行动与创造', en: 'Fire · Action & Creation', ru: 'Огонь · Действие и творчество' },
  'elem-water-nature':{ zh: '水元素 · 情感与直觉', en: 'Water · Emotion & Intuition', ru: 'Вода · Эмоции и интуиция' },
  'elem-air-nature':  { zh: '风元素 · 思想与挑战', en: 'Air · Thought & Challenge', ru: 'Воздух · Мысль и вызов' },
  'elem-earth-nature':{ zh: '土元素 · 物质与事业', en: 'Earth · Material & Career', ru: 'Земля · Материя и карьера' },

  // ====== 统计 ======
  'stat-major':    { zh: '大牌', en: 'Major', ru: 'Старшие' },
  'stat-upright':  { zh: '▲ 正位', en: '▲ Upright', ru: '▲ Прямое' },
  'stat-reversed': { zh: '▼ 逆位', en: '▼ Reversed', ru: '▼ Перевёрнуто' },
  'stat-of':       { zh: '/', en: '/', ru: '/' },
  'card-count':    { zh: '张牌', en: 'cards', ru: 'карт' },
  'cards-and':     { zh: ' · ', en: ' · ', ru: ' · ' },

  // ====== 模态标签 ======
  'meta-type':       { zh: '类型', en: 'Type', ru: 'Тип' },
  'meta-number':     { zh: '编号', en: 'Number', ru: 'Номер' },
  'meta-element':    { zh: '元素', en: 'Element', ru: 'Стихия' },
  'meta-numerology': { zh: '灵数', en: 'Numerology', ru: 'Нумерология' },
  'meta-astrology':  { zh: '占星', en: 'Astrology', ru: 'Астрология' },
  'meta-hebrew':     { zh: '希伯来', en: 'Hebrew', ru: 'Иврит' },
  'modal-reading':   { zh: '解读', en: 'Reading', ru: 'Значение' },
  'modal-keywords':  { zh: '关键词', en: 'Keywords', ru: 'Ключевые слова' },
  'modal-insight':   { zh: '灵性启示', en: 'Spiritual Insight', ru: 'Духовное прозрение' },

  // ====== 总览 ======
  'summary-title':   { zh: '✦ 全局总览 ✦', en: '✦ Overview ✦', ru: '✦ Общий обзор ✦' },
  'detail-divider':  { zh: '逐牌详解', en: 'Card Details', ru: 'Детали карт' },
  'overview-major':  { zh: '大阿卡纳主导 — 强烈的命运力量在运作，这是重要的人生课题时刻', en: 'Major Arcana dominates — fate is at work, a significant life lesson', ru: 'Старшие Арканы доминируют — судьба в действии, важный жизненный урок' },
  'overview-rev':    { zh: '逆位偏多 — 能量受阻或需要内省，建议放慢节奏', en: 'Many reversals — energy is blocked, pause and reflect', ru: 'Много перевёрнутых — энергия заблокирована, остановись' },
  'overview-upright':{ zh: '正位为主 — 能量流通顺畅，适合采取行动', en: 'Mostly upright — energy flows, take action', ru: 'Большинство прямых — энергия течёт, действуй' },
  'overview-only-major':{ zh: '大阿卡纳集中，元素能量超越四元素的范畴——这是超越日常的精神力量在主导。', en: 'Major Arcana集中 — elemental energy transcends the four suits. Spiritual forces beyond the everyday are at work.', ru: 'Старшие Арканы доминируют — энергия стихий за пределами четырёх мастей. Духовные силы в действии.' },
  'overview-elem1':  { zh: '元素占据主导，问题的核心围绕这一领域展开。', en: ' energy dominates. The core of the issue revolves around this realm.', ru: ' стихия доминирует. Суть вопроса вращается вокруг этой сферы.' },
  'overview-elem2':  { zh: '——两股能量在交织作用，需要找到平衡点。', en: ' — two energies intertwine. Balance is needed.', ru: ' — две энергии переплетаются. Нужен баланс.' },
  'overview-elem3':  { zh: '——多种能量汇聚，局面复杂但充满可能性。', en: ' — multiple energies converge. Complex but full of possibility.', ru: ' — множество энергий сходятся. Сложно, но полно возможностей.' },
  'overview-1major':{ zh: '这是一张大阿卡纳牌，象征着重要的生命课题。', en: 'This is a Major Arcana card — a significant life lesson.', ru: 'Это Старший Аркан — важный жизненный урок.' },
  'overview-1card':  { zh: '本次占卜抽到了', en: 'Your card today is', ru: 'Ваша карта сегодня' },
  'overview-1card2': { zh: '这张牌的核心讯息围绕', en: 'Its核心 message revolves around', ru: 'Её ключевое послание вращается вокруг' },
  'overview-1rev':   { zh: '逆位出现提示你需要以不同的视角看待这个问题。', en: 'Reversed — see this from a different angle.', ru: 'Перевёрнуто — взгляни под другим углом.' },
  'overview-1up':    { zh: '正位出现意味着能量正向流动，宜顺势而为。', en: 'Upright — energy flows, go with it.', ru: 'Прямое — энергия течёт, следуй за ней.' },
  'overview-3from':  { zh: '从「', en: 'From 「', ru: 'От 「' },
  'overview-3to':    { zh: '」(过去) 到「', en: '」(Past) to 「', ru: '」(Прошлое) к 「' },
  'overview-3to2':   { zh: '」(现在)，再到「', en: '」(Present) to 「', ru: '」(Настоящее) к 「' },
  'overview-3to3':   { zh: '」(未来)，', en: '」(Future) — ', ru: '」(Будущее) — ' },
  'overview-3major': { zh: '显示出强大的命运轨迹，', en: 'shows a powerful fate line,', ru: 'показывает мощную линию судьбы,' },
  'overview-3minor': { zh: '显示出一条清晰的发展脉络。', en: 'shows a clear development path.', ru: 'показывает ясный путь развития.' },
  'overview-3rev':   { zh: '未来的逆位牌提醒你，结果取决于当下的选择。', en: 'Future reversed: the outcome depends on choices now.', ru: 'Будущее перевёрнуто: итог зависит от выбора сейчас.' },
  'overview-3up':    { zh: '未来的正位牌预示着积极的发展方向。', en: 'Future upright: positive direction ahead.', ru: 'Будущее прямое: позитивное направление.' },
  'overview-5':      { zh: '五张牌的配置呈现出问题的多面性。核心能量集中在「', en: 'Five cards show the issue\'s many facets. Core energy centers on 「', ru: 'Пять карт показывают многогранность вопроса. Энергия сосредоточена на 「' },
  'overview-5and':   { zh: '」与「', en: '」 and 「', ru: '」 и 「' },
  'overview-5end':   { zh: '」之间的对话上。', en: '」 — the central dialogue.', ru: '」 — центральный диалог.' },
  'overview-5rev':   { zh: '多张逆位提示需要先解决内在的阻碍。', en: 'Several reversals: clear inner blocks first.', ru: 'Несколько перевёрнутых: сначала убери внутренние блоки.' },
  'overview-5up':    { zh: '正位能量为主，外部条件对你有利。', en: 'Mostly upright: external conditions favor you.', ru: 'В основном прямые: внешние условия благоприятны.' },
  'overview-10':     { zh: '凯尔特十字牌阵全面展开了问题的各个层面。起始的「', en: 'The Celtic Cross unfolds all layers. Beginning with 「', ru: 'Кельтский крест раскрывает все слои. Начиная с 「' },
  'overview-10mid':  { zh: '」描绘了核心处境，而最终的「', en: '」 describes the core, and finally 「', ru: '」 описывает суть, и наконец 「' },
  'overview-10end':  { zh: '」指向发展的归宿。', en: '」指向发展的归宿。', ru: '」指向发展的归宿。' },
  'overview-10major':{ zh: '多张大阿卡纳的出现表明这是你人生旅途中的重要节点。', en: 'Many Major Arcana: a key milestone on your life journey.', ru: 'Много Старших Арканов: ключевая веха на твоём пути.' },
  'overview-10minor':{ zh: '小阿卡纳为主，问题更贴近日常生活的具体领域。', en: 'Minor Arcana为主, the issue is rooted in daily life.', ru: 'Младшие Арканы — вопрос в повседневной жизни.' },
  'overview-10rev':  { zh: '较多逆位牌意味着在行动之前需要深入的内省和调整。', en: 'Many reversals: deep introspection needed before action.', ru: 'Много перевёрнутых: нужна глубокая рефлексия.' },
  'overview-gen':    { zh: '本次共抽出', en: 'Total cards drawn:', ru: 'Всего карт:' },
  'overview-gen-mid':{ zh: '张牌。其中大阿卡纳', en: ' — Major Arcana:', ru: ' — Старшие Арканы:' },
  'overview-gen-end':{ zh: '张、小阿卡纳', en: ', Minor:', ru: ', Младшие:' },

  // ====== 翻牌 ======
  'draw-click':     { zh: '点击牌面揭开 · 共', en: 'Click to reveal ·', ru: 'Нажмите, чтобы открыть ·' },
  'draw-cards':     { zh: '张', en: 'cards', ru: 'карт' },
  'draw-revealed':  { zh: '✨ 所有牌已揭开 · 解读中……', en: '✨ All revealed · Reading...', ru: '✨ Все открыты · Чтение...' },
  'draw-next':      { zh: '点击下一张', en: 'Next card', ru: 'Следующая' },
  'draw-upright':   { zh: '正', en: 'U', ru: 'П' },
  'draw-rev':       { zh: '逆', en: 'R', ru: 'Пв' },

  // ====== 百科筛选 ======
  'filter-all':      { zh: '全部', en: 'All', ru: 'Все' },
  'no-results':      { zh: '没有找到匹配的牌', en: 'No matching cards found', ru: 'Подходящих карт не найдено' },
  'filter-major':    { zh: '大阿卡纳', en: 'Major Arcana', ru: 'Старшие Арканы' },
  'filter-wands':    { zh: '权杖', en: 'Wands', ru: 'Жезлы' },
  'filter-cups':     { zh: '圣杯', en: 'Cups', ru: 'Кубки' },
  'filter-swords':   { zh: '宝剑', en: 'Swords', ru: 'Мечи' },
  'filter-pentacles':{ zh: '星币', en: 'Pentacles', ru: 'Пентакли' },

  // ====== 历史 ======
  'history-empty':    { zh: '✨ 还没有占卜记录<br>开始你的第一次探索吧', en: '✨ No readings yet<br>Start your first journey', ru: '✨ Ещё нет гаданий<br>Начни своё первое' },
  'history-empty-btn':{ zh: '开始占卜', en: 'Start Reading', ru: 'Начать гадание' },

  // ====== 分享 ======
  'share-title':     { zh: '✦ 神秘塔罗 · 占卜分享 ✦', en: '✦ Mystic Tarot · Reading ✦', ru: '✦ Мистическое Таро · Результат ✦' },
  'share-from':      { zh: '✨ 由「神秘塔罗」生成', en: '✨ Generated by Mystic Tarot', ru: '✨ Создано Mystic Tarot' },
  'confirm-delete':  { zh: '确定删除这条记录吗？', en: 'Delete this record?', ru: 'Удалить запись?' },
  'insight-major':   { zh: '是人生旅程中的重要课题，邀请你深入体悟', en: 'is a key lesson on your journey, inviting you to explore the energy of', ru: '— ключевой урок на твоём пути, приглашая исследовать энергию' },
  'insight-minor':   { zh: '这张牌属于', en: 'This card belongs to', ru: 'Эта карта относится к' },
  'insight-minor2':  { zh: '关注牌面数字', en: 'Pay attention to the number', ru: 'Обрати внимание на число' },
  'insight-in':      { zh: '在当下情境中的启示', en: 'in the present context', ru: 'в текущем контексте' },

  // ====== 占卜师 ======
  'reader-thinking': { zh: '……', en: '……', ru: '……' },
  'reader-reply-fail':{ zh: '占卜师暂时无法感应，请稍后再试……', en: 'The reader cannot reach you now...', ru: 'Таролог не может ответить сейчас...' },
};

/** 获取 UI 文字 */
function __(key, lang) {
  lang = lang || _currentLang;
  const entry = UI[key];
  if (!entry) return key;
  return entry[lang] || entry.zh || key;
}
