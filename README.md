# Fortune's Weave 玩家规划器

Vite + React + TypeScript 静态工具：四路线阵容、招募进度、职业与合流建议、成长率表、CSV/TSV、双确认防剧透、主题、Wiki 头像。

## 开发与验证

需要 Node.js 22.12+，CI 使用 Node 24。

```sh
npm ci
npm run dev
npm run typecheck
npm test
npm run build
npx playwright install chromium
npm run test:e2e
npm run preview
```

页面路径 `/fortune-weave-planner/`。Pages 只发布 dist，PR 不部署；main 必须通过类型、单元、构建和桌面/移动 E2E。

## 维护入口

- [审计](docs/audit.md)
- [架构](docs/architecture.md)
- [数据模型](docs/data-model.md)
- [测试](docs/testing.md)
- [资料来源](docs/data-sources.md)
- [Meta 维护](docs/meta-maintenance.md)
- [维护约束](AGENTS.md)

原型保留于 `1e8425c`，可用 `git show 1e8425c:index.html` 查看。旧进度和主题迁移时复制到新命名空间，旧键保留。
