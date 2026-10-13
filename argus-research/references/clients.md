# Client installation and capability boundaries

Same argus-research folder for all clients; no provider SDK, account key, plugins or MCP required. Endpoint: https://argusx.fun. This skill does not invoke a model API.

## Codex

Project: .agents/skills/argus-research/SKILL.md. Invoke `$argus-research` with a request. Restart if discovery does not refresh. Network access to argusx.fun must be allowed.

## Claude Code

Project: .claude/skills/argus-research/SKILL.md. Personal installation: ~/.claude/skills/argus-research/SKILL.md. Invoke `/argus-research Find the latest AI infrastructure daily report and explain the debt reasoning with sources`, or ask Claude to use ARGUS Research. Node 22+ is required only for the shipped helper; direct HTTPS tools are an alternative. Preserve the client's normal command and network approvals. Optional agents/openai.yaml is Codex UI metadata, not needed by Claude.

## Claude hosted clients / APIs

A custom skill ZIP can be used only where the product/plan supports custom skills. Hosted runtime network policies vary; Claude API skill code-execution sandboxes cannot directly call external APIs, while claude.ai access depends on user/admin network settings. Uploading a skill alone does not enable public-data fetching. Use an available approved HTTP tool/connector for argusx.fun, or the website links. Do not claim support for arbitrary hosted networking or request unrelated account credentials.

## Other agents

If the client supports the Agent Skills standard, install this folder in its documented skills location and allow its existing HTTPS tools or Node helper. We do not guess client-specific directories or claim every client was tested.

If it has only HTTP or function tools, no skill installation is required. Use https://argusx.fun/openapi.json (OpenAPI 3.1, GET-only, no authentication), or the API reference. A typical sequence is search -> content directory -> selected section; catalog -> metric for numbers. Function-tool import depends on the host. Never import writing/review/subscriber management endpoints.

Without HTTP or executable tools, share website links; real-time retrieval is unavailable.

## Verification

The downloaded bundle and helper were executed by the current Codex session against production. Standard frontmatter/paths are documented for Claude Code and validated structurally; no Claude model session or other provider model was invoked. This avoids extra token cost. Actual installed-client discovery, network prompts and hosted runtime availability must be checked in that client.

Primary references:
- https://learn.chatgpt.com/docs/build-skills
- https://code.claude.com/docs/en/skills
- https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview
- https://agentskills.io/specification
