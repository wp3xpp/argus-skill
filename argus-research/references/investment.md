# From evidence to an investment decision

Use this mode when the user asks what to buy, hold, reduce, avoid, prioritize or wait for. A report summary alone is not an investment recommendation. This is a read-only decision workflow; never place orders, access accounts or publish recommendations automatically.

## Decision scope

State the asset/theme, decision date, horizon and whether the answer is a general research view or tailored to supplied portfolio constraints. Use the user's horizon; if absent, label an assumed research horizon rather than silently choosing a trading timeframe. For a concrete allocation, leverage or trade-size request, ask only for material missing context: existing exposure, acceptable loss, horizon and liquidity needs. Continue the evidence work while waiting. Do not ask for brokerage credentials or send portfolio information to the public API.

Separate three questions: is the business/industry improving, is the security attractive at its price, and does adding exposure fit this investor? Favorable industry data does not answer the other two. If current price/valuation is absent, provide a research preference and a conditional entry decision, not a fabricated target price. “Wait / no new position” is a clear action when critical evidence is missing; explain exactly what would unblock it. Holding advice also requires the actual holding and constraints. Do not infer that every user should sell or hold from a theme score.

## Assemble only decision-relevant evidence

Start with one topic catalog and up to five report/guide metadata results. Select roughly 3–5 relevant metrics, one recent report and 1–2 relevant, genuinely different author arguments. These are starting budgets, not minimum evidence quotas: use fewer when sufficient and expand only to resolve a material uncertainty. Read section directories first, then selected reasoning, assumptions, evidence and falsification sections. Do not ingest all reports or complete metric histories. Reuse fetched results and avoid repeated model calls. Querying uses no model API; the host assistant uses its normal tokens.

For each decisive observation, retain metric ID, period, value, unit, verification, source, and scope. Preserve missing/dated/unverified states; publication, observation and retrieval dates are different. Use history only when establishing change and compare compatible periods, units and accounting definitions. Specify denominators and calculation formulas. Quarterly company cash flows cannot be presented as today's conditions or as AI-only project economics. Consolidated supplier revenue is not AI revenue, revenue is not backlog, negative OCF-minus-cash-CapEx is not insolvency, and narrow credit spreads are not proof of safety. Seasonality and reporting lags can defeat a simple period-on-period story.

Check relevant recorded corrections. If data is disputed, decisive evidence is too old, or a source cannot be verified, exclude the disputed claim from the action case and state its effect on confidence. For immediate executable security recommendations, verify current price, valuation and material events through available authorized current primary sources. If unavailable, explicitly limit the recommendation to a dated research view. Do not relabel API verification flags as an independent re-audit of the original.

## Build the causal argument

Make an evidence ledger with separate labels for observed facts, author claims, and your synthesis. ARGUS author guides are editorial paraphrases, not a fresh reading of the author's full original. Keep attribution precise. Two authors repeating a single source are not two independent confirmations. A famous author's conviction is not a data point or a vote that outweighs contrary facts.

Write the shortest complete causal chain: observation → mechanism → business outcome → valuation implication → proposed action. Explain each missing bridge; do not skip from a positive indicator to “buy.” Translate each useful author hypothesis into a measurable implication, compare it with observed data, and identify what remains untested. Include the strongest counterargument and specify whether it overturns the thesis or merely narrows the action. Prefer a competing mechanism to generic “market risk.”

Distinguish liquidity stress, financing pressure and confirmed operating deterioration. Financing weakness alone is not cancelled orders; a stock decline alone does not prove business failure. Conversely, do not assume a strong supplier can escape a valuation correction. Avoid mechanically ordering companies by a single cash-flow figure or by different reporting scopes.

## Deliver a clear, falsifiable answer

Lead with a one-sentence action and rationale. Give an explicit stance such as increase / initiate conditionally / maintain conditionally / reduce / avoid / wait, with its scope and horizon. Follow with:

1. **Evidence:** a compact table of decisive facts, dates, units, scope and source links. Note gaps that matter to the decision.
2. **Reasoning:** connect facts and author hypotheses into the causal chain; label your inference and give the strongest opposing evidence.
3. **Action plan:** explain what to do now and what to prefer or avoid. Distinguish a research watchlist from an executable buy list. Tie any position sizing to supplied constraints; never invent the user's assets, cost basis or tolerance. No invented leverage, return forecasts or numerical confidence.
4. **Change-of-mind conditions:** observable triggers for upgrading, reducing or exiting the view, measurement windows and sources to check. Thresholds chosen by you are research rules, not historical laws or author quotes. Do not hide circular tests such as “buy if bullish.”
5. **Scenarios and next check:** base/upside/downside mechanisms with conditional actions, a qualitative confidence level justified by freshness/coverage, and the next relevant release/event. Do not invent probabilities, event dates or guaranteed returns. Use a release window if the exact calendar is not verified.

Scale the length to the request. Do not force five headings for a quick question, but always retain the explicit decision, dated evidence, causal bridge, counterargument and invalidation. Distinguish thesis confidence from confidence in an entry price; uncertainty in one does not require vagueness in both.

## Example request

> Use ARGUS data, the latest AI infrastructure report and contrasting author reasoning to assess AI infrastructure for the next 3–6 months. Give a clear action, an evidence table, the causal path, the strongest counterargument and conditions that would change your mind. I have not supplied holdings or current valuation: keep position sizes and entry prices conditional.

An appropriate result can favor research on cash-generating firms while declining to add theme exposure until valuation and order evidence are available. It must not convert that preference into “buy Microsoft now” from consolidated cash flow alone. A frozen output example is available on the website; recompute its observations before reusing it as a current recommendation.
