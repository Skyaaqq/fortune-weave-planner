# 本次迁移验收记录

基线 `1e8425c`；分支 `codex/refactor-vite-react`。本地 Node 24，2026-09-22。

- `npm ci`：成功；审计报告 0 vulnerabilities。
- `npm run typecheck`：成功，strict。
- `npm test`：25 项通过。
- `npm run build`：成功，正确 `/fortune-weave-planner/` base，后期资料独立 chunk。
- Vite dev 启动检查：HTTP 200，React 入口可访问。
- Playwright：桌面和 Pixel 7 共 12 个场景。当地下载 Chromium 较慢，因此使用 `PLAYWRIGHT_CHANNEL=chrome` 的本机 Chrome 独立测试上下文；CI 仍下载锁定 Chromium。
- 原型对照：53 行身份/基础/派生成长、212 个路线状态、全部职业路径/理由一致。
- 核心 E2E：0 console error、0 uncaught page error。Wiki 在自动测试中 mock，另测接口失败、单图错误、图片比例、会话缓存。
- 主 bundle 检查：不含 Eshmel / Hong Hua / Troy / Creek / Nathan 等后期姓名。
- 桌面与手机截图保留在 `test-results/`，不提交构建/测试产物。

## 功能对照

四路线和三类卡片、角色双语名、招募与进度、职业及 RNG 分支、8+3 合流、搜索及过滤、53 行成长及四线状态、CSV/TSV、双确认与重新隐藏、前置清单、主题、Wiki 头像均迁移。

修复原成长表直接暴露后期角色：默认以 3 个匿名锁定行占位，确认后显示原数据，导出同步。赛奥朵拉替补仍不计入 8 个主招，搜索可命中替补并显示 canonical 条件。

## 仍需单独维护

- 游戏事实与原始截图尚未独立重新核验。
- 原型部分合流目标与更新后职业指南冲突，保留并标注，未改写攻略结论。
- 职业成长修正及部分层级无可靠源，显式为未知，不能直接用于未来模拟器。
- 部分历史策略 prose 仍包含属性摘要；不作为计算数据源。
- 实际线上部署由用户审阅合并后触发；本次不合并、不更改线上设置。
