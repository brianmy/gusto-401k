# Gusto 401(k) Onboarding Prototype

A clickable prototype exploring how Gusto could use its payroll data advantage to drive 401(k) adoption — starting with state retirement mandates as the entry point.

---

## The opportunity

Most small business owners don't set up a 401(k) because they don't know where to start, they assume it's expensive, and no one has made it feel urgent.

State retirement mandates change the urgency. New York now requires businesses with 10 or more employees to offer a qualifying retirement plan or face fines. More states are following. Gusto knows which of its customers are in mandated states, how many employees they have, and whether they already have a plan — without the customer having to answer a single question.

That's the core insight this prototype is built around: **Gusto already has the data to make this decision for the customer.** The job is to surface it at the right moment, frame it correctly, and remove every step that doesn't need to exist.

---

## What this prototype explores

**Proactive mandate detection.** Rather than waiting for a customer to discover the 401(k) product, the homepage surfaces a compliance banner automatically when Gusto detects the business is in a mandated state with uncovered employees. No marketing spend. No new data collection. Just using what Gusto already knows.

**Credit-first framing.** The SECURE 2.0 Act provides up to $16,500 in federal tax credits for small businesses that set up a new 401(k) in the first three years. That reframes the ask: this isn't a cost center, it's a missed credit. The CTA leads with the benefit, not the penalty.

**Payroll pre-fill as the unlock.** The biggest drop-off in the current Guideline setup flow is manual data entry — business name, employee count, pay schedule, plan type. Gusto has all of this in payroll. This prototype shows what the flow looks like when that data is pre-populated, reducing a multi-step process to a review-and-confirm.

**Plan type as a product decision, not a customer decision.** Guideline's current flow defaults to a Starter 401(k) with a $6,000 contribution limit. Most small businesses should use Safe Harbor, which allows $24,500. This prototype pre-selects Safe Harbor and explains why, rather than presenting a comparison table and asking the owner to figure it out.

**Benefits discoverability.** Today, 401(k) is buried below health benefits in the Financial Health category — effectively off-screen for most users. This prototype moves it to a featured recommendation on the Benefits page, elevated by the mandate context.

---

## The "Product thinking" toggle

Each page includes a **Product thinking** button (bottom right corner). Enabling it overlays numbered annotation badges on key design elements. Clicking a badge shows a tooltip explaining the reasoning behind that decision — why it's positioned that way, what it's trying to do, what the alternative was.

It's designed to make the prototype self-explanatory in a walkthrough or review context without cluttering the default view.

---

## Pages

| Page | What it shows |
|------|--------------|
| `home-v2.html` | Homepage with mandate banner and compliance task card |
| `benefits-v2.html` | Benefits page with 401(k) elevated to recommended |
| `setup-401k-1.html` | Setup step 1 — mandate context and SECURE 2.0 credits |
| `setup-401k-2.html` | Setup step 2 — payroll pre-fill review |
| `setup-401k-3.html` | Setup step 3 — enrollment settings and activation |

The `home.html`, `benefits.html`, and `app-directory.html` files are baseline pages carried over from an earlier version of the prototype.

---

## Running locally

```bash
cd prototype
python3 -m http.server 8765
```

Open `http://localhost:8765/home-v2.html`.

## Deploying to Vercel

Import this repo in Vercel with no build configuration. All files are static HTML — Vercel will serve them as-is.
