# 玩家 Meta 维护

可用性与门槛改 recruitment；主归属改 routes；替补改 replacements；职业分支改 builds；合流配对及专项路径改 merges。

`meta.ts` 包含 date、confidence 和可选 sources。当前为 2026-09-22 玩家反馈。high 要求充分证据；medium 为有依据但未充分复测；experimental 为社区假说、发烧友或 Min-Max 实验。

BuildPath 支持 class IDs、条件和 default / rng-fix / merge-primary / merge-secondary / experimental purpose。显示从 class 映射格式化。

## 遗留差异

妮涅、希蒙、古扎岚等旧合流目标与后更新职业指南不完全一致。Git 历史显示指南变更而目标未同步。当前保留两者并提示差异；后续需核对来源后一并更新。

乌尔坦德已于 2026-09-23 核对修正，详见 [研究记录](research/ultand-2026-09-23.md)。培养目标由 `BuildGuide.goal` 提供，角色卡与合流卡共用，避免分别维护造成方向倒置。未核对的旧记录仍保留原目标与差异提示。

角色卡默认展示第一条职业方案；其余条件分支和 RNG 救火方案位于展开详情中。整个指南为 experimental 时，第一条也必须显示实验标记，不能因展示顺序成为已验证推荐。

RNG 救火应保留条件：皮特鲁 STR 不足才借战车兵，米迦艾拉 SPD 落后才短暂飞行。赛奥朵拉弓替补不改变 8 个主归属分配。

每次更新记录日期、来源、理由并运行推荐与 UI 测试。将来按 date 组织版本快照，当前不扩展版本切换功能。
