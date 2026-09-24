import type { SpoilerData } from '../../domain/models';
import { spoilerClasses } from './classes';
import { classUnlockDetails } from './class-unlocks';
export const spoilerData: SpoilerData = {
  classes: spoilerClasses,
  classUnlockDetails,
  "characters": [
    {
      "id": "eshmel",
      "nameEn": "Eshmel",
      "nameZh": "伊修玛尔",
      "rank": 4,
      "spoiler": true
    },
    {
      "id": "hong-hua",
      "nameEn": "Hong Hua",
      "nameZh": "红花",
      "rank": 15,
      "spoiler": true
    },
    {
      "id": "troy",
      "nameEn": "Troy",
      "nameZh": "特洛伊亚",
      "rank": 39,
      "spoiler": true
    },
    {
      "id": "bertrand",
      "nameEn": "Bertrand",
      "spoiler": true
    },
    {
      "id": "orchel",
      "nameEn": "Orchel",
      "nameZh": "欧露赫露",
      "spoiler": true
    },
    {
      "id": "talimun",
      "nameEn": "Talimun",
      "nameZh": "谭利穆恩",
      "spoiler": true
    },
    {
      "id": "anatolia",
      "nameEn": "Anatolia",
      "nameZh": "爱娜特莉亚",
      "spoiler": true
    },
    {
      "id": "creek",
      "nameEn": "Creek",
      "spoiler": true
    },
    {
      "id": "nathan",
      "nameEn": "Nathan",
      "spoiler": true
    },
    {
      "id": "centurio",
      "nameEn": "Centurio",
      "nameZh": "盛托利翁",
      "spoiler": true
    },
    {
      "id": "aswan",
      "nameEn": "Aswan",
      "spoiler": true
    },
    {
      "id": "tahonia",
      "nameEn": "Tahonia",
      "spoiler": true
    },
    {
      "id": "klapka",
      "nameEn": "Klapka",
      "spoiler": true
    }
  ],
  "growths": {
    "eshmel": {
      "hp": 50,
      "str": 45,
      "mag": 45,
      "spd": 45,
      "dex": 45,
      "def": 35,
      "res": 35,
      "lck": 40,
      "cha": 50
    },
    "hong-hua": {
      "hp": 40,
      "str": 30,
      "mag": 45,
      "spd": 45,
      "dex": 45,
      "def": 30,
      "res": 45,
      "lck": 30,
      "cha": 40
    },
    "troy": {
      "hp": 40,
      "str": 45,
      "mag": 45,
      "spd": 50,
      "dex": 40,
      "def": 30,
      "res": 30,
      "lck": 30,
      "cha": 30
    }
  },
  "pre": [
    "完成 Bertrand 的 Paralogue",
    "完成 欧露赫露（Orchel）的 Paralogue",
    "完成 谭利穆恩（Talimun）的 Paralogue",
    "完成 爱娜特莉亚（Anatolia）的 Paralogue",
    "四位主角相关 Paralogue 尽量全部完成",
    "Creek 等特殊人物前置支线不要跳过"
  ],
  "p2": [
    "第一遍 Part II 建议手打，完成 Creek 的战场条件",
    "先拥有 Creek，再按要求完成 Nathan 的关键击破条件",
    "Guest：Aswan 确保存活",
    "Guest：Tahonia 确保存活",
    "确认特殊招募完成后，其它 War Arc 才考虑 Skip"
  ],
  "details": [
    {
      "characterId": "eshmel",
      "condition": "Part III核心",
      "role": "救世主 / 全军核心"
    },
    {
      "characterId": "hong-hua",
      "condition": "后期加入",
      "role": "特殊剧情加入"
    },
    {
      "characterId": "troy",
      "condition": "后期加入",
      "role": "可靠老战士"
    },
    {
      "characterId": "bertrand",
      "condition": "Paralogue前置",
      "role": "Sub-Lord / 后期正式可用"
    },
    {
      "characterId": "orchel",
      "condition": "Paralogue前置",
      "role": "Sub-Lord / 后期正式可用"
    },
    {
      "characterId": "talimun",
      "condition": "Paralogue前置",
      "role": "Sub-Lord / 后期正式可用"
    },
    {
      "characterId": "anatolia",
      "condition": "Paralogue前置",
      "role": "Sub-Lord / 后期正式可用"
    },
    {
      "characterId": "creek",
      "condition": "Part II战场条件",
      "role": "特殊加入"
    },
    {
      "characterId": "nathan",
      "condition": "需Creek相关条件",
      "role": "特殊加入"
    },
    {
      "characterId": "centurio",
      "condition": "Part III对应救援Quest",
      "role": "特殊加入"
    },
    {
      "characterId": "aswan",
      "condition": "Guest存活",
      "role": "后期正式加入"
    },
    {
      "characterId": "tahonia",
      "condition": "Guest存活",
      "role": "后期正式加入"
    },
    {
      "characterId": "klapka",
      "condition": "Guest阶段确保存活",
      "role": "特殊加入"
    }
  ]
};
