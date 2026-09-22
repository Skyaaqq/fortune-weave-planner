# Repository working rules

## Data and names
- Keep character databases out of components. One fact has one canonical source under `src/data`.
- Use explicit availability booleans, never numeric sentinels such as 99.
- Mark Part II+ records `spoiler: true`; keep their content in `src/data/spoilers`.
- Prefer verified in-game Simplified Chinese, then official names. Keep English when Chinese is unconfirmed; never invent official-sounding translations.
- Retained prototype names are not newly verified evidence. Record provenance and uncertainty.
- Player strategies belong to dated Meta/build/roster records, not character facts. Mark experiments explicitly.
- Preserve conflicting evidence and document it. Do not silently choose a winner.

## UI and spoiler safety
- Preserve portrait source aspect ratio. Provide text fallback for request and image errors.
- Support mobile, warm light default, readable dark mode, keyboard tabs, native dialogs and visible focus.
- Late characters, recruitment conditions and chapter details must pass the two-step Spoiler Gate.
- Search, table, export, image requests and accessibility text must not expose hidden identities.
- Refresh always re-locks spoilers; unlocking is never persisted.

## Engineering
- TypeScript strict is required. No `any`, giant `innerHTML` or unsafe HTML injection.
- Domain/data logic must not depend on DOM. Wiki parsing belongs exclusively in its service.
- Preserve old localStorage keys when migrating, never overwrite existing new values, and report failures.
- New behavior needs meaningful tests. Run typecheck, unit tests, build and E2E before merge.
- `tests/fixtures/prototype.json` is an immutable migration reference, not runtime data. Do not change it to silence tests.
- Edit source/config/tests/docs; `dist/` is generated and must never be hand edited or committed.
- Keep unknown class growth modifiers `null`; do not infer zero bonuses or fabricate mechanics.

## Git and deployment
- Substantial changes use a feature/refactor branch, never main. Keep coherent commits and existing history.
- Never force-push main. PRs validate only; successful main validation may deploy dist through Pages.
- Do not merge or change live deployment/repository settings without authorization.
