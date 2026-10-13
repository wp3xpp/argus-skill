# ARGUS Research Skill

Query public macro data, daily/weekly reports and bilingual author reasoning guides with observation dates and sources. No API key. Node 22+ and network access to https://argusx.fun required.

[Download & try](https://argusx.fun/skill/) · [API docs](https://argusx.fun/downloads/api.md) · [Research](https://argusx.fun/research/)

## Codex

Place the `argus-research` folder in your project's `.agents/skills/`. Codex discovers local skills; restart if needed. Ask:

> Use $argus-research to find the latest AI infrastructure daily report, read its debt reasoning, and cite dated sources.

Or ask Codex's skill installer to install the `argus-research` path from `wp3xpp/argus-skill`.

## Claude Code and other agents

Claude Code project installation: `.claude/skills/argus-research/`; personal: `~/.claude/skills/argus-research/`. Invoke `/argus-research` followed by your request. Same bundle, no provider SDK.

Other Agent Skills clients: install in their documented skill location. HTTP/function agents can use [OpenAPI 3.1](https://argusx.fun/openapi.json) directly without a skill loader or Node.

[Client installation and network guide](argus-research/references/clients.md). Hosted Claude network access depends on the product: Claude API skill execution cannot directly fetch external APIs, while claude.ai uses user/admin network settings. Use an approved HTTP tool if available. Installation never expands network permissions.

## Direct helper

```sh
node argus-research/scripts/argus.mjs search type=report topic=ai-infrastructure kind=daily
node argus-research/scripts/argus.mjs metric pmi-orders
node argus-research/scripts/argus.mjs search type=perspective 'author=Arthur Hayes'
```

Public reads only. No publishing, draft review, subscriber list access or email sending. Email subscriptions go through website consent and confirmation. Current email cadence is Sunday 18:00 Asia/Shanghai, at most one weekly digest per person; daily email is not enabled. RSS/Atom can follow daily reports. Installation does not create subscriptions or scheduled tasks.

MIT applies to the skill bundle only. Retrieved data, reports and linked third-party essays retain their own rights. ARGUS author guides are editorial paraphrases, not authorized full translations. Codex downloaded-helper live queries were verified; Claude Code is standard-format supported, not yet live model-session tested. Other agents use the documented standard or public HTTP interface according to their capabilities.
