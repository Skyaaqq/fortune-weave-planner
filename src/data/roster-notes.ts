import type { RosterNote, RouteId } from '../domain/models';
export const rosterNotes: Record<RouteId, Record<string, RosterNote>> = {
  "cai": {
    "fixed:cai": {
      "role": "主角 / 魔骑Hybrid / Blaze Art核心",
      "reason": "固定成员；本版已按最新实战反馈刷新职业与培养定位",
      "tags": [
        "固定"
      ]
    },
    "fixed:tialla": {
      "role": "Physic / Authority支援核心",
      "reason": "固定成员；本版已按最新实战反馈刷新职业与培养定位",
      "tags": [
        "固定"
      ]
    },
    "fixed:peter": {
      "role": "超长射程弓手 / 战车兵可补输出",
      "reason": "固定成员；本版已按最新实战反馈刷新职业与培养定位",
      "tags": [
        "固定"
      ]
    },
    "fixed:ultand": {
      "role": "枪+白魔前卫 / 速度需重点修补",
      "reason": "固定成员；本版已按最新实战反馈刷新职业与培养定位",
      "tags": [
        "固定"
      ]
    },
    "primary:guzran": {
      "role": "早期核心Carry / 高速物理",
      "reason": "最新英文区反馈最稳定的凯伊线早期Carry之一；高基础与攻速成长让他能快速接管前线",
      "tags": [
        "主归属",
        "合流A",
        "早期Carry"
      ],
      "historicalCondition": "自动"
    },
    "primary:majide": {
      "role": "低成本功能位",
      "reason": "成长偏低，不抢经验；用来完成全收集很合适",
      "tags": [
        "主归属",
        "低投资"
      ],
      "historicalCondition": "S2 / R5"
    },
    "primary:nuzzuo": {
      "role": "泛用/远程补位",
      "reason": "凯伊需要补职业面，成本合理",
      "tags": [
        "主归属"
      ],
      "historicalCondition": "S2 / R6"
    },
    "primary:alexandra": {
      "role": "高速高幸运",
      "reason": "成长优秀且与凯伊关系自然；可作为可选合流对象",
      "tags": [
        "主归属",
        "可选合流"
      ],
      "historicalCondition": "S2 / R7"
    },
    "primary:ninae": {
      "role": "泛用 / 抗魔 / 团队功能",
      "reason": "高成长+支援自然，是凯伊最值得长期养的外援之一",
      "tags": [
        "主归属",
        "合流S/A"
      ],
      "historicalCondition": "S3 / R6"
    },
    "primary:seteth": {
      "role": "稳定物理 / 机动 / 前排",
      "reason": "无明显短板，且迪托利希不可招",
      "tags": [
        "主归属",
        "合流A"
      ],
      "historicalCondition": "S3 / R6"
    },
    "primary:nezha": {
      "role": "物理爆发",
      "reason": "成本不高，并能强化凯伊固定队的支援网络",
      "tags": [
        "主归属"
      ],
      "historicalCondition": "S3 / R6"
    },
    "primary:goliath": {
      "role": "HP/STR/DEF重装专精",
      "reason": "总成长低但关键项极高，承担“墙”的角色",
      "tags": [
        "主归属",
        "专精"
      ],
      "historicalCondition": "S3 / R7"
    },
    "merge:ultand": {
      "role": "枪+白魔前卫 / 速度需重点修补",
      "reason": "与迪托利希版合流",
      "goal": "物理 / 机动 / DEX",
      "historicalCondition": "固定",
      "tags": [
        "第二版本",
        "合流培养"
      ]
    },
    "merge:ninae": {
      "role": "泛用 / 抗魔 / 团队功能",
      "reason": "与赛奥朵拉耐久版合流",
      "goal": "STR / SPD / DEX",
      "historicalCondition": "主归属",
      "tags": [
        "第二版本",
        "合流培养"
      ]
    },
    "merge:seteth": {
      "role": "稳定物理 / 机动 / 前排",
      "reason": "与赛奥朵拉前排版合流",
      "goal": "速度 / 机动",
      "historicalCondition": "主归属",
      "tags": [
        "第二版本",
        "合流培养"
      ]
    },
    "merge:guzran": {
      "role": "早期核心Carry / 高速物理",
      "reason": "与蕾达版合流",
      "goal": "标准攻速物理",
      "historicalCondition": "主归属",
      "tags": [
        "第二版本",
        "合流培养"
      ]
    }
  },
  "dietrich": {
    "fixed:dietrich": {
      "role": "主角 / 顶级物理Carry",
      "reason": "固定成员；本版已按最新实战反馈刷新职业与培养定位",
      "tags": [
        "固定"
      ]
    },
    "fixed:fabio": {
      "role": "MAG/RES / 暗魔法功能",
      "reason": "固定成员；本版已按最新实战反馈刷新职业与培养定位",
      "tags": [
        "固定"
      ]
    },
    "fixed:esmeralda": {
      "role": "重装核心 / 短暂高速职业修SPD / 合流S",
      "reason": "固定成员；本版已按最新实战反馈刷新职业与培养定位",
      "tags": [
        "固定"
      ]
    },
    "fixed:mikaela": {
      "role": "斧系Carry / 先补速后勇士",
      "reason": "固定成员；本版已按最新实战反馈刷新职业与培养定位",
      "tags": [
        "固定"
      ]
    },
    "primary:yang-jie": {
      "role": "战斗僧 / 功能",
      "reason": "免费教程招募，不占成本",
      "tags": [
        "主归属"
      ],
      "historicalCondition": "自动"
    },
    "primary:io": {
      "role": "低成本泛用",
      "reason": "对迪托利希明显“友情价”，性价比极高",
      "tags": [
        "主归属"
      ],
      "historicalCondition": "S2 / R3 / 低价"
    },
    "primary:kiroc": {
      "role": "高速物理",
      "reason": "HP55/SPD55/DEX50，适合用合流修补RES",
      "tags": [
        "主归属",
        "合流A"
      ],
      "historicalCondition": "S1 / R4"
    },
    "primary:jester": {
      "role": "SPD60高速位",
      "reason": "成本远低于其它路线，并与固定队有关系",
      "tags": [
        "主归属"
      ],
      "historicalCondition": "S3 / R6"
    },
    "primary:gaitz": {
      "role": "独占高质量战士",
      "reason": "只有迪托利希能招；R10是不可避免的独占税",
      "tags": [
        "主归属",
        "路线独占"
      ],
      "historicalCondition": "S3 / R10 + 条件"
    },
    "primary:ursula": {
      "role": "后勤 / 高速技巧",
      "reason": "随身Storage类能力不可替代，且本线招募最划算",
      "tags": [
        "主归属",
        "功能核心"
      ],
      "historicalCondition": "S3 / R7"
    },
    "primary:nydine": {
      "role": "物理补位",
      "reason": "综合门槛低，负责职业覆盖",
      "tags": [
        "主归属"
      ],
      "historicalCondition": "S2 / R5"
    },
    "primary:benditz": {
      "role": "泛用战士",
      "reason": "支援门槛友好，用于补齐人数和职业覆盖",
      "tags": [
        "主归属"
      ],
      "historicalCondition": "S2 / R7"
    },
    "merge:ultand": {
      "role": "枪+白魔前卫 / 速度需重点修补",
      "reason": "与凯伊物理版合流",
      "goal": "魔法 / RES / 不同技能树",
      "historicalCondition": "额外招 S3 / R5",
      "tags": [
        "第二版本",
        "合流培养"
      ]
    },
    "merge:esmeralda": {
      "role": "重装核心 / 短暂高速职业修SPD / 合流S",
      "reason": "与蕾达高速/飞行版本合流；当前实战验证度很高",
      "goal": "HP/STR/DEF极限；可先短暂补SPD",
      "historicalCondition": "固定",
      "tags": [
        "第二版本",
        "合流培养"
      ]
    },
    "merge:kiroc": {
      "role": "高速物理",
      "reason": "与蕾达耐久版合流",
      "goal": "极限SPD / DEX",
      "historicalCondition": "主归属",
      "tags": [
        "第二版本",
        "合流培养"
      ]
    },
    "merge:fianna": {
      "role": "MAG55玻璃炮",
      "reason": "与蕾达MAG/RES版合流",
      "goal": "HP / DEF修补",
      "historicalCondition": "可选 R7",
      "tags": [
        "第二版本",
        "合流培养"
      ]
    },
    "merge:mu": {
      "role": "成长+武器/战技机制型近战",
      "reason": "最新Meta下优先级下降，仅建议发烧友做第二版本",
      "goal": "第二套武器/速度技能实验",
      "historicalCondition": "可选 R7",
      "tags": [
        "第二版本",
        "合流培养"
      ]
    }
  },
  "theodora": {
    "fixed:theodora": {
      "role": "高STR/DEF前排 / 高速育成后全能",
      "reason": "固定成员；本版已按最新实战反馈刷新职业与培养定位",
      "tags": [
        "固定"
      ]
    },
    "fixed:bonaventure": {
      "role": "攻击法师 + 邻接支援",
      "reason": "固定成员；本版已按最新实战反馈刷新职业与培养定位",
      "tags": [
        "固定"
      ]
    },
    "fixed:tobias": {
      "role": "STR60爆发 / 勇士与纯坦双方案",
      "reason": "固定成员；本版已按最新实战反馈刷新职业与培养定位",
      "tags": [
        "固定"
      ]
    },
    "fixed:lilian": {
      "role": "早期弓手 / DEX优秀；若STR/SPD长歪可由努佐、易尼奥尼替补",
      "reason": "固定成员；本版已按最新实战反馈刷新职业与培养定位",
      "tags": [
        "固定"
      ]
    },
    "fixed:lysander": {
      "role": "高速骑兵 / 武器升级后改善明显",
      "reason": "固定成员；本版已按最新实战反馈刷新职业与培养定位",
      "tags": [
        "固定"
      ]
    },
    "primary:sofia": {
      "role": "功能 / 魔法",
      "reason": "免费，不必重投入",
      "tags": [
        "主归属",
        "低投资"
      ],
      "historicalCondition": "自动"
    },
    "primary:noctula": {
      "role": "健康泛用",
      "reason": "全路线最低成本之一",
      "tags": [
        "主归属"
      ],
      "historicalCondition": "S1 / R3"
    },
    "primary:zarcone": {
      "role": "DEX / 功能",
      "reason": "招募便宜；适合招而不重养",
      "tags": [
        "主归属",
        "低投资"
      ],
      "historicalCondition": "S1 / R4"
    },
    "primary:peppe": {
      "role": "SPD60高速位",
      "reason": "蕾达不可招，赛奥朵拉条件合理",
      "tags": [
        "主归属"
      ],
      "historicalCondition": "S2 / R7"
    },
    "primary:dante": {
      "role": "魔法 / 团队辅助",
      "reason": "其它路线明显更贵，是本线必须利用的优惠",
      "tags": [
        "主归属",
        "功能核心"
      ],
      "historicalCondition": "S3 / R6"
    },
    "primary:diego": {
      "role": "前排 / 世界观阵营连接",
      "reason": "与固定队存在支援，成本也较低",
      "tags": [
        "主归属"
      ],
      "historicalCondition": "S2 / R8"
    },
    "primary:loretta": {
      "role": "高速物理",
      "reason": "与托比亚斯有支援，R5划算",
      "tags": [
        "主归属"
      ],
      "historicalCondition": "S3 / R5"
    },
    "primary:dadao": {
      "role": "STR/DEF重击",
      "reason": "正规军风格契合，且无需更高门槛",
      "tags": [
        "主归属"
      ],
      "historicalCondition": "S2 / R5"
    },
    "merge:sirocco": {
      "role": "S级魔法核心 / 自回血 / 合流锦上添花",
      "reason": "本体单线已经很强，因此这是锦上添花的第二版本",
      "goal": "STR/SPD/DEX物理实验",
      "historicalCondition": "额外招 S1 / R5",
      "tags": [
        "第二版本",
        "合流培养"
      ]
    },
    "merge:ninae": {
      "role": "泛用 / 抗魔 / 团队功能",
      "reason": "与凯伊进攻版合流",
      "goal": "DEF / RES / 混合",
      "historicalCondition": "额外招 S3 / R6",
      "tags": [
        "第二版本",
        "合流培养"
      ]
    },
    "merge:seteth": {
      "role": "稳定物理 / 机动 / 前排",
      "reason": "与凯伊机动版合流",
      "goal": "HP / DEF / 前排",
      "historicalCondition": "额外招 S3 / R6",
      "tags": [
        "第二版本",
        "合流培养"
      ]
    },
    "merge:simon": {
      "role": "高风险物理 / 幸存机制",
      "reason": "与蕾达高风险进攻版合流",
      "goal": "HP / DEF / 生存",
      "historicalCondition": "额外招 S3 / R7",
      "tags": [
        "第二版本",
        "合流培养"
      ]
    },
    "merge:alexandra": {
      "role": "高速高幸运",
      "reason": "与凯伊物理高速版合流",
      "goal": "回避 / 魔法Hybrid",
      "historicalCondition": "可选 S1 / R6",
      "tags": [
        "第二版本",
        "合流培养"
      ]
    }
  },
  "leda": {
    "fixed:leda": {
      "role": "主角 / SPD65 Player Phase",
      "reason": "固定成员；本版已按最新实战反馈刷新职业与培养定位",
      "tags": [
        "固定"
      ]
    },
    "fixed:buccar": {
      "role": "重装主坦候选 / 高减伤",
      "reason": "固定成员；本版已按最新实战反馈刷新职业与培养定位",
      "tags": [
        "固定"
      ]
    },
    "fixed:sirocco": {
      "role": "S级魔法核心 / 自回血 / 合流锦上添花",
      "reason": "固定成员；本版已按最新实战反馈刷新职业与培养定位",
      "tags": [
        "固定"
      ]
    },
    "fixed:mu": {
      "role": "成长+武器/战技机制型近战",
      "reason": "固定成员；本版已按最新实战反馈刷新职业与培养定位",
      "tags": [
        "固定"
      ]
    },
    "fixed:olympia": {
      "role": "顶级白魔核心 / Physic / 经验滚雪球",
      "reason": "固定成员；本版已按最新实战反馈刷新职业与培养定位",
      "tags": [
        "固定"
      ]
    },
    "primary:catania": {
      "role": "高速泛用",
      "reason": "免费且成长健康",
      "tags": [
        "主归属"
      ],
      "historicalCondition": "自动"
    },
    "primary:jasmine": {
      "role": "耐久物理",
      "reason": "蕾达成本远低于其它路线",
      "tags": [
        "主归属"
      ],
      "historicalCondition": "S2 / R4 / 低价"
    },
    "primary:inyoni": {
      "role": "泛用输出",
      "reason": "蕾达是最低成本路线之一",
      "tags": [
        "主归属"
      ],
      "historicalCondition": "S1 / R7"
    },
    "primary:sha-lan": {
      "role": "MAG/RES专精",
      "reason": "仅迪托利希/蕾达可招，蕾达更便宜",
      "tags": [
        "主归属",
        "半独占"
      ],
      "historicalCondition": "S3 / R8"
    },
    "primary:fianna": {
      "role": "MAG55玻璃炮",
      "reason": "蕾达成本远低于其它路线，并与奥琳琵娅有支援",
      "tags": [
        "主归属",
        "可选合流"
      ],
      "historicalCondition": "S3 / R5"
    },
    "primary:simon": {
      "role": "高风险物理 / 幸存机制",
      "reason": "本线成本最低，风格也最匹配",
      "tags": [
        "主归属",
        "合流A"
      ],
      "historicalCondition": "S3 / R6"
    },
    "primary:ludia": {
      "role": "主动进攻 / 速度",
      "reason": "与巴卡尼亚有高等级支援",
      "tags": [
        "主归属"
      ],
      "historicalCondition": "S3 / R7"
    },
    "primary:halvin": {
      "role": "技巧 / 稳定补位",
      "reason": "发售版数据下凯伊/迪托利希更贵，放蕾达合理",
      "tags": [
        "主归属"
      ],
      "historicalCondition": "S3 / R7"
    },
    "merge:sirocco": {
      "role": "S级魔法核心 / 自回血 / 合流锦上添花",
      "reason": "单线即强，合流不是前提",
      "goal": "MAG/RES/法术主版本",
      "historicalCondition": "固定",
      "tags": [
        "第二版本",
        "合流培养"
      ]
    },
    "merge:esmeralda": {
      "role": "重装核心 / 短暂高速职业修SPD / 合流S",
      "reason": "与迪托利希重装版合流",
      "goal": "SPD / DEX修补",
      "historicalCondition": "额外招 S3 / R6",
      "tags": [
        "第二版本",
        "合流培养"
      ]
    },
    "merge:kiroc": {
      "role": "高速物理",
      "reason": "与迪托利希极速版合流",
      "goal": "DEF / RES / HP修补",
      "historicalCondition": "额外招 S1 / R4",
      "tags": [
        "第二版本",
        "合流培养"
      ]
    },
    "merge:simon": {
      "role": "高风险物理 / 幸存机制",
      "reason": "与赛奥朵拉耐久版合流",
      "goal": "STR / SPD / Crit",
      "historicalCondition": "主归属",
      "tags": [
        "第二版本",
        "合流培养"
      ]
    },
    "merge:guzran": {
      "role": "早期核心Carry / 高速物理",
      "reason": "与凯伊标准物理版合流",
      "goal": "速度 / 防御变化版",
      "historicalCondition": "额外招 S1 / R3",
      "tags": [
        "第二版本",
        "合流培养"
      ]
    },
    "merge:fianna": {
      "role": "MAG55玻璃炮",
      "reason": "与迪托利希耐久修补版合流",
      "goal": "MAG / RES极限",
      "historicalCondition": "主归属",
      "tags": [
        "第二版本",
        "合流培养"
      ]
    },
    "merge:mu": {
      "role": "成长+武器/战技机制型近战",
      "reason": "重视Lv35技能与战技联动，不再把他只当“成长率实验”",
      "goal": "多武器物理主版本",
      "historicalCondition": "固定",
      "tags": [
        "第二版本",
        "合流培养"
      ]
    }
  }
};
