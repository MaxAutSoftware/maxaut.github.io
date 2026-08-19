---
name: MAXAUT Quiet System
description: Precise, calm operational technology for the agentic ERP age
colors:
  paper: "#f2f1ed"
  surface: "#fbfaf7"
  clean-white: "#ffffff"
  ink: "#181817"
  ink-hover: "#353532"
  quiet-ink: "#686862"
  rule: "#d7d6d0"
  signal-blue: "#315cff"
  signal-blue-dark: "#173cc8"
  signal-soft: "#e3e9ff"
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
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.1rem, 2vw, 2rem)"
    fontWeight: 530
    lineHeight: 1.15
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 650
    lineHeight: 1
  micro:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 650
    lineHeight: 1.2
rounded:
  control: "999px"
  panel: "24px"
  detail: "10px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
    padding: "14px 22px"
  button-signal:
    backgroundColor: "{colors.signal-blue}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
    padding: "14px 22px"
---

# Design System: MAXAUT Quiet System

## Overview

**Creative North Star: "The Quiet System"**

MAXAUT appears as a calm, highly considered operating layer: broad matte fields, decisive typography, and a single blue signal that reveals where intelligence is actively moving through the business. Restraint is paired with operational specificity so the experience feels advanced without resorting to AI spectacle.

The visual system draws from precision industrial products and architectural section drawings. Empty space is active; rules, nodes, and process labels make relationships legible. Density increases only when demonstrating how ERP foundations, human approvals, and agents connect.

**Key Characteristics:**
- Matte off-white fields and near-black type
- One scarce cobalt signal for live intelligence and primary action
- Large, direct language balanced by precise operational detail
- Connected diagrams rather than stock imagery or decorative icons
- Calm surfaces with one orchestrated line-based motion

## Colors

The palette is nearly monochrome, with signal blue reserved for active automation and decisive actions.

### Primary
- **Signal Blue** (`#315cff`): Live agent activity, focus, active nodes, and the final conversion action.
- **Signal Blue Dark** (`#173cc8`): Hover and high-contrast blue states.

### Neutral
- **Matte Paper** (`#f2f1ed`): Main page ground.
- **Clean Surface** (`#fbfaf7`): Raised diagrams and quiet inset fields.
- **Clean White** (`#ffffff`): High-contrast text on signal blue.
- **Soft Black** (`#181817`): Headlines, controls, and primary text.
- **Soft Black Hover** (`#353532`): Hover state for dark controls.
- **Quiet Ink** (`#686862`): Secondary explanations and metadata.
- **Structural Rule** (`#d7d6d0`): Dividers, process paths, and inactive system boundaries.

**The One Signal Rule.** Blue marks action or active intelligence, never decoration. Most viewports should contain one dominant blue event.

## Typography

**Display Font:** Native system sans (`-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Helvetica Neue`, `Arial`, sans-serif)
**Body Font:** Native system sans

**Character:** Precise and contemporary with no network request. Display type uses controlled compression and body copy stays conversational and highly legible.

### Hierarchy
- **Display** (520, `clamp(3.25rem, 8.5vw, 6rem)`, 0.94): One decisive first-view promise.
- **Headline** (520, `clamp(2.25rem, 5vw, 4.5rem)`, 1): Major proposition shifts.
- **Title** (600, `1.125rem`, 1.25): Services and workflow labels.
- **Body** (400, `1rem`, 1.6): Explanations capped around 68 characters.
- **Label** (600, `0.75rem`, modest tracking): Operational state, system, and action labels.

**The Plain Language Rule.** Headlines state a business truth. They do not stack vague superlatives or describe MAXAUT as revolutionary.

## Layout

The page uses a wide 12-column composition inside a `1440px` maximum container with fluid outer gutters. Large narrative statements occupy 7 to 10 columns; supporting text occupies 4 to 5. The first viewport is spacious, followed by a denser connected workflow demonstration and alternating quiet and detailed passages.

On narrow screens, all content linearizes into one column, diagrams become vertical process paths, and persistent horizontal arrangements become compact stacked sequences. Spacing scales fluidly rather than dropping abruptly at breakpoints.

## Elevation & Depth

The system is flat by default and uses tonal separation, fine rules, and selective inset surfaces instead of ambient shadows. Any lift is state-driven and subtle; blue focus rings remain unmistakable.

## Shapes

Large diagram surfaces use restrained `24px` corners, detail blocks use `10px`, and controls use a full pill. Operational lines and nodes provide the recurring geometry. Excessive rounded containers are avoided so the page does not read as a collection of cards.

## Components

### Buttons
- **Shape:** Compact pill (`999px`) with strong text and generous horizontal padding.
- **Primary:** Soft black on clean white for general navigation actions.
- **Signal:** Blue on white only for the strongest conversion point.
- **Hover / Focus:** Darken the fill and expose a clearly offset focus outline. Motion is brief and does not move layout.

### Process Diagram
- **Structure:** One continuous rule links ERP systems, controlled handoffs, and agent actions.
- **State:** Inactive paths use structural gray; selected and completed paths use signal blue.
- **Content:** Nodes carry real workflow nouns and verbs rather than generic feature labels.

### Living Operations Demo
- **Sequence:** One illustrative ERP event exposes agent context, human control, and ERP write-back as directly selectable stages.
- **Control:** Hover, focus, or tap selects a stage immediately; the same behavior remains available to mouse, keyboard, and touch users.
- **Motion:** Transform, color, node state, and line progress communicate the selection while all information remains semantic HTML.

### Digital Wave Field
- **Structure:** A native canvas wireframe terrain extends beyond the viewport edges behind the hero, with perspective rows, vertical data lines, and cobalt signal trails.
- **Behavior:** Three short cobalt snakes weave between grid rows, reverse at the boundaries, and leave fading trails with bright heads. At frequent randomized intervals, one head pulses and emits a synthetic dollar value that rises and fades. Pointer position bends and shifts the layers at different rates. Rendering is capped at 30fps and pauses offscreen or when the document is hidden.
- **Fallback:** The canvas is decorative, requires no content to be understood, and resolves to a static frame for reduced-motion users.

### Workflow Explorer
- **Structure:** Process tabs select a workflow, stage buttons select a handoff, and one detail region explains system input, agent action, human control, and ERP write-back.
- **State:** The current stage is blue, completed paths remain blue, and inactive stages stay quiet but legible.
- **Behavior:** Tabs support arrow keys and all stages remain ordinary keyboard-focusable buttons. Mobile uses a vertical path and horizontally scrollable process tabs.

### Navigation
- **Structure:** Wordmark at left, restrained anchor links at center/right, one dark discovery action.
- **Behavior:** The navigation remains lightweight and does not become a floating glass panel.

## Do's and Don'ts

### Do
- Use whitespace to isolate one important idea at a time.
- Demonstrate how ERP records, approvals, and agents connect.
- Keep language practical for SME leadership.
- Let blue indicate a live action, decision, or conversion.

### Don't
- Use neon networks, glowing brains, gradient text, glass panels, or robot imagery.
- Build the page from repeated icon cards.
- Invent customer logos, benchmarks, testimonials, or supported ERP platforms.
- Use technical decoration without operational meaning.
