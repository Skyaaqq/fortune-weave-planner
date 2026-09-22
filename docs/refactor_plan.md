# 任务：将 Fortune's Weave Planner 从单 HTML 原型重构为长期可维护的 Vite + TypeScript + React 项目

你正在接手一个已经上线的静态玩家工具，请以“专业软件项目重构”的方式工作，而不是继续对单个 `index.html` 做字符串式 Patch。

仓库：

https://github.com/Skyaaqq/fortune-weave-planner

当前线上页面：

https://skyaaqq.github.io/fortune-weave-planner/

---

# 一、总目标

当前项目最初是一个单文件 HTML 原型，但已经逐渐发展为一个数据驱动的交互式玩家规划器，包含：

- 四条路线
- 多层标签页
- 角色卡
- 招募规划
- 成长率数据库
- 职业/转职推荐
- 多路线重复培养
- 因果合流建议
- Wiki 在线头像
- 搜索和筛选
- localStorage 招募进度
- 深浅主题
- TSV / CSV 数据导出
- 双重防剧透
- GitHub Pages 自动部署
- 持续更新的玩家 Meta

单 HTML 已经成为维护瓶颈。

本次任务的目标是：

> 将当前静态单页原型等价重构为  
> **Vite + TypeScript + React** 项目，
> 将数据、UI、业务规则和状态管理彻底解耦，
> 建立长期工程约束、测试和文档，
> 为未来职业模拟器、角色详情页、阵容规划器和 Meta 版本管理打下基础。

---

# 二、Git 工作流要求

首先：

1. 获取最新 `main`。
2. 不允许直接在 `main` 开发。
3. 从最新 `main` 新建分支：

```text
codex/refactor-vite-react
````

如果该分支已存在且明显属于本任务，可继续使用；否则创建。

所有开发都在该分支完成。

不要在未经确认的情况下：

* force push
* 删除 main
* 重写已有 Git 历史
* 删除当前线上可用版本
* 修改仓库公开/私有状态
* 修改与本任务无关的 GitHub 设置

完成后：

* 保留完整 commit 历史
* 给出变更摘要
* 给出测试结果
* 给出最终 commit
* 如条件允许，创建 PR 到 `main`
* 不要自行 merge，除非得到用户明确授权

---

# 三、第一原则：先等价重构，不加大功能

Phase 1 的首要目标是：

> **现有页面的所有可见功能和重要内容，在 React 新版中完整保留。**

第一阶段禁止因为“顺手”而进行大规模产品设计变更。

不要在基础重构阶段：

* 大改视觉风格
* 删除角色数据
* 重写玩家策略内容
* 修改招募方案
* 修改职业推荐结论
* 修改防剧透逻辑含义
* 新增大型玩法模拟器

除非是修复明确 Bug 或结构性错误。

首先做到：

> 新版看起来和用起来与当前页面基本一致，
> 但内部架构已经专业化。

---

# 四、必须保留的现有功能

请先审计当前 `index.html`，建立一份功能清单。

至少必须保留以下内容。

## 1. 四路线

* 凯伊（Cai）
* 迪托利希（Dietrich）
* 赛奥朵拉（Theodora）
* 蕾达（Leda）

使用路线标签页切换。

---

## 2. 每条路线的三类人物

* 核心固定角色
* 建议主要招募角色
* 第二版本 / 合流培养角色

继续使用统一角色卡结构，但有不同视觉标识。

---

## 3. 角色卡

每张卡至少保留：

* 中文名
* 英文名
* Wiki 头像
* 保持原头像宽高比
* 招募条件
* 有效成长
* 定位
* 推荐原因
* 标签
* 推荐职业路线
* 转职理由
* 主版本 / 第二版本区别
* RNG 救火方案（如存在）

不能再使用会拉伸头像的固定宽高裁剪。

---

## 4. 中英文名称策略

长期规则：

角色和职业第一次在适当位置出现时：

```text
中文名（English Name）
```

之后可只使用中文。

如果没有可靠的官方简体中文名称：

> 保留英文，不自行创造译名。

名称来源优先级：

1. 游戏内简体中文实机
2. 任天堂官方简体/繁体中文资料
3. 官方角色/兵种介绍
4. 高可靠发售版资料
5. 玩家社区高频译名只能标记为“社区译名”，不能冒充官方

请把名字映射单独放在数据层，不要散落在 JSX 字符串里。

---

## 5. Wiki 头像

当前使用 Fire Emblem Wiki：

[https://fireemblemwiki.org/wiki/List_of_characters_in_Fire_Emblem:_Fortune%27s_Weave](https://fireemblemwiki.org/wiki/List_of_characters_in_Fire_Emblem:_Fortune%27s_Weave)

新版需要：

* 保持人物源图比例
* 头像加载失败时有文字 fallback
* Wiki 不可用时整个页面仍正常工作
* 头像网络失败不能影响角色卡或其它功能

第一阶段可以继续运行时加载。

但请把头像逻辑封装成独立 service。

建议：

```text
src/services/portraits.ts
```

未来应容易升级为：

```text
build-time portrait cache
portraits.json
```

不要让页面组件自己解析 Wiki DOM。

---

## 6. 招募状态

保留：

* “已招募”checkbox
* localStorage 持久化
* 页面刷新后恢复

请封装为 hook，例如：

```text
useRecruitmentProgress()
```

localStorage key 必须带版本或命名空间，例如：

```text
fortune-weave-planner:v1:
```

不要使用零散的全局字符串。

---

## 7. 搜索 / 筛选

保留：

* 搜索中文名
* 英文名
* 职业
* 招募条件
* 标签
* 定位
* 培养理由

保留：

* 只看合流对象

搜索不应意外暴露被防剧透锁隐藏的人物。

---

## 8. 成长率表

当前约有 53 名角色。

必须保留：

* HP
* STR
* MAG
* SPD
* DEX
* DEF
* RES
* LCK
* CHA
* TOTAL
* AVG
* TOTAL (BEST OFF.)

同时保留：

* 头像
* 中文名
* 英文名

以及四路线状态列：

* 凯伊
* 迪托利希
* 赛奥朵拉
* 蕾达

状态至少包括：

```text
固定
主招
合流
弓替补
顺手
可
不可
🔒
```

但不要把这些状态作为硬编码字符串散布在表格组件中。

定义 enum / union，例如：

```ts
type RouteRecommendationStatus =
  | "fixed"
  | "primary"
  | "merge"
  | "replacement"
  | "easy"
  | "available"
  | "unavailable"
  | "spoiler";
```

UI 再映射为中文标签。

---

## 9. 成长表导出

保留：

* 复制 TSV
* 复制 CSV

导出逻辑独立：

```text
src/utils/export.ts
```

不要把 CSV 逻辑写在 React 组件内部。

---

## 10. 双重防剧透

这是长期核心约束，必须完整保留。

默认：

> Part II 及以后才能招募的人物、加入条件、Guest 生存条件、后期章节结构不得直接显示。

用户第一次点击：

```text
查看后期信息
```

先出现确认 Dialog。

Dialog 必须明确说明：

> 将显示后期可用角色、前置任务、加入条件等结构性剧透。

用户第二次确认以后才显示。

必须支持：

```text
重新隐藏剧透
```

刷新页面后默认重新锁定。

建议从架构上拆分：

```text
src/data/part1/
src/data/spoilers/
```

理想情况下：

> 搜索和普通页面数据根本不包含后期人物，
> 确认后才加载 spoiler 数据。

可以使用动态 import。

---

## 11. 深浅主题

保留：

* 默认亮色
* 可切换深色
* localStorage 保存

建议用 React Context 或 hook：

```text
useTheme()
```

---

# 五、必须建立的数据架构

当前最大技术债是：

> 同一个事实重复存在于多个地方。

例如：

Nuzzuo 在 Theodora：

```text
S1 / R6
3x Iron Bows
弓位替补
```

不应该分别存在于：

* 路线说明
* 成长表
* Tooltip
* 角色卡
* 招募矩阵

而应只有一个源数据。

---

# 六、推荐目录结构

可以根据实际情况调整，但整体原则不要改变。

建议：

```text
src/
├─ data/
│  ├─ characters.ts
│  ├─ growths.ts
│  ├─ classes.ts
│  ├─ recruitment.ts
│  ├─ builds.ts
│  ├─ supports.ts
│  ├─ routes.ts
│  ├─ meta.ts
│  └─ spoilers/
│     ├─ characters.ts
│     └─ recruitment.ts
│
├─ domain/
│  ├─ character.ts
│  ├─ class.ts
│  ├─ recruitment.ts
│  ├─ route.ts
│  └─ spoiler.ts
│
├─ components/
│  ├─ CharacterCard/
│  ├─ RouteTabs/
│  ├─ CategoryTabs/
│  ├─ GrowthTable/
│  ├─ RecruitmentBadge/
│  ├─ BuildPath/
│  ├─ MergeCard/
│  ├─ SpoilerGate/
│  ├─ SearchBar/
│  └─ ThemeToggle/
│
├─ hooks/
│  ├─ useTheme.ts
│  ├─ useRecruitmentProgress.ts
│  └─ useSpoilerGate.ts
│
├─ services/
│  └─ portraits.ts
│
├─ utils/
│  ├─ growth.ts
│  ├─ recruitment.ts
│  ├─ export.ts
│  └─ storage.ts
│
├─ App.tsx
└─ main.tsx

tests/
├─ unit/
└─ e2e/
```

---

# 七、TypeScript 要求

必须启用：

```text
strict: true
```

不要使用大量：

```ts
any
```

数据模型至少需要明确以下类型。

例如：

```ts
type RouteId =
  | "cai"
  | "dietrich"
  | "theodora"
  | "leda";
```

```ts
interface GrowthRates {
  hp: number;
  str: number;
  mag: number;
  spd: number;
  dex: number;
  def: number;
  res: number;
  lck: number;
  cha: number;
}
```

```ts
interface RecruitmentRequirement {
  available: boolean;
  support?: number;
  renown?: number;
  money?: number;
  items?: string[];
  quest?: string;
  notes?: string;
}
```

```ts
interface Character {
  id: string;
  nameEn: string;
  nameZh?: string;
  growths: GrowthRates;
  recruitment: Partial<Record<RouteId, RecruitmentRequirement>>;
}
```

不要通过：

```text
"99"
```

表示不可招募。

应该明确：

```ts
available: false
```

---

# 八、职业数据必须结构化

当前类似：

```text
斗士 → 土匪 → 勇士
```

不应该只是一条字符串。

职业数据应类似：

```ts
interface GameClass {
  id: string;
  nameEn: string;
  nameZh?: string;
  tier: "basic" | "intermediate" | "advanced" | "master";
  growthModifiers: Partial<GrowthRates>;
  weaponExp?: Record<string, number>;
}
```

Build 应类似：

```ts
interface BuildPath {
  classes: string[];
  purpose:
    | "default"
    | "rng-fix"
    | "merge-primary"
    | "merge-secondary"
    | "experimental";
  reason: string;
}
```

UI 再自动渲染：

```text
斗士 → 土匪 → 勇士
```

---

# 九、成长率计算不要重复存储

如果可以由基础值计算：

* TOTAL
* AVG
* BEST OFF

则不要全部手写。

建立：

```text
src/utils/growth.ts
```

例如：

```ts
calculateTotalGrowth()
calculateAverageGrowth()
calculateBestOffGrowth()
```

并写测试。

---

# 十、招募推荐应从数据派生

例如成长表的路线列：

```text
固定
主招
合流
弓替补
顺手
可
不可
```

不要手工再维护一张独立表。

应根据：

```text
角色是否固定
主归属
第二版本配置
招募门槛
S1低成本
特殊Meta标签
```

自动计算。

例如：

```ts
getRouteRecommendation(characterId, routeId)
```

这样修改一次：

```text
Nuzzuo / Theodora
```

角色详情、成长表、Tooltip和路线页全部自动更新。

---

# 十一、玩家 Meta 与事实数据分开

必须严格区分：

## 事实数据

例如：

```text
S1 / R6
STR 50
SPD 55
职业成长+15
```

## 玩家 Meta

例如：

```text
Lilian长歪时可用Nuzzuo替代
Tobias Warrior很强
Cai魔骑在MAG成长好时很强
```

不要混在同一个字段。

建议：

```text
src/data/meta.ts
```

Meta 字段需要：

```ts
interface MetaNote {
  characterId?: string;
  routeId?: RouteId;
  date: string;
  confidence: "high" | "medium" | "experimental";
  summary: string;
  sources?: string[];
}
```

以后玩家讨论更新时：

> 修改 Meta

而不是改角色基础数据库。

---

# 十二、长期资料来源约束

请创建：

```text
docs/data-sources.md
```

规定数据来源优先级：

```text
实机简中
>
任天堂官方
>
可靠攻略数据库
>
玩家实测
>
社区推测
```

不同层级不能混为同一置信度。

职业中文名如果没有可靠证据：

> 保留英文。

不要自行翻译。

---

# 十三、必须创建 AGENTS.md

在仓库根目录创建：

```text
AGENTS.md
```

用于约束以后 Codex / ChatGPT Work / 人类维护者。

至少包含以下长期规则。

## 数据

* 不允许在组件中硬编码大段角色数据
* 一个事实只能有一个 canonical source
* 不使用魔法数字表示不可用
* Part II+ 数据必须带 spoiler 标记

## 名称

* 官中优先
* 未确认中文名保留英文
* 不自行翻译成看似官方的名称

## UI

* 人物头像必须保持源宽高比
* 头像失败必须有 fallback
* 手机端必须可正常使用
* 默认亮色
* 深色模式不得降低可读性

## 防剧透

* 后期人物默认不可见
* 搜索不得泄露隐藏人物
* 任何新增后期信息必须走 Spoiler Gate

## 工程

* TypeScript strict
* 不允许静默吞掉关键错误
* 新功能必须有测试
* 数据逻辑不得依赖 DOM
* 不直接拼接巨大 `innerHTML`

## Git

* 不直接在 main 大改
* 大改使用 feature/refactor branch
* 合并前必须 build + test
* 不 force push main

---

# 十四、创建架构文档

至少创建：

```text
docs/architecture.md
docs/data-model.md
docs/testing.md
docs/meta-maintenance.md
```

说明：

* 为什么这样拆
* 什么是 canonical data
* 哪些属于事实
* 哪些属于玩家 Meta
* 如何增加角色
* 如何增加职业
* 如何更新招募条件
* 如何更新中文译名
* 如何加入后期角色
* 如何不破坏防剧透
* 如何更新玩家 Meta

---

# 十五、测试要求

这是本次重构最重要的目标之一。

使用：

```text
Vitest
Playwright
```

---

## 单元测试至少覆盖

### Growth

```text
TOTAL计算
AVG计算
BEST OFF计算
```

### Recruitment

例如：

```text
Nuzzuo / Theodora
→ available
→ support = 1
→ renown = 6
```

```text
Seteth / Dietrich
→ unavailable
```

### Recommendation

测试：

```text
fixed
primary
merge
easy
available
unavailable
```

不能再次出现：

> routeOrder未定义

这种浏览器运行时才发现的问题。

---

# 十六、Playwright E2E 必须覆盖

至少建立一个核心 smoke test：

打开首页：

```text
页面成功加载
console无error
```

然后验证：

```text
4个路线Tab存在
```

切换：

```text
Theodora
```

应该看到：

```text
核心固定 = 5
主要招募 = 8
```

切：

```text
第二版本 / 合流
```

应正常显示。

搜索：

```text
Nuzzuo
```

应该找到对应角色。

成长率表：

```text
53个角色数据行
头像列
四路线列
```

检查：

```text
Nuzzuo / Theodora
```

显示：

```text
弓替补
```

防剧透：

```text
默认隐藏
点击查看
出现确认Dialog
取消 → 仍隐藏
再次点击
确认 → 内容出现
重新隐藏 → 内容消失
```

Theme：

```text
切深色
刷新
仍为深色
```

Recruitment：

```text
勾选已招
刷新
状态仍存在
```

TSV/CSV：

至少验证生成字符串格式正确。

---

# 十七、GitHub Actions

现有 GitHub Pages 自动部署必须保留。

升级工作流：

```text
install
↓
typecheck
↓
unit tests
↓
build
↓
Playwright smoke tests
↓
deploy
```

任何一项失败：

> 不允许部署。

GitHub Pages 使用 Vite 的：

```text
dist/
```

不要再上传整个仓库根目录。

注意正确配置：

```ts
base: "/fortune-weave-planner/"
```

或根据仓库名动态处理。

---

# 十八、避免再次发生的事故

之前已经出现过：

1. `index.html` 被工具错误字符串覆盖
2. HTML 尾部被截断
3. `</script>` 丢失
4. 初始化函数缺失
5. 未声明变量导致成长表崩溃

因此本项目以后禁止：

> 通过字符串拼接方式整体重写构建产物。

开发者只能修改：

```text
src/
data/
tests/
docs/
```

`dist/` 是 build artifact。

不要手工编辑 build 后的 HTML。

---

# 十九、视觉要求

第一阶段不要重新设计。

保留目前风格：

* 暖白背景
* 路线主题色
* 卡片式信息层级
* 人物头像保持比例
* 桌面3列左右
* 中屏2列
* 手机1列
* 转职说明位于角色卡底部通栏
* 固定 / 主招 / 合流使用同一套卡片
* 仅使用标签颜色区分

之后可以逐步改进。

---

# 二十、可访问性要求

至少做到：

* button 使用真正 `<button>`
* tab 使用合理 ARIA
* dialog 可键盘关闭
* 图片有 alt
* 可见 focus
* 不依赖颜色作为唯一信息来源
* 表格 `<th>` / `<td>` 语义正确

---

# 二十一、性能要求

当前数据量很小，不需要复杂优化。

但避免：

* 每次渲染重新抓Wiki整页
* 多次重复网络请求
* 大量无意义 rerender

Wiki头像请求至少缓存当前 session。

---

# 二十二、未来扩展必须预留接口

本次不一定实现，但架构必须允许以后增加：

## 角色详情 Drawer / Page

展示：

```text
角色资料
成长率
招募路线
Support
Personal Skill
Build
Meta
因果合流
```

---

## 职业成长模拟器

未来希望支持：

```text
角色
Lv 10-20：职业A
Lv 20-35：职业B
```

输出：

```text
预计STR
预计SPD
预计DEF
```

因此当前职业成长数据必须足够结构化。

---

## 自定义四线阵容 Builder

未来允许用户自己分配：

```text
Cai
Dietrich
Theodora
Leda
```

然后自动提示：

```text
重复角色
未覆盖角色
不可招募
招募成本过高
潜在合流对象
```

所以目前不能把“四线推荐”和角色本体数据绑死。

---

## Meta版本管理

以后可以支持：

```text
Meta: 2026-09-22
Meta: 2026-09-25
```

因此 Meta 数据需要有日期。

---

# 二十三、实施阶段

请按照下面顺序执行。

## Phase 0：审计

先读：

```text
index.html
README
workflow
```

输出内部工作清单。

不要立即大规模改代码。

---

## Phase 1：搭建 Vite / React / TypeScript

建立基础项目。

要求：

```text
npm run dev
npm run build
npm run typecheck
```

全部正常。

---

## Phase 2：迁移数据

先把当前 HTML 中所有：

```text
characters
growths
routes
recruitment
classGuides
merge data
spoiler data
```

迁到 TypeScript 数据文件。

此阶段不要改变数据内容。

---

## Phase 3：迁移 UI

依次完成：

```text
RouteTabs
CharacterCard
CategoryTabs
MergeCards
GrowthTable
SpoilerGate
Theme
Search
Progress
```

保证视觉等价。

---

## Phase 4：测试

Vitest + Playwright。

所有核心流程必须覆盖。

---

## Phase 5：GitHub Pages

修改 Actions：

```text
npm ci
npm run typecheck
npm test
npm run build
Playwright smoke test
deploy dist
```

---

## Phase 6：文档

完成：

```text
AGENTS.md
architecture
data model
testing
data sources
meta maintenance
```

---

# 二十四、验收标准

只有全部满足，Phase 1 重构才算完成。

必须：

```text
npm ci
npm run typecheck
npm test
npm run build
```

全部成功。

Playwright：

```text
0 console errors
0 uncaught page errors
```

功能：

* 四路线可切换
* 三角色分类可切换
* 所有角色卡正常
* Wiki头像失败不破坏页面
* 成长表完整
* 四路线推荐完整
* TSV / CSV工作
* 搜索工作
* Theme工作
* localStorage工作
* Spoiler Gate工作
* 手机布局正常

内容：

* 不丢角色
* 不丢招募条件
* 不丢职业建议
* 不丢合流建议
* 不丢成长数据
* 不丢中文/英文名
* 不泄露默认隐藏的后期角色

---

# 二十五、不要做的事情

禁止：

* 把当前所有内容重新塞回一个React组件
* 使用大量 `dangerouslySetInnerHTML`
* 把数据库写在 JSX 里
* 用 `any` 绕过类型
* 为了省事移除双重防剧透
* 修改人物推荐却不说明
* 用社区翻译冒充官中
* 手工维护多个相同招募条件
* 直接编辑 `dist/index.html`
* 在没有测试的情况下部署
* 为了“现代化”加入不必要的大型依赖
* 直接删掉原型历史

---

# 二十六、提交策略

建议小步提交，例如：

```text
chore: initialize vite react typescript
refactor: extract character and growth data
refactor: extract recruitment domain model
feat: rebuild route tabs and character cards
feat: rebuild growth table
feat: restore spoiler gate
test: add unit and playwright coverage
ci: gate pages deployment on tests
docs: add architecture and agent constraints
```

不要做一个巨型 commit。

---

# 二十七、最终交付时必须向我报告

完成后请给出：

### 1. 分支

```text
codex/refactor-vite-react
```

### 2. 关键架构变化

简要说明。

### 3. 数据模型

说明哪些文件是：

```text
canonical source of truth
```

### 4. 测试

列出：

```text
typecheck
unit test
Playwright
build
```

结果。

### 5. 功能对照

说明旧HTML的哪些功能已经迁移完成。

### 6. 尚未处理的技术债

不要隐藏。

### 7. Git提交

列出主要commit。

### 8. PR

如果创建：

提供PR地址。

---

# 二十八、工作原则

如果在重构过程中发现：

> 当前HTML中的数据互相矛盾

不要擅自选择一个。

先：

1. 记录冲突
2. 尽量从当前仓库、已有数据源或公开可靠资料核实
3. 若仍无法判断，在最终报告中列为待确认数据

如果发现：

> 某个已有推荐明显只是玩家实验结论

不要删除。

应标记：

```text
experimental
```

而不是当成事实。

---

# 最终目标

这不是“把一个HTML换成React”。

真正目标是：

> 把现有的 Fortune's Weave 玩家攻略原型，
> 正式转换成一个
> **数据驱动、可测试、可长期维护、可以持续吸收新Meta的静态Web应用。**

当前单HTML版本应被视为：

```text
v0.x prototype
```

新的 Vite + React + TypeScript 版本应成为未来唯一主要开发入口。

完成等价重构后，再讨论下一阶段：

* 职业成长模拟器
* 角色详情
* 自定义阵容Builder
* Meta版本切换
* 更完整的职业数据库

在第一阶段完成之前，不要提前扩张范围。

```