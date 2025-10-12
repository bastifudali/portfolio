---
id: "blinkist_replit_app"
topic: "Customer Feedback Aggregation"
title: "€60K Saved in One Week: Bootstrapping Blinkist's Feedback Aggregator"
company: "Blinkist"
company_logo: "/blinkist-logo.png"
date: "2025-03-15"
summary:
  impact: "Saved €60,000 annually by replacing Chattermill with a custom feedback aggregation tool built in one week"
  myRole: "Led the design and development of a Replit-based feedback aggregation system, integrating App Store and Google Play reviews into Slack"
  challenge: "Decoupling from Go1 meant losing our existing feedback pipeline—and a €60K/year Chattermill subscription—without clarity on requirements"
  solution: "Built a self-hosted Replit app to fetch, process, and schedule review deliveries to Slack, then hardened it for production security"
tags:
  - "tooling"
---

## A €60K Annual Saving in One Week

Blinkist had just decoupled from Go1 and simultaneously lost our in-house research team. Worse, we were still paying €60,000 per year for Chattermill, yet lacked clear insight into who actually used it or its true value. Faced with a pressing budget squeeze and no ready replacement, I took on the challenge to deliver a lean, self-made alternative—all in under seven days.

## The Feedback Gap After Go1 Decoupling

In the aftermath of the Go1 split, we discovered our most critical feedback touchpoint—aggregated App Store and Google Play reviews piped into Slack—was powered entirely by Chattermill. With no internal champion and mounting costs, questions piled up: Do we really need this tool? Who consumes its reports? And if so, could we rebuild it more efficiently?

## Taking Charge: From Prototype to Production

My manager, enthused by “vibe coding,” encouraged me to explore a homegrown solution. I mapped out the core feature: fetch reviews from Apple’s and Google’s APIs, normalize them, and forward summaries to designated Slack channels. On Replit, I quickly sketched a UI using mock data—crossing the threshold into the project proper—before switching to live data.

## Navigating API Quirks and Hallucinations

Real-world data proved thorny. Replit’s AI assistance began hallucinating fake reviews, and API documentation for both stores felt dense. I enlisted a teammate versed in REST patterns to vet my calls, and together we wrote strict validation rules. Gradually, mockups gave way to genuine review streams, and our Slack channel lit up with accurate feedback.

## Secure and Automate: Productionizing the Prototype

The toughest moment arrived when tying together scheduled fetches, data processing, and Slack notifications into a single automated pipeline. After wiring up cron jobs on Replit and ensuring idempotent data handling, I added OAuth authentication and token rotation to protect our endpoints. Finally, the prototype earned its wings and was deployed securely to production.

## Lessons Learned: Building Lean, Building Right

Today, the team still enjoys a steady drip of user reviews—without Chattermill’s hefty price tag. We reclaimed €60K in annual savings and proved that tailored tooling can outpace generic platforms when scope is clear. The project reinforced that rapid prototyping (“vibe coding”) accelerates ideation, but production-grade systems demand rigorous implementation and security hardening.
