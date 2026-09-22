# 数据模型及维护

| 文件 | Canonical 内容 |
| --- | --- |
| `characters.ts` | 普通角色 ID、中英文名、成长表顺序 |
| `growths.ts` | 九项基础成长，不存派生值 |
| `recruitment.ts` | 角色 × 路线可用性、S/R、金钱/物品/特殊条件 |
| `routes.ts` | 固定 / 主归属 / 合流名单和路线主题 |
| `replacements.ts` | 弓替补 Meta 引用 |
| `classes.ts` | 职业名字映射及证据；未知层级、成长不猜测 |
| `builds.ts` | 职业阶段、分支条件、培养理由 |
| `roster-notes.ts` | 玩家定位、理由、标签、历史目标 |
| `merges.ts` | 合流配对、目标、优先级；相同职业路径复用 builds |
| `meta.ts` | 有日期与置信度的实战摘要 |
| `spoilers/index.ts` | 后期身份、成长、加入说明、前置清单 |
| `growth-slots.ts` | 不含后期身份的占位顺序 |

职业阶段引用 class ID，附加文字只表示条件或修饰。`growthModifiers: null` 代表未知，不能解释为 0。

推荐优先级：不可用 → 固定 → 主归属 → 合流 → 替补 → S1 顺手 → 可。后期行保持 🔒；确认后的加入条件在后期区查看，不捏造 Part I 四线资格。

TOTAL 为九项之和；AVG 为 TOTAL / 9（一位小数）；BEST OFF 为 TOTAL - min(STR, MAG)。

## 修改流程

1. 增角色：建立稳定 ID，新增 characters / growths / recruitment，按需加入 routes 和测试。
2. 增职业：只录入可靠名字、层级、成长，再在 build 引用 ID。
3. 更新招募：只改 recruitment；卡片、tooltip、推荐、导出从同源派生。
4. 更新译名：改 characters / classes，核查历史 prose 并记录来源。ID 不变，已有进度不受影响。
5. 增后期角色：仅改 spoilers 并标 spoiler；有成长时增加无身份占位及泄漏测试，禁止静态导入后期模块到主 bundle。

原型 prose 仍包含 STR50 等事实摘要与策略混写，保留原文但不参与计算。后续内容清理需单独评审，避免重构时改变结论。
