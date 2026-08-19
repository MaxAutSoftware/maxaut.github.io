---
name: MAXAUT Operating System
description: Quiet, precise systems engineering for software, ERP, automation, and intelligent operations
colors:
  paper: "#f2f1ed"
  surface: "#fbfaf7"
  clean-white: "#ffffff"
  ink: "#181817"
  ink-hover: "#353532"
  quiet-ink: "#686862"
  rule: "#d7d6d0"
  signal-lime: "#b7f000"
  signal-lime-dark: "#88b500"
  signal-lime-soft: "#e8f7b8"
  dark-surface: "#131313"
  dark-rule: "#2a2a2a"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3.25rem, 8.5vw, 6rem)"
    fontWeight: 520
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4.5rem)"
    fontWeight: 520
    lineHeight: 1
    letterSpacing: "-0.035em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.1rem, 2vw, 2rem)"
    fontWeight: 530
    lineHeight: 1.15
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  mono-label:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.04em"
  mono-data:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.7rem"
    fontWeight: 500
    lineHeight: 1.35
rounded:
  control: "4px"
  panel: "14px"
  detail: "6px"
  technical: "0px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "96px"
  xxl: "160px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
    padding: "14px 22px"
  button-signal:
    backgroundColor: "{colors.signal-lime}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "14px 22px"
---

# Design System: MAXAUT Operating System

## Overview

**Creative North Star: "The Operating System"**

MAXAUT should feel like a systems engineering firm, not a generic software consultancy and not a terminal-themed developer portfolio.

The site combines the calm, architectural clarity of the existing ERP-focused "Quiet System" with the stronger brand character of MAXAUT's technical identity. The result should communicate that MAXAUT understands businesses as interconnected systems: software, ERP, data, people, decisions, integrations, and automation.

The visual system is predominantly matte off-white, near-black, and structural grey. MAXAUT lime is retained as the single active signal. JetBrains Mono remains part of the identity, but only for metadata, system labels, stage names, references, and other explicitly technical information. Narrative copy remains in a modern sans-serif.

The page should feel precise, engineered, quiet, and expensive.

**Core idea:**
- The sans-serif explains the business.
- The monospace describes the system.
- Structural diagrams show how things connect.
- Lime indicates where action, intelligence, or change is happening.

**Key Characteristics:**
- Matte off-white primary canvas
- Near-black typography with wide negative space
- One scarce MAXAUT lime signal
- Architectural 12-column layouts
- Sans-serif narrative language
- Monospace technical annotations
- Connected systems diagrams instead of decorative illustration
- Sparse use of sharp brackets, reference IDs, stages, and system metadata
- No fake terminal theatrics
- No generic "AI startup" visual language

---

# Brand Positioning

MAXAUT is not positioned primarily as:
- an ERP implementer
- an AI consultancy
- a software development shop
- a cloud consultancy

MAXAUT is positioned as a **systems engineering company for operating businesses**.

The homepage must provide an umbrella for:
1. Software Engineering
2. Business Systems / ERP
3. Intelligent Automation
4. Architecture & Technical Consulting

ERP remains an important capability and can retain its own dedicated service page, but it should not define the entire company.

## Primary Brand Thesis

Preferred territory:

**We engineer the systems your business runs on.**

Supporting proposition:

> Bespoke software, modern business systems, and intelligent automation designed around the way your organisation actually works.

Alternative thematic statement:

> Your business runs on systems. We make them better.

## Secondary Systems Thesis

The idea of "substrate" remains valuable but moves below the top-level company proposition.

Example:

> Software, ERP, integrations, data, and automation form the operating substrate of the business.

This is the conceptual bridge between MAXAUT's different capabilities.

---

# Color System

## Primary Palette

### Matte Paper
`#f2f1ed`

Primary page background.

### Clean Surface
`#fbfaf7`

Raised diagrams, interactive operational panels, and detail regions.

### Clean White
`#ffffff`

Use sparingly where stronger contrast is required.

### Soft Black
`#181817`

Primary typography, structural anchors, dark buttons.

### Quiet Ink
`#686862`

Secondary copy, explanations, metadata, inactive system states.

### Structural Rule
`#d7d6d0`

Dividers, diagrams, borders, paths, inactive nodes.

## Signal Color

### MAXAUT Lime
`#b7f000`

Use for:
- active automation
- current process stage
- status indicators
- live intelligence
- selected diagram nodes
- strongest conversion action
- occasional logo accents

### Signal Lime Dark
`#88b500`

Hover / darker active state.

### Signal Lime Soft
`#e8f7b8`

Focus halos, selected-node rings, low-intensity signal backgrounds.

## Dark Surfaces

Dark mode is not the default visual environment.

Use dark sections rarely and intentionally, for example:
- a technical case-study insert
- code / infrastructure metadata
- product architecture views
- system readouts

Dark surfaces:
- `#131313`
- rule: `#2a2a2a`

## The One Signal Rule

Lime is not decorative.

A viewport should usually contain only one dominant lime event. The colour should answer:

> "Where is the important action happening?"

Avoid spreading lime across multiple headings, icons, backgrounds, outlines, and buttons simultaneously.

Approximate visual balance:

- 90–95% paper / black / grey
- 4–9% structural neutral detail
- 1–2% lime

---

# Typography

## Narrative Typography

Use the native system sans stack:

```css
-apple-system,
BlinkMacSystemFont,
"Segoe UI",
"Helvetica Neue",
Arial,
sans-serif
```

Use for:
- headlines
- propositions
- body copy
- case-study descriptions
- navigation
- capability descriptions
- approach explanations

The sans-serif is the primary voice of the company.

## Technical Typography

Use JetBrains Mono for:
- stage identifiers
- system labels
- status text
- project metadata
- architecture references
- process labels
- timestamps
- version numbers
- case-study stack information
- diagram readouts

Examples:

```text
SYSTEM_01_
STATUS / ACTIVE
PHASE_03
ERP / OPERATIONAL_CORE
01 / 04
STACK / FRAPPE + ERPNEXT
```

Do not write narrative marketing copy in monospace.

Bad:

```text
WE_BUILD_BESPOKE_SOFTWARE_FOR_COMPLEX_BUSINESS_PROBLEMS_
```

Good:

```text
SYSTEM_02 / BUSINESS_OPERATIONS
```

followed by a normal sans-serif headline:

> Modernise the systems your operation depends on.

## Typography Principle

**Sans tells the story. Mono describes the system.**

This distinction should remain consistent throughout the site.

---

# Shape Language

The visual language is sharper than the original Quiet System, but not completely brutalist.

## Radius Scale

- Major interactive panels: `12px–16px`
- Secondary containers: `6px–8px`
- Buttons: `2px–4px`
- Technical diagrams / metadata blocks: `0px`

Avoid fully rounded pill controls except where the interaction genuinely requires a compact selectable token.

## Why

The completely sharp MAXAUT system is distinctive but visually rigid when applied everywhere.

The highly rounded Quiet System is calmer but slightly too SaaS-like.

The combined system uses subtle rounding for functional surfaces and hard geometry for explicitly technical elements.

---

# Layout

## Grid

Desktop:
- 12-column layout
- maximum content width: `1440px`
- fluid outer gutters
- generous negative space
- large narrative statements occupy 6–9 columns
- supporting copy occupies 3–5 columns

Tablet:
- 8-column grid

Mobile:
- single-column narrative flow
- technical diagrams linearise vertically
- process paths become vertical paths

## Spacing

Use a restrained scale derived from 8px:

- 8
- 16
- 24
- 32
- 48
- 64
- 96
- 128
- 160

Major sections should generally have `96px–160px` vertical separation on desktop.

Whitespace is a structural element, not unused space.

---

# Navigation

## Structure

Left:
- MAXAUT wordmark

Centre / right:
- Capabilities
- Work
- Approach
- Principles

Primary action:
- Book a discovery call
- Start a conversation

## Navigation Style

Avoid the fully terminal-style navigation.

Do not use:
- `SERVICES_`
- `INITIATE_SESSION`
- `CONSULT_`
- glowing tabs

Instead use normal language with subtle technical metadata where useful.

The logo provides enough brand character without forcing every navigation item into a terminal metaphor.

---

# Wordmark

Use the proper MAXAUT wordmark rather than rebuilding it as plain text where possible.

For the light site:
- primary wordmark: dark charcoal
- optional lime accent on `_`, `>` or another controlled brand element
- maintain adequate contrast
- avoid neon glow

The logo should be visually distinct, but not dominate the page.

---

# Homepage Information Architecture

## 1. Hero — Company-Level Proposition

The homepage hero must describe MAXAUT broadly.

### Recommended structure

Small technical label:

```text
SOFTWARE / SYSTEMS / AUTOMATION_
```

Primary headline:

> We engineer the systems your business runs on.

Supporting copy:

> Bespoke software, modern business systems, and intelligent automation designed around the way your organisation actually works.

Primary CTA:
- Start a conversation

Secondary CTA:
- See our work

## Hero Layout

Use an asymmetric 12-column layout similar to the Quiet System:

```text
[ technical label ]

                    [ major headline ]

                                            [ support copy ]
                                            [ primary CTA ]
```

Do not place a generic illustration beside the headline.

The visual interest should come from typography, layout, structural rules, and the interactive systems demonstration below it.

---

# 2. Interactive System Demonstration

Retain the existing "living operations" interaction model because it demonstrates systems thinking rather than merely claiming technical capability.

The demo should be broader than ERP.

## Structure

```text
BUSINESS NEED
     ↓
SYSTEM
     ↓
AUTOMATION
     ↓
OUTCOME
```

Each stage should be interactive.

## Example Modes

### Operations

```text
Order received
→ ERP checks stock
→ Agent identifies exception
→ Approval routed
```

### Bespoke Software

```text
Business constraint
→ Custom application
→ Integration layer
→ Operational workflow
```

### Data / AI

```text
Business question
→ Operational data
→ Agent reasoning
→ Controlled action
```

## Behaviour

Desktop:
- horizontal connected path
- hover, keyboard focus, or click selects a node

Mobile:
- vertical path
- tap selects stage

Use lime for the current active path only.

Keep:
- live node
- progress path
- detailed readout
- stage metadata

Avoid:
- fake telemetry
- meaningless coordinates
- random CPU stats
- visual effects unrelated to the workflow

---

# 3. Systems Thesis

After the hero demo, introduce the conceptual framework behind MAXAUT.

Example headline:

> Good automation begins with good systems.

Supporting idea:

> Software, ERP, integrations, data, and intelligent automation are not separate technology projects. Together they form the operating substrate of the organisation.

Possible diagram:

```text
            PEOPLE
              │
              │
DATA ────── SYSTEMS ────── AUTOMATION
              │
              │
           DECISIONS
```

Use real relationships and labels rather than decorative node graphs.

---

# 4. Core Capabilities

Do not use repeated icon cards.

Use large, border-separated horizontal rows.

## Capability 01

Technical label:

```text
01 / SOFTWARE_ENGINEERING
```

Headline:

> Bespoke systems for problems off-the-shelf software cannot solve.

Supporting areas:
- Applications
- Integrations
- Platforms
- APIs
- Internal tools

## Capability 02

```text
02 / BUSINESS_SYSTEMS
```

Headline:

> Make the operational core fit the way the business actually works.

Supporting areas:
- ERP
- Process design
- Reporting
- Integrations
- Workflow design

## Capability 03

```text
03 / INTELLIGENT_AUTOMATION
```

Headline:

> Make the systems around the decision do more of the work.

Supporting areas:
- Agents
- Workflow automation
- AI integration
- Data systems
- Decision support

## Capability 04

Optional:

```text
04 / ARCHITECTURE
```

Headline:

> Fix the system before scaling the problem.

Supporting areas:
- Architecture review
- Cloud
- Infrastructure
- Technical strategy
- Modernisation

---

# 5. Selected Systems / Case Studies

The general MAXAUT homepage needs evidence of applied work.

Section title:

> Selected systems.

Do not call this simply "Portfolio" unless necessary.

Each case study should be large, quiet, and information-dense.

## Example Structure

```text
ASA PRODUCTS                         01 / BUSINESS_SYSTEMS

Manufacturing ERP built around
the way production actually happens.

ERPNext · Frappe · Workflow automation

STATUS / ACTIVE
STACK / FRAPPE + ERPNEXT

View system →
```

Each project should include:
- client / project name
- category
- short outcome-led description
- relevant stack
- system status if useful
- optional architectural diagram or interface capture

Avoid:
- logo walls
- meaningless screenshots
- vanity technology lists with no project context

---

# 6. Approach

Use a four-stage operating model.

## Phase 01 — Understand

```text
PHASE_01_
```

> Understand the business, constraints, workflows, and existing systems.

## Phase 02 — Design

```text
PHASE_02_
```

> Define the architecture, interfaces, controls, and operating model.

## Phase 03 — Build

```text
PHASE_03_
```

> Ship useful vertical slices with real feedback rather than disappearing into a long implementation cycle.

## Phase 04 — Evolve

```text
PHASE_04_
```

> Measure the system, automate the right work, and improve based on actual operational behaviour.

The technical label can use JetBrains Mono while the phase explanation remains sans-serif.

---

# 7. Principles

Use large typography and minimal decoration.

Recommended lead statement:

> Engineering should reduce complexity.  
> Not move it somewhere else.

Principles:

## Built Around the Operation

Technology should fit the real business rather than forcing the business around the tool.

## Own the Important Parts

Use platforms where they help. Build bespoke software where differentiation or control demands it.

## Automate With Context

AI and automation should operate against real systems, permissions, controls, and accountable workflows.

## Make Complexity Legible

Architecture should expose relationships clearly enough that teams can understand how the system behaves.

---

# 8. Contact / Conversion

The final CTA should remain visually simple.

Small label:

```text
START_HERE_
```

Headline:

> Bring us the system, workflow, or handoff that is slowing the business down.

Supporting copy:

> We will map the problem, identify where the system is failing, and determine whether the right answer is software, ERP, integration, automation, or architectural change.

Primary CTA:
- Book a discovery call

Use MAXAUT lime for the strongest conversion action.

No fake terminal language such as:
- `OPEN_CONNECTION`
- `DEPLOY_NOW`
- `INITIATE_CONSULT`

---

# ERP Service Page

The existing ERP-focused concept remains highly valuable as a dedicated page.

Recommended route:

```text
/erp
```

That page can retain:

> Your ERP is the substrate of your business.

It should go deeper into:
- ERP modernisation
- ERP implementation
- Frappe / ERPNext
- conversational access
- controlled agentic workflows
- integrations
- operational handoffs
- ERP-grounded answers
- audit trails

The homepage should link into this page from the Business Systems capability.

---

# Components

## Buttons

### Primary Dark

Background:
`#181817`

Text:
`#fbfaf7`

Radius:
`2px–4px`

Use for:
- standard CTA
- navigation conversion action

### Signal Lime

Background:
`#b7f000`

Text:
`#181817`

Use only for:
- strongest conversion action
- live system action when appropriate

### Secondary

Transparent with dark border.

Avoid glowing borders.

---

# System Panels

Use system panels for:
- workflow demonstrations
- architecture diagrams
- case-study system views
- process explorers

## Style

- surface background
- 1px structural border
- subtle 12–16px radius
- no ambient shadow
- strong internal grid
- mono metadata
- sans-serif narrative labels
- lime only for current/active state

---

# Technical Metadata

Technical metadata is a brand ingredient, not filler.

Good:

```text
SYSTEM_03
STACK / AWS + TERRAFORM
STATUS / PRODUCTION
FLOW / ORDER_TO_CASH
VERSION / 1.4
```

Bad:

```text
COORD_X: 40.7128
SYS_LOAD: 0.0042ms
PACKET_TRACE: SUCCESS
```

unless those values are actually relevant to the content.

Every technical label should convey real information.

---

# Diagrams

MAXAUT should use diagrams heavily.

Preferred diagram types:
- process flows
- architecture relationships
- business/system boundaries
- approval paths
- data movement
- human/agent handoffs
- ERP write-back flows
- integration maps

Avoid:
- glowing neural networks
- generic AI nodes
- floating cubes
- circuit-board decoration
- processor renders
- robot imagery

A diagram should help explain how something works.

---

# Motion

Motion should expose system behaviour.

Good:
- progress paths
- current node changes
- stage transitions
- context panels updating
- line tracing
- small data-state transitions

Bad:
- arbitrary parallax
- glowing processor animation
- floating particles
- cyberpunk scanning effects
- animated noise for atmosphere

Motion must make the system easier to understand.

## Reduced Motion

All critical information must remain readable and usable with motion disabled.

---

# Photography and Product Imagery

Use imagery sparingly.

Preferred:
- real interface captures
- implementation workshops
- diagrams
- process maps
- architectural screenshots
- annotated system views

Avoid generic:
- laptops on desks
- stock office meetings
- server racks
- code screens
- handshakes
- glowing AI imagery

If the image does not prove something about MAXAUT's work, it probably does not belong.

---

# Tone of Voice

Writing should be:
- direct
- technically literate
- calm
- specific
- operational
- low-hype

Avoid:
- "revolutionary"
- "game-changing"
- "cutting-edge"
- "next-generation"
- "unlock the power of AI"
- "digital transformation" without concrete meaning
- faux-terminal verbs used as marketing language

Prefer business truths and operational statements.

Good:

> Good automation begins with good systems.

> Your business runs on systems. We make them better.

> Engineering should reduce complexity, not move it somewhere else.

> The system should match the operation.

---

# Do

- Use whitespace aggressively.
- Make diagrams explain real relationships.
- Keep the page mostly monochrome.
- Reserve lime for real action.
- Use JetBrains Mono only for technical information.
- Use large sans-serif statements for narrative.
- Demonstrate system behaviour rather than listing features.
- Show case studies as systems, not marketing cards.
- Keep the homepage broader than ERP.
- Let ERP remain a deep service vertical.

# Don't

- Turn the whole site into a terminal.
- Use monospace for all headlines.
- Use ALL_CAPS everywhere.
- Use fake telemetry.
- Use meaningless coordinates or CPU metrics.
- Use generic processor / circuit imagery.
- Use neon glows as a primary effect.
- Use rounded SaaS card grids.
- Use repeated icon cards for capabilities.
- Use lime decoratively.
- Describe MAXAUT primarily as an AI company.
- Make the homepage revolve around ERP alone.
- Invent testimonials, customer logos, or performance claims.

---

# Design Ratio

The intended visual blend is approximately:

- **75% Quiet System structure**
- **20% MAXAUT technical identity**
- **5% terminal / brutalist detailing**

The design should feel like an engineering company whose internal systems vocabulary occasionally becomes visible — not a website pretending to be a terminal.

---

# Final Design Test

A page is on-brand if it passes all five tests:

1. **Could the main proposition still make sense without the visual styling?**  
   If not, the copy is too dependent on aesthetics.

2. **Does every technical label communicate real information?**  
   If not, remove it.

3. **Is lime indicating action, state, or importance?**  
   If not, remove it.

4. **Does each diagram explain a real system relationship?**  
   If not, simplify it.

5. **Does the page feel more like engineered infrastructure than marketing collateral?**  
   If yes, the balance is correct.
