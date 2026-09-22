import type { RecruitmentRequirement, RouteId } from '../domain/models';
export const recruitment: Record<string, Record<RouteId, RecruitmentRequirement>> = {
  "dietrich": {
    "cai": {
      "available": false
    },
    "dietrich": {
      "available": true
    },
    "theodora": {
      "available": false
    },
    "leda": {
      "available": false
    }
  },
  "theodora": {
    "cai": {
      "available": false
    },
    "dietrich": {
      "available": false
    },
    "theodora": {
      "available": true
    },
    "leda": {
      "available": false
    }
  },
  "ultand": {
    "cai": {
      "available": true,
      "support": 0,
      "renown": 0,
      "automatic": true,
      "notes": "Mother's Gift (quest)"
    },
    "dietrich": {
      "available": true,
      "support": 3,
      "renown": 5,
      "automatic": false,
      "notes": "Mother's Gift (quest)"
    },
    "theodora": {
      "available": true,
      "support": 3,
      "renown": 6,
      "automatic": false,
      "notes": "Mother's Gift (quest)"
    },
    "leda": {
      "available": true,
      "support": 3,
      "renown": 8,
      "automatic": false,
      "notes": "Mother's Gift (quest)"
    }
  },
  "sirocco": {
    "cai": {
      "available": true,
      "support": 3,
      "renown": 9,
      "automatic": false,
      "notes": "Bard's Monument (quest)"
    },
    "dietrich": {
      "available": true,
      "support": 3,
      "renown": 9,
      "automatic": false,
      "notes": "Bard's Monument (quest)"
    },
    "theodora": {
      "available": true,
      "support": 1,
      "renown": 5,
      "automatic": false,
      "notes": "Bard's Monument (quest)"
    },
    "leda": {
      "available": true,
      "support": 0,
      "renown": 0,
      "automatic": true,
      "notes": "Bard's Monument (quest)"
    }
  },
  "gaitz": {
    "cai": {
      "available": false
    },
    "dietrich": {
      "available": true,
      "support": 3,
      "renown": 10,
      "automatic": false,
      "notes": "Bertrand's paralogue, wait until ch 12"
    },
    "theodora": {
      "available": false
    },
    "leda": {
      "available": false
    }
  },
  "ninae": {
    "cai": {
      "available": true,
      "support": 3,
      "renown": 6,
      "automatic": false,
      "notes": "1x Paradise Fish (check Lake Brontes)"
    },
    "dietrich": {
      "available": true,
      "support": 3,
      "renown": 8,
      "automatic": false,
      "notes": "1x Paradise Fish (check Lake Brontes)"
    },
    "theodora": {
      "available": true,
      "support": 3,
      "renown": 6,
      "automatic": false,
      "notes": "1x Paradise Fish (check Lake Brontes)"
    },
    "leda": {
      "available": true,
      "support": 3,
      "renown": 8,
      "automatic": false,
      "notes": "1x Paradise Fish (check Lake Brontes)"
    }
  },
  "leda": {
    "cai": {
      "available": false
    },
    "dietrich": {
      "available": false
    },
    "theodora": {
      "available": false
    },
    "leda": {
      "available": true
    }
  },
  "alexandra": {
    "cai": {
      "available": true,
      "support": 2,
      "renown": 7,
      "automatic": false
    },
    "dietrich": {
      "available": true,
      "support": 3,
      "renown": 8,
      "automatic": false
    },
    "theodora": {
      "available": true,
      "support": 1,
      "renown": 6,
      "automatic": false
    },
    "leda": {
      "available": true,
      "support": 3,
      "renown": 10,
      "automatic": false
    }
  },
  "cai": {
    "cai": {
      "available": true
    },
    "dietrich": {
      "available": false
    },
    "theodora": {
      "available": false
    },
    "leda": {
      "available": false
    }
  },
  "seteth": {
    "cai": {
      "available": true,
      "support": 3,
      "renown": 6,
      "automatic": false,
      "notes": "Seteth's request (quest)"
    },
    "dietrich": {
      "available": false
    },
    "theodora": {
      "available": true,
      "support": 3,
      "renown": 6,
      "automatic": false,
      "notes": "Seteth's request (quest)"
    },
    "leda": {
      "available": true,
      "support": 3,
      "renown": 10,
      "automatic": false,
      "notes": "Seteth's request (quest)"
    }
  },
  "ursula": {
    "cai": {
      "available": true,
      "support": 3,
      "renown": 10,
      "automatic": false,
      "notes": "Talimun's paralogue, then Agree three times"
    },
    "dietrich": {
      "available": true,
      "support": 3,
      "renown": 7,
      "automatic": false,
      "notes": "Talimun's paralogue, then Agree three times"
    },
    "theodora": {
      "available": true,
      "support": 3,
      "renown": 9,
      "automatic": false,
      "notes": "Talimun's paralogue, then Agree three times"
    },
    "leda": {
      "available": false
    }
  },
  "simon": {
    "cai": {
      "available": true,
      "support": 3,
      "renown": 8,
      "automatic": false,
      "notes": "500 gold, choose tails"
    },
    "dietrich": {
      "available": true,
      "support": 3,
      "renown": 7,
      "automatic": false,
      "notes": "500 gold, choose tails"
    },
    "theodora": {
      "available": true,
      "support": 3,
      "renown": 7,
      "automatic": false,
      "notes": "500 gold, choose tails"
    },
    "leda": {
      "available": true,
      "support": 3,
      "renown": 6,
      "automatic": false,
      "notes": "500 gold, choose tails"
    }
  },
  "catania": {
    "cai": {
      "available": true,
      "support": 3,
      "renown": 10,
      "automatic": false
    },
    "dietrich": {
      "available": true,
      "support": 1,
      "renown": 8,
      "automatic": false
    },
    "theodora": {
      "available": true,
      "support": 3,
      "renown": 7,
      "automatic": false
    },
    "leda": {
      "available": true,
      "support": 0,
      "renown": 0,
      "automatic": true
    }
  },
  "jester": {
    "cai": {
      "available": true,
      "support": 3,
      "renown": 10,
      "automatic": false,
      "items": [
        "3x \"Combat Quests\""
      ]
    },
    "dietrich": {
      "available": true,
      "support": 3,
      "renown": 6,
      "automatic": false,
      "items": [
        "3x \"Combat Quests\""
      ]
    },
    "theodora": {
      "available": true,
      "support": 3,
      "renown": 9,
      "automatic": false,
      "items": [
        "3x \"Combat Quests\""
      ]
    },
    "leda": {
      "available": true,
      "support": 3,
      "renown": 10,
      "automatic": false,
      "items": [
        "3x \"Combat Quests\""
      ]
    }
  },
  "jasmine": {
    "cai": {
      "available": true,
      "support": 1,
      "renown": 8,
      "automatic": false,
      "notes": "5000 gold (D/T), 2000 gold (C), 500 (L) gold"
    },
    "dietrich": {
      "available": true,
      "support": 3,
      "renown": 9,
      "automatic": false,
      "notes": "5000 gold (D/T), 2000 gold (C), 500 (L) gold"
    },
    "theodora": {
      "available": true,
      "support": 3,
      "renown": 8,
      "automatic": false,
      "notes": "5000 gold (D/T), 2000 gold (C), 500 (L) gold"
    },
    "leda": {
      "available": true,
      "support": 2,
      "renown": 4,
      "automatic": false,
      "notes": "5000 gold (D/T), 2000 gold (C), 500 (L) gold"
    }
  },
  "bonaventure": {
    "cai": {
      "available": false
    },
    "dietrich": {
      "available": false
    },
    "theodora": {
      "available": true
    },
    "leda": {
      "available": false
    }
  },
  "esmeralda": {
    "cai": {
      "available": true,
      "support": 2,
      "renown": 7,
      "automatic": false,
      "notes": "Esmeralda's request (quest)"
    },
    "dietrich": {
      "available": true,
      "support": 0,
      "renown": 0,
      "automatic": true,
      "notes": "Esmeralda's request (quest)"
    },
    "theodora": {
      "available": true,
      "support": 3,
      "renown": 9,
      "automatic": false,
      "notes": "Esmeralda's request (quest)"
    },
    "leda": {
      "available": true,
      "support": 3,
      "renown": 6,
      "automatic": false,
      "notes": "Esmeralda's request (quest)"
    }
  },
  "sha-lan": {
    "cai": {
      "available": false
    },
    "dietrich": {
      "available": true,
      "support": 3,
      "renown": 10,
      "automatic": false,
      "notes": "Anatolia's paralogue, then choose Saramis, Da Mina, Grounded Ship"
    },
    "theodora": {
      "available": false
    },
    "leda": {
      "available": true,
      "support": 3,
      "renown": 8,
      "automatic": false,
      "notes": "Anatolia's paralogue, then choose Saramis, Da Mina, Grounded Ship"
    }
  },
  "guzran": {
    "cai": {
      "available": true,
      "support": 0,
      "renown": 0,
      "automatic": true
    },
    "dietrich": {
      "available": true,
      "support": 3,
      "renown": 8,
      "automatic": false
    },
    "theodora": {
      "available": true,
      "support": 3,
      "renown": 8,
      "automatic": false
    },
    "leda": {
      "available": true,
      "support": 1,
      "renown": 3,
      "automatic": false
    }
  },
  "tobias": {
    "cai": {
      "available": false
    },
    "dietrich": {
      "available": false
    },
    "theodora": {
      "available": true
    },
    "leda": {
      "available": false
    }
  },
  "diego": {
    "cai": {
      "available": true,
      "support": 3,
      "renown": 10,
      "automatic": false,
      "notes": "Orchel's paralogue"
    },
    "dietrich": {
      "available": true,
      "support": 3,
      "renown": 9,
      "automatic": false,
      "notes": "Orchel's paralogue"
    },
    "theodora": {
      "available": true,
      "support": 2,
      "renown": 8,
      "automatic": false,
      "notes": "Orchel's paralogue"
    },
    "leda": {
      "available": true,
      "support": 3,
      "renown": 8,
      "automatic": false,
      "notes": "Orchel's paralogue"
    }
  },
  "nezha": {
    "cai": {
      "available": true,
      "support": 3,
      "renown": 6,
      "automatic": false,
      "items": [
        "3x Sandworm Meat"
      ]
    },
    "dietrich": {
      "available": true,
      "support": 3,
      "renown": 10,
      "automatic": false,
      "items": [
        "3x Sandworm Meat"
      ]
    },
    "theodora": {
      "available": true,
      "support": 2,
      "renown": 6,
      "automatic": false,
      "items": [
        "3x Sandworm Meat"
      ]
    },
    "leda": {
      "available": true,
      "support": 3,
      "renown": 9,
      "automatic": false,
      "items": [
        "3x Sandworm Meat"
      ]
    }
  },
  "tialla": {
    "cai": {
      "available": true,
      "support": 0,
      "renown": 0,
      "automatic": true,
      "notes": "Cai's paralogue"
    },
    "dietrich": {
      "available": true,
      "support": 3,
      "renown": 9,
      "automatic": false,
      "notes": "Cai's paralogue"
    },
    "theodora": {
      "available": true,
      "support": 3,
      "renown": 10,
      "automatic": false,
      "notes": "Cai's paralogue"
    },
    "leda": {
      "available": true,
      "support": 3,
      "renown": 8,
      "automatic": false,
      "notes": "Cai's paralogue"
    }
  },
  "fabio": {
    "cai": {
      "available": false
    },
    "dietrich": {
      "available": true,
      "support": 0,
      "renown": 0,
      "automatic": true,
      "notes": "Dietrich's paralogue (Ch 11), \"suitable item\""
    },
    "theodora": {
      "available": false
    },
    "leda": {
      "available": true,
      "support": 3,
      "renown": 9,
      "automatic": false,
      "notes": "Dietrich's paralogue (Ch 11), \"suitable item\""
    }
  },
  "mikaela": {
    "cai": {
      "available": true,
      "support": 3,
      "renown": 5,
      "automatic": false,
      "money": 3000
    },
    "dietrich": {
      "available": true,
      "support": 0,
      "renown": 0,
      "automatic": true,
      "money": 3000
    },
    "theodora": {
      "available": true,
      "support": 3,
      "renown": 8,
      "automatic": false,
      "money": 3000
    },
    "leda": {
      "available": true,
      "support": 3,
      "renown": 6,
      "automatic": false,
      "money": 3000
    }
  },
  "lilian": {
    "cai": {
      "available": true,
      "support": 2,
      "renown": 8,
      "automatic": false,
      "money": 5000
    },
    "dietrich": {
      "available": true,
      "support": 2,
      "renown": 8,
      "automatic": false,
      "money": 5000
    },
    "theodora": {
      "available": true,
      "support": 0,
      "renown": 0,
      "automatic": true,
      "money": 5000
    },
    "leda": {
      "available": true,
      "support": 2,
      "renown": 7,
      "automatic": false,
      "money": 5000
    }
  },
  "olympia": {
    "cai": {
      "available": true,
      "support": 3,
      "renown": 8,
      "automatic": false,
      "notes": "Scarlet Drops (quest)"
    },
    "dietrich": {
      "available": true,
      "support": 3,
      "renown": 6,
      "automatic": false,
      "notes": "Scarlet Drops (quest)"
    },
    "theodora": {
      "available": true,
      "support": 3,
      "renown": 9,
      "automatic": false,
      "notes": "Scarlet Drops (quest)"
    },
    "leda": {
      "available": true,
      "support": 0,
      "renown": 0,
      "automatic": true,
      "notes": "Scarlet Drops (quest)"
    }
  },
  "noctula": {
    "cai": {
      "available": true,
      "support": 1,
      "renown": 4,
      "automatic": false
    },
    "dietrich": {
      "available": true,
      "support": 1,
      "renown": 6,
      "automatic": false
    },
    "theodora": {
      "available": true,
      "support": 1,
      "renown": 3,
      "automatic": false
    },
    "leda": {
      "available": true,
      "support": 3,
      "renown": 8,
      "automatic": false
    }
  },
  "halvin": {
    "cai": {
      "available": true,
      "support": 3,
      "renown": 5,
      "automatic": false,
      "items": [
        "10x Dates"
      ]
    },
    "dietrich": {
      "available": true,
      "support": 3,
      "renown": 9,
      "automatic": false,
      "items": [
        "10x Dates"
      ]
    },
    "theodora": {
      "available": true,
      "support": 3,
      "renown": 7,
      "automatic": false,
      "items": [
        "10x Dates"
      ]
    },
    "leda": {
      "available": true,
      "support": 3,
      "renown": 7,
      "automatic": false,
      "items": [
        "10x Dates"
      ]
    }
  },
  "inyoni": {
    "cai": {
      "available": true,
      "support": 3,
      "renown": 8,
      "automatic": false
    },
    "dietrich": {
      "available": true,
      "support": 3,
      "renown": 8,
      "automatic": false
    },
    "theodora": {
      "available": true,
      "support": 1,
      "renown": 9,
      "automatic": false
    },
    "leda": {
      "available": true,
      "support": 1,
      "renown": 7,
      "automatic": false
    }
  },
  "peter": {
    "cai": {
      "available": true,
      "support": 0,
      "renown": 0,
      "automatic": true,
      "notes": "1x Phantom Ginji (quest)"
    },
    "dietrich": {
      "available": true,
      "support": 3,
      "renown": 8,
      "automatic": false,
      "notes": "1x Phantom Ginji (quest)"
    },
    "theodora": {
      "available": true,
      "support": 3,
      "renown": 7,
      "automatic": false,
      "notes": "1x Phantom Ginji (quest)"
    },
    "leda": {
      "available": true,
      "support": 3,
      "renown": 10,
      "automatic": false,
      "notes": "1x Phantom Ginji (quest)"
    }
  },
  "io": {
    "cai": {
      "available": true,
      "support": 3,
      "renown": 10,
      "automatic": false,
      "notes": "4000 gold (C/T), 1500 gold (L), 800 (D) gold"
    },
    "dietrich": {
      "available": true,
      "support": 2,
      "renown": 3,
      "automatic": false,
      "notes": "4000 gold (C/T), 1500 gold (L), 800 (D) gold"
    },
    "theodora": {
      "available": true,
      "support": 3,
      "renown": 10,
      "automatic": false,
      "notes": "4000 gold (C/T), 1500 gold (L), 800 (D) gold"
    },
    "leda": {
      "available": true,
      "support": 1,
      "renown": 6,
      "automatic": false,
      "notes": "4000 gold (C/T), 1500 gold (L), 800 (D) gold"
    }
  },
  "kiroc": {
    "cai": {
      "available": true,
      "support": 3,
      "renown": 8,
      "automatic": false,
      "items": [
        "3x Pure Water"
      ]
    },
    "dietrich": {
      "available": true,
      "support": 1,
      "renown": 4,
      "automatic": false,
      "items": [
        "3x Pure Water"
      ]
    },
    "theodora": {
      "available": true,
      "support": 3,
      "renown": 10,
      "automatic": false,
      "items": [
        "3x Pure Water"
      ]
    },
    "leda": {
      "available": true,
      "support": 1,
      "renown": 4,
      "automatic": false,
      "items": [
        "3x Pure Water"
      ]
    }
  },
  "peppe": {
    "cai": {
      "available": true,
      "support": 1,
      "renown": 9,
      "automatic": false,
      "notes": "Bertrand's paralogue"
    },
    "dietrich": {
      "available": true,
      "support": 3,
      "renown": 8,
      "automatic": false,
      "notes": "Bertrand's paralogue"
    },
    "theodora": {
      "available": true,
      "support": 2,
      "renown": 7,
      "automatic": false,
      "notes": "Bertrand's paralogue"
    },
    "leda": {
      "available": false
    }
  },
  "buccar": {
    "cai": {
      "available": false
    },
    "dietrich": {
      "available": true,
      "support": 3,
      "renown": 8,
      "automatic": false,
      "notes": "Leda's paralogue"
    },
    "theodora": {
      "available": true,
      "support": 3,
      "renown": 8,
      "automatic": false,
      "notes": "Leda's paralogue"
    },
    "leda": {
      "available": true,
      "support": 0,
      "renown": 0,
      "automatic": true,
      "notes": "Leda's paralogue"
    }
  },
  "lysander": {
    "cai": {
      "available": true,
      "support": 3,
      "renown": 8,
      "automatic": false,
      "items": [
        "5x Iron Spears"
      ]
    },
    "dietrich": {
      "available": true,
      "support": 3,
      "renown": 6,
      "automatic": false,
      "items": [
        "5x Iron Spears"
      ]
    },
    "theodora": {
      "available": true,
      "support": 0,
      "renown": 0,
      "automatic": true,
      "items": [
        "5x Iron Spears"
      ]
    },
    "leda": {
      "available": true,
      "support": 3,
      "renown": 7,
      "automatic": false,
      "items": [
        "5x Iron Spears"
      ]
    }
  },
  "nydine": {
    "cai": {
      "available": true,
      "support": 1,
      "renown": 6,
      "automatic": false,
      "items": [
        "2x Bronze Axes"
      ]
    },
    "dietrich": {
      "available": true,
      "support": 2,
      "renown": 5,
      "automatic": false,
      "items": [
        "2x Bronze Axes"
      ]
    },
    "theodora": {
      "available": true,
      "support": 3,
      "renown": 5,
      "automatic": false,
      "items": [
        "2x Bronze Axes"
      ]
    },
    "leda": {
      "available": true,
      "support": 3,
      "renown": 10,
      "automatic": false,
      "items": [
        "2x Bronze Axes"
      ]
    }
  },
  "benditz": {
    "cai": {
      "available": true,
      "support": 3,
      "renown": 9,
      "automatic": false
    },
    "dietrich": {
      "available": true,
      "support": 2,
      "renown": 7,
      "automatic": false
    },
    "theodora": {
      "available": true,
      "support": 1,
      "renown": 8,
      "automatic": false
    },
    "leda": {
      "available": true,
      "support": 3,
      "renown": 7,
      "automatic": false
    }
  },
  "yang-jie": {
    "cai": {
      "available": true,
      "support": 2,
      "renown": 3,
      "automatic": false,
      "notes": "choose Cheese, Moon, Potatoes"
    },
    "dietrich": {
      "available": true,
      "support": 0,
      "renown": 0,
      "automatic": true,
      "notes": "choose Cheese, Moon, Potatoes"
    },
    "theodora": {
      "available": true,
      "support": 3,
      "renown": 9,
      "automatic": false,
      "notes": "choose Cheese, Moon, Potatoes"
    },
    "leda": {
      "available": true,
      "support": 3,
      "renown": 8,
      "automatic": false,
      "notes": "choose Cheese, Moon, Potatoes"
    }
  },
  "nuzzuo": {
    "cai": {
      "available": true,
      "support": 2,
      "renown": 6,
      "automatic": false,
      "items": [
        "3x Iron Bows"
      ]
    },
    "dietrich": {
      "available": true,
      "support": 1,
      "renown": 9,
      "automatic": false,
      "items": [
        "3x Iron Bows"
      ]
    },
    "theodora": {
      "available": true,
      "support": 1,
      "renown": 6,
      "automatic": false,
      "items": [
        "3x Iron Bows"
      ]
    },
    "leda": {
      "available": true,
      "support": 3,
      "renown": 9,
      "automatic": false,
      "items": [
        "3x Iron Bows"
      ]
    }
  },
  "loretta": {
    "cai": {
      "available": true,
      "support": 3,
      "renown": 7,
      "automatic": false,
      "items": [
        "3x Iron Swords"
      ]
    },
    "dietrich": {
      "available": true,
      "support": 3,
      "renown": 9,
      "automatic": false,
      "items": [
        "3x Iron Swords"
      ]
    },
    "theodora": {
      "available": true,
      "support": 3,
      "renown": 5,
      "automatic": false,
      "items": [
        "3x Iron Swords"
      ]
    },
    "leda": {
      "available": true,
      "support": 3,
      "renown": 5,
      "automatic": false,
      "items": [
        "3x Iron Swords"
      ]
    }
  },
  "dante": {
    "cai": {
      "available": true,
      "support": 3,
      "renown": 10,
      "automatic": false,
      "money": 8000
    },
    "dietrich": {
      "available": true,
      "support": 2,
      "renown": 8,
      "automatic": false,
      "money": 8000
    },
    "theodora": {
      "available": true,
      "support": 3,
      "renown": 6,
      "automatic": false,
      "money": 8000
    },
    "leda": {
      "available": true,
      "support": 3,
      "renown": 10,
      "automatic": false,
      "money": 8000
    }
  },
  "dadao": {
    "cai": {
      "available": true,
      "support": 3,
      "renown": 7,
      "automatic": false,
      "items": [
        "2x Kothar Gar"
      ]
    },
    "dietrich": {
      "available": true,
      "support": 3,
      "renown": 10,
      "automatic": false,
      "items": [
        "2x Kothar Gar"
      ]
    },
    "theodora": {
      "available": true,
      "support": 2,
      "renown": 5,
      "automatic": false,
      "items": [
        "2x Kothar Gar"
      ]
    },
    "leda": {
      "available": true,
      "support": 2,
      "renown": 5,
      "automatic": false,
      "items": [
        "2x Kothar Gar"
      ]
    }
  },
  "sofia": {
    "cai": {
      "available": true,
      "support": 3,
      "renown": 9,
      "automatic": false
    },
    "dietrich": {
      "available": true,
      "support": 3,
      "renown": 9,
      "automatic": false
    },
    "theodora": {
      "available": true,
      "support": 0,
      "renown": 0,
      "automatic": true
    },
    "leda": {
      "available": true,
      "support": 3,
      "renown": 7,
      "automatic": false
    }
  },
  "goliath": {
    "cai": {
      "available": true,
      "support": 3,
      "renown": 7,
      "automatic": false,
      "notes": "3x Giant's Meat (check Sand-Shadow Fort)"
    },
    "dietrich": {
      "available": true,
      "support": 3,
      "renown": 6,
      "automatic": false,
      "notes": "3x Giant's Meat (check Sand-Shadow Fort)"
    },
    "theodora": {
      "available": true,
      "support": 3,
      "renown": 9,
      "automatic": false,
      "notes": "3x Giant's Meat (check Sand-Shadow Fort)"
    },
    "leda": {
      "available": true,
      "support": 3,
      "renown": 10,
      "automatic": false,
      "notes": "3x Giant's Meat (check Sand-Shadow Fort)"
    }
  },
  "ludia": {
    "cai": {
      "available": true,
      "support": 3,
      "renown": 9,
      "automatic": false,
      "notes": "Callianeira Port info (quest)"
    },
    "dietrich": {
      "available": true,
      "support": 3,
      "renown": 9,
      "automatic": false,
      "notes": "Callianeira Port info (quest)"
    },
    "theodora": {
      "available": true,
      "support": 3,
      "renown": 7,
      "automatic": false,
      "notes": "Callianeira Port info (quest)"
    },
    "leda": {
      "available": true,
      "support": 3,
      "renown": 7,
      "automatic": false,
      "notes": "Callianeira Port info (quest)"
    }
  },
  "fianna": {
    "cai": {
      "available": true,
      "support": 3,
      "renown": 8,
      "automatic": false,
      "notes": "3000 gold (check Nysiades Desert if not Cai)"
    },
    "dietrich": {
      "available": true,
      "support": 3,
      "renown": 7,
      "automatic": false,
      "notes": "3000 gold (check Nysiades Desert if not Cai)"
    },
    "theodora": {
      "available": true,
      "support": 3,
      "renown": 9,
      "automatic": false,
      "notes": "3000 gold (check Nysiades Desert if not Cai)"
    },
    "leda": {
      "available": true,
      "support": 3,
      "renown": 5,
      "automatic": false,
      "notes": "3000 gold (check Nysiades Desert if not Cai)"
    }
  },
  "zarcone": {
    "cai": {
      "available": true,
      "support": 3,
      "renown": 8,
      "automatic": false,
      "notes": "refuse to pay 2x, then 10 gold"
    },
    "dietrich": {
      "available": true,
      "support": 3,
      "renown": 7,
      "automatic": false,
      "notes": "refuse to pay 2x, then 10 gold"
    },
    "theodora": {
      "available": true,
      "support": 1,
      "renown": 4,
      "automatic": false,
      "notes": "refuse to pay 2x, then 10 gold"
    },
    "leda": {
      "available": true,
      "support": 2,
      "renown": 5,
      "automatic": false,
      "notes": "refuse to pay 2x, then 10 gold"
    }
  },
  "majide": {
    "cai": {
      "available": true,
      "support": 2,
      "renown": 5,
      "automatic": false,
      "notes": "admit you need him 3x"
    },
    "dietrich": {
      "available": true,
      "support": 3,
      "renown": 8,
      "automatic": false,
      "notes": "admit you need him 3x"
    },
    "theodora": {
      "available": true,
      "support": 3,
      "renown": 8,
      "automatic": false,
      "notes": "admit you need him 3x"
    },
    "leda": {
      "available": true,
      "support": 3,
      "renown": 9,
      "automatic": false,
      "notes": "admit you need him 3x"
    }
  },
  "mu": {
    "cai": {
      "available": true,
      "support": 3,
      "renown": 9,
      "automatic": false,
      "notes": "3x Glirmosa (check Mount Orgus Trail, Rear Mountain Path, Forest of No Return, Giant's Mount)"
    },
    "dietrich": {
      "available": true,
      "support": 3,
      "renown": 7,
      "automatic": false,
      "notes": "3x Glirmosa (check Mount Orgus Trail, Rear Mountain Path, Forest of No Return, Giant's Mount)"
    },
    "theodora": {
      "available": true,
      "support": 3,
      "renown": 9,
      "automatic": false,
      "notes": "3x Glirmosa (check Mount Orgus Trail, Rear Mountain Path, Forest of No Return, Giant's Mount)"
    },
    "leda": {
      "available": true,
      "support": 0,
      "renown": 0,
      "automatic": true,
      "notes": "3x Glirmosa (check Mount Orgus Trail, Rear Mountain Path, Forest of No Return, Giant's Mount)"
    }
  }
};
