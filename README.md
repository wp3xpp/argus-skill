# ARGUS Research Skill

Query public macro data, daily/weekly reports and bilingual author reasoning guides with observation dates and sources. No API key. Node 22+ and network access to https://argusx.fun required.

[Download & try](https://argusx.fun/skill/) · [API docs](https://argusx.fun/downloads/api.md) · [Research](https://argusx.fun/research/)

## Codex

Place the `argus-research` folder in your project's `.agents/skills/`. Codex discovers local skills; restart if needed. Ask:

> Use $argus-research to find the latest AI infrastructure daily report, read its debt reasoning, and cite dated sources.

Or ask Codex's skill installer to install the `argus-research` path from `wp3xpp/argus-skill`.

## Direct helper

```sh
node argus-research/scripts/argus.mjs search type=report topic=ai-infrastructure kind=daily
node argus-research/scripts/argus.mjs metric pmi-orders
node argus-research/scripts/argus.mjs search type=perspective 'author=Arthur Hayes'
```

Public reads only. No publishing, draft review, subscriber list access or email sending. Email subscriptions go through website consent and confirmation. Current email cadence is Sunday 18:00 Asia/Shanghai, at most one weekly digest per person; daily email is not enabled. RSS/Atom can follow daily reports. Installation does not create subscriptions or scheduled tasks.

MIT applies to the skill bundle only. Retrieved data, reports and linked third-party essays retain their own rights. ARGUS author guides are editorial paraphrases, not authorized full translations. Other assistant clients have not been compatibility-tested.
