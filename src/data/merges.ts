import type { MergePlan } from '../domain/models';
export const merges: MergePlan[] = [
  {
    "characterId": "ultand",
    "optional": false,
    "tier": "S/A+",
    "reason": "SPD35短板在实战中确实明显；一份补速、一份走枪+白魔/双抗，合流价值很高。",
    "versions": [
      {
        "routeId": "cai",
        "goal": "物理 / 机动 / DEX",
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
        ]
      },
      {
        "routeId": "dietrich",
        "goal": "MAG / RES / 魔法技能",
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
        ]
      }
    ],
    "historicalWarning": "历史培养目标与更新后的职业方向存在差异；两者均保留，待攻略维护核对。"
  },
  {
    "characterId": "sirocco",
    "optional": false,
    "tier": "A+",
    "reason": "单线法系本身已经是高质量核心，第二物理版本仍有合流收益，但从“必须”下降为锦上添花。",
    "versions": [
      {
        "routeId": "leda",
        "goal": "纯魔 / RES",
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
        ]
      },
      {
        "routeId": "theodora",
        "goal": "STR / SPD / DEX",
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
        ]
      }
    ]
  },
  {
    "characterId": "ninae",
    "optional": false,
    "tier": "A",
    "reason": "反魔前卫定位更加明确；Guardian主版与高速副版依然互补。",
    "versions": [
      {
        "routeId": "cai",
        "goal": "STR / SPD / DEX",
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
            "purpose": "merge-secondary"
          }
        ]
      },
      {
        "routeId": "theodora",
        "goal": "DEF / RES / 混合",
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
    "historicalWarning": "历史培养目标与更新后的职业方向存在差异；两者均保留，待攻略维护核对。"
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
        "paths": [
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
        "goal": "SPD / DEX修补",
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
        ]
      }
    ]
  },
  {
    "characterId": "kiroc",
    "optional": false,
    "tier": "A",
    "reason": "高速优势极强但RES低，第二版本专门补耐久。",
    "versions": [
      {
        "routeId": "dietrich",
        "goal": "SPD / DEX极限",
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
            "purpose": "merge-secondary"
          }
        ]
      },
      {
        "routeId": "leda",
        "goal": "DEF / RES / HP",
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
        ]
      }
    ]
  },
  {
    "characterId": "seteth",
    "optional": false,
    "tier": "A",
    "reason": "不是物魔变形，而是把稳定物理单位打磨成高机动高耐久精品。",
    "versions": [
      {
        "routeId": "cai",
        "goal": "机动 / 速度",
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
            "purpose": "merge-secondary"
          }
        ]
      },
      {
        "routeId": "theodora",
        "goal": "HP / DEF前排",
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
        ]
      }
    ]
  },
  {
    "characterId": "simon",
    "optional": false,
    "tier": "B+ / 实验",
    "reason": "勇士主版仍可靠；主教刷LCK/RES的理论成立，但目前更像高难Min-Max实验，缺少足够实战验证。",
    "versions": [
      {
        "routeId": "leda",
        "goal": "STR / SPD / Crit",
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
        ]
      },
      {
        "routeId": "theodora",
        "goal": "HP / DEF / 生存",
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
    "historicalWarning": "历史培养目标与更新后的职业方向存在差异；两者均保留，待攻略维护核对。"
  },
  {
    "characterId": "guzran",
    "optional": false,
    "tier": "A",
    "reason": "角色本人已是早期S级培养对象，但正因为单线够强，第二版本合流的必要性只是A。",
    "versions": [
      {
        "routeId": "cai",
        "goal": "标准攻速物理",
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
            "purpose": "merge-secondary"
          }
        ]
      },
      {
        "routeId": "leda",
        "goal": "高速 / 防御变化版",
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
        ]
      }
    ],
    "historicalWarning": "历史培养目标与更新后的职业方向存在差异；两者均保留，待攻略维护核对。"
  },
  {
    "characterId": "fianna",
    "optional": true,
    "tier": "高难推荐",
    "reason": "MAG55但HP/DEF低，合流能把玻璃炮做成更完整的终盘法师。",
    "versions": [
      {
        "routeId": "leda",
        "goal": "MAG / RES极限",
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
            "purpose": "merge-secondary"
          }
        ]
      },
      {
        "routeId": "dietrich",
        "goal": "HP / DEF修补",
        "paths": [
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
    ]
  },
  {
    "characterId": "mu",
    "optional": true,
    "tier": "发烧友 / 优先级下降",
    "reason": "最新日文数据更强调多武器、Lv35技能和战技联动；双版本仍有趣，但已经不是“救裸成长”的必要方案。",
    "versions": [
      {
        "routeId": "leda",
        "goal": "第一套极端成长实验",
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
            "purpose": "merge-secondary"
          }
        ]
      },
      {
        "routeId": "dietrich",
        "goal": "第二套完全不同职业",
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
                    "text": "（可选实验）"
                  }
                ]
              }
            ],
            "purpose": "experimental"
          }
        ]
      }
    ]
  },
  {
    "characterId": "alexandra",
    "optional": true,
    "tier": "可选",
    "reason": "SPD55/LCK50，合流收益不错但不如S级对象有“角色性质变化”。",
    "versions": [
      {
        "routeId": "cai",
        "goal": "物理高速",
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
            "purpose": "merge-secondary"
          }
        ]
      },
      {
        "routeId": "theodora",
        "goal": "回避 / 魔法Hybrid",
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
        ]
      }
    ]
  }
];
