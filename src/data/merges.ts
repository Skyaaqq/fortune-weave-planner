import type { MergePlan } from '../domain/models';
export const merges: MergePlan[] = [
  {
    "characterId": "ultand",
    "optional": false,
    "tier": "实验配对",
    "reason": "凯伊枪＋白魔主版本，搭配迪托利希物理飞行实验版本。分工属于本站规划，不是路线强制；合流收益取决于实际成长与投入，不保证补速或提高DEX。",
    "versions": [
      {
        "routeId": "cai"
      },
      {
        "routeId": "dietrich"
      }
    ],
    "date": "2026-09-23",
    "confidence": "experimental",
    "sources": [
      "https://gamewith.jp/fefw/577319",
      "https://www.reddit.com/r/FE_Fortunes_Weave/comments/1wmx3c1/how_are_you_guys_using_ultand/"
    ]
  },
  {
    "characterId": "sirocco",
    "optional": false,
    "tier": "A+",
    "reason": "单线法系本身已经是高质量核心，第二物理版本仍有合流收益，但从“必须”下降为锦上添花。",
    "versions": [
      {
        "routeId": "leda",
        "goal": "纯魔 / RES"
      },
      {
        "routeId": "theodora",
        "goal": "STR / SPD / DEX"
      }
    ],
    "date": "2026-09-22",
    "confidence": "medium"
  },
  {
    "characterId": "ninae",
    "optional": false,
    "tier": "A",
    "reason": "反魔前卫定位更加明确；Guardian主版与高速副版依然互补。",
    "versions": [
      {
        "routeId": "cai",
        "goal": "STR / SPD / DEX"
      },
      {
        "routeId": "theodora",
        "goal": "DEF / RES / 混合",
        "alternatePaths": [
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
                    "text": " / 高速实验"
                  }
                ]
              }
            ],
            "purpose": "experimental"
          }
        ]
      }
    ],
    "historicalWarning": "历史培养目标与更新后的职业方向存在差异；两者均保留，待攻略维护核对。",
    "date": "2026-09-22",
    "confidence": "experimental"
  },
  {
    "characterId": "esmeralda",
    "optional": false,
    "tier": "S",
    "reason": "重装版+高速版已经得到玩家实战直接验证，是目前最确定的高收益合流项目之一。",
    "versions": [
      {
        "routeId": "dietrich",
        "goal": "HP / STR / DEF",
        "alternatePaths": [
          {
            "stages": [
              {
                "classes": [],
                "parts": [
                  {
                    "text": "短暂高速职业补SPD"
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
        ]
      },
      {
        "routeId": "leda",
        "goal": "SPD / DEX修补"
      }
    ],
    "date": "2026-09-22",
    "confidence": "medium"
  },
  {
    "characterId": "kiroc",
    "optional": false,
    "tier": "A",
    "reason": "高速优势极强但RES低，第二版本专门补耐久。",
    "versions": [
      {
        "routeId": "dietrich",
        "goal": "SPD / DEX极限"
      },
      {
        "routeId": "leda",
        "goal": "DEF / RES / HP"
      }
    ],
    "date": "2026-09-22",
    "confidence": "medium"
  },
  {
    "characterId": "seteth",
    "optional": false,
    "tier": "A",
    "reason": "不是物魔变形，而是把稳定物理单位打磨成高机动高耐久精品。",
    "versions": [
      {
        "routeId": "cai",
        "goal": "机动 / 速度"
      },
      {
        "routeId": "theodora",
        "goal": "HP / DEF前排"
      }
    ],
    "date": "2026-09-22",
    "confidence": "medium"
  },
  {
    "characterId": "simon",
    "optional": false,
    "tier": "B+ / 实验",
    "reason": "勇士主版仍可靠；主教刷LCK/RES的理论成立，但目前更像高难Min-Max实验，缺少足够实战验证。",
    "versions": [
      {
        "routeId": "leda",
        "goal": "STR / SPD / Crit"
      },
      {
        "routeId": "theodora",
        "goal": "HP / DEF / 生存",
        "alternatePaths": [
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
                  },
                  {
                    "text": "（实验）"
                  }
                ]
              }
            ],
            "purpose": "experimental"
          }
        ]
      }
    ],
    "historicalWarning": "历史培养目标与更新后的职业方向存在差异；两者均保留，待攻略维护核对。",
    "date": "2026-09-22",
    "confidence": "experimental"
  },
  {
    "characterId": "guzran",
    "optional": false,
    "tier": "A",
    "reason": "角色本人已是早期S级培养对象，但正因为单线够强，第二版本合流的必要性只是A。",
    "versions": [
      {
        "routeId": "cai",
        "goal": "标准攻速物理"
      },
      {
        "routeId": "leda",
        "goal": "高速 / 防御变化版"
      }
    ],
    "historicalWarning": "历史培养目标与更新后的职业方向存在差异；两者均保留，待攻略维护核对。",
    "date": "2026-09-22",
    "confidence": "medium"
  },
  {
    "characterId": "fianna",
    "optional": true,
    "tier": "高难推荐",
    "reason": "MAG55但HP/DEF低，合流能把玻璃炮做成更完整的终盘法师。",
    "versions": [
      {
        "routeId": "leda",
        "goal": "MAG / RES极限"
      },
      {
        "routeId": "dietrich",
        "goal": "HP / DEF修补",
        "alternatePaths": [
          {
            "stages": [
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
                    "text": "（可选实验）"
                  }
                ]
              }
            ],
            "purpose": "experimental"
          }
        ]
      }
    ],
    "date": "2026-09-22",
    "confidence": "experimental"
  },
  {
    "characterId": "mu",
    "optional": true,
    "tier": "发烧友 / 优先级下降",
    "reason": "最新日文数据更强调多武器、Lv35技能和战技联动；双版本仍有趣，但已经不是“救裸成长”的必要方案。",
    "versions": [
      {
        "routeId": "leda",
        "goal": "第一套极端成长实验"
      },
      {
        "routeId": "dietrich",
        "goal": "第二套完全不同职业",
        "alternatePaths": [
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
                    "text": "（可选实验）"
                  }
                ]
              }
            ],
            "purpose": "experimental"
          }
        ]
      }
    ],
    "date": "2026-09-22",
    "confidence": "experimental"
  },
  {
    "characterId": "alexandra",
    "optional": true,
    "tier": "可选",
    "reason": "SPD55/LCK50，合流收益不错但不如S级对象有“角色性质变化”。",
    "versions": [
      {
        "routeId": "cai",
        "goal": "物理高速"
      },
      {
        "routeId": "theodora",
        "goal": "回避 / 魔法Hybrid"
      }
    ],
    "date": "2026-09-22",
    "confidence": "medium"
  }
];
