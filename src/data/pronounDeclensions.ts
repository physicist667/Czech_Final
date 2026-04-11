// =============================================================================
// Czech Pronoun Declension Tables — for Russian-speaking learners
// =============================================================================

export interface PronounTable {
  id: string;
  type: 'personal' | 'possessive' | 'demonstrative' | 'interrogative' | 'relative' | 'indefinite' | 'negative' | 'reflexive';
  russianType: string;
  description: string;
  rows: {
    caseLabel: string; // "Nominativ (кто? что?)"
    forms: { czech: string; russian: string; pron: string }[];
  }[];
  notes?: string;
}

export const pronounDeclensions: PronounTable[] = [
  // ===========================================================================
  // PERSONAL PRONOUNS — Личные местоимения
  // ===========================================================================

  {
    id: 'personal-ja',
    type: 'personal',
    russianType: 'Личные местоимения',
    description: 'Местоимение «já» (я) — единственное и множественное число',
    rows: [
      {
        caseLabel: 'Nominativ (кто? что?)',
        forms: [
          { czech: 'já', russian: 'я (ед.ч.)', pron: ['йа:'] as unknown as string },
          { czech: 'my', russian: 'мы (мн.ч.)', pron: ['мы'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Genitiv (кого? чего?)',
        forms: [
          { czech: 'mě', russian: 'меня', pron: ['мнё'] as unknown as string },
          { czech: 'nás', russian: 'нас', pron: ['на:с'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Dativ (кому? чему?)',
        forms: [
          { czech: 'mně', russian: 'мне', pron: ['мнё'] as unknown as string },
          { czech: 'nám', russian: 'нам', pron: ['на:м'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Akuzativ (кого? что?)',
        forms: [
          { czech: 'mě', russian: 'меня', pron: ['мнё'] as unknown as string },
          { czech: 'nás', russian: 'нас', pron: ['на:с'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Vokativ (кто? что! — обращение)',
        forms: [
          { czech: '—', russian: '—', pron: '—' },
          { czech: '—', russian: '—', pron: '—' },
        ],
      },
      {
        caseLabel: 'Lokál (о ком? о чём?)',
        forms: [
          { czech: 'mně', russian: 'обо мне', pron: ['мнё'] as unknown as string },
          { czech: 'nás', russian: 'о нас', pron: ['на:с'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Instrumentál (кем? чем?)',
        forms: [
          { czech: 'mnou', russian: 'мной', pron: ['мноу'] as unknown as string },
          { czech: 'námi', russian: 'нами', pron: ['на:ми'] as unknown as string },
        ],
      },
    ],
    notes: 'В разговорной речи форма Akuzativ «mě» часто заменяется на «mně».',
  },

  {
    id: 'personal-ty',
    type: 'personal',
    russianType: 'Личные местоимения',
    description: 'Местоимение «ty» (ты) — единственное и множественное число',
    rows: [
      {
        caseLabel: 'Nominativ (кто? что?)',
        forms: [
          { czech: 'ty', russian: 'ты (ед.ч.)', pron: ['ты'] as unknown as string },
          { czech: 'vy', russian: 'вы (мн.ч.)', pron: ['вы'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Genitiv (кого? чего?)',
        forms: [
          { czech: 'tebe', russian: 'тебя', pron: ['тебё'] as unknown as string },
          { czech: 'vás', russian: 'вас', pron: ['ва:с'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Dativ (кому? чему?)',
        forms: [
          { czech: 'tobě', russian: 'тебе', pron: ['тобё'] as unknown as string },
          { czech: 'vám', russian: 'вам', pron: ['ва:м'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Akuzativ (кого? что?)',
        forms: [
          { czech: 'tebe', russian: 'тебя', pron: ['тебё'] as unknown as string },
          { czech: 'vás', russian: 'вас', pron: ['ва:с'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Vokativ (кто? что! — обращение)',
        forms: [
          { czech: '—', russian: '—', pron: '—' },
          { czech: '—', russian: '—', pron: '—' },
        ],
      },
      {
        caseLabel: 'Lokál (о ком? о чём?)',
        forms: [
          { czech: 'tobě', russian: 'о тебе', pron: ['тобё'] as unknown as string },
          { czech: 'vás', russian: 'о вас', pron: ['ва:с'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Instrumentál (кем? чем?)',
        forms: [
          { czech: 'tebou', russian: 'тобой', pron: ['тебоу'] as unknown as string },
          { czech: 'vámi', russian: 'вами', pron: ['ва:ми'] as unknown as string },
        ],
      },
    ],
    notes: '«vy» используется как обращение на «Вы» (вежливая форма) и как «вы» (множественное число).',
  },

  {
    id: 'personal-on',
    type: 'personal',
    russianType: 'Личные местоимения',
    description: 'Местоимение «on» (он) — мужской род, единственное и множественное число',
    rows: [
      {
        caseLabel: 'Nominativ (кто? что?)',
        forms: [
          { czech: 'on', russian: 'он (ед.ч.)', pron: ['он'] as unknown as string },
          { czech: 'oni', russian: 'они (мн.ч.)', pron: ['они'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Genitiv (кого? чего?)',
        forms: [
          { czech: 'jeho', russian: 'его', pron: ['йегъо'] as unknown as string },
          { czech: 'jich', russian: 'их', pron: ['йих'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Dativ (кому? чему?)',
        forms: [
          { czech: 'jemu', russian: 'ему', pron: ['йему'] as unknown as string },
          { czech: 'jim', russian: 'им', pron: ['йим'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Akuzativ (кого? что?)',
        forms: [
          { czech: 'ho / jeho', russian: 'его', pron: ['го / йегъо'] as unknown as string },
          { czech: 'je / oni', russian: 'их / их (личн.)', pron: ['йе / они'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Vokativ (кто? что! — обращение)',
        forms: [
          { czech: '—', russian: '—', pron: '—' },
          { czech: '—', russian: '—', pron: '—' },
        ],
      },
      {
        caseLabel: 'Lokál (о ком? о чём?)',
        forms: [
          { czech: 'něm', russian: 'о нём', pron: ['нём'] as unknown as string },
          { czech: 'nich', russian: 'о них', pron: ['них'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Instrumentál (кем? чем?)',
        forms: [
          { czech: 'jím', russian: 'им', pron: ['йи:м'] as unknown as string },
          { czech: 'jimi', russian: 'ими', pron: ['йими'] as unknown as string },
        ],
      },
    ],
    notes: 'В Akuzativ краткая форма «ho» используется чаще, чем полная «jeho».',
  },

  {
    id: 'personal-ona',
    type: 'personal',
    russianType: 'Личные местоимения',
    description: 'Местоимение «ona» (она) — женский род, единственное и множественное число',
    rows: [
      {
        caseLabel: 'Nominativ (кто? что?)',
        forms: [
          { czech: 'ona', russian: 'она (ед.ч.)', pron: ['она'] as unknown as string },
          { czech: 'ony', russian: 'они (ж.р. мн.ч.)', pron: ['оны'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Genitiv (кого? чего?)',
        forms: [
          { czech: 'jí', russian: 'её', pron: ['йи:'] as unknown as string },
          { czech: 'jich', russian: 'их', pron: ['йих'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Dativ (кому? чему?)',
        forms: [
          { czech: 'jí', russian: 'ей', pron: ['йи:'] as unknown as string },
          { czech: 'jim', russian: 'им', pron: ['йим'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Akuzativ (кого? что?)',
        forms: [
          { czech: 'ji / její', russian: 'её', pron: ['йи / йеййи:'] as unknown as string },
          { czech: 'je / ony', russian: 'их / их (личн.)', pron: ['йе / оны'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Vokativ (кто? что! — обращение)',
        forms: [
          { czech: '—', russian: '—', pron: '—' },
          { czech: '—', russian: '—', pron: '—' },
        ],
      },
      {
        caseLabel: 'Lokál (о ком? о чём?)',
        forms: [
          { czech: 'ní', russian: 'о ней', pron: ['ни:'] as unknown as string },
          { czech: 'nich', russian: 'о них', pron: ['них'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Instrumentál (кем? чем?)',
        forms: [
          { czech: 'jí', russian: 'ею / ей', pron: ['йи:'] as unknown as string },
          { czech: 'jimi', russian: 'ими', pron: ['йими'] as unknown as string },
        ],
      },
    ],
    notes: 'Формы Genitiv и Dativ совпадают: «jí».',
  },

  {
    id: 'personal-ono',
    type: 'personal',
    russianType: 'Личные местоимения',
    description: 'Местоимение «ono» (оно) — средний род, единственное число; множественное «ona»',
    rows: [
      {
        caseLabel: 'Nominativ (кто? что?)',
        forms: [
          { czech: 'ono', russian: 'оно (ед.ч.)', pron: ['оно'] as unknown as string },
          { czech: 'ona', russian: 'они (ср.р. мн.ч.)', pron: ['она'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Genitiv (кого? чего?)',
        forms: [
          { czech: 'jeho', russian: 'его', pron: ['йегъо'] as unknown as string },
          { czech: 'jich', russian: 'их', pron: ['йих'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Dativ (кому? чему?)',
        forms: [
          { czech: 'jemu', russian: 'ему', pron: ['йему'] as unknown as string },
          { czech: 'jim', russian: 'им', pron: ['йим'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Akuzativ (кого? что?)',
        forms: [
          { czech: 'ho / jeho', russian: 'его', pron: ['го / йегъо'] as unknown as string },
          { czech: 'je', russian: 'их', pron: ['йе'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Vokativ (кто? что! — обращение)',
        forms: [
          { czech: '—', russian: '—', pron: '—' },
          { czech: '—', russian: '—', pron: '—' },
        ],
      },
      {
        caseLabel: 'Lokál (о ком? о чём?)',
        forms: [
          { czech: 'něm', russian: 'о нём', pron: ['нём'] as unknown as string },
          { czech: 'nich', russian: 'о них', pron: ['них'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Instrumentál (кем? чем?)',
        forms: [
          { czech: 'jím', russian: 'им', pron: ['йи:м'] as unknown as string },
          { czech: 'jimi', russian: 'ими', pron: ['йими'] as unknown as string },
        ],
      },
    ],
    notes: 'Склонение «ono» совпадает со склонением «on» (он). Во множественном числе «ona» — неодушевлённое множественное.',
  },

  // ===========================================================================
  // POSSESSIVE PRONOUNS — Притяжательные местоимения
  // ===========================================================================

  {
    id: 'possessive-muj',
    type: 'possessive',
    russianType: 'Притяжательные местоимения',
    description: 'Местоимение «můj» (мой) — мужской, женский, средний род и множественное число',
    rows: [
      {
        caseLabel: 'Nominativ (кто? что?)',
        forms: [
          { czech: 'můj', russian: 'мой (м.р.)', pron: ['му:й'] as unknown as string },
          { czech: 'moje', russian: 'моя (ж.р.) / моё (ср.р.)', pron: ['мойё'] as unknown as string },
          { czech: 'moji', russian: 'мои (мн.ч., о людях)', pron: ['мойи'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Genitiv (кого? чего?)',
        forms: [
          { czech: 'mého', russian: 'моего', pron: ['мэ:гъо'] as unknown as string },
          { czech: 'mé', russian: 'моей / моего', pron: ['мэ:'] as unknown as string },
          { czech: 'mých', russian: 'моих', pron: ['мы:х'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Dativ (кому? чему?)',
        forms: [
          { czech: 'mému', russian: 'моему', pron: ['мэ:му'] as unknown as string },
          { czech: 'mé', russian: 'моей', pron: ['мэ:'] as unknown as string },
          { czech: 'mým', russian: 'моим', pron: ['мы:м'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Akuzativ (кого? что?)',
        forms: [
          { czech: 'můj / mého', russian: 'мой / моего', pron: ['му:й / мэ:гъо'] as unknown as string },
          { czech: 'mou', russian: 'мою', pron: ['моу'] as unknown as string },
          { czech: 'moje / moji', russian: 'мои / моих (одуш.)', pron: ['мойё / мойи'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Vokativ (кто? что! — обращение)',
        forms: [
          { czech: 'můj', russian: 'мой!', pron: ['му:й'] as unknown as string },
          { czech: 'moje', russian: 'моя!', pron: ['мойё'] as unknown as string },
          { czech: 'moji', russian: 'мои!', pron: ['мойи'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Lokál (о ком? о чём?)',
        forms: [
          { czech: 'mému', russian: 'о моём', pron: ['мэ:му'] as unknown as string },
          { czech: 'mé', russian: 'о моей', pron: ['мэ:'] as unknown as string },
          { czech: 'mých', russian: 'о моих', pron: ['мы:х'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Instrumentál (кем? чем?)',
        forms: [
          { czech: 'mým', russian: 'моим', pron: ['мы:м'] as unknown as string },
          { czech: 'mou', russian: 'моей / моей', pron: ['моу'] as unknown as string },
          { czech: 'mými', russian: 'моими', pron: ['мы:ми'] as unknown as string },
        ],
      },
    ],
    notes: 'В Akuzativ м.р. одушевлённого используется «mého», неодушевлённого — «můj».',
  },

  {
    id: 'possessive-tvuj',
    type: 'possessive',
    russianType: 'Притяжательные местоимения',
    description: 'Местоимение «tvůj» (твой) — склоняется по той же модели, что и «můj»',
    rows: [
      {
        caseLabel: 'Nominativ (кто? что?)',
        forms: [
          { czech: 'tvůj', russian: 'твой (м.р.)', pron: ['тву:й'] as unknown as string },
          { czech: 'tvé', russian: 'твоя (ж.р.) / твоё (ср.р.)', pron: ['твэ:'] as unknown as string },
          { czech: 'tvoji', russian: 'твои (мн.ч., о людях)', pron: ['твойи'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Genitiv (кого? чего?)',
        forms: [
          { czech: 'tvého', russian: 'твоего', pron: ['твэ:гъо'] as unknown as string },
          { czech: 'tvé', russian: 'твоей / твоего', pron: ['твэ:'] as unknown as string },
          { czech: 'tvých', russian: 'твоих', pron: ['твы:х'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Dativ (кому? чему?)',
        forms: [
          { czech: 'tvému', russian: 'твоему', pron: ['твэ:му'] as unknown as string },
          { czech: 'tvé', russian: 'твоей', pron: ['твэ:'] as unknown as string },
          { czech: 'tvým', russian: 'твоим', pron: ['твы:м'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Akuzativ (кого? что?)',
        forms: [
          { czech: 'tvůj / tvého', russian: 'твой / твоего', pron: ['тву:й / твэ:гъо'] as unknown as string },
          { czech: 'tvou', russian: 'твою', pron: ['твоу'] as unknown as string },
          { czech: 'tvé / tvoji', russian: 'твои / твоих (одуш.)', pron: ['твэ: / твойи'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Vokativ (кто? что! — обращение)',
        forms: [
          { czech: 'tvůj', russian: 'твой!', pron: ['тву:й'] as unknown as string },
          { czech: 'tvé', russian: 'твоя!', pron: ['твэ:'] as unknown as string },
          { czech: 'tvoji', russian: 'твои!', pron: ['твойи'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Lokál (о ком? о чём?)',
        forms: [
          { czech: 'tvému', russian: 'о твоём', pron: ['твэ:му'] as unknown as string },
          { czech: 'tvé', russian: 'о твоей', pron: ['твэ:'] as unknown as string },
          { czech: 'tvých', russian: 'о твоих', pron: ['твы:х'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Instrumentál (кем? чем?)',
        forms: [
          { czech: 'tvým', russian: 'твоим', pron: ['твы:м'] as unknown as string },
          { czech: 'tvou', russian: 'твоей', pron: ['твоу'] as unknown as string },
          { czech: 'tvými', russian: 'твоими', pron: ['твы:ми'] as unknown as string },
        ],
      },
    ],
    notes: 'Склонение «tvůj» полностью параллельно склонению «můj».',
  },

  {
    id: 'possessive-jeho',
    type: 'possessive',
    russianType: 'Притяжательные местоимения',
    description: 'Местоимение «jeho» (его) — склоняется как прилагательное мужского рода',
    rows: [
      {
        caseLabel: 'Nominativ (кто? что?)',
        forms: [
          { czech: 'jeho', russian: 'его (м.р. / ж.р. / ср.р. / мн.ч.)', pron: ['йегъо'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Genitiv (кого? чего?)',
        forms: [
          { czech: 'jeho', russian: 'его', pron: ['йегъо'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Dativ (кому? чему?)',
        forms: [
          { czech: 'jeho', russian: 'его', pron: ['йегъо'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Akuzativ (кого? что?)',
        forms: [
          { czech: 'jeho', russian: 'его', pron: ['йегъо'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Vokativ (кто? что! — обращение)',
        forms: [
          { czech: 'jeho', russian: 'его', pron: ['йегъо'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Lokál (о ком? о чём?)',
        forms: [
          { czech: 'jeho', russian: 'о его', pron: ['йегъо'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Instrumentál (кем? чем?)',
        forms: [
          { czech: 'jeho', russian: 'его (твор. п.)', pron: ['йегъо'] as unknown as string },
        ],
      },
    ],
    notes: 'Форма «jeho» неизменяемая — она одинакова во всех падежах, родах и числах.',
  },

  {
    id: 'possessive-jeji',
    type: 'possessive',
    russianType: 'Притяжательные местоимения',
    description: 'Местоимение «její» (её) — склоняется как прилагательное мягкой основы',
    rows: [
      {
        caseLabel: 'Nominativ (кто? что?)',
        forms: [
          { czech: 'její', russian: 'её (м.р.)', pron: ['йеййи:'] as unknown as string },
          { czech: 'její', russian: 'её (ж.р.)', pron: ['йеййи:'] as unknown as string },
          { czech: 'její', russian: 'её (ср.р.)', pron: ['йеййи:'] as unknown as string },
          { czech: 'její', russian: 'её (мн.ч.)', pron: ['йеййи:'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Genitiv (кого? чего?)',
        forms: [
          { czech: 'jejího', russian: 'её (род. п., м.р./ср.р.)', pron: ['йеййи:гъо'] as unknown as string },
          { czech: 'její', russian: 'её (род. п., ж.р.)', pron: ['йеййи:'] as unknown as string },
          { czech: 'jejích', russian: 'её (род. п., мн.ч.)', pron: ['йеййи:х'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Dativ (кому? чему?)',
        forms: [
          { czech: 'jejímu', russian: 'её (дат. п., м.р./ср.р.)', pron: ['йеййи:му'] as unknown as string },
          { czech: 'její', russian: 'её (дат. п., ж.р.)', pron: ['йеййи:'] as unknown as string },
          { czech: 'jejím', russian: 'её (дат. п., мн.ч.)', pron: ['йеййи:м'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Akuzativ (кого? что?)',
        forms: [
          { czech: 'jejího / její', russian: 'её (вин. п., м.р.)', pron: ['йеййи:гъо / йеййи:'] as unknown as string },
          { czech: 'její', russian: 'её (вин. п., ж.р.)', pron: ['йеййи:'] as unknown as string },
          { czech: 'její', russian: 'её (вин. п., ср.р.)', pron: ['йеййи:'] as unknown as string },
          { czech: 'její / její', russian: 'её (вин. п., мн.ч.)', pron: ['йеййи: / йеййи:'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Vokativ (кто? что! — обращение)',
        forms: [
          { czech: 'její', russian: 'её!', pron: ['йеййи:'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Lokál (о ком? о чём?)',
        forms: [
          { czech: 'jejím', russian: 'о её (м.р./ср.р.)', pron: ['йеййи:м'] as unknown as string },
          { czech: 'její', russian: 'о её (ж.р.)', pron: ['йеййи:'] as unknown as string },
          { czech: 'jejích', russian: 'о её (мн.ч.)', pron: ['йеййи:х'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Instrumentál (кем? чем?)',
        forms: [
          { czech: 'jejím', russian: 'её (твор. п., м.р./ср.р.)', pron: ['йеййи:м'] as unknown as string },
          { czech: 'její', russian: 'её (твор. п., ж.р.)', pron: ['йеййи:'] as unknown as string },
          { czech: 'jejími', russian: 'её (твор. п., мн.ч.)', pron: ['йеййи:ми'] as unknown as string },
        ],
      },
    ],
    notes: 'Склонение «její» похоже на склонение мягких прилагательных (как «cizí»).',
  },

  {
    id: 'possessive-nas',
    type: 'possessive',
    russianType: 'Притяжательные местоимения',
    description: 'Местоимение «náš» (наш) — мужской, женский, средний род и множественное число',
    rows: [
      {
        caseLabel: 'Nominativ (кто? что?)',
        forms: [
          { czech: 'náš', russian: 'наш (м.р.)', pron: ['на:ш'] as unknown as string },
          { czech: 'naše', russian: 'наша (ж.р.) / наше (ср.р.)', pron: ['на:шё'] as unknown as string },
          { czech: 'naše', russian: 'наши (мн.ч., неодуш.)', pron: ['на:шё'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Genitiv (кого? чего?)',
        forms: [
          { czech: 'našeho', russian: 'нашего', pron: ['на:шэгъо'] as unknown as string },
          { czech: 'naší', russian: 'нашей', pron: ['на:ши:'] as unknown as string },
          { czech: 'našich', russian: 'наших', pron: ['на:ших'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Dativ (кому? чему?)',
        forms: [
          { czech: 'našemu', russian: 'нашему', pron: ['на:шэму'] as unknown as string },
          { czech: 'naší', russian: 'нашей', pron: ['на:ши:'] as unknown as string },
          { czech: 'našim', russian: 'нашим', pron: ['на:шим'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Akuzativ (кого? что?)',
        forms: [
          { czech: 'náš / našeho', russian: 'наш / нашего', pron: ['на:ш / на:шэгъо'] as unknown as string },
          { czech: 'naši', russian: 'нашу', pron: ['на:ши'] as unknown as string },
          { czech: 'naše', russian: 'наши / наших (одуш.)', pron: ['на:шё'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Vokativ (кто? что! — обращение)',
        forms: [
          { czech: 'náš', russian: 'наш!', pron: ['на:ш'] as unknown as string },
          { czech: 'naše', russian: 'наша!', pron: ['на:шё'] as unknown as string },
          { czech: 'naše', russian: 'наши!', pron: ['на:шё'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Lokál (о ком? о чём?)',
        forms: [
          { czech: 'našem', russian: 'о нашем', pron: ['на:шэм'] as unknown as string },
          { czech: 'naší', russian: 'о нашей', pron: ['на:ши:'] as unknown as string },
          { czech: 'našich', russian: 'о наших', pron: ['на:ших'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Instrumentál (кем? чем?)',
        forms: [
          { czech: 'naším', russian: 'нашим', pron: ['на:ши:м'] as unknown as string },
          { czech: 'naší', russian: 'нашей', pron: ['на:ши:'] as unknown as string },
          { czech: 'našimi', russian: 'нашими', pron: ['на:шими'] as unknown as string },
        ],
      },
    ],
    notes: 'В Akuzativ ж.р. используется форма «naši» (вместо ожидаемой «naše» для одушевлённых).',
  },

  {
    id: 'possessive-vas',
    type: 'possessive',
    russianType: 'Притяжательные местоимения',
    description: 'Местоимение «váš» (ваш) — склоняется по той же модели, что и «náš»',
    rows: [
      {
        caseLabel: 'Nominativ (кто? что?)',
        forms: [
          { czech: 'váš', russian: 'ваш (м.р.)', pron: ['ва:ш'] as unknown as string },
          { czech: 'vaše', russian: 'ваша (ж.р.) / ваше (ср.р.)', pron: ['ва:шё'] as unknown as string },
          { czech: 'vaše', russian: 'ваши (мн.ч., неодуш.)', pron: ['ва:шё'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Genitiv (кого? чего?)',
        forms: [
          { czech: 'vašeho', russian: 'вашего', pron: ['ва:шэгъо'] as unknown as string },
          { czech: 'vaší', russian: 'вашей', pron: ['ва:ши:'] as unknown as string },
          { czech: 'vašich', russian: 'ваших', pron: ['ва:ших'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Dativ (кому? чему?)',
        forms: [
          { czech: 'vašemu', russian: 'вашему', pron: ['ва:шэму'] as unknown as string },
          { czech: 'vaší', russian: 'вашей', pron: ['ва:ши:'] as unknown as string },
          { czech: 'vašim', russian: 'вашим', pron: ['ва:шим'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Akuzativ (кого? что?)',
        forms: [
          { czech: 'váš / vašeho', russian: 'ваш / вашего', pron: ['ва:ш / ва:шэгъо'] as unknown as string },
          { czech: 'vaši', russian: 'вашу', pron: ['ва:ши'] as unknown as string },
          { czech: 'vaše', russian: 'ваши / ваших (одуш.)', pron: ['ва:шё'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Vokativ (кто? что! — обращение)',
        forms: [
          { czech: 'váš', russian: 'ваш!', pron: ['ва:ш'] as unknown as string },
          { czech: 'vaše', russian: 'ваша!', pron: ['ва:шё'] as unknown as string },
          { czech: 'vaše', russian: 'ваши!', pron: ['ва:шё'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Lokál (о ком? о чём?)',
        forms: [
          { czech: 'vašem', russian: 'о вашем', pron: ['ва:шэм'] as unknown as string },
          { czech: 'vaší', russian: 'о вашей', pron: ['ва:ши:'] as unknown as string },
          { czech: 'vašich', russian: 'о ваших', pron: ['ва:ших'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Instrumentál (кем? чем?)',
        forms: [
          { czech: 'vaším', russian: 'вашим', pron: ['ва:ши:м'] as unknown as string },
          { czech: 'vaší', russian: 'вашей', pron: ['ва:ши:'] as unknown as string },
          { czech: 'vašimi', russian: 'вашими', pron: ['ва:шими'] as unknown as string },
        ],
      },
    ],
    notes: 'Склонение «váš» полностью параллельно склонению «náš».',
  },

  // ===========================================================================
  // DEMONSTRATIVE PRONOUNS — Указательные местоимения
  // ===========================================================================

  {
    id: 'demonstrative-ten',
    type: 'demonstrative',
    russianType: 'Указательные местоимения',
    description: 'Местоимение «ten» (этот) — мужской, женский, средний род и множественное число',
    rows: [
      {
        caseLabel: 'Nominativ (кто? что?)',
        forms: [
          { czech: 'ten', russian: 'этот (м.р.)', pron: ['тэн'] as unknown as string },
          { czech: 'ta', russian: 'эта (ж.р.)', pron: ['та'] as unknown as string },
          { czech: 'to', russian: 'это (ср.р.)', pron: ['то'] as unknown as string },
          { czech: 'ti / ty', russian: 'эти (мн.ч., о людях / неодуш.)', pron: ['ти / ты'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Genitiv (кого? чего?)',
        forms: [
          { czech: 'toho', russian: 'этого', pron: ['тогъо'] as unknown as string },
          { czech: 'té', russian: 'этой', pron: ['тэ:'] as unknown as string },
          { czech: 'toho', russian: 'этого (ср.р.)', pron: ['тогъо'] as unknown as string },
          { czech: 'těch', russian: 'этих', pron: ['тёх'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Dativ (кому? чему?)',
        forms: [
          { czech: 'tomu', russian: 'этому', pron: ['тому'] as unknown as string },
          { czech: 'té', russian: 'этой', pron: ['тэ:'] as unknown as string },
          { czech: 'tomu', russian: 'этому (ср.р.)', pron: ['тому'] as unknown as string },
          { czech: 'těm', russian: 'этим', pron: ['тём'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Akuzativ (кого? что?)',
        forms: [
          { czech: 'ten / toho', russian: 'этот / этого', pron: ['тэн / тогъо'] as unknown as string },
          { czech: 'tu', russian: 'эту', pron: ['ту'] as unknown as string },
          { czech: 'to', russian: 'это', pron: ['то'] as unknown as string },
          { czech: 'ty', russian: 'эти / этих (одуш.)', pron: ['ты'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Vokativ (кто? что! — обращение)',
        forms: [
          { czech: 'ten', russian: 'этот!', pron: ['тэн'] as unknown as string },
          { czech: 'ta', russian: 'эта!', pron: ['та'] as unknown as string },
          { czech: 'to', russian: 'это!', pron: ['то'] as unknown as string },
          { czech: 'ti / ty', russian: 'эти!', pron: ['ти / ты'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Lokál (о ком? о чём?)',
        forms: [
          { czech: 'tom', russian: 'об этом', pron: ['том'] as unknown as string },
          { czech: 'té', russian: 'об этой', pron: ['тэ:'] as unknown as string },
          { czech: 'tom', russian: 'об этом (ср.р.)', pron: ['том'] as unknown as string },
          { czech: 'těch', russian: 'об этих', pron: ['тёх'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Instrumentál (кем? чем?)',
        forms: [
          { czech: 'tím', russian: 'этим', pron: ['ти:м'] as unknown as string },
          { czech: 'tou', russian: 'этой', pron: ['тоу'] as unknown as string },
          { czech: 'tím', russian: 'этим (ср.р.)', pron: ['ти:м'] as unknown as string },
          { czech: 'těmi', russian: 'этими', pron: ['тёми'] as unknown as string },
        ],
      },
    ],
    notes: 'Самое распространённое указательное местоимение. Форма Nom. мн.ч. «ti» используется для людей, «ty» — для неодушевлённых.',
  },

  {
    id: 'demonstrative-tento',
    type: 'demonstrative',
    russianType: 'Указательные местоимения',
    description: 'Местоимение «tento» (этот) — усиленная форма «ten»',
    rows: [
      {
        caseLabel: 'Nominativ (кто? что?)',
        forms: [
          { czech: 'tento', russian: 'этот (м.р.)', pron: ['тэто'] as unknown as string },
          { czech: 'tato', russian: 'эта (ж.р.)', pron: ['тато'] as unknown as string },
          { czech: 'toto', russian: 'это (ср.р.)', pron: ['тото'] as unknown as string },
          { czech: 'tito', russian: 'эти (мн.ч., о людях)', pron: ['тито'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Genitiv (кого? чего?)',
        forms: [
          { czech: 'tohoto', russian: 'этого', pron: ['тогъо'] as unknown as string },
          { czech: 'této', russian: 'этой', pron: ['тэ:то'] as unknown as string },
          { czech: 'tohoto', russian: 'этого (ср.р.)', pron: ['тогъо'] as unknown as string },
          { czech: 'těchto', russian: 'этих', pron: ['тёхто'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Dativ (кому? чему?)',
        forms: [
          { czech: 'tomuto', russian: 'этому', pron: ['томуто'] as unknown as string },
          { czech: 'této', russian: 'этой', pron: ['тэ:то'] as unknown as string },
          { czech: 'tomuto', russian: 'этому (ср.р.)', pron: ['томуто'] as unknown as string },
          { czech: 'těmto', russian: 'этим', pron: ['тёмто'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Akuzativ (кого? что?)',
        forms: [
          { czech: 'tento', russian: 'этот', pron: ['тэто'] as unknown as string },
          { czech: 'tuto', russian: 'эту', pron: ['туту'] as unknown as string },
          { czech: 'toto', russian: 'это', pron: ['тото'] as unknown as string },
          { czech: 'tyto', russian: 'эти', pron: ['тыто'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Vokativ (кто? что! — обращение)',
        forms: [
          { czech: 'tento', russian: 'этот!', pron: ['тэто'] as unknown as string },
          { czech: 'tato', russian: 'эта!', pron: ['тато'] as unknown as string },
          { czech: 'toto', russian: 'это!', pron: ['тото'] as unknown as string },
          { czech: 'tito', russian: 'эти!', pron: ['тито'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Lokál (о ком? о чём?)',
        forms: [
          { czech: 'tomuto', russian: 'об этом', pron: ['томуто'] as unknown as string },
          { czech: 'této', russian: 'об этой', pron: ['тэ:то'] as unknown as string },
          { czech: 'tomuto', russian: 'об этом (ср.р.)', pron: ['томуто'] as unknown as string },
          { czech: 'těchto', russian: 'об этих', pron: ['тёхто'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Instrumentál (кем? чем?)',
        forms: [
          { czech: 'tímto', russian: 'этим', pron: ['ти:мто'] as unknown as string },
          { czech: 'touto', russian: 'этой', pron: ['тоуто'] as unknown as string },
          { czech: 'tímto', russian: 'этим (ср.р.)', pron: ['ти:мто'] as unknown as string },
          { czech: 'těmito', russian: 'этими', pron: ['тёмито'] as unknown as string },
        ],
      },
    ],
    notes: '«tento» — это «ten» с усилительной частицей «-to». Используется для выделения в речи.',
  },

  {
    id: 'demonstrative-tenhle',
    type: 'demonstrative',
    russianType: 'Указательные местоимения',
    description: 'Местоимение «tenhle» (вот этот) — указывает на предмет вблизи',
    rows: [
      {
        caseLabel: 'Nominativ (кто? что?)',
        forms: [
          { czech: 'tenhle', russian: 'вот этот (м.р.)', pron: ['тэнхлё'] as unknown as string },
          { czech: 'tahle', russian: 'вот эта (ж.р.)', pron: ['тахлё'] as unknown as string },
          { czech: 'tohle', russian: 'вот это (ср.р.)', pron: ['тохлё'] as unknown as string },
          { czech: 'tito / tyhle', russian: 'вот эти (мн.ч.)', pron: ['тито / тыхлё'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Genitiv (кого? чего?)',
        forms: [
          { czech: 'tohohle', russian: 'вот этого', pron: ['тогъохлё'] as unknown as string },
          { czech: 'téhle', russian: 'вот этой', pron: ['тэ:хлё'] as unknown as string },
          { czech: 'tohohle', russian: 'вот этого (ср.р.)', pron: ['тогъохлё'] as unknown as string },
          { czech: 'těchhle', russian: 'вот этих', pron: ['тёххлё'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Dativ (кому? чему?)',
        forms: [
          { czech: 'tomuhle', russian: 'вот этому', pron: ['томухлё'] as unknown as string },
          { czech: 'téhle', russian: 'вот этой', pron: ['тэ:хлё'] as unknown as string },
          { czech: 'tomuhle', russian: 'вот этому (ср.р.)', pron: ['томухлё'] as unknown as string },
          { czech: 'těmhle', russian: 'вот этим', pron: ['тёмхлё'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Akuzativ (кого? что?)',
        forms: [
          { czech: 'tenhle / tohohle', russian: 'вот этот / вот этого', pron: ['тэнхлё / тогъохлё'] as unknown as string },
          { czech: 'tuhle', russian: 'вот эту', pron: ['тухлё'] as unknown as string },
          { czech: 'tohle', russian: 'вот это', pron: ['тохлё'] as unknown as string },
          { czech: 'tyhle', russian: 'вот эти', pron: ['тыхлё'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Vokativ (кто? что! — обращение)',
        forms: [
          { czech: 'tenhle', russian: 'вот этот!', pron: ['тэнхлё'] as unknown as string },
          { czech: 'tahle', russian: 'вот эта!', pron: ['тахлё'] as unknown as string },
          { czech: 'tohle', russian: 'вот это!', pron: ['тохлё'] as unknown as string },
          { czech: 'tito', russian: 'вот эти!', pron: ['тито'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Lokál (о ком? о чём?)',
        forms: [
          { czech: 'tomhle', russian: 'вот об этом', pron: ['томхлё'] as unknown as string },
          { czech: 'téhle', russian: 'вот об этой', pron: ['тэ:хлё'] as unknown as string },
          { czech: 'tomhle', russian: 'вот об этом (ср.р.)', pron: ['томхлё'] as unknown as string },
          { czech: 'těchhle', russian: 'вот об этих', pron: ['тёххлё'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Instrumentál (кем? чем?)',
        forms: [
          { czech: 'tímhle', russian: 'вот этим', pron: ['ти:мхлё'] as unknown as string },
          { czech: 'touhle', russian: 'вот этой', pron: ['тоухлё'] as unknown as string },
          { czech: 'tímhle', russian: 'вот этим (ср.р.)', pron: ['ти:мхлё'] as unknown as string },
          { czech: 'těma / těmi', russian: 'вот этими', pron: ['тёма / тёми'] as unknown as string },
        ],
      },
    ],
    notes: '«tenhle» аналогичен «tento», но более разговорный. Указывает на предмет, находящийся рядом с говорящим.',
  },

  // ===========================================================================
  // INTERROGATIVE PRONOUNS — Вопросительные местоимения
  // ===========================================================================

  {
    id: 'interrogative-kdo',
    type: 'interrogative',
    russianType: 'Вопросительные местоимения',
    description: 'Местоимение «kdo» (кто) — только единственное число',
    rows: [
      {
        caseLabel: 'Nominativ (кто? что?)',
        forms: [{ czech: 'kdo', russian: 'кто', pron: ['кдо'] as unknown as string }],
      },
      {
        caseLabel: 'Genitiv (кого? чего?)',
        forms: [{ czech: 'koho', russian: 'кого', pron: ['когъо'] as unknown as string }],
      },
      {
        caseLabel: 'Dativ (кому? чему?)',
        forms: [{ czech: 'komu', russian: 'кому', pron: ['кому'] as unknown as string }],
      },
      {
        caseLabel: 'Akuzativ (кого? что?)',
        forms: [{ czech: 'koho', russian: 'кого', pron: ['когъо'] as unknown as string }],
      },
      {
        caseLabel: 'Vokativ (кто? что! — обращение)',
        forms: [{ czech: '—', russian: '—', pron: '—' }],
      },
      {
        caseLabel: 'Lokál (о ком? о чём?)',
        forms: [{ czech: 'kom', russian: 'о ком', pron: ['ком'] as unknown as string }],
      },
      {
        caseLabel: 'Instrumentál (кем? чем?)',
        forms: [{ czech: 'kým', russian: 'кем', pron: ['ки:м'] as unknown as string }],
      },
    ],
    notes: 'Genitiv и Akuzativ совпадают: «koho».',
  },

  {
    id: 'interrogative-co',
    type: 'interrogative',
    russianType: 'Вопросительные местоимения',
    description: 'Местоимение «co» (что) — только единственное число',
    rows: [
      {
        caseLabel: 'Nominativ (кто? что?)',
        forms: [{ czech: 'co', russian: 'что', pron: ['цо'] as unknown as string }],
      },
      {
        caseLabel: 'Genitiv (кого? чего?)',
        forms: [{ czech: 'čeho', russian: 'чего', pron: ['чехъо'] as unknown as string }],
      },
      {
        caseLabel: 'Dativ (кому? чему?)',
        forms: [{ czech: 'čemu', russian: 'чему', pron: ['чему'] as unknown as string }],
      },
      {
        caseLabel: 'Akuzativ (кого? что?)',
        forms: [{ czech: 'co', russian: 'что', pron: ['цо'] as unknown as string }],
      },
      {
        caseLabel: 'Vokativ (кто? что! — обращение)',
        forms: [{ czech: '—', russian: '—', pron: '—' }],
      },
      {
        caseLabel: 'Lokál (о ком? о чём?)',
        forms: [{ czech: 'čem', russian: 'о чём', pron: ['чэм'] as unknown as string }],
      },
      {
        caseLabel: 'Instrumentál (кем? чем?)',
        forms: [{ czech: 'čím', russian: 'чем', pron: ['чи:м'] as unknown as string }],
      },
    ],
    notes: 'Nominativ и Akuzativ совпадают: «co».',
  },

  {
    id: 'interrogative-jaky',
    type: 'interrogative',
    russianType: 'Вопросительные местоимения',
    description: 'Местоимение «jaký» (какой) — склоняется как прилагательное твёрдой основы',
    rows: [
      {
        caseLabel: 'Nominativ (кто? что?)',
        forms: [
          { czech: 'jaký', russian: 'какой (м.р.)', pron: ['яки:'] as unknown as string },
          { czech: 'jaká', russian: 'какая (ж.р.)', pron: ['яка:'] as unknown as string },
          { czech: 'jaké', russian: 'какое (ср.р.)', pron: ['яке:'] as unknown as string },
          { czech: 'jaké', russian: 'какие (мн.ч.)', pron: ['яке:'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Genitiv (кого? чего?)',
        forms: [
          { czech: 'jakého', russian: 'какого', pron: ['якэ:гъо'] as unknown as string },
          { czech: 'jaké', russian: 'какой', pron: ['яке:'] as unknown as string },
          { czech: 'jakého', russian: 'какого (ср.р.)', pron: ['якэ:гъо'] as unknown as string },
          { czech: 'jakých', russian: 'каких', pron: ['яки:х'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Dativ (кому? чему?)',
        forms: [
          { czech: 'jakému', russian: 'какому', pron: ['якэ:му'] as unknown as string },
          { czech: 'jaké', russian: 'какой', pron: ['яке:'] as unknown as string },
          { czech: 'jakému', russian: 'какому (ср.р.)', pron: ['якэ:му'] as unknown as string },
          { czech: 'jakým', russian: 'каким', pron: ['яки:м'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Akuzativ (кого? что?)',
        forms: [
          { czech: 'jaký / jakého', russian: 'какой / какого', pron: ['яки: / якэ:гъо'] as unknown as string },
          { czech: 'jakou', russian: 'какую', pron: ['якоу'] as unknown as string },
          { czech: 'jaké', russian: 'какое', pron: ['яке:'] as unknown as string },
          { czech: 'jaké / jaké', russian: 'какие / каких', pron: ['яке:'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Vokativ (кто? что! — обращение)',
        forms: [
          { czech: 'jaký', russian: 'какой!', pron: ['яки:'] as unknown as string },
          { czech: 'jaká', russian: 'какая!', pron: ['яка:'] as unknown as string },
          { czech: 'jaké', russian: 'какое!', pron: ['яке:'] as unknown as string },
          { czech: 'jaké', russian: 'какие!', pron: ['яке:'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Lokál (о ком? о чём?)',
        forms: [
          { czech: 'jakém', russian: 'о каком', pron: ['якэ:м'] as unknown as string },
          { czech: 'jaké', russian: 'о какой', pron: ['яке:'] as unknown as string },
          { czech: 'jakém', russian: 'о каком (ср.р.)', pron: ['якэ:м'] as unknown as string },
          { czech: 'jakých', russian: 'о каких', pron: ['яки:х'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Instrumentál (кем? чем?)',
        forms: [
          { czech: 'jakým', russian: 'каким', pron: ['яки:м'] as unknown as string },
          { czech: 'jakou', russian: 'какой', pron: ['якоу'] as unknown as string },
          { czech: 'jakým', russian: 'каким (ср.р.)', pron: ['яки:м'] as unknown as string },
          { czech: 'jakými', russian: 'какими', pron: ['яки:ми'] as unknown as string },
        ],
      },
    ],
    notes: 'Склоняется как твёрдое прилагательное (образец: «mladý»).',
  },

  {
    id: 'interrogative-ci',
    type: 'interrogative',
    russianType: 'Вопросительные местоимения',
    description: 'Местоимение «čí» (чей) — одинаковая форма для всех родов',
    rows: [
      {
        caseLabel: 'Nominativ (кто? что?)',
        forms: [
          { czech: 'čí', russian: 'чей (все рода)', pron: ['чи:'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Genitiv (кого? чего?)',
        forms: [
          { czech: 'čího', russian: 'чьего', pron: ['чи:гъо'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Dativ (кому? чему?)',
        forms: [
          { czech: 'čímu', russian: 'чьему', pron: ['чи:му'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Akuzativ (кого? что?)',
        forms: [
          { czech: 'čí / čího', russian: 'чей / чьего', pron: ['чи: / чи:гъо'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Vokativ (кто? что! — обращение)',
        forms: [
          { czech: 'čí', russian: 'чей!', pron: ['чи:'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Lokál (о ком? о чём?)',
        forms: [
          { czech: 'čí', russian: 'о чьём', pron: ['чи:'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Instrumentál (кем? чем?)',
        forms: [
          { czech: 'čím', russian: 'чьим', pron: ['чи:м'] as unknown as string },
        ],
      },
    ],
    notes: 'Местоимение «čí» имеет одну и ту же форму для мужского, женского и среднего рода.',
  },

  // ===========================================================================
  // RELATIVE PRONOUNS — Относительные местоимения
  // ===========================================================================

  {
    id: 'relative-ktery',
    type: 'relative',
    russianType: 'Относительные местоимения',
    description: 'Местоимение «který» (который) — склоняется как прилагательное твёрдой основы',
    rows: [
      {
        caseLabel: 'Nominativ (кто? что?)',
        forms: [
          { czech: 'který', russian: 'который (м.р.)', pron: ['ктэри:'] as unknown as string },
          { czech: 'která', russian: 'которая (ж.р.)', pron: ['ктера:'] as unknown as string },
          { czech: 'které', russian: 'которое (ср.р.)', pron: ['ктэре:'] as unknown as string },
          { czech: 'které', russian: 'которые (мн.ч.)', pron: ['ктэре:'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Genitiv (кого? чего?)',
        forms: [
          { czech: 'kterého', russian: 'которого', pron: ['ктэрэ:гъо'] as unknown as string },
          { czech: 'které', russian: 'которой', pron: ['ктэре:'] as unknown as string },
          { czech: 'kterého', russian: 'которого (ср.р.)', pron: ['ктэрэ:гъо'] as unknown as string },
          { czech: 'kterých', russian: 'которых', pron: ['ктэри:х'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Dativ (кому? чему?)',
        forms: [
          { czech: 'kterému', russian: 'которому', pron: ['ктэрэ:му'] as unknown as string },
          { czech: 'které', russian: 'которой', pron: ['ктэре:'] as unknown as string },
          { czech: 'kterému', russian: 'которому (ср.р.)', pron: ['ктэрэ:му'] as unknown as string },
          { czech: 'kterým', russian: 'которым', pron: ['ктэри:м'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Akuzativ (кого? что?)',
        forms: [
          { czech: 'který / kterého', russian: 'который / которого', pron: ['ктэри: / ктэрэ:гъо'] as unknown as string },
          { czech: 'kterou', russian: 'которую', pron: ['ктэроу'] as unknown as string },
          { czech: 'které', russian: 'которое', pron: ['ктэре:'] as unknown as string },
          { czech: 'které / které', russian: 'которые / которых', pron: ['ктэре:'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Vokativ (кто? что! — обращение)',
        forms: [
          { czech: 'který', russian: 'который!', pron: ['ктэри:'] as unknown as string },
          { czech: 'která', russian: 'которая!', pron: ['ктера:'] as unknown as string },
          { czech: 'které', russian: 'которое!', pron: ['ктэре:'] as unknown as string },
          { czech: 'které', russian: 'которые!', pron: ['ктэре:'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Lokál (о ком? о чём?)',
        forms: [
          { czech: 'kterém', russian: 'о котором', pron: ['ктэрэ:м'] as unknown as string },
          { czech: 'které', russian: 'о которой', pron: ['ктэре:'] as unknown as string },
          { czech: 'kterém', russian: 'о котором (ср.р.)', pron: ['ктэрэ:м'] as unknown as string },
          { czech: 'kterých', russian: 'о которых', pron: ['ктэри:х'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Instrumentál (кем? чем?)',
        forms: [
          { czech: 'kterým', russian: 'которым', pron: ['ктэри:м'] as unknown as string },
          { czech: 'kterou', russian: 'которой', pron: ['ктэроу'] as unknown as string },
          { czech: 'kterým', russian: 'которым (ср.р.)', pron: ['ктэри:м'] as unknown as string },
          { czech: 'kterými', russian: 'которыми', pron: ['ктэри:ми'] as unknown as string },
        ],
      },
    ],
    notes: 'Используется для связи придаточных предложений. Склоняется как «jaký».',
  },

  {
    id: 'relative-co',
    type: 'relative',
    russianType: 'Относительные местоимения',
    description: 'Местоимение «co» (что) в роли относительного — совпадает с вопросительным «co»',
    rows: [
      {
        caseLabel: 'Nominativ (кто? что?)',
        forms: [{ czech: 'co', russian: 'что (относит.)', pron: ['цо'] as unknown as string }],
      },
      {
        caseLabel: 'Genitiv (кого? чего?)',
        forms: [{ czech: 'čeho', russian: 'чего', pron: ['чехъо'] as unknown as string }],
      },
      {
        caseLabel: 'Dativ (кому? чему?)',
        forms: [{ czech: 'čemu', russian: 'чему', pron: ['чему'] as unknown as string }],
      },
      {
        caseLabel: 'Akuzativ (кого? что?)',
        forms: [{ czech: 'co', russian: 'что', pron: ['цо'] as unknown as string }],
      },
      {
        caseLabel: 'Vokativ (кто? что! — обращение)',
        forms: [{ czech: '—', russian: '—', pron: '—' }],
      },
      {
        caseLabel: 'Lokál (о ком? о чём?)',
        forms: [{ czech: 'čem', russian: 'о чём', pron: ['чэм'] as unknown as string }],
      },
      {
        caseLabel: 'Instrumentál (кем? чем?)',
        forms: [{ czech: 'čím', russian: 'чем', pron: ['чи:м'] as unknown as string }],
      },
    ],
    notes: 'Относительное «co» используется для неодушевлённых предметов: «To je kniha, co mě zajímá» (Это книга, которая мне интересна).',
  },

  // ===========================================================================
  // INDEFINITE PRONOUNS — Неопределённые местоимения
  // ===========================================================================

  {
    id: 'indefinite-nekdo',
    type: 'indefinite',
    russianType: 'Неопределённые местоимения',
    description: 'Местоимение «někdo» (кто-то) — неопределённое местоимение для лица',
    rows: [
      {
        caseLabel: 'Nominativ (кто? что?)',
        forms: [{ czech: 'někdo', russian: 'кто-то', pron: ['нёкдо'] as unknown as string }],
      },
      {
        caseLabel: 'Genitiv (кого? чего?)',
        forms: [{ czech: 'někoho', russian: 'кого-то', pron: ['нёкогъо'] as unknown as string }],
      },
      {
        caseLabel: 'Dativ (кому? чему?)',
        forms: [{ czech: 'někomu', russian: 'кому-то', pron: ['нёкому'] as unknown as string }],
      },
      {
        caseLabel: 'Akuzativ (кого? что?)',
        forms: [{ czech: 'někoho', russian: 'кого-то', pron: ['нёкогъо'] as unknown as string }],
      },
      {
        caseLabel: 'Vokativ (кто? что! — обращение)',
        forms: [{ czech: '—', russian: '—', pron: '—' }],
      },
      {
        caseLabel: 'Lokál (о ком? о чём?)',
        forms: [{ czech: 'někom', russian: 'о ком-то', pron: ['нёком'] as unknown as string }],
      },
      {
        caseLabel: 'Instrumentál (кем? чем?)',
        forms: [{ czech: 'někým', russian: 'кем-то', pron: ['нёки:м'] as unknown as string }],
      },
    ],
    notes: 'Образуется от «kdo» с приставкой «ně-».',
  },

  {
    id: 'indefinite-neco',
    type: 'indefinite',
    russianType: 'Неопределённые местоимения',
    description: 'Местоимение «něco» (что-то) — неопределённое местоимение для вещи',
    rows: [
      {
        caseLabel: 'Nominativ (кто? что?)',
        forms: [{ czech: 'něco', russian: 'что-то', pron: ['нёцо'] as unknown as string }],
      },
      {
        caseLabel: 'Genitiv (кого? чего?)',
        forms: [{ czech: 'něčeho', russian: 'чего-то', pron: ['нёчехъо'] as unknown as string }],
      },
      {
        caseLabel: 'Dativ (кому? чему?)',
        forms: [{ czech: 'něčemu', russian: 'чему-то', pron: ['нёчему'] as unknown as string }],
      },
      {
        caseLabel: 'Akuzativ (кого? что?)',
        forms: [{ czech: 'něco', russian: 'что-то', pron: ['нёцо'] as unknown as string }],
      },
      {
        caseLabel: 'Vokativ (кто? что! — обращение)',
        forms: [{ czech: '—', russian: '—', pron: '—' }],
      },
      {
        caseLabel: 'Lokál (о ком? о чём?)',
        forms: [{ czech: 'něčem', russian: 'о чём-то', pron: ['нёчэм'] as unknown as string }],
      },
      {
        caseLabel: 'Instrumentál (кем? чем?)',
        forms: [{ czech: 'něčím', russian: 'чем-то', pron: ['нёчи:м'] as unknown as string }],
      },
    ],
    notes: 'Образуется от «co» с приставкой «ně-». Nominativ и Akuzativ совпадают.',
  },

  {
    id: 'indefinite-jaky',
    type: 'indefinite',
    russianType: 'Неопределённые местоимения',
    description: 'Местоимение «nějaký» (какой-то) — склоняется как твёрдое прилагательное',
    rows: [
      {
        caseLabel: 'Nominativ (кто? что?)',
        forms: [
          { czech: 'nějaký', russian: 'какой-то (м.р.)', pron: ['нёяки:'] as unknown as string },
          { czech: 'nějaká', russian: 'какая-то (ж.р.)', pron: ['нёяка:'] as unknown as string },
          { czech: 'nějaké', russian: 'какое-то (ср.р.)', pron: ['нёяке:'] as unknown as string },
          { czech: 'nějaké', russian: 'какие-то (мн.ч.)', pron: ['нёяке:'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Genitiv (кого? чего?)',
        forms: [
          { czech: 'nějakého', russian: 'какого-то', pron: ['нёякэ:гъо'] as unknown as string },
          { czech: 'nějaké', russian: 'какой-то', pron: ['нёяке:'] as unknown as string },
          { czech: 'nějakého', russian: 'какого-то (ср.р.)', pron: ['нёякэ:гъо'] as unknown as string },
          { czech: 'nějakých', russian: 'каких-то', pron: ['нёяки:х'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Dativ (кому? чему?)',
        forms: [
          { czech: 'nějakému', russian: 'какому-то', pron: ['нёякэ:му'] as unknown as string },
          { czech: 'nějaké', russian: 'какой-то', pron: ['нёяке:'] as unknown as string },
          { czech: 'nějakému', russian: 'какому-то (ср.р.)', pron: ['нёякэ:му'] as unknown as string },
          { czech: 'nějakým', russian: 'каким-то', pron: ['нёяки:м'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Akuzativ (кого? что?)',
        forms: [
          { czech: 'nějaký / nějakého', russian: 'какой-то / какого-то', pron: ['нёяки: / нёякэ:гъо'] as unknown as string },
          { czech: 'nějakou', russian: 'какую-то', pron: ['нёякоу'] as unknown as string },
          { czech: 'nějaké', russian: 'какое-то', pron: ['нёяке:'] as unknown as string },
          { czech: 'nějaké / nějaké', russian: 'какие-то / каких-то', pron: ['нёяке:'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Vokativ (кто? что! — обращение)',
        forms: [
          { czech: 'nějaký', russian: 'какой-то!', pron: ['нёяки:'] as unknown as string },
          { czech: 'nějaká', russian: 'какая-то!', pron: ['нёяка:'] as unknown as string },
          { czech: 'nějaké', russian: 'какое-то!', pron: ['нёяке:'] as unknown as string },
          { czech: 'nějaké', russian: 'какие-то!', pron: ['нёяке:'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Lokál (о ком? о чём?)',
        forms: [
          { czech: 'nějakém', russian: 'о каком-то', pron: ['нёякэ:м'] as unknown as string },
          { czech: 'nějaké', russian: 'о какой-то', pron: ['нёяке:'] as unknown as string },
          { czech: 'nějakém', russian: 'о каком-то (ср.р.)', pron: ['нёякэ:м'] as unknown as string },
          { czech: 'nějakých', russian: 'о каких-то', pron: ['нёяки:х'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Instrumentál (кем? чем?)',
        forms: [
          { czech: 'nějakým', russian: 'каким-то', pron: ['нёяки:м'] as unknown as string },
          { czech: 'nějakou', russian: 'какой-то', pron: ['нёякоу'] as unknown as string },
          { czech: 'nějakým', russian: 'каким-то (ср.р.)', pron: ['нёяки:м'] as unknown as string },
          { czech: 'nějakými', russian: 'какими-то', pron: ['нёяки:ми'] as unknown as string },
        ],
      },
    ],
    notes: 'Образуется от «jaký» с приставкой «ně-». Склонение как у «jaký».',
  },

  // ===========================================================================
  // NEGATIVE PRONOUNS — Отрицательные местоимения
  // ===========================================================================

  {
    id: 'negative-nikdo',
    type: 'negative',
    russianType: 'Отрицательные местоимения',
    description: 'Местоимение «nikdo» (никто) — отрицательное местоимение для лица',
    rows: [
      {
        caseLabel: 'Nominativ (кто? что?)',
        forms: [{ czech: 'nikdo', russian: 'никто', pron: ['никдо'] as unknown as string }],
      },
      {
        caseLabel: 'Genitiv (кого? чего?)',
        forms: [{ czech: 'nikoho', russian: 'никого', pron: ['никогъо'] as unknown as string }],
      },
      {
        caseLabel: 'Dativ (кому? чему?)',
        forms: [{ czech: 'nikomu', russian: 'никому', pron: ['ником'] as unknown as string }],
      },
      {
        caseLabel: 'Akuzativ (кого? что?)',
        forms: [{ czech: 'nikoho', russian: 'никого', pron: ['никогъо'] as unknown as string }],
      },
      {
        caseLabel: 'Vokativ (кто? что! — обращение)',
        forms: [{ czech: '—', russian: '—', pron: '—' }],
      },
      {
        caseLabel: 'Lokál (о ком? о чём?)',
        forms: [{ czech: 'nikom', russian: 'ни о ком', pron: ['ником'] as unknown as string }],
      },
      {
        caseLabel: 'Instrumentál (кем? чем?)',
        forms: [{ czech: 'nikým', russian: 'никем', pron: ['ники:м'] as unknown as string }],
      },
    ],
    notes: 'Образуется от «kdo» с отрицательной приставкой «ni-». Требует отрицательного глагола в предложении.',
  },

  {
    id: 'negative-nic',
    type: 'negative',
    russianType: 'Отрицательные местоимения',
    description: 'Местоимение «nic» (ничто) — отрицательное местоимение для вещи',
    rows: [
      {
        caseLabel: 'Nominativ (кто? что?)',
        forms: [{ czech: 'nic', russian: 'ничто / ничего', pron: ['ниц'] as unknown as string }],
      },
      {
        caseLabel: 'Genitiv (кого? чего?)',
        forms: [{ czech: 'ničeho', russian: 'ничего', pron: ['ничехъо'] as unknown as string }],
      },
      {
        caseLabel: 'Dativ (кому? чему?)',
        forms: [{ czech: 'ničemu', russian: 'ничему', pron: ['ничему'] as unknown as string }],
      },
      {
        caseLabel: 'Akuzativ (кого? что?)',
        forms: [{ czech: 'nic', russian: 'ничто', pron: ['ниц'] as unknown as string }],
      },
      {
        caseLabel: 'Vokativ (кто? что! — обращение)',
        forms: [{ czech: '—', russian: '—', pron: '—' }],
      },
      {
        caseLabel: 'Lokál (о ком? о чём?)',
        forms: [{ czech: 'ničem', russian: 'ни о чём', pron: ['ничэм'] as unknown as string }],
      },
      {
        caseLabel: 'Instrumentál (кем? чем?)',
        forms: [{ czech: 'ničím', russian: 'ничем', pron: ['ничи:м'] as unknown as string }],
      },
    ],
    notes: 'Образуется от «co» с отрицательной приставкой «ni-».',
  },

  {
    id: 'negative-zadny',
    type: 'negative',
    russianType: 'Отрицательные местоимения',
    description: 'Местоимение «žádný» (никакой / ни один) — склоняется как прилагательное',
    rows: [
      {
        caseLabel: 'Nominativ (кто? что?)',
        forms: [
          { czech: 'žádný', russian: 'никакой (м.р.)', pron: ['жа:дни:'] as unknown as string },
          { czech: 'žádná', russian: 'никакая (ж.р.)', pron: ['жа:дна:'] as unknown as string },
          { czech: 'žádné', russian: 'никакое (ср.р.)', pron: ['жа:днё'] as unknown as string },
          { czech: 'žádné', russian: 'никакие (мн.ч.)', pron: ['жа:днё'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Genitiv (кого? чего?)',
        forms: [
          { czech: 'žádného', russian: 'никакого', pron: ['жа:днэ:гъо'] as unknown as string },
          { czech: 'žádné', russian: 'никакой', pron: ['жа:днё'] as unknown as string },
          { czech: 'žádného', russian: 'никакого (ср.р.)', pron: ['жа:днэ:гъо'] as unknown as string },
          { czech: 'žádných', russian: 'никаких', pron: ['жа:дни:х'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Dativ (кому? чему?)',
        forms: [
          { czech: 'žádnému', russian: 'никакому', pron: ['жа:днэ:му'] as unknown as string },
          { czech: 'žádné', russian: 'никакой', pron: ['жа:днё'] as unknown as string },
          { czech: 'žádnému', russian: 'никакому (ср.р.)', pron: ['жа:днэ:му'] as unknown as string },
          { czech: 'žádným', russian: 'никаким', pron: ['жа:дни:м'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Akuzativ (кого? что?)',
        forms: [
          { czech: 'žádný / žádného', russian: 'никакой / никакого', pron: ['жа:дни: / жа:днэ:гъо'] as unknown as string },
          { czech: 'žádnou', russian: 'никакую', pron: ['жа:дноу'] as unknown as string },
          { czech: 'žádné', russian: 'никакое', pron: ['жа:днё'] as unknown as string },
          { czech: 'žádné / žádné', russian: 'никакие / никаких', pron: ['жа:днё'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Vokativ (кто? что! — обращение)',
        forms: [
          { czech: 'žádný', russian: 'никакой!', pron: ['жа:дни:'] as unknown as string },
          { czech: 'žádná', russian: 'никакая!', pron: ['жа:дна:'] as unknown as string },
          { czech: 'žádné', russian: 'никакое!', pron: ['жа:днё'] as unknown as string },
          { czech: 'žádné', russian: 'никакие!', pron: ['жа:днё'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Lokál (о ком? о чём?)',
        forms: [
          { czech: 'žádném', russian: 'ни о каком', pron: ['жа:днэ:м'] as unknown as string },
          { czech: 'žádné', russian: 'ни о какой', pron: ['жа:днё'] as unknown as string },
          { czech: 'žádném', russian: 'ни о каком (ср.р.)', pron: ['жа:дnэ:м'] as unknown as string },
          { czech: 'žádných', russian: 'ни о каких', pron: ['жа:дни:х'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Instrumentál (кем? чем?)',
        forms: [
          { czech: 'žádným', russian: 'никаким', pron: ['жа:дни:м'] as unknown as string },
          { czech: 'žádnou', russian: 'никакой', pron: ['жа:дноу'] as unknown as string },
          { czech: 'žádným', russian: 'никаким (ср.р.)', pron: ['жа:дни:м'] as unknown as string },
          { czech: 'žádnými', russian: 'никакими', pron: ['жа:дни:ми'] as unknown as string },
        ],
      },
    ],
    notes: '«žádný» требует отрицания в предложении. Может означать «ни один», «никакой».',
  },

  // ===========================================================================
  // REFLEXIVE PRONOUNS — Возвратные местоимения
  // ===========================================================================

  {
    id: 'reflexive-se',
    type: 'reflexive',
    russianType: 'Возвратные местоимения',
    description: 'Возвратное местоимение «se» (себя) — короткие и полные формы',
    rows: [
      {
        caseLabel: 'Nominativ (кто? что?)',
        forms: [{ czech: '—', russian: '— (нет формы)', pron: '—' }],
      },
      {
        caseLabel: 'Genitiv (кого? чего?)',
        forms: [
          { czech: 'se', russian: 'себя (кратк.)', pron: ['сё'] as unknown as string },
          { czech: 'sebe', russian: 'себя (полн.)', pron: ['себё'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Dativ (кому? чему?)',
        forms: [
          { czech: 'si', russian: 'себе (кратк.)', pron: ['си'] as unknown as string },
          { czech: 'sobě', russian: 'себе (полн.)', pron: ['sobё'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Akuzativ (кого? что?)',
        forms: [
          { czech: 'se', russian: 'себя (кратк.)', pron: ['сё'] as unknown as string },
          { czech: 'sebe', russian: 'себя (полн.)', pron: ['себё'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Vokativ (кто? что! — обращение)',
        forms: [{ czech: '—', russian: '—', pron: '—' }],
      },
      {
        caseLabel: 'Lokál (о ком? о чём?)',
        forms: [
          { czech: '—', russian: '— (кратк.)', pron: '—' },
          { czech: 'sobě', russian: 'о себе (полн.)', pron: ['sobё'] as unknown as string },
        ],
      },
      {
        caseLabel: 'Instrumentál (кем? чем?)',
        forms: [
          { czech: '—', russian: '— (кратк.)', pron: '—' },
          { czech: 'sebou', russian: 'собой (полн.)', pron: ['себоу'] as unknown as string },
        ],
      },
    ],
    notes: 'У возвратного местоимения нет Nominativ. Краткие формы (se, si, sobě) — самые употребительные, стоят после глагола или после предлога. Полная форма «sebe» используется после предлога для эмфазы: «pro sebe» (для себя).',
  },
];
