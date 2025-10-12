---
id: "ck_design_system"
topic: "Design System"
title: "Designing the Backbone: How We Built Chefkoch’s Unified Design System"
company: "Chefkoch"
company_logo: "/chefkoch-logo.png"
date: "2021-06-01"
summary:
  impact: "Accelerated product delivery, reduced inconsistencies, and created a shared language between design and engineering across all Chefkoch products."
  myRole: "Led the design strategy, guided the transition from Adobe XD to Figma, and partnered with engineers to define scalable foundations and purposeful components."
  challenge: "Fragmented workflows between designers and developers slowed feature delivery and led to inconsistent user experiences."
  solution: "Created a unified design system built on semantic design tokens and purpose-driven components, aligning Figma libraries with a matching Vue component library."
tags:
  - "design-system"
  - "tooling"
  - "collaboration"
---

## A Foundation for Speed and Consistency

What started as a small side project turned into one of the most impactful tools in Chefkoch’s product development process.  
The new design system became the backbone connecting design and engineering, enabling faster delivery, fewer inconsistencies, and smoother collaboration.

Within months, a team of just **two designers and two engineers** reshaped how we built products — without ever slowing down feature work.

## The Problem We Needed to Solve

Designers were working in **Adobe XD**, while developers maintained a loose **HTML/CSS library** in Storybook.  
Every new feature introduced visual drift and redundant work.  
We were missing a shared system that would bring **speed, scale, and quality** together.

The vision was to create one source of truth for both design and code — a system that aligned tools, language, and output.

## Moving to Figma and Setting the Foundation

Our first step was migrating the design workflow to **Figma**.  
The switch enabled real-time collaboration, component-based design, and a direct bridge to front-end development.

We rebuilt our Storybook as a **Vue component library**, designed to mirror the Figma components.  
This pairing became the foundation for how we defined, documented, and shipped design decisions.

The system was built on two layers:

- **Foundations:** colors, typography, spacing, and icons — all stored as semantic tokens and synced to code.
- **Components:** reusable elements with defined purpose and boundaries to ensure visual and behavioral consistency.

## Building Purpose-Driven Components

Rather than following Atomic Design principles, we opted for a **simpler, purpose-driven approach**.  
Each component was defined by _what it should achieve_ rather than _how it looks_.

We made deliberate decisions about which parts needed flexibility and which needed to stay strict.  
This reduced redundant styling, made design intent clearer, and allowed designers to work faster without adding engineering overhead.

## Adoption and Impact

As soon as both design and code libraries were aligned, teams began using the system naturally.  
Designers could assemble interfaces quickly; developers could implement them without guesswork.

The outcomes were tangible:

- **Faster feature development** through reusable patterns
- **Consistent user experiences** across multiple products
- **Improved designer-developer collaboration** thanks to a shared structure and language
- **Reduced QA and handoff friction**, leading to higher delivery confidence

What began as an internal initiative soon became **core infrastructure** for Chefkoch’s product ecosystem.

## Lessons Learned

1. **Start small, but think long term.** A system that evolves with the product scales better than one that tries to do everything from day one.
2. **Build with engineering, not for it.** Collaboration creates adoption.
3. **Define flexibility intentionally.** Too much freedom kills consistency; too little kills creativity.
4. **Keep it simple.** The best systems are easy to use and hard to misuse.
5. **Treat it like a product.** Maintain, evolve, and listen to feedback.

The Chefkoch Design System didn’t just standardize our UI — it changed how we work.  
It became the quiet engine behind every feature, ensuring consistency and speed while giving designers and developers a shared sense of ownership.
