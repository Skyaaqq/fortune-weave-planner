import type { GameClass } from '../../domain/models';
// 仅在两步剧透门确认后加载。
export const spoilerClasses: GameClass[] = [
  {
    id: "battle-master",
    tier: "master",
    growthModifiers: {
      hp: 25,
      str: 25,
      mag: -5,
      spd: 5,
      dex: -5,
      def: 10,
      res: -5,
      lck: -5,
      cha: 5
    },
    nameEvidence: "prototype-screenshot-claim",
    spoiler: true,
    nameEn: "Battle Master",
    nameZh: "战斗将领",
    movement: 5,
    examAndUnlock: "剑术/斧术/格斗术任意一项A、道具 最上级考试票证×1（推荐LV45/第3部）",
    skillExp: "剑术+2、斧术+4、格斗术+2、步兵术+1",
    traits: "斗士系、步兵",
    innateSkills: [
      "【战技装备+3】",
      "【斧命中+7】",
      "【格斗命中+7】"
    ],
    masteryExp: 130,
    masterySkill: "【战鬼一击】\n\n（战技）",
    sourceRow: 42
  },
  {
    id: "fortress",
    tier: "master",
    growthModifiers: {
      hp: 25,
      str: 20,
      mag: -5,
      spd: -15,
      dex: 5,
      def: 30,
      res: -10,
      lck: 0,
      cha: 5
    },
    nameEvidence: "prototype-screenshot-claim",
    spoiler: true,
    nameEn: "Fortress",
    nameZh: "要塞",
    movement: 4,
    examAndUnlock: "斧术/枪术任意一项A&重装术C、道具 最上级考试票证×1（推荐LV45/第3部）",
    skillExp: "枪术+2、斧术+2、步兵术+1、重装术+4",
    traits: "士兵系、【重装】",
    innateSkills: [
      "【战技装备+3】",
      "【后攻防守+7】"
    ],
    masteryExp: 130,
    masterySkill: "【阻绝】",
    sourceRow: 48
  },
  {
    id: "druid",
    tier: "master",
    growthModifiers: {
      hp: 10,
      str: -5,
      mag: 30,
      spd: 10,
      dex: 15,
      def: -10,
      res: 20,
      lck: 10,
      cha: 0
    },
    nameEvidence: "prototype-screenshot-claim",
    spoiler: true,
    nameEn: "Druid",
    nameZh: "德鲁伊",
    movement: 5,
    examAndUnlock: "黑魔术A、道具 最上级考试票证×1（推荐LV45/第3部）",
    skillExp: "剑术+2、格斗术+1、黑魔术+4、步兵术+1",
    traits: "魔道系、步兵",
    innateSkills: [
      "【黑魔术的探究】",
      "【魔法命中+7】"
    ],
    masteryExp: 130,
    masterySkill: "【魔防咒缚】",
    sourceRow: 53
  },
  {
    id: "legacy-master-archer",
    tier: "master",
    growthModifiers: {
      hp: 15,
      str: 5,
      mag: 0,
      spd: 15,
      dex: 20,
      def: 5,
      res: 5,
      lck: 5,
      cha: 5
    },
    nameEvidence: "unverified",
    spoiler: true,
    nameZh: "宗师射手",
    movement: 5,
    examAndUnlock: "箭术A、道具 最上级考试票证×1（推荐LV45/第3部）",
    skillExp: "弓术+4、步兵术+2",
    traits: "猎兵系、步兵",
    innateSkills: [
      "【战技装备+3】",
      "【弓命中+15】"
    ],
    masteryExp: 130,
    masterySkill: "【飞空猎手】\n\n（战技）",
    sourceRow: 44
  }
];
