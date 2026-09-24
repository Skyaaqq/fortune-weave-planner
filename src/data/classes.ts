import type { GameClass } from '../domain/models';
// 社区整理表摘录（2026-09-24），逐项匹配现有职业；未确认对应保留未知。
export const classes: GameClass[] = [
  {
    id: "fighter",
    nameEn: "Fighter",
    nameZh: "斗士",
    tier: "basic",
    growthModifiers: {
      hp: 10,
      str: 10,
      mag: 0,
      spd: 0,
      dex: 0,
      def: 0,
      res: 0,
      lck: 0,
      cha: 0
    },
    nameEvidence: "prototype-screenshot-claim",
    spoiler: false,
    movement: 4,
    examAndUnlock: "剑术/斧术/格斗术任意一项D、道具 初级考试票证×1（推荐LV5、名声LV1）",
    skillExp: "剑术+1、斧术+1、步兵术+1",
    traits: "斗士系、步兵",
    innateSkills: [],
    masteryExp: 30,
    masterySkill: "【攻击的基本】",
    sourceRow: 6
  },
  {
    id: "hunter",
    nameEn: "Hunter",
    nameZh: "猎兵",
    tier: "basic",
    growthModifiers: {
      hp: 10,
      str: 0,
      mag: 0,
      spd: 10,
      dex: 10,
      def: 0,
      res: 0,
      lck: 0,
      cha: 0
    },
    nameEvidence: "prototype-screenshot-claim",
    spoiler: false,
    movement: 4,
    examAndUnlock: "剑术/箭术任意一项D、道具 初级考试票证×1（推荐LV5、名声LV1）",
    skillExp: "剑术+1、弓术+1、步兵术+1",
    traits: "猎兵系、步兵",
    innateSkills: [],
    masteryExp: 30,
    masterySkill: "【狩猎的基本】",
    sourceRow: 7
  },
  {
    id: "soldier",
    nameEn: "Soldier",
    nameZh: "士兵",
    tier: "basic",
    growthModifiers: {
      hp: 10,
      str: 5,
      mag: 0,
      spd: -5,
      dex: 5,
      def: 10,
      res: 0,
      lck: 0,
      cha: 0
    },
    nameEvidence: "prototype-screenshot-claim",
    spoiler: false,
    movement: 4,
    examAndUnlock: "斧术/枪术任意一项D、道具 初级考试票证×1（推荐LV5、名声LV1）",
    skillExp: "枪术+1、斧术+1、重装术+1",
    traits: "士兵系、【重装】",
    innateSkills: [],
    masteryExp: 30,
    masterySkill: "【防卫的基本】",
    sourceRow: 8
  },
  {
    id: "ornius-rider",
    nameEn: "Ornius Rider",
    nameZh: "飞鸵兵",
    tier: "basic",
    growthModifiers: {
      hp: 10,
      str: 0,
      mag: 0,
      spd: 10,
      dex: 0,
      def: 0,
      res: 5,
      lck: 5,
      cha: 0
    },
    nameEvidence: "prototype-screenshot-claim",
    spoiler: false,
    movement: 5,
    examAndUnlock: "枪术/斧术任意一项D&马术E+、道具 初级考试票证×1（推荐LV5、名声LV1）",
    skillExp: "枪术+1、马术+1、飞行术+1",
    traits: "飞行系、【骑兵】",
    innateSkills: [
      "【乘降术】"
    ],
    masteryExp: 30,
    masterySkill: "【攻势的基本】",
    sourceRow: 9
  },
  {
    id: "diviner",
    nameEn: "Diviner",
    nameZh: "诅咒师",
    tier: "basic",
    growthModifiers: {
      hp: 5,
      str: -5,
      mag: 15,
      spd: 0,
      dex: 5,
      def: -5,
      res: 10,
      lck: 0,
      cha: 0
    },
    nameEvidence: "prototype-screenshot-claim",
    spoiler: false,
    movement: 4,
    examAndUnlock: "黑魔术/白魔术任意一项D、道具 初级考试票证×1（推荐LV5、名声LV1）",
    skillExp: "黑魔术+1、白魔术+1",
    traits: "魔道系、步兵",
    innateSkills: [],
    masteryExp: 30,
    masterySkill: "【魔道的基本】",
    sourceRow: 10
  },
  {
    id: "myrmidon",
    nameEn: "Myrmidon",
    nameZh: "剑客",
    tier: "intermediate",
    growthModifiers: {
      hp: 10,
      str: 0,
      mag: 0,
      spd: 15,
      dex: 10,
      def: 0,
      res: 0,
      lck: 5,
      cha: 5
    },
    nameEvidence: "prototype-screenshot-claim",
    spoiler: false,
    movement: 5,
    examAndUnlock: "剑术C、道具 中级考试票证×1（推荐LV20、名声LV4）",
    skillExp: "剑术+2、步兵术+1",
    traits: "斗士系、步兵",
    innateSkills: [
      "【战技装备+1】",
      "【剑必杀+3】"
    ],
    masteryExp: 60,
    masterySkill: "【技巧精湛】",
    sourceRow: 11
  },
  {
    id: "brigand",
    nameEn: "Brigand",
    nameZh: "土匪",
    tier: "intermediate",
    growthModifiers: {
      hp: 15,
      str: 15,
      mag: -5,
      spd: 5,
      dex: 0,
      def: 5,
      res: 0,
      lck: 0,
      cha: 5
    },
    nameEvidence: "prototype-screenshot-claim",
    spoiler: false,
    movement: 5,
    examAndUnlock: "剑术/斧术任意一项C、道具 中级考试票证×1（推荐LV20、名声LV4）",
    skillExp: "斧术+2",
    traits: "斗士系、步兵",
    innateSkills: [
      "【战技装备+1】",
      "【斧命中+3】"
    ],
    masteryExp: 60,
    masterySkill: "【重整态势】",
    sourceRow: 12
  },
  {
    id: "pugilist",
    nameEn: "Pugilist",
    nameZh: "斗拳手",
    tier: "intermediate",
    growthModifiers: {
      hp: 15,
      str: 10,
      mag: -5,
      spd: 10,
      dex: 5,
      def: 10,
      res: 0,
      lck: 0,
      cha: 5
    },
    nameEvidence: "prototype-screenshot-claim",
    spoiler: false,
    movement: 5,
    examAndUnlock: "格斗术C、道具 中级考试票证×1（推荐LV20、名声LV4）",
    skillExp: "格斗术+2、步兵术+2",
    traits: "斗士系、步兵",
    innateSkills: [
      "【战技装备+1】",
      "【格斗回避+3】"
    ],
    masteryExp: 60,
    masterySkill: "【攻击&远离】",
    sourceRow: 13
  },
  {
    id: "archer",
    nameEn: "Archer",
    nameZh: "弓箭手",
    tier: "intermediate",
    growthModifiers: {
      hp: 10,
      str: 0,
      mag: 0,
      spd: 10,
      dex: 15,
      def: 5,
      res: 0,
      lck: 5,
      cha: 5
    },
    nameEvidence: "prototype-screenshot-claim",
    spoiler: false,
    movement: 5,
    examAndUnlock: "箭术C、道具 中级考试票证×1（推荐LV20、名声LV4）",
    skillExp: "箭术+2、步兵术+1",
    traits: "猎兵系、步兵",
    innateSkills: [
      "【战技装备+1】",
      "【弓命中+5】"
    ],
    masteryExp: 60,
    masterySkill: "【状态不错】",
    sourceRow: 14
  },
  {
    id: "rogue",
    nameEn: "Rogue",
    nameZh: "恶棍",
    tier: "intermediate",
    growthModifiers: {
      hp: 10,
      str: 0,
      mag: 0,
      spd: 15,
      dex: 10,
      def: 0,
      res: 5,
      lck: 5,
      cha: 0
    },
    nameEvidence: "prototype-screenshot-claim",
    spoiler: false,
    movement: 5,
    examAndUnlock: "剑术/箭术任意一项C、道具 中级考试票证×1（推荐LV20、名声LV4）",
    skillExp: "剑术+1、箭术+1、步兵术+2",
    traits: "猎兵系、步兵",
    innateSkills: [
      "【战技装备+1】",
      "【开锁】",
      "【探索术】"
    ],
    masteryExp: 60,
    masterySkill: "【暗影隐身】",
    sourceRow: 15
  },
  {
    id: "armored-knight",
    nameEn: "Armored Knight",
    nameZh: "重装步兵",
    tier: "intermediate",
    growthModifiers: {
      hp: 10,
      str: 10,
      mag: -5,
      spd: -5,
      dex: 5,
      def: 25,
      res: -5,
      lck: 0,
      cha: 5
    },
    nameEvidence: "prototype-screenshot-claim",
    spoiler: false,
    movement: 4,
    examAndUnlock: "枪术/斧术任意一项C&重装术E+、道具 中级考试票证×1（推荐LV20、名声LV4）",
    skillExp: "枪术+1、斧术+1、重装术+2",
    traits: "士兵系、【重装】",
    innateSkills: [
      "【战技装备+1】",
      "【后攻防守+3】"
    ],
    masteryExp: 60,
    masterySkill: "【大反击】",
    sourceRow: 16
  },
  {
    id: "light-cavalry",
    nameEn: "Light Cavalry",
    nameZh: "轻骑兵",
    tier: "intermediate",
    growthModifiers: {
      hp: 10,
      str: 5,
      mag: -5,
      spd: 5,
      dex: 0,
      def: 5,
      res: 0,
      lck: 5,
      cha: 10
    },
    nameEvidence: "prototype-screenshot-claim",
    spoiler: false,
    movement: 6,
    examAndUnlock: "剑术/枪术任意一项C&马术E+、道具 中级考试票证×1（推荐LV20、名声LV4）",
    skillExp: "枪术+1、马术+2",
    traits: "士兵系、【骑兵】",
    innateSkills: [
      "【乘降术】"
    ],
    masteryExp: 60,
    masterySkill: "【体力强化】",
    sourceRow: 17
  },
  {
    id: "charioteer",
    nameEn: "Charioteer",
    nameZh: "战车兵",
    tier: "intermediate",
    growthModifiers: {
      hp: 10,
      str: 5,
      mag: -5,
      spd: -5,
      dex: 15,
      def: 10,
      res: 0,
      lck: 5,
      cha: 10
    },
    nameEvidence: "prototype-screenshot-claim",
    spoiler: false,
    movement: 5,
    examAndUnlock: "箭术C&马术D、道具 中级考试票证×1（推荐LV20、名声LV4）",
    skillExp: "箭术+2、马术+1",
    traits: "士兵系、【骑兵】",
    innateSkills: [
      "【战车装甲】",
      "【战车兵的战术】",
      "【战车兵之道】"
    ],
    masteryExp: 60,
    masterySkill: "【突击态势】",
    sourceRow: 18
  },
  {
    id: "wing-soldier",
    nameEn: "Wing Soldier",
    nameZh: "天翼兵",
    tier: "intermediate",
    growthModifiers: {
      hp: 10,
      str: 0,
      mag: 5,
      spd: 0,
      dex: 5,
      def: 5,
      res: 5,
      lck: 5,
      cha: 10
    },
    nameEvidence: "prototype-screenshot-claim",
    spoiler: false,
    movement: 6,
    examAndUnlock: "剑术/枪术任意一项C&飞行术E+、道具 中级考试票证×1（推荐LV20、名声LV4）",
    restriction: "女性专用",
    skillExp: "剑术+1、枪术+1、飞行术+2",
    traits: "飞行系、【飞行】",
    innateSkills: [
      "【乘降术】"
    ],
    masteryExp: 60,
    masterySkill: "【天马的护翼】",
    sourceRow: 20
  },
  {
    id: "shaman",
    nameEn: "Shaman",
    nameZh: "萨满巫师",
    tier: "intermediate",
    growthModifiers: {
      hp: 5,
      str: -5,
      mag: 15,
      spd: 10,
      dex: 10,
      def: -10,
      res: 10,
      lck: 10,
      cha: 0
    },
    nameEvidence: "prototype-screenshot-claim",
    spoiler: false,
    movement: 5,
    examAndUnlock: "黑魔术C+、道具 中级考试票证×1（推荐LV20、名声LV4）",
    skillExp: "剑术+1、黑魔术+2、白魔术+1",
    traits: "魔道系、步兵",
    innateSkills: [
      "【黑魔术的探究】",
      "【魔法命中+3】"
    ],
    masteryExp: 60,
    masterySkill: "【技巧咒缚】",
    sourceRow: 21
  },
  {
    id: "priest",
    nameEn: "Priest",
    nameZh: "牧师",
    tier: "intermediate",
    growthModifiers: {
      hp: 5,
      str: -5,
      mag: 10,
      spd: 5,
      dex: 5,
      def: -10,
      res: 15,
      lck: 15,
      cha: 10
    },
    nameEvidence: "prototype-screenshot-claim",
    spoiler: false,
    movement: 5,
    examAndUnlock: "白魔术C+、道具 中级考试票证×1（推荐LV20、名声LV4）",
    skillExp: "格斗术+1、黑魔术+1、白魔术+2",
    traits: "魔道系、步兵",
    innateSkills: [
      "【白魔术的探究】",
      "【魔法回复+5】"
    ],
    masteryExp: 60,
    masterySkill: "【信仰心】",
    sourceRow: 22
  },
  {
    id: "shido",
    nameEn: "Shido",
    nameZh: "侍道",
    tier: "advanced",
    growthModifiers: {
      hp: 10,
      str: 5,
      mag: 0,
      spd: 15,
      dex: 10,
      def: 0,
      res: -5,
      lck: 5,
      cha: 5
    },
    nameEvidence: "prototype-screenshot-claim",
    spoiler: false,
    movement: 5,
    examAndUnlock: "剑术B、道具 上级考试票证×1（推荐LV35、名声LV8）",
    skillExp: "剑术+3、枪术+1、步兵术+2",
    traits: "斗士系、步兵",
    innateSkills: [
      "【战技装备+2】",
      "【剑必杀+5】"
    ],
    masteryExp: 100,
    masterySkill: "【残心】",
    sourceRow: 23
  },
  {
    id: "warrior",
    nameEn: "Warrior",
    nameZh: "勇士",
    tier: "advanced",
    growthModifiers: {
      hp: 20,
      str: 20,
      mag: -5,
      spd: 0,
      dex: 0,
      def: 5,
      res: -5,
      lck: 0,
      cha: 5
    },
    nameEvidence: "prototype-screenshot-claim",
    spoiler: false,
    movement: 5,
    examAndUnlock: "剑术/斧术/格斗术任意一项B、道具 上级考试票证×1（推荐LV35、名声LV8）",
    skillExp: "剑术+2、斧术+3、格斗术+2、步兵术+1",
    traits: "斗士系、步兵",
    innateSkills: [
      "【战技装备+2】",
      "【斧命中+5】",
      "【格斗命中+5】"
    ],
    masteryExp: 100,
    masterySkill: "【熟练之技】",
    sourceRow: 24
  },
  {
    id: "sniper",
    nameEn: "Sniper",
    nameZh: "狙击手",
    tier: "advanced",
    growthModifiers: {
      hp: 10,
      str: 5,
      mag: 0,
      spd: 10,
      dex: 10,
      def: 5,
      res: 5,
      lck: 5,
      cha: 5
    },
    nameEvidence: "prototype-screenshot-claim",
    spoiler: false,
    movement: 5,
    examAndUnlock: "箭术B、道具 上级考试票证×1（推荐LV35、名声LV8）",
    skillExp: "箭术+3、步兵术+2",
    traits: "猎兵系、步兵",
    innateSkills: [
      "【战技装备+2】",
      "【弓命中+10】"
    ],
    masteryExp: 100,
    masterySkill: "【射击专家】",
    sourceRow: 25
  },
  {
    id: "forest-knight",
    nameEn: "Forest Knight",
    nameZh: "森林骑士",
    tier: "advanced",
    growthModifiers: {
      hp: 10,
      str: 5,
      mag: 0,
      spd: 10,
      dex: 10,
      def: 5,
      res: 5,
      lck: 5,
      cha: 5
    },
    nameEvidence: "prototype-screenshot-claim",
    spoiler: false,
    movement: 6,
    examAndUnlock: "箭术B&马术D、道具 上级考试票证×1（推荐LV35、名声LV8）",
    skillExp: "剑术+1、箭术+2、马术+2",
    traits: "猎兵系、【骑兵】",
    innateSkills: [
      "【乘降术】",
      "【战技装备+1】",
      "【弓命中+5】"
    ],
    masteryExp: 100,
    masterySkill: "【猎人之眼】",
    sourceRow: 26
  },
  {
    id: "dreadnought",
    nameEn: "Dreadnought",
    nameZh: "巨型重甲兵",
    tier: "advanced",
    growthModifiers: {
      hp: 15,
      str: 15,
      mag: -5,
      spd: -10,
      dex: 5,
      def: 30,
      res: -10,
      lck: 0,
      cha: 5
    },
    nameEvidence: "prototype-screenshot-claim",
    spoiler: false,
    movement: 4,
    examAndUnlock: "枪术/斧术任意一项B&重装术D、道具 上级考试票证×1（推荐LV35、名声LV8）",
    skillExp: "枪术+2、斧术+2、步兵术+1、重装术+3",
    traits: "士兵系、【重装】",
    innateSkills: [
      "【战技装备+2】",
      "【后攻防守+5】"
    ],
    masteryExp: 100,
    masterySkill: "【集中反击】",
    sourceRow: 27
  },
  {
    id: "caladrius",
    nameEn: "Caladrius",
    tier: "unknown",
    growthModifiers: null,
    nameEvidence: "prototype-screenshot-claim",
    spoiler: false,
    evidenceNote: "旧版中文名与社区资料的职业对应关系冲突；暂用英文名，待游戏内核实。"
  },
  {
    id: "dragoon",
    nameEn: "Dragoon",
    nameZh: "驭龙兵",
    tier: "advanced",
    growthModifiers: {
      hp: 15,
      str: 5,
      mag: 0,
      spd: 5,
      dex: 0,
      def: 10,
      res: 10,
      lck: 10,
      cha: 5
    },
    nameEvidence: "prototype-screenshot-claim",
    spoiler: false,
    movement: 6,
    examAndUnlock: "枪术/斧术任意一项B&飞行术C、道具 上级考试票证×1（推荐LV35、名声LV8）",
    requiresUnlock: true,
    skillExp: "剑术+1、枪术+1、斧术+3、飞行术+3",
    traits: "飞行系、【飞行】",
    innateSkills: [
      "【乘降术】",
      "【战技装备+1】"
    ],
    masteryExp: 100,
    masterySkill: "【突破围城】",
    sourceRow: 32
  },
  {
    id: "ovate",
    nameEn: "Ovate",
    nameZh: "先知",
    tier: "advanced",
    growthModifiers: {
      hp: 10,
      str: -5,
      mag: 20,
      spd: 5,
      dex: 15,
      def: -10,
      res: 15,
      lck: 10,
      cha: 0
    },
    nameEvidence: "prototype-screenshot-claim",
    spoiler: false,
    movement: 5,
    examAndUnlock: "黑魔术B、道具 上级考试票证×1（推荐LV35、名声LV8）",
    skillExp: "剑术+2、格斗术+1、黑魔术+3、白魔术+1、步兵术+1",
    traits: "魔道系、步兵",
    innateSkills: [
      "【黑魔术的探究】",
      "【魔法命中+5】"
    ],
    masteryExp: 100,
    masterySkill: "【速度咒缚】",
    sourceRow: 29
  },
  {
    id: "bishop",
    nameEn: "Bishop",
    nameZh: "主教",
    tier: "advanced",
    growthModifiers: {
      hp: 10,
      str: -5,
      mag: 15,
      spd: 0,
      dex: 5,
      def: -10,
      res: 20,
      lck: 20,
      cha: 10
    },
    nameEvidence: "prototype-screenshot-claim",
    spoiler: false,
    movement: 5,
    examAndUnlock: "白魔术B、道具 上级考试票证×1（推荐LV35、名声LV8）",
    skillExp: "斧术+1、格斗术+2、黑魔术+1、白魔术+3、步兵术+1",
    traits: "魔道系、步兵",
    innateSkills: [
      "【白魔术的探究】",
      "【魔法回复+10】"
    ],
    masteryExp: 100,
    masterySkill: "【结界】",
    sourceRow: 30
  },
  {
    id: "troubadour",
    nameEn: "Troubadour",
    nameZh: "游唱诗人",
    tier: "advanced",
    growthModifiers: {
      hp: 10,
      str: 0,
      mag: 15,
      spd: 0,
      dex: 5,
      def: 5,
      res: 15,
      lck: 15,
      cha: 10
    },
    nameEvidence: "prototype-screenshot-claim",
    spoiler: false,
    movement: 6,
    examAndUnlock: "黑魔术/白魔术任意一项B&马术D、道具 上级考试票证×1（推荐LV35、名声LV8）",
    requiresUnlock: true,
    skillExp: "黑魔术+3、白魔术+3、马术+2",
    traits: "魔道系、【骑兵】",
    innateSkills: [
      "【乘降术】",
      "【魔法回复+5】",
      "【魔法命中+3】"
    ],
    masteryExp: 100,
    masterySkill: "【勇气的咒歌】",
    sourceRow: 33
  },
  {
    id: "guardian",
    nameEn: "Guardian",
    nameZh: "卫士",
    tier: "advanced",
    growthModifiers: {
      hp: 10,
      str: 10,
      mag: 0,
      spd: 0,
      dex: 5,
      def: 10,
      res: 15,
      cha: 5
    },
    nameEvidence: "prototype-screenshot-claim",
    spoiler: false,
    movement: 5,
    examAndUnlock: "枪术B、道具 上级考试票证×1（推荐LV35、名声LV8）",
    requiresUnlock: true,
    skillExp: "枪术+3、白魔术+1、步兵术+1",
    traits: "士兵系、步兵",
    innateSkills: [
      "【战技装备+2】",
      "【魔法回复+10】"
    ],
    masteryExp: 100,
    masterySkill: "【紧绷神经】",
    sourceRow: 34,
    evidenceNote: "幸运成长修正：腾讯社区表 +5，GameWith +15；来源冲突，暂不用于计算。"
  },
  {
    id: "dancer",
    nameEn: "Dancer",
    nameZh: "舞者",
    tier: "advanced",
    growthModifiers: {
      hp: 15,
      str: 5,
      mag: 0,
      spd: 25,
      dex: 10,
      def: 0,
      res: 5,
      lck: 10,
      cha: 20
    },
    nameEvidence: "prototype-screenshot-claim",
    spoiler: false,
    movement: 5,
    examAndUnlock: "剑术/箭术任意一项B、道具：舞姬的首饰×1",
    requiresUnlock: true,
    restriction: "蕾达限定",
    skillExp: "剑术+3、弓术+2、步兵术+4",
    traits: "斗士系、步兵",
    innateSkills: [
      "【战技装备+2】",
      "【跳舞】"
    ],
    masteryExp: 100,
    masterySkill: "【特别舞蹈】",
    sourceRow: 38
  },
  {
    id: "battle-master",
    tier: "master",
    growthModifiers: null,
    nameEvidence: "prototype-screenshot-claim",
    spoiler: true
  },
  {
    id: "fortress",
    tier: "master",
    growthModifiers: null,
    nameEvidence: "prototype-screenshot-claim",
    spoiler: true
  },
  {
    id: "druid",
    tier: "master",
    growthModifiers: null,
    nameEvidence: "prototype-screenshot-claim",
    spoiler: true
  },
  {
    id: "bardinger",
    nameEn: "Bardinger",
    tier: "unknown",
    growthModifiers: null,
    nameEvidence: "english",
    spoiler: false,
    evidenceNote: "社区表“荣光骑士”疑似对应此职业，尚未核实英文对应，成长修正暂未知。"
  },
  {
    id: "heavy-armor",
    nameEn: "Heavy Armor",
    tier: "unknown",
    growthModifiers: null,
    nameEvidence: "english",
    spoiler: false
  },
  {
    id: "legacy-master-archer",
    tier: "master",
    growthModifiers: null,
    nameEvidence: "unverified",
    spoiler: true
  }
];
