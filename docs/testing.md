# 测试与验收

```sh
npm ci
npm run typecheck
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

Vitest 覆盖成长、推荐、条件、CSV/TSV、防剧透、引用、存储迁移/失败、头像解析/缓存。`tests/fixtures/prototype.json` 是 `1e8425c` 只读对照：53 行成长、212 个路线状态及全部职业路径/说明；不进入生产包。

Playwright 对生产 `/fortune-weave-planner/` 路径运行桌面和 Pixel 7 视口。覆盖四线、三分类、替补搜索、过滤、表格、复制、确认/取消/Escape/重新隐藏/刷新、旧进度与主题、存储不可用和 Wiki 失败。核心测试断言 0 console error 和 0 pageerror。

Wiki 用确定性响应 mock，不让外部服务波动阻断 CI。E2E 成功不保证真实 Wiki 可用。截图、失败 trace 保存在 test-results，CI 失败 artifact 保留 7 天。

已有 Chrome 可设置 `PLAYWRIGHT_CHANNEL=chrome` 运行同套测试；CI 使用锁定 Chromium。测试始终使用独立临时浏览器资料。

PR 只验证；main 验证通过才部署 dist。不要编辑 dist 或跳过验证。
