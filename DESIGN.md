---
name: MAXAUT Signal System
description: Near-black brutalist design system for MAXAUT — sharp corners, JetBrains Mono display type, and one loud lime signal used liberally rather than held scarce
colors:
  paper: "#0b0b0a"
  surface: "#161513"
  white: "#ffffff"
  ink: "#f4f3ef"
  quiet-ink: "#9c9a93"
  rule: "#2c2b28"
  signal-lime: "#c3f400"
  signal-lime-dark: "#abd600"
  signal-lime-ink: "#283500"
  signal-lime-soft: "rgba(195, 244, 0, 0.35)"
  substrate-line: "var(--quiet-ink)"
  console-bg: "#131313"
  console-ink: "#e5e2e1"
  console-quiet: "#8e9379"
typography:
  display:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "clamp(2.6rem, 6.8vw, 4.8rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.01em"
    textTransform: uppercase
  headline:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "clamp(2rem, 4vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.01em"
    textTransform: uppercase
  title:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "clamp(1.1rem, 2vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.15
    textTransform: uppercase
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label-mono:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.02em"
  micro-mono:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.7rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.04em"
rounded:
  panel: "0px"
  card: "0px"
  control: "0px"
  technical: "0px"
spacing:
  unit: 4px
  page-gutter: "clamp(1.25rem, 4vw, 4rem)"
  section-space: "clamp(4rem, 9vw, 8rem)"
  max-width: "1440px"
components:
  button-outline:
    backgroundColor: transparent
    border: "1px solid {colors.signal-lime}"
    textColor: "{colors.signal-lime}"
    rounded: "{rounded.control}"
    padding: "12px 21px"
  button-signal:
    backgroundColor: "{colors.signal-lime}"
    textColor: "{colors.signal-lime-ink}"
    rounded: "{rounded.control}"
    padding: "12px 26px"
---

# Design System: MAXAUT Signal System

## Overview

**Creative North Star: "Near-black, one loud signal"**

This document describes the site as it actually exists today, not the original light "Quiet System" it started from. Partway through implementation, direction changed toward matching `landing-page/code.html`'s dark, brutalist reference more closely while keeping the substrate canvas concept — that reimagining stuck, and a subsequent content-tightening pass cut the homepage from eight narrative beats down to four. This is the record of where it landed, kept current so the document can still be trusted as a build spec rather than a historical draft.

**Key Characteristics:**
- Near-black ground (`#0b0b0a`) with off-white type — dark by default, not a rare mode.
- Every heading (`h1`/`h2`/`h3`) is set in JetBrains Mono, uppercase, weight 700. Body prose stays system-sans, sentence case.
- Lime is loud and frequent: nav hover, section markers, headline emphasis words, interactive states, the wordmark's blinking cursor, the primary CTA. It is not held to one instance per viewport.
- Shapes are uniformly sharp — every corner is `0px`, no exceptions, no graduated scale by "how technical" something is.
- Glow is a real interaction signal now (button hover, dot hover, the wordmark cursor) — this system does not avoid it.
- A fixed, full-page animated substrate canvas (wireframe grid + lime "snake" trails) sits behind the entire page at all scroll positions, not just the hero.
- Self-hosted JetBrains Mono in three weights (400/500/700) — this replaced an earlier all-system-font, zero-extra-network-request approach once headlines needed mono.

## Colors

Near-monochrome ground, off-white text, one recurring lime signal. Lime is louder and more frequent here than the phrase "signal color" might imply elsewhere — see the Lime Discipline rule below for where the line still gets drawn.

### Neutral
- **Paper** (`#0b0b0a`): the only page background. There is no light variant.
- **Surface** (`#161513`): raised panels — the operations-demo panel (currently retired from the live page, see Components), row-hover fills.
- **Ink** (`#f4f3ef`): primary text, headline color, default nav-link color, primary demo/step-number fills. This is the "strong" neutral now — despite the name carried over from the light system, it renders as off-white on this dark ground, not near-black.
- **Quiet Ink** (`#9c9a93`): secondary/muted text and metadata.
- **Rule** (`#2c2b28`): hairline dividers and borders.

### Signal
- **Signal Lime** (`#c3f400`): unchanged from the original brand mark through every revision of this document — the one color that survived the light-to-dark reimagining untouched. Fill color for the primary CTA, text/border color for the secondary button, color for section markers, nav hover, headline emphasis spans, and most interactive/hover states.
- **Signal Lime Dark** (`#abd600`): hover fill for the primary (lime) button.
- **Signal Lime Ink** (`#283500`): required text color whenever lime is a fill, for contrast.
- **Signal Lime Soft** (`rgba(195, 244, 0, 0.35)`): the glow/halo color — used in `box-shadow` on button hover, dot hover, and interactive states. On the dark ground this reads as a glow rather than a tint, which is why it's now an alpha color instead of the pale solid hex it used to be.
- **Substrate Line** (aliases `--quiet-ink`): the color the background canvas's wireframe grid lines are drawn in — read from this custom property at runtime rather than hardcoded, so the canvas can't silently go invisible again if the palette changes (it did, briefly, mid-reimagining, before this fix).

### Console (still unused, still deferred)
- **Console Background** (`#131313`) / **Console Ink** (`#e5e2e1`) / **Console Quiet** (`#8e9379`): reserved for a Console Panel component that has never actually been built (see Components). Kept defined in case it is.

**Lime Discipline.** Lime is not scarce here the way it was in the original merge — it shows up in the wordmark, every section marker, nav hover, most interactive states, and roughly half of the remaining headline spans. What stays disciplined is where it does *not* go: body paragraphs, secondary metadata, and structural rules stay ink/quiet-ink/rule, so lime still reads as commentary and emphasis against a calm prose bed rather than decoration on every pixel. The one place the old single-signal instinct survives explicitly: the CONVERT section's marker is the only one given extra size (`1.5rem`, weight 700) precisely because it's the page's one deliberately unmissable closing moment — everywhere else, lime is frequent but not artificially rationed.

## Typography

**Headline voice — JetBrains Mono, uppercase, weight 700**: every `h1`, `h2`, and `h3` on the page, no exceptions. This is a direct reversal of the original merge, which explicitly forbade rendering headlines in all-caps mono. That prohibition is gone; this is now the house style.

**Body voice — system sans, sentence case**: paragraph copy, secondary labels, capability/step descriptions. This is the one place the original "sans tells the story" instinct survives — long-form reading text is never set in mono or forced into caps.

**Micro/label voice — JetBrains Mono**: section markers, nav links, button labels, small metadata (status readouts, outcome tags, step numbers). Two size tiers survive from the original system: `label-mono` (`0.875rem`, weight 500 — section markers, primary nav) and `micro-mono` (`0.7rem`, weight 500 — smaller inline metadata like demo hints and outcome tags).

### Hierarchy
- **Display** (mono, 700, `clamp(2.6rem, 6.8vw, 4.8rem)`, uppercase): the hero H1. One decisive first-view promise.
- **Headline** (mono, 700, `clamp(2rem, 4vw, 3.6rem)`, uppercase): every other section's H2. There is now only one shared size tier for these — the earlier version of this system had two.
- **Title** (mono, 700, uppercase, roughly `1.1–2rem` depending on context): capability names, approach step names.
- **Body** (sans, 400, `1rem`, 1.6): explanations, descriptions.
- **Label Mono** (mono, 500, `0.875rem`): section markers (`[ 0X / LABEL ]`), primary nav.
- **Micro Mono** (mono, 500, `0.7rem`, tracked): smaller inline metadata.

**The Plain Language Rule.** This survives, but scoped differently than before: headline *words* still state a business truth and don't stack vague superlatives — what changed is only the typographic treatment (now mono/uppercase/bold), not the content discipline. Body prose is where "no caps, no hype" still applies literally: paragraphs are never set in all-caps mono, and never read like marketing copy.

**The No-Dash Rule.** Copy never uses em dashes. They read as an AI-writing tell now, not a stylistic choice. Reach for a period, comma, colon, or parentheses instead, whichever the sentence actually calls for. If a sentence only works with an em dash, restructure the sentence.

**The No-Repeat Rule.** Added during the content-tightening pass that cut the homepage from eight beats to four: every scroll should either introduce new information or provide evidence for a claim already made, never just rephrase a claim in different words. This is what killed the original EXPLAIN and PRINCIPLES sections — both were restating the hero's thesis and the capabilities list in new clothes rather than adding anything. Apply it before adding any new section: if it doesn't answer a genuinely new question, fold its one useful idea into an existing section instead of giving it its own.

## Layout

A wide 12-column composition inside a `1440px` container with fluid outer gutters (`clamp(1.25rem, 4vw, 4rem)`), unchanged in principle from the original system. Section vertical rhythm tightened during the content pass: `--section-space` is `clamp(4rem, 9vw, 8rem)`, down from an earlier, more generous `clamp(6rem, 13vw, 12rem)`.

On narrow screens (below `960px`, then further below `680px`), grids linearize to single columns and horizontal arrangements stack. The header switches to a smaller `min-height` and the primary nav hides below `960px`.

The site header is `position: sticky; top: 0`, opaque, with its own full-bleed background layer separate from its centered inner content wrapper (`.site-header` vs. `.site-header-inner`) — necessary because the background canvas sits behind everything at `z-index: 0`, so a header that was only as wide as its centered content would let the canvas show through its side margins on wide viewports.

## Homepage Narrative

The homepage is a **fixed four-beat live sequence**, down from an original eight. Two beats were retired outright (their one useful idea folded elsewhere instead of getting a section); two more are built but deliberately not live yet.

**Live, in order:**
1. **01 / POSITION** — the hero. Broad MAXAUT proposition *and* the mechanism (understand the business, then engineer the right mix of software/ERP/data/automation as one system) in a single H1 + one intro paragraph. This section now also carries what used to be a separate EXPLAIN beat's thesis.
2. **02 / CAPABILITIES** — software engineering, business systems, intelligent automation, as three large rows (never icon cards). The section's `<h2>` is present but visually hidden (`.sr-only`) — real heading for accessibility navigation, no visible rhetorical headline, straight from the marker into the rows.
3. **03 / APPROACH** — Understand → Design → Build → Evolve. No intro paragraph anymore (it restated the hero); one of PRINCIPLES' three ideas ("use platforms where they fit, build bespoke where the business requires it") is folded into the Design step's description instead of getting its own section.
4. **04 / CONVERT** — headline and button only, no supporting paragraph. The one section with a bigger (`1.5rem`), still-centered, still-lime marker — see Lime Discipline above.

**Deferred (built, not shown):**
- **EVIDENCE** — real "selected systems" content. Ships with the `hidden` attribute until there's real, nameable work to put in it; still governed by Content & Evidence Discipline below. Its marker still reads `[ 05 / EVIDENCE ]`, matching its position in the original eight-beat numbering, since it isn't part of the live numbered sequence.

**Retired:**
- **DEMONSTRATE** — the interactive order-to-cash operations panel. Fully built (see Components) but commented out at the bottom of `<main>` rather than deleted, since it's a nontrivial interactive component worth possibly reusing (a dedicated ERP/service page, or revived here once there's real evidence to pair with it). Its marker is left as `[ 02 / DEMONSTRATE ]`, its original number.
- **EXPLAIN** and **PRINCIPLES** — deleted outright, not commented out. Unlike DEMONSTRATE, they were prose-only with no reusable structure, and per the No-Repeat Rule their content is better served folded into POSITION and APPROACH than preserved as dead sections.

Each live and deferred section still gets a `[ 0X / LABEL ]` marker (`.beat-marker`), now set in `label-mono` and lime (not the quiet-ink, smaller `micro-mono` size the original spec called for).

## Elevation & Depth

Structurally still flat: depth comes from hairline borders (`--rule`) and tonal surface changes (`--surface` on `--paper`), not ambient box-shadow elevation. What's different from the original merge is glow — it is now a real, deliberate interaction signal rather than something this system avoids: button hover, dot hover (capability marks, step numbers, the demo's live-dot), and the wordmark's blinking cursor all carry a lime `box-shadow`/`text-shadow` glow using `--signal-lime-soft`.

## Shapes

Uniformly sharp. Every `rounded` token — panel, card, control, technical — is `0px`. The earlier graduated scale (16px panels down to 0px technical annotations, meant to signal "how technical" something was) is gone; this system no longer distinguishes shape by content type. The only rounded elements left in the interface are literal circles (dots, the step-number circle, the demo node) via `border-radius: 50%`, not the `rounded` token scale.

## Components

### Buttons
- **Shape:** sharp rectangle (`0px`), generous padding. No pill buttons anywhere.
- **Signal** (`.button-signal`): lime fill, `signal-lime-ink` text. The primary CTA — currently only used for the CONVERT section's "Book a discovery call." Hover darkens toward `signal-lime-dark` and adds a lime glow.
- **Outline** (`.button-outline`): transparent, 1px lime border, lime text. Used everywhere else a button appears (header CTA, hero CTA). Hover adds a faint lime-tinted fill and a lime glow. There is no solid-neutral "primary" button variant in this system anymore — landing-page's own reference doesn't have one either, only lime-fill and lime-outline.

### Technical Annotations (Section Markers)
- The `[ 0X / LABEL ]` marker (`.beat-marker`) is lime, `label-mono` size (`0.875rem`), appearing once per section (live or deferred). Always `0px` corners implicitly (it's text, not a shape), always mono.
- The CONVERT section's marker gets a dedicated larger treatment (`1.5rem`, weight 700) via `.beat-marker--convert` — the one deliberately bigger, still-centered instance, see Lime Discipline.

### Console Panel
- Still speculative, still never built. A small, contained dark inset (`console-bg`/`console-ink`, mono type) for raw technical/log-style content, if a future section ever needs one.

### Interactive Operations Demonstration
- Fully built, currently **retired from the live page** — see Homepage Narrative. When live, it renders the order-to-cash flow (ERP event → plain-language question → grounded answer → controlled action) as four selectable stages inside a bordered `--surface` panel, hover/focus/click all trigger the same state change, `aria-live="off"` deliberately (state changes on hover would otherwise spam a live region).

### Substrate Canvas
- A `position: fixed`, full-viewport `<canvas>` (`.substrate-canvas`) sitting behind the entire page (`z-index: 0`, with `main`/`.site-footer` explicitly raised to `z-index: 1` above it) — it was originally confined to the hero only and was moved to cover the whole page on request.
- Renders a perspective wireframe grid (color read from `--substrate-line` at runtime) plus three animated lime "snake" trails with fading tails, glowing heads, and an occasional floating short mono status token (`SYNCED`, `LIVE`, etc. — deliberately not currency figures, to avoid implying an unverified result).
- **Fade behavior:** the lime trails/heads/pulse fade linearly over 10 seconds from when the animation loop starts (not from page load) — down to fully invisible below `680px` (mobile), down to 30% strength at `680px` and above (desktop/tablet), then hold at that floor. The base wireframe grid does not fade. Once fully faded on mobile, the snake-drawing work is skipped entirely each frame rather than drawn at zero opacity, as a small perf/battery saving. Respects `prefers-reduced-motion`: the animation loop never starts for those users, so the fade (itself a motion effect) never applies — they get one static full-opacity frame indefinitely.
- Colors are read from CSS custom properties via `getComputedStyle` at runtime rather than hardcoded literals, specifically so a future palette change can't silently break it the way the grid briefly did mid-reimagining.

### Sr-Only Headings
- New pattern established during the content-tightening pass: a section can drop its visible rhetorical headline (per the No-Repeat Rule, when that headline would just restate a claim) while keeping a real `<h2>` for accessibility navigation, via a `.sr-only` utility class. Currently used on CAPABILITIES.

### Navigation
- Wordmark: `MAX` (weight 400) + `AUT` (weight 700) + `_` (lime, blinking cursor with a lime `text-shadow` glow), all in mono. The `>` chevron from earlier iterations was removed — it's `MAXAUT_`, not `MAX>AUT_`, in the current build.
- Primary nav links: mono, `1rem`, weight 500, full-strength `--ink` by default (not the muted "restrained" treatment the original system called for), lime on hover.
- Header CTA uses the outline button variant, not signal — the signal button stays reserved for CONVERT alone.
- Header is sticky (see Layout), opaque, with a hairline bottom border — not the "lightweight, never floating" description of the original system, though it's a solid bar, not a translucent glass panel.

## Content & Evidence Discipline

Unchanged in substance from the original: no fabricated customer names, testimonials, quantified outcomes, certifications, partner logos, or case studies. Where real evidence is ERP-specific, the EVIDENCE section (deferred) and any future concrete demonstration should be honestly ERP-anchored rather than manufacturing false balance across capability areas. This now works alongside the No-Repeat Rule above: a section earns its place either by adding new information or by providing evidence for a claim already made — never by restating.

## Do's and Don'ts

### Do
- Use whitespace to isolate one important idea at a time.
- Set every heading in uppercase JetBrains Mono; keep every paragraph in sentence-case system sans. Never mix the two roles.
- Use lime freely for emphasis, interaction, and signal color — but keep it out of body prose and structural lines.
- Add glow (`--signal-lime-soft`) as the interaction/liveliness cue on hover and active states.
- Keep every corner sharp (`0px`) — controls, panels, cards alike.
- Before adding a new section, check the No-Repeat Rule: does it add new information, or just rephrase an existing claim?

### Don't
- Round any corner beyond a literal circle (dots, node markers). No pill buttons, no soft panel corners.
- Set body paragraphs in all-caps or in mono — that voice is reserved for headlines and labels.
- Build the page from a repeated grid of icon cards; capabilities and similar taxonomies are large horizontal rows.
- Invent customer logos, benchmarks, testimonials, or claim capability depth (in a case study or "selected systems" sense) that doesn't exist yet.
- Use technical decoration (brackets, coordinates, telemetry) without it meaning something real.
- Use em dashes in copy. Use a period, comma, colon, or parentheses instead.
- Give a section its own rhetorical headline if that headline just restates a claim made elsewhere — use an `.sr-only` heading instead, or fold the idea into the section that already owns it.
