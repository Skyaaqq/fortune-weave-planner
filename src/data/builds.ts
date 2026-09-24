import type { BuildGuide, RouteId } from '../domain/models';
export const builds: Record<string, Partial<Record<RouteId | "default", BuildGuide>>> = {
  "cai": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "soldier"
              ],
              "parts": [
                {
                  "classId": "soldier"
                }
              ]
            },
            {
              "classes": [
                "light-cavalry"
              ],
              "parts": [
                {
                  "classId": "light-cavalry"
                }
              ]
            },
            {
              "classes": [
                "bardinger"
              ],
              "parts": [
                {
                  "classId": "bardinger"
                }
              ]
            }
          ],
          "purpose": "default"
        },
        {
          "stages": [
            {
              "classes": [
                "ornius-rider"
              ],
              "parts": [
                {
                  "classId": "ornius-rider"
                }
              ]
            },
            {
              "classes": [
                "troubadour"
              ],
              "parts": [
                {
                  "classId": "troubadour"
                }
              ]
            },
            {
              "classes": [
                "caladrius"
              ],
              "parts": [
                {
                  "classId": "caladrius"
                }
              ]
            }
          ],
          "condition": "若MAG成长优秀",
          "purpose": "rng-fix"
        }
      ],
      "reason": "当前更稳妥的默认解仍是物理骑兵：STR/SPD/DEX都能稳定受益。英文玩家验证了魔力长得好的凯伊用 Caladrius +魔法剑也非常强，因此把它保留为“满足条件时的高收益分支”，而不是唯一答案。",
      "tag": "默认+条件分支",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "tialla": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "diviner"
              ],
              "parts": [
                {
                  "classId": "diviner"
                }
              ]
            },
            {
              "classes": [
                "priest"
              ],
              "parts": [
                {
                  "classId": "priest"
                }
              ]
            },
            {
              "classes": [
                "bishop"
              ],
              "parts": [
                {
                  "classId": "bishop"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "她不必用击杀证明价值。Physic、回避/属性增益与Authority战技让她几乎每回合都有高价值动作；如果MAG成长不顺，更应该转成纯支援而不是强求输出。",
      "tag": "支援核心",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "peter": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "hunter"
              ],
              "parts": [
                {
                  "classId": "hunter"
                }
              ]
            },
            {
              "classes": [
                "archer"
              ],
              "parts": [
                {
                  "classId": "archer"
                }
              ]
            },
            {
              "classes": [
                "sniper"
              ],
              "parts": [
                {
                  "classId": "sniper"
                }
              ]
            }
          ],
          "purpose": "default"
        },
        {
          "stages": [
            {
              "classes": [
                "charioteer"
              ],
              "parts": [
                {
                  "text": "转"
                },
                {
                  "classId": "charioteer"
                },
                {
                  "text": "救火"
                }
              ]
            }
          ],
          "condition": "若STR明显落后",
          "purpose": "rng-fix"
        }
      ],
      "reason": "高DEX和弓战技射程+1让狙击手仍是最自然的主线。只有当实际成长出现力量不足时，才利用战车兵改善输出；不要把救火方案写成人人必转。",
      "tag": "默认+RNG救火",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "ultand": {
    "cai": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "diviner"
              ],
              "parts": [
                {
                  "classId": "diviner"
                }
              ]
            },
            {
              "classes": [
                "priest"
              ],
              "parts": [
                {
                  "classId": "priest"
                }
              ]
            },
            {
              "classes": [
                "guardian"
              ],
              "parts": [
                {
                  "classId": "guardian"
                }
              ]
            }
          ],
          "purpose": "merge-primary"
        }
      ],
      "reason": "当前攻略推荐经牧师转卫士，发挥枪术与白魔的混合前卫能力。本站把凯伊线安排为主版本；这是培养分工，并非路线职业限制。只练一个版本时，其他路线也可采用这一方向。",
      "tag": "枪＋白魔主版本",
      "date": "2026-09-23",
      "confidence": "medium",
      "goal": "枪术 / 白魔 / RES · 主版本",
      "sources": [
        "https://gamewith.jp/fefw/577319",
        "https://www.reddit.com/r/FE_Fortunes_Weave/comments/1wmx3c1/how_are_you_guys_using_ultand/"
      ]
    },
    "dietrich": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "ornius-rider"
              ],
              "parts": [
                {
                  "classId": "ornius-rider"
                }
              ]
            },
            {
              "classes": [
                "wing-soldier"
              ],
              "parts": [
                {
                  "classId": "wing-soldier"
                }
              ]
            },
            {
              "classes": [
                "dragoon"
              ],
              "parts": [
                {
                  "classId": "dragoon"
                }
              ]
            }
          ],
          "purpose": "merge-secondary"
        }
      ],
      "reason": "社区有利用枪术与飞行适性的尝试；本站保留飞鸵兵、天翼兵至驭龙兵作为第二版本实验，侧重物理与机动，尚无证据证明整条培养链最优。职业成长不能保证大幅补足SPD或DEX，需按实际成长与转职成本取舍；只练一个版本时可沿用枪＋白魔主版本。",
      "tag": "飞行合流实验",
      "date": "2026-09-23",
      "confidence": "experimental",
      "goal": "物理 / 飞行机动 · 第二版本实验",
      "sources": [
        "https://gamewith.jp/fefw/577319",
        "https://www.reddit.com/r/FE_Fortunes_Weave/comments/1wmx3c1/how_are_you_guys_using_ultand/",
        "https://gamewith.jp/fefw/577441"
      ]
    },
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "diviner"
              ],
              "parts": [
                {
                  "classId": "diviner"
                }
              ]
            },
            {
              "classes": [
                "priest"
              ],
              "parts": [
                {
                  "classId": "priest"
                }
              ]
            },
            {
              "classes": [
                "guardian"
              ],
              "parts": [
                {
                  "classId": "guardian"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "当前攻略推荐经牧师转卫士，发挥枪术与白魔的混合前卫能力。本站把凯伊线安排为主版本；这是培养分工，并非路线职业限制。只练一个版本时，其他路线也可采用这一方向。",
      "tag": "枪＋白魔主版本",
      "date": "2026-09-23",
      "confidence": "medium",
      "goal": "枪术 / 白魔 / RES · 主版本",
      "sources": [
        "https://gamewith.jp/fefw/577319",
        "https://www.reddit.com/r/FE_Fortunes_Weave/comments/1wmx3c1/how_are_you_guys_using_ultand/"
      ]
    }
  },
  "dietrich": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "myrmidon"
              ],
              "parts": [
                {
                  "classId": "myrmidon"
                }
              ]
            },
            {
              "classes": [
                "rogue"
              ],
              "parts": [
                {
                  "classId": "rogue"
                },
                {
                  "text": "（可选取 Mastery）"
                }
              ]
            },
            {
              "classes": [
                "shido"
              ],
              "parts": [
                {
                  "classId": "shido"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "高 DEX / SPD 与剑系极其契合。游侠 的回避类 Mastery 可作为中途绕路，最终回到 侍道 做高速必杀核心。",
      "tag": "核心Carry",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "fabio": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "diviner"
              ],
              "parts": [
                {
                  "classId": "diviner"
                }
              ]
            },
            {
              "classes": [
                "shaman"
              ],
              "parts": [
                {
                  "classId": "shaman"
                }
              ]
            },
            {
              "classes": [
                "ovate"
              ],
              "parts": [
                {
                  "classId": "ovate"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "MAG50/RES45与多种黑魔法工具仍然明确支持纯法系。",
      "tag": "黑魔核心",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "esmeralda": {
    "dietrich": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "ornius-rider",
                "wing-soldier"
              ],
              "parts": [
                {
                  "classId": "ornius-rider"
                },
                {
                  "text": " / "
                },
                {
                  "classId": "wing-soldier"
                },
                {
                  "text": "（短暂补SPD）"
                }
              ]
            },
            {
              "classes": [
                "armored-knight"
              ],
              "parts": [
                {
                  "classId": "armored-knight"
                }
              ]
            },
            {
              "classes": [
                "dreadnought"
              ],
              "parts": [
                {
                  "classId": "dreadnought"
                }
              ]
            }
          ],
          "purpose": "merge-secondary"
        }
      ],
      "reason": "最新玩家实战直接验证：只吃几级高速骑乘/飞行成长，再回重装，就能缓解SPD短板而不牺牲HP/STR/DEF优势。迪托利希版仍负责生产极高力量与防御样本。",
      "tag": "合流S",
      "date": "2026-09-22",
      "confidence": "medium"
    },
    "leda": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "ornius-rider"
              ],
              "parts": [
                {
                  "classId": "ornius-rider"
                }
              ]
            },
            {
              "classes": [
                "wing-soldier"
              ],
              "parts": [
                {
                  "classId": "wing-soldier"
                }
              ]
            },
            {
              "classes": [
                "dragoon"
              ],
              "parts": [
                {
                  "classId": "dragoon"
                }
              ]
            }
          ],
          "purpose": "merge-secondary"
        }
      ],
      "reason": "蕾达版继续承担“高速艾丝梅拉尔达”实验，尽可能提高SPD/DEX与机动；合流后再取迪托利希重装版的HP/STR/DEF。",
      "tag": "合流S",
      "date": "2026-09-22",
      "confidence": "experimental"
    },
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "soldier"
              ],
              "parts": [
                {
                  "classId": "soldier"
                }
              ]
            },
            {
              "classes": [
                "armored-knight"
              ],
              "parts": [
                {
                  "classId": "armored-knight"
                }
              ]
            },
            {
              "classes": [
                "dreadnought"
              ],
              "parts": [
                {
                  "classId": "dreadnought"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "单版本时顺着高 HP / STR / DEF 走最自然。",
      "tag": "自然线",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "mikaela": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "fighter"
              ],
              "parts": [
                {
                  "classId": "fighter"
                }
              ]
            },
            {
              "classes": [
                "brigand"
              ],
              "parts": [
                {
                  "classId": "brigand"
                }
              ]
            },
            {
              "classes": [
                "warrior"
              ],
              "parts": [
                {
                  "classId": "warrior"
                }
              ]
            }
          ],
          "purpose": "default"
        },
        {
          "stages": [
            {
              "classes": [
                "ornius-rider"
              ],
              "parts": [
                {
                  "text": "若SPD已明显落后追击线，可先短转"
                },
                {
                  "classId": "ornius-rider"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "日站的标准答案仍是斧系勇士。英文实战证明“先飞鸵兵补几级速度”能救长歪样本，因此把它作为条件分支，而不是每一份都必须绕路。",
      "tag": "默认+补速分支",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "theodora": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "soldier"
              ],
              "parts": [
                {
                  "classId": "soldier"
                }
              ]
            },
            {
              "classes": [
                "light-cavalry"
              ],
              "parts": [
                {
                  "classId": "light-cavalry"
                }
              ]
            },
            {
              "classes": [
                "bardinger"
              ],
              "parts": [
                {
                  "classId": "bardinger"
                }
              ]
            }
          ],
          "purpose": "default"
        },
        {
          "stages": [
            {
              "classes": [
                "ornius-rider"
              ],
              "parts": [
                {
                  "classId": "ornius-rider"
                }
              ]
            },
            {
              "classes": [
                "rogue",
                "myrmidon"
              ],
              "parts": [
                {
                  "classId": "rogue"
                },
                {
                  "text": "/"
                },
                {
                  "classId": "myrmidon"
                }
              ]
            },
            {
              "classes": [
                "shido"
              ],
              "parts": [
                {
                  "classId": "shido"
                }
              ]
            }
          ],
          "condition": "Min-Max主动型可",
          "purpose": "experimental"
        }
      ],
      "reason": "稳定解仍是高移动骑兵，最符合她本身高STR与不差的SPD/DEX。英文高难玩家验证高速侍道路线很强，但它更适合作为主动输出的Min-Max方案，而不是唯一默认。",
      "tag": "双成熟方案",
      "date": "2026-09-22",
      "confidence": "experimental"
    }
  },
  "bonaventure": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "diviner"
              ],
              "parts": [
                {
                  "classId": "diviner"
                }
              ]
            },
            {
              "classes": [
                "shaman"
              ],
              "parts": [
                {
                  "classId": "shaman"
                }
              ]
            },
            {
              "classes": [
                "ovate"
              ],
              "parts": [
                {
                  "classId": "ovate"
                }
              ]
            },
            {
              "classes": [
                "druid"
              ],
              "parts": [
                {
                  "classId": "druid"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "高MAG/DEX攻击法师定位已被日站和英文实战共同验证；主职责是魔法输出+邻接支援，不再按奶妈培养。",
      "tag": "攻击法核",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "tobias": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "fighter"
              ],
              "parts": [
                {
                  "classId": "fighter"
                }
              ]
            },
            {
              "classes": [
                "brigand"
              ],
              "parts": [
                {
                  "classId": "brigand"
                }
              ]
            },
            {
              "classes": [
                "warrior"
              ],
              "parts": [
                {
                  "classId": "warrior"
                }
              ]
            }
          ],
          "purpose": "default"
        },
        {
          "stages": [
            {
              "classes": [
                "soldier"
              ],
              "parts": [
                {
                  "classId": "soldier"
                }
              ]
            },
            {
              "classes": [
                "armored-knight"
              ],
              "parts": [
                {
                  "classId": "armored-knight"
                }
              ]
            },
            {
              "classes": [
                "dreadnought",
                "fortress"
              ],
              "parts": [
                {
                  "classId": "dreadnought"
                },
                {
                  "text": "/"
                },
                {
                  "classId": "fortress"
                }
              ]
            }
          ],
          "condition": "纯坦备选",
          "purpose": "default"
        }
      ],
      "reason": "英日两边现在都支持勇士作为默认：STR60足以把高力量直接转换成一击击杀，命中可用武器修补。重装仍然是需要纯坦时的可靠备选。",
      "tag": "勇士优先",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "lilian": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "hunter"
              ],
              "parts": [
                {
                  "classId": "hunter"
                }
              ]
            },
            {
              "classes": [
                "archer"
              ],
              "parts": [
                {
                  "classId": "archer"
                }
              ]
            },
            {
              "classes": [
                "sniper",
                "legacy-master-archer"
              ],
              "parts": [
                {
                  "classId": "sniper"
                },
                {
                  "text": " / "
                },
                {
                  "classId": "legacy-master-archer"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "弓系本身没有问题，高DEX与安全距离仍然可靠；但最新实战显示中后期会出现更强弓手，因此不要为了“固定核心”给她过量经验，按当前成长决定是否长期主力。",
      "tag": "稳定但可替换",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "lysander": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "ornius-rider"
              ],
              "parts": [
                {
                  "classId": "ornius-rider"
                }
              ]
            },
            {
              "classes": [
                "light-cavalry"
              ],
              "parts": [
                {
                  "classId": "light-cavalry"
                }
              ]
            },
            {
              "classes": [
                "bardinger"
              ],
              "parts": [
                {
                  "classId": "bardinger"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "路线仍以高移动物理为主。玩家反馈其早期可能显得乏力，但铁级及以上武器到手后改善明显，因此无需因为前几章伤害偏低就彻底放弃。",
      "tag": "骑兵",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "leda": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "hunter"
              ],
              "parts": [
                {
                  "classId": "hunter"
                }
              ]
            },
            {
              "classes": [
                "archer"
              ],
              "parts": [
                {
                  "classId": "archer"
                }
              ]
            },
            {
              "classes": [
                "dancer"
              ],
              "parts": [
                {
                  "classId": "dancer"
                }
              ]
            }
          ],
          "purpose": "default"
        },
        {
          "stages": [
            {
              "classes": [
                "hunter"
              ],
              "parts": [
                {
                  "classId": "hunter"
                }
              ]
            },
            {
              "classes": [
                "myrmidon"
              ],
              "parts": [
                {
                  "classId": "myrmidon"
                }
              ]
            },
            {
              "classes": [
                "shido"
              ],
              "parts": [
                {
                  "classId": "shido"
                }
              ]
            }
          ],
          "condition": "纯个人输出备选",
          "purpose": "default"
        }
      ],
      "reason": "舞者的SPD/CHA成长、再行动和额外战技槽都与蕾达的SPD65/DEX50/CHA55高度契合，因此现在更适合作为上级阶段默认推荐；侍道保留为只追求个人输出的分支。",
      "tag": "舞者优先",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "buccar": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "soldier"
              ],
              "parts": [
                {
                  "classId": "soldier"
                }
              ]
            },
            {
              "classes": [
                "armored-knight"
              ],
              "parts": [
                {
                  "classId": "armored-knight"
                }
              ]
            },
            {
              "classes": [
                "heavy-armor",
                "fortress"
              ],
              "parts": [
                {
                  "classId": "heavy-armor"
                },
                {
                  "text": " / "
                },
                {
                  "classId": "fortress"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "最新日文实战与职业攻略都支持重装方向：本身DEF与减伤Personal很适合当主坦，而且重装移动相关技能会缓解传统装甲单位的机动力问题。",
      "tag": "主坦上调",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "mu": {
    "leda": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "fighter"
              ],
              "parts": [
                {
                  "classId": "fighter"
                }
              ]
            },
            {
              "classes": [
                "brigand"
              ],
              "parts": [
                {
                  "classId": "brigand"
                }
              ]
            },
            {
              "classes": [
                "warrior"
              ],
              "parts": [
                {
                  "classId": "warrior"
                }
              ]
            },
            {
              "classes": [
                "battle-master"
              ],
              "parts": [
                {
                  "classId": "battle-master"
                }
              ]
            }
          ],
          "purpose": "merge-primary"
        }
      ],
      "reason": "最新讨论更强调多武器、后期技能和战技联动。主版本正常走高力量多武器近战即可，不需要靠合流“救裸成长”。",
      "tag": "主版本",
      "date": "2026-09-22",
      "confidence": "medium"
    },
    "dietrich": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "myrmidon"
              ],
              "parts": [
                {
                  "classId": "myrmidon"
                }
              ]
            },
            {
              "classes": [
                "shido"
              ],
              "parts": [
                {
                  "classId": "shido"
                },
                {
                  "text": "（第二套武器/速度技能实验）"
                }
              ]
            }
          ],
          "purpose": "experimental"
        }
      ],
      "reason": "第二版本仍可做技能池实验，但优先级已经下降，更多属于发烧友玩法。",
      "tag": "可选实验",
      "date": "2026-09-22",
      "confidence": "experimental"
    },
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "fighter"
              ],
              "parts": [
                {
                  "classId": "fighter"
                }
              ]
            },
            {
              "classes": [
                "brigand"
              ],
              "parts": [
                {
                  "classId": "brigand"
                }
              ]
            },
            {
              "classes": [
                "warrior"
              ],
              "parts": [
                {
                  "classId": "warrior"
                }
              ]
            },
            {
              "classes": [
                "battle-master"
              ],
              "parts": [
                {
                  "classId": "battle-master"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "当前更接近机制型成长近战，而不是低成长待救角色。",
      "tag": "机制型近战",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "guzran": {
    "cai": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "hunter"
              ],
              "parts": [
                {
                  "classId": "hunter"
                }
              ]
            },
            {
              "classes": [
                "myrmidon"
              ],
              "parts": [
                {
                  "classId": "myrmidon"
                }
              ]
            },
            {
              "classes": [
                "shido"
              ],
              "parts": [
                {
                  "classId": "shido"
                }
              ]
            }
          ],
          "purpose": "merge-primary"
        }
      ],
      "reason": "凯伊线最稳定的早期Carry之一，优先把SPD/DEX与剑/格斗战技做实。",
      "tag": "主版本Carry",
      "date": "2026-09-22",
      "confidence": "medium"
    },
    "leda": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "fighter"
              ],
              "parts": [
                {
                  "classId": "fighter"
                }
              ]
            },
            {
              "classes": [
                "brigand"
              ],
              "parts": [
                {
                  "classId": "brigand"
                }
              ]
            },
            {
              "classes": [
                "warrior"
              ],
              "parts": [
                {
                  "classId": "warrior"
                }
              ]
            }
          ],
          "purpose": "merge-secondary"
        }
      ],
      "reason": "第二版本做HP/STR样本用于合流；由于单线已经很强，这属于锦上添花。",
      "tag": "合流A",
      "date": "2026-09-22",
      "confidence": "medium"
    },
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "hunter"
              ],
              "parts": [
                {
                  "classId": "hunter"
                }
              ]
            },
            {
              "classes": [
                "myrmidon"
              ],
              "parts": [
                {
                  "classId": "myrmidon"
                }
              ]
            },
            {
              "classes": [
                "shido"
              ],
              "parts": [
                {
                  "classId": "shido"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "高基础与STR45/SPD50/DEX45让高速物理线很快成型。",
      "tag": "早期Carry",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "majide": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "fighter"
              ],
              "parts": [
                {
                  "classId": "fighter"
                }
              ]
            },
            {
              "classes": [
                "brigand"
              ],
              "parts": [
                {
                  "classId": "brigand"
                }
              ]
            },
            {
              "classes": [
                "warrior"
              ],
              "parts": [
                {
                  "classId": "warrior"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "总成长不高，更适合沿粗暴的 HP / STR 专精线做低成本替补，不建议大量跨树投资。",
      "tag": "低投资",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "nuzzuo": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "archer"
              ],
              "parts": [
                {
                  "classId": "archer"
                }
              ]
            },
            {
              "classes": [
                "sniper"
              ],
              "parts": [
                {
                  "classId": "sniper"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "STR50/DEX45/SPD55配合特效攻击加成，非常适合高速远程；比单纯斧系更能稳定把成长兑现出来。",
      "tag": "高速弓手",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "alexandra": {
    "cai": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "hunter"
              ],
              "parts": [
                {
                  "classId": "hunter"
                }
              ]
            },
            {
              "classes": [
                "myrmidon"
              ],
              "parts": [
                {
                  "classId": "myrmidon"
                }
              ]
            },
            {
              "classes": [
                "shido"
              ],
              "parts": [
                {
                  "classId": "shido"
                }
              ]
            }
          ],
          "purpose": "merge-primary"
        }
      ],
      "reason": "继续放大SPD55/LCK50带来的主动战与回避价值。",
      "tag": "主版本",
      "date": "2026-09-22",
      "confidence": "medium"
    },
    "theodora": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "diviner"
              ],
              "parts": [
                {
                  "classId": "diviner"
                }
              ]
            },
            {
              "classes": [
                "shaman"
              ],
              "parts": [
                {
                  "classId": "shaman"
                }
              ]
            },
            {
              "classes": [
                "ovate"
              ],
              "parts": [
                {
                  "classId": "ovate"
                }
              ]
            }
          ],
          "purpose": "merge-secondary"
        }
      ],
      "reason": "第二版本可尝试魔法/回避Hybrid，作为可选合流实验。",
      "tag": "可选合流",
      "date": "2026-09-22",
      "confidence": "experimental"
    },
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "hunter"
              ],
              "parts": [
                {
                  "classId": "hunter"
                }
              ]
            },
            {
              "classes": [
                "myrmidon"
              ],
              "parts": [
                {
                  "classId": "myrmidon"
                }
              ]
            },
            {
              "classes": [
                "shido"
              ],
              "parts": [
                {
                  "classId": "shido"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "速度是最值得直接放大的核心优势。",
      "tag": "高速",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "ninae": {
    "cai": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "priest"
              ],
              "parts": [
                {
                  "classId": "priest"
                }
              ]
            },
            {
              "classes": [
                "bishop"
              ],
              "parts": [
                {
                  "classId": "bishop"
                }
              ]
            }
          ],
          "purpose": "merge-primary"
        }
      ],
      "reason": "主版本优先把RES45/LCK50、白魔法和对魔法敌人的优势做实；这比强行追求泛用物理面板更稳定。",
      "tag": "主版本",
      "date": "2026-09-22",
      "confidence": "medium"
    },
    "theodora": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "soldier"
              ],
              "parts": [
                {
                  "classId": "soldier"
                }
              ]
            },
            {
              "classes": [
                "guardian"
              ],
              "parts": [
                {
                  "classId": "guardian"
                }
              ]
            }
          ],
          "purpose": "merge-secondary"
        },
        {
          "stages": [
            {
              "classes": [
                "hunter"
              ],
              "parts": [
                {
                  "text": "或"
                },
                {
                  "classId": "hunter"
                }
              ]
            },
            {
              "classes": [
                "rogue"
              ],
              "parts": [
                {
                  "classId": "rogue"
                }
              ]
            },
            {
              "classes": [
                "forest-knight"
              ],
              "parts": [
                {
                  "classId": "forest-knight"
                },
                {
                  "text": "（高速实验）"
                }
              ]
            }
          ],
          "purpose": "experimental"
        }
      ],
      "reason": "第二版本才负责DEF/RES前卫或SPD/DEX机动样本，用来补主教版没有覆盖的属性与技能。",
      "tag": "第二版本",
      "date": "2026-09-22",
      "confidence": "experimental"
    },
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "priest"
              ],
              "parts": [
                {
                  "classId": "priest"
                }
              ]
            },
            {
              "classes": [
                "bishop"
              ],
              "parts": [
                {
                  "classId": "bishop"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "当前日站更强调她的反魔、白魔与高RES/LCK价值，主教应当成为普通玩家的默认。",
      "tag": "反魔白魔",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "seteth": {
    "cai": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "light-cavalry"
              ],
              "parts": [
                {
                  "classId": "light-cavalry"
                }
              ]
            },
            {
              "classes": [
                "bardinger"
              ],
              "parts": [
                {
                  "classId": "bardinger"
                }
              ]
            }
          ],
          "purpose": "merge-primary"
        }
      ],
      "reason": "主版本回归自然骑兵线，利用STR45/DEX45/SPD40与敌方回合先攻Personal；这是更稳的单线成品。",
      "tag": "主版本",
      "date": "2026-09-22",
      "confidence": "medium"
    },
    "theodora": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "soldier"
              ],
              "parts": [
                {
                  "classId": "soldier"
                }
              ]
            },
            {
              "classes": [
                "guardian"
              ],
              "parts": [
                {
                  "classId": "guardian"
                }
              ]
            }
          ],
          "purpose": "merge-secondary"
        }
      ],
      "reason": "第二版本再专门做DEF/RES/LCK样本，保留合流的互补价值。",
      "tag": "第二版本",
      "date": "2026-09-22",
      "confidence": "medium"
    },
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "light-cavalry"
              ],
              "parts": [
                {
                  "classId": "light-cavalry"
                }
              ]
            },
            {
              "classes": [
                "bardinger"
              ],
              "parts": [
                {
                  "classId": "bardinger"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "如果只练一份，当前更推荐自然骑兵线。",
      "tag": "稳定默认",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "nezha": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "myrmidon"
              ],
              "parts": [
                {
                  "classId": "myrmidon"
                }
              ]
            },
            {
              "classes": [
                "shido"
              ],
              "parts": [
                {
                  "classId": "shido"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "公开资料将其定位为 Myrmidon 型高速剑士；继续剑系比转成泛用战士更直接。",
      "tag": "剑士",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "goliath": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "soldier"
              ],
              "parts": [
                {
                  "classId": "soldier"
                }
              ]
            },
            {
              "classes": [
                "armored-knight"
              ],
              "parts": [
                {
                  "classId": "armored-knight"
                }
              ]
            },
            {
              "classes": [
                "dreadnought"
              ],
              "parts": [
                {
                  "classId": "dreadnought"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "HP55/STR60/DEF50极端专精，而且个人限制本就不适合骑乘/飞行。重装是最自然的价值兑现方式。",
      "tag": "纯重装",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "yang-jie": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "fighter"
              ],
              "parts": [
                {
                  "classId": "fighter"
                }
              ]
            },
            {
              "classes": [
                "brigand"
              ],
              "parts": [
                {
                  "classId": "brigand"
                }
              ]
            },
            {
              "classes": [
                "warrior"
              ],
              "parts": [
                {
                  "classId": "warrior"
                },
                {
                  "text": "，并同步练白魔法"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "他本身兼具斧战与治疗功能；主职业负责肉搏，白魔作为副功能即可，不需要把两边都练成半吊子。",
      "tag": "战斗僧",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "io": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "light-cavalry"
              ],
              "parts": [
                {
                  "classId": "light-cavalry"
                }
              ]
            },
            {
              "classes": [
                "bardinger"
              ],
              "parts": [
                {
                  "classId": "bardinger"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "官方定位就是骑乘机动型佣兵，继续骑兵线能最大化地图覆盖和枪剑泛用性。",
      "tag": "骑兵",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "kiroc": {
    "dietrich": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "archer"
              ],
              "parts": [
                {
                  "classId": "archer"
                }
              ]
            },
            {
              "classes": [
                "sniper"
              ],
              "parts": [
                {
                  "classId": "sniper"
                }
              ]
            }
          ],
          "purpose": "merge-primary"
        }
      ],
      "reason": "STR40/DEX50/SPD55让高速狙击手成为目前最自然的主版本；比早期推导的恶棍→侍道更稳。",
      "tag": "主版本刷新",
      "date": "2026-09-22",
      "confidence": "medium"
    },
    "leda": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "soldier"
              ],
              "parts": [
                {
                  "classId": "soldier"
                }
              ]
            },
            {
              "classes": [
                "guardian"
              ],
              "parts": [
                {
                  "classId": "guardian"
                },
                {
                  "text": "（高投入）"
                }
              ]
            }
          ],
          "purpose": "merge-secondary"
        }
      ],
      "reason": "第二版本才专门补DEF/RES/HP，尤其针对低RES；这是典型的合流补短板路线。",
      "tag": "合流补耐久",
      "date": "2026-09-22",
      "confidence": "medium"
    },
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "archer"
              ],
              "parts": [
                {
                  "classId": "archer"
                }
              ]
            },
            {
              "classes": [
                "sniper"
              ],
              "parts": [
                {
                  "classId": "sniper"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "普通玩家优先利用高SPD/DEX做高速远程。",
      "tag": "稳定默认",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "jester": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "archer"
              ],
              "parts": [
                {
                  "classId": "archer"
                }
              ]
            },
            {
              "classes": [
                "sniper"
              ],
              "parts": [
                {
                  "classId": "sniper"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "最新推荐更偏向把SPD60直接转成高速远程追击；侍道仍能玩，但不再作为默认。",
      "tag": "高速远程",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "ursula": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "archer"
              ],
              "parts": [
                {
                  "classId": "archer"
                }
              ]
            },
            {
              "classes": [
                "sniper"
              ],
              "parts": [
                {
                  "classId": "sniper"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "她的个人技能已经承担道具袋/后勤功能，职业本身无需继续走“工具人”路线。当前更自然的做法是把高DEX/SPD转化为稳定远程输出。",
      "tag": "默认刷新",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "nydine": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "charioteer"
              ],
              "parts": [
                {
                  "classId": "charioteer"
                }
              ]
            }
          ],
          "condition": "命中不足",
          "purpose": "default"
        },
        {
          "stages": [
            {
              "classes": [
                "ornius-rider"
              ],
              "parts": [
                {
                  "classId": "ornius-rider"
                }
              ]
            },
            {
              "classes": [
                "wing-soldier"
              ],
              "parts": [
                {
                  "classId": "wing-soldier"
                }
              ]
            },
            {
              "classes": [
                "dragoon"
              ],
              "parts": [
                {
                  "classId": "dragoon"
                }
              ]
            }
          ],
          "condition": "正常样本",
          "purpose": "default"
        }
      ],
      "reason": "英文玩家明确反馈战车兵能解决命中问题；命中正常时则保留高机动飞行路线。",
      "tag": "按短板选职",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "benditz": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "charioteer"
              ],
              "parts": [
                {
                  "classId": "charioteer"
                }
              ]
            },
            {
              "classes": [
                "forest-knight"
              ],
              "parts": [
                {
                  "classId": "forest-knight"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "当前资料明确其战车兵定位且擅长弓/骑术；森林骑士 可把直线机动转成更通用的骑射终端。",
      "tag": "骑射",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "sofia": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "priest"
              ],
              "parts": [
                {
                  "classId": "priest"
                }
              ]
            },
            {
              "classes": [
                "bishop"
              ],
              "parts": [
                {
                  "classId": "bishop"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "治疗 Personal 直接强化回复量，最合理的做法就是做纯治疗核心，不必为总成长追求花哨转职。",
      "tag": "治疗",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "noctula": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "pugilist"
              ],
              "parts": [
                {
                  "classId": "pugilist"
                }
              ]
            },
            {
              "classes": [
                "warrior",
                "battle-master"
              ],
              "parts": [
                {
                  "classId": "warrior"
                },
                {
                  "text": " / "
                },
                {
                  "classId": "battle-master"
                }
              ]
            }
          ],
          "purpose": "default"
        },
        {
          "stages": [
            {
              "classes": [
                "ornius-rider",
                "wing-soldier"
              ],
              "parts": [
                {
                  "text": "若回避成长出色可短转"
                },
                {
                  "classId": "ornius-rider"
                },
                {
                  "text": "/"
                },
                {
                  "classId": "wing-soldier"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "力量近战仍是稳定主线；高速飞行只作为Personal回避玩法的实验分支。",
      "tag": "主线+实验",
      "date": "2026-09-22",
      "confidence": "experimental"
    }
  },
  "zarcone": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "fighter",
                "brigand"
              ],
              "parts": [
                {
                  "classId": "fighter"
                },
                {
                  "text": " / "
                },
                {
                  "classId": "brigand"
                }
              ]
            },
            {
              "classes": [
                "warrior"
              ],
              "parts": [
                {
                  "classId": "warrior"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "成长主要偏 DEX 而整体较低，建议走最省训练资源的斧系自然线，当功能/替补而不是重点育种对象。",
      "tag": "低投资",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "peppe": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "hunter"
              ],
              "parts": [
                {
                  "classId": "hunter"
                }
              ]
            },
            {
              "classes": [
                "archer"
              ],
              "parts": [
                {
                  "classId": "archer"
                }
              ]
            },
            {
              "classes": [
                "sniper"
              ],
              "parts": [
                {
                  "classId": "sniper"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "“猎人”定位与高 SPD 很适合远程先手和追击；若想更机动可改 森林骑士。",
      "tag": "远程",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "dante": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "diviner"
              ],
              "parts": [
                {
                  "classId": "diviner"
                }
              ]
            },
            {
              "classes": [
                "shaman"
              ],
              "parts": [
                {
                  "classId": "shaman"
                }
              ]
            },
            {
              "classes": [
                "ovate"
              ],
              "parts": [
                {
                  "classId": "ovate"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "拥有多种攻击/回复魔法与团队光环，先知 能保持法术覆盖；个人技能已经提供辅助，不必再牺牲输出。",
      "tag": "法辅",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "diego": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "myrmidon"
              ],
              "parts": [
                {
                  "classId": "myrmidon"
                }
              ]
            },
            {
              "classes": [
                "shido"
              ],
              "parts": [
                {
                  "classId": "shido"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "DEX60与不错的SPD更适合高速技巧型剑士；把他当传统卫士会浪费最突出的技巧成长。",
      "tag": "高速技巧",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "loretta": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "hunter"
              ],
              "parts": [
                {
                  "classId": "hunter"
                }
              ]
            },
            {
              "classes": [
                "myrmidon"
              ],
              "parts": [
                {
                  "classId": "myrmidon"
                }
              ]
            },
            {
              "classes": [
                "shido"
              ],
              "parts": [
                {
                  "classId": "shido"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "高SPD定位仍最适合剑系追击与回避。",
      "tag": "高速",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "dadao": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "soldier"
              ],
              "parts": [
                {
                  "classId": "soldier"
                }
              ]
            },
            {
              "classes": [
                "armored-knight"
              ],
              "parts": [
                {
                  "classId": "armored-knight"
                }
              ]
            },
            {
              "classes": [
                "dreadnought"
              ],
              "parts": [
                {
                  "classId": "dreadnought"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "他的Personal在双方都不能追击时才提高攻击，因此故意维持低速高力量重装，反而与角色机制高度协同。",
      "tag": "Personal协同",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "catania": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "fighter"
              ],
              "parts": [
                {
                  "classId": "fighter"
                }
              ]
            },
            {
              "classes": [
                "myrmidon"
              ],
              "parts": [
                {
                  "classId": "myrmidon"
                }
              ]
            },
            {
              "classes": [
                "shido"
              ],
              "parts": [
                {
                  "classId": "shido"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "SPD55/DEX50更适合高速剑系，而不是为了机动强行飞行。当前推荐已明显偏向侍道。",
      "tag": "高速剑士",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "inyoni": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "hunter"
              ],
              "parts": [
                {
                  "classId": "hunter"
                }
              ]
            },
            {
              "classes": [
                "archer"
              ],
              "parts": [
                {
                  "classId": "archer"
                }
              ]
            },
            {
              "classes": [
                "sniper"
              ],
              "parts": [
                {
                  "classId": "sniper"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "以重弓贯穿装甲为卖点，狙击手 最大化稳定远程伤害；不需要为了机动性牺牲核心射击定位。",
      "tag": "远程",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "sha-lan": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "priest"
              ],
              "parts": [
                {
                  "classId": "priest"
                }
              ]
            },
            {
              "classes": [
                "bishop"
              ],
              "parts": [
                {
                  "classId": "bishop"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "最新推荐更重视她的白魔法与位移后继续施放辅助魔法的Personal。主教比纯黑魔路线更能放大独特功能。",
      "tag": "白魔核心",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "fianna": {
    "leda": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "priest"
              ],
              "parts": [
                {
                  "classId": "priest"
                }
              ]
            },
            {
              "classes": [
                "bishop"
              ],
              "parts": [
                {
                  "classId": "bishop"
                }
              ]
            }
          ],
          "purpose": "merge-primary"
        }
      ],
      "reason": "MAG55/RES45加上治疗时概率不消耗魔法次数的Personal，使主教成为当前最能体现她独特价值的主版本。",
      "tag": "主版本上调",
      "date": "2026-09-22",
      "confidence": "medium"
    },
    "dietrich": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "soldier"
              ],
              "parts": [
                {
                  "classId": "soldier"
                }
              ]
            },
            {
              "classes": [
                "armored-knight"
              ],
              "parts": [
                {
                  "classId": "armored-knight"
                }
              ]
            },
            {
              "classes": [
                "dreadnought"
              ],
              "parts": [
                {
                  "classId": "dreadnought"
                },
                {
                  "text": "（高成本实验）"
                }
              ]
            }
          ],
          "purpose": "experimental"
        }
      ],
      "reason": "第二版本若要做合流，可专门补HP/DEF；但这属于高难/发烧友项目，不应影响主版本白魔定位。",
      "tag": "可选合流",
      "date": "2026-09-22",
      "confidence": "experimental"
    },
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "priest"
              ],
              "parts": [
                {
                  "classId": "priest"
                }
              ]
            },
            {
              "classes": [
                "bishop"
              ],
              "parts": [
                {
                  "classId": "bishop"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "不再把她只看成黑魔玻璃炮；当前更合理的定位是高MAG白魔核心，同时兼具强攻击能力。",
      "tag": "白魔核心",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "simon": {
    "leda": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "fighter"
              ],
              "parts": [
                {
                  "classId": "fighter"
                }
              ]
            },
            {
              "classes": [
                "brigand"
              ],
              "parts": [
                {
                  "classId": "brigand"
                }
              ]
            },
            {
              "classes": [
                "warrior"
              ],
              "parts": [
                {
                  "classId": "warrior"
                }
              ]
            }
          ],
          "purpose": "merge-primary"
        }
      ],
      "reason": "主版本继续做HP/STR主动输出。",
      "tag": "主版本",
      "date": "2026-09-22",
      "confidence": "medium"
    },
    "theodora": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "diviner"
              ],
              "parts": [
                {
                  "classId": "diviner"
                }
              ]
            },
            {
              "classes": [
                "priest"
              ],
              "parts": [
                {
                  "classId": "priest"
                }
              ]
            },
            {
              "classes": [
                "bishop"
              ],
              "parts": [
                {
                  "classId": "bishop"
                }
              ]
            }
          ],
          "purpose": "merge-secondary"
        }
      ],
      "reason": "第二版本刷RES/LCK的理论仍成立，但目前只建议高难Min-Max时尝试。",
      "tag": "实验合流",
      "date": "2026-09-22",
      "confidence": "experimental"
    },
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "fighter"
              ],
              "parts": [
                {
                  "classId": "fighter"
                }
              ]
            },
            {
              "classes": [
                "brigand"
              ],
              "parts": [
                {
                  "classId": "brigand"
                }
              ]
            },
            {
              "classes": [
                "warrior"
              ],
              "parts": [
                {
                  "classId": "warrior"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "日站标准答案仍是高血高力量前排。",
      "tag": "稳定默认",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "ludia": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "hunter"
              ],
              "parts": [
                {
                  "classId": "hunter"
                }
              ]
            },
            {
              "classes": [
                "rogue"
              ],
              "parts": [
                {
                  "classId": "rogue"
                }
              ]
            },
            {
              "classes": [
                "shido"
              ],
              "parts": [
                {
                  "classId": "shido"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "偏主动进攻和高速扰乱，游侠 的回避工具与 侍道 的剑系速度都很契合。",
      "tag": "高速",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "halvin": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "archer"
              ],
              "parts": [
                {
                  "classId": "archer"
                }
              ]
            },
            {
              "classes": [
                "forest-knight"
              ],
              "parts": [
                {
                  "classId": "forest-knight"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "高DEX与弓术适性继续支持机动骑射路线。",
      "tag": "骑射",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "sirocco": {
    "leda": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "diviner"
              ],
              "parts": [
                {
                  "classId": "diviner"
                }
              ]
            },
            {
              "classes": [
                "shaman"
              ],
              "parts": [
                {
                  "classId": "shaman"
                }
              ]
            },
            {
              "classes": [
                "ovate"
              ],
              "parts": [
                {
                  "classId": "ovate"
                }
              ]
            }
          ],
          "purpose": "merge-primary"
        }
      ],
      "reason": "单线纯法本身已经很强，自回血和稳定MAG/DEX让他无需依赖合流才能成立。",
      "tag": "主版本",
      "date": "2026-09-22",
      "confidence": "medium"
    },
    "theodora": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "myrmidon"
              ],
              "parts": [
                {
                  "classId": "myrmidon"
                }
              ]
            },
            {
              "classes": [
                "shido"
              ],
              "parts": [
                {
                  "classId": "shido"
                }
              ]
            }
          ],
          "purpose": "merge-secondary"
        }
      ],
      "reason": "第二版本才做STR/SPD/DEX物理实验；属于锦上添花，而不是强度前提。",
      "tag": "可选高收益合流",
      "date": "2026-09-22",
      "confidence": "experimental"
    },
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "diviner"
              ],
              "parts": [
                {
                  "classId": "diviner"
                }
              ]
            },
            {
              "classes": [
                "shaman"
              ],
              "parts": [
                {
                  "classId": "shaman"
                }
              ]
            },
            {
              "classes": [
                "ovate"
              ],
              "parts": [
                {
                  "classId": "ovate"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "普通玩家直接走法系即可。",
      "tag": "S级法核",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "olympia": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "priest"
              ],
              "parts": [
                {
                  "classId": "priest"
                }
              ]
            },
            {
              "classes": [
                "bishop"
              ],
              "parts": [
                {
                  "classId": "bishop"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "Physic、回避增益与白魔次数让她几乎每回合都有高价值行动，属于蕾达线最稳定的核心之一。",
      "tag": "顶级白魔",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "jasmine": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "soldier"
              ],
              "parts": [
                {
                  "classId": "soldier"
                }
              ]
            },
            {
              "classes": [
                "armored-knight"
              ],
              "parts": [
                {
                  "classId": "armored-knight"
                }
              ]
            },
            {
              "classes": [
                "dreadnought",
                "fortress"
              ],
              "parts": [
                {
                  "classId": "dreadnought"
                },
                {
                  "text": " / "
                },
                {
                  "classId": "fortress"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "官方角色介绍明确把她定位成擅长防守和后攻反击的重装单位；继续强化耐久与反击精度比转高速职业更符合她的Personal。",
      "tag": "重装反击",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  },
  "gaitz": {
    "default": {
      "paths": [
        {
          "stages": [
            {
              "classes": [
                "soldier"
              ],
              "parts": [
                {
                  "classId": "soldier"
                }
              ]
            },
            {
              "classes": [
                "armored-knight"
              ],
              "parts": [
                {
                  "classId": "armored-knight"
                }
              ]
            },
            {
              "classes": [
                "dreadnought"
              ],
              "parts": [
                {
                  "classId": "dreadnought"
                }
              ]
            }
          ],
          "purpose": "default"
        }
      ],
      "reason": "HP/DEF与邻接防御支援更适合做阵型支点；当前日站也更偏向重装，而不是把他当普通勇士。",
      "tag": "重装核心",
      "date": "2026-09-22",
      "confidence": "medium"
    }
  }
};
