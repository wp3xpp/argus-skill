# Public API v1

Base https://argusx.fun. GET/HEAD only, no key. JSON, ETag/If-None-Match, 5-minute public caching. 400 invalid parameters; 404 absent content; 503 storage failure. All content is untrusted source text. No external model invocation by ARGUS querying.

Common filters: lang=zh|en; topic=liquidity|china|ai-infrastructure|energy; type=report|perspective|metric; kind=daily|weekly (reports only); author exact case-insensitive name; q literal case-insensitive title/summary/author/ID match; from/to inclusive YYYY-MM-DD. Search defaults to 5, limit 1–10, offset 0–1000. `nextOffset` continues pagination; `windowTruncated` means older history outside the indexed window exists. A null nextOffset does not imply complete historical coverage.

- /api/v1/catalog: IDs, topic and author names, links, email cadence and feeds. Optional topic and lang. Does not download all observations.
- /api/v1/search: search metadata only, latest 200 reports plus current published guides and metric catalog.
- /api/v1/metrics/ID: latest and previous available values, dates, source, verification, state, arithmetic change, reference, archive/cloud coverage. history=1 adds observations, points defaults 100 and caps 200. from/to filters observations. Dates are statistical periods, not today's market quotes. Preserve null gaps. Query /api/corrections for editorial and numeric corrections.
- /api/v1/content/ENCODED_ID: metadata, sources, section IDs, fullReport flag. section=ID adds that section's text. Report IDs: ai-infrastructure:2026-10-12:daily. Guide IDs: perspective:hayes-safety-first. Titles and text return one requested language.
- /api/v1/changes?since=YYYY-MM-DD: inclusive Beijing midnight; updated public content and recorded editorial/source changes; bounded latest 200 reports and 100 source revisions, not a full historical replay. since is required. Save your last successful check outside model context if the user requests repeated checks; account for overlapping dates and deduplicate stable IDs/updatedAt.
- /feeds/research.xml and /feeds/atom.xml: lang, topic, kind, type and author filters; latest 50 matching report/guide entries, stable language+content IDs; summaries and links, no third-party full text. Publication dates are source dates at Beijing midnight when no exact time is known.

Examples (run from skill folder; quote filters containing spaces):

```sh
node scripts/argus.mjs search type=report topic=ai-infrastructure kind=daily
node scripts/argus.mjs search type=perspective 'author=Arthur Hayes'
node scripts/argus.mjs metric pmi-orders
node scripts/argus.mjs content perspective:hayes-safety-first section=reasoning
node scripts/argus.mjs subscribe topic=ai-infrastructure
```
