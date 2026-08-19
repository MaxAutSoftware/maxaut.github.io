---
name: MAX>AUT_ Core
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c9ac'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9379'
  outline-variant: '#444933'
  surface-tint: '#abd600'
  primary: '#ffffff'
  on-primary: '#283500'
  primary-container: '#c3f400'
  on-primary-container: '#556d00'
  inverse-primary: '#506600'
  secondary: '#d3fbff'
  on-secondary: '#00363a'
  secondary-container: '#00eefc'
  on-secondary-container: '#00686f'
  tertiary: '#ffffff'
  on-tertiary: '#313030'
  tertiary-container: '#e5e2e1'
  on-tertiary-container: '#656464'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c3f400'
  primary-fixed-dim: '#abd600'
  on-primary-fixed: '#161e00'
  on-primary-fixed-variant: '#3c4d00'
  secondary-fixed: '#7df4ff'
  secondary-fixed-dim: '#00dbe9'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f54'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-xl:
    fontFamily: JetBrains Mono
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
  headline-xl-mobile:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.1'
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1440px
---

## Brand & Style
The design system embodies "Refined Brutalism"—a visual language that balances raw, industrial power with high-end precision. It is designed for a bespoke software consultancy that prioritizes engineering excellence over marketing fluff.

The emotional response should be one of absolute confidence, technical mastery, and "low-noise" focus. By utilizing a dark-first aesthetic, the interface minimizes eye strain and highlights the "signal" (content) against the "noise" (background). The style leverages sharp edges, hairline borders, and monospaced accents to evoke the feel of a high-performance terminal or a blueprint for advanced architecture.

## Colors
The palette is built on a foundation of "Obsidian" depths to ensure maximum contrast for technical data.

- **Primary (Electric Lime):** Derived from the logo, this is used exclusively for primary actions, success states, and critical terminal highlights. 
- **Secondary (Cyan Pulse):** Used for informational data, secondary links, and "read-only" technical accents.
- **Surface Scale:**
    - **Base:** `#0A0A0A` (Deepest black for the main canvas).
    - **Elevated:** `#121212` (For cards and sections).
    - **Stroke:** `#262626` (Subtle slate for structural lines and grids).
- **Text:** Primary text is off-white (`#F2F2F2`) to reduce glow/halation on dark backgrounds, with secondary text in a muted slate (`#808080`).

## Typography
The typography strategy creates a clear distinction between "Technical/Structural" data and "Narrative/Informational" content.

- **Headlines & UI Labels:** JetBrains Mono provides an "engineered" look. Headlines should be used sparingly and often accompanied by the `_` (underscore) suffix to mirror the brand mark.
- **Body Text:** Hanken Grotesk offers high legibility and a contemporary feel, ensuring that long-form consultancy reports or service descriptions remain accessible.
- **Stylistic Rule:** Use all-caps for labels and small buttons to reinforce the brutalist, utilitarian aesthetic.

## Layout & Spacing
The layout follows a strict 12-column fixed grid for desktop, transitioning to a 4-column fluid grid for mobile.

- **Rhythm:** All spacing is based on a 4px baseline grid. Padding and margins should always be multiples of 8px (e.g., 8, 16, 24, 32, 48, 64).
- **Negative Space:** This system prioritizes "Darkspace." Elements should feel like islands of data in a vast technical void. Avoid crowding; use 64px or 80px vertical spacing between major sections.
- **Lines:** Use 1px solid borders (`#262626`) to define zones rather than background color changes. This maintains the "blueprint" aesthetic.

## Elevation & Depth
In this design system, depth is communicated through **structural layering** rather than soft shadows.

1.  **Z-0 (Canvas):** The base `#0A0A0A` layer.
2.  **Z-1 (Containers):** Defined by a 1px border. No background change.
3.  **Z-2 (Active State):** Surfaces may use a very subtle gradient or a slightly lighter fill (`#121212`).
4.  **Interaction:** Use "Glow" effects instead of shadows. For example, a hovered primary button might have a soft `#CCFF00` outer glow (diffused bloom) to simulate a high-end monitor or laser-etched interface.

## Shapes
The shape language is strictly **Sharp (0px)**. 

To reflect the "bespoke engineering" nature of the brand, every corner is a hard 90-degree angle. This includes buttons, input fields, cards, and dropdowns. The only exception is the use of the `>` (chevron) character as a decorative or functional icon, which introduces 45-degree angles into the visual flow.

## Components

### Buttons
- **Primary:** Solid `#CCFF00` background with black text. Sharp corners. No border. On hover, apply a slight brightness increase or a 4px bloom glow.
- **Secondary:** Transparent background with a 1px `#CCFF00` border. Text in `#CCFF00`.
- **Ghost:** Transparent background, slate text, monospaced font. Use for low-priority actions.

### Technical Inputs
- **Fields:** 1px slate border. Focus state changes the border to Primary Lime and adds a small `_` cursor blink animation at the end of the placeholder text.
- **Checkboxes:** Square, sharp-edged. When checked, the entire box fills with Primary Lime.

### Cards & Containers
- Containers should be defined by a 1px border. 
- **Header Accents:** Top-left or bottom-right corners can feature "bracket" accents or small monospaced coordinate text (e.g., `[ 01 // DATA_STRUCT ]`) to enhance the technical feel.

### Status Indicators
- Use the Primary Lime for "Online/Success" and the Secondary Cyan for "Processing/Info." 
- For "Errors," use a high-vibrancy Red (`#FF3B30`), but keep the styling consistent with the sharp, brutalist aesthetic.

### Data Displays
- All numerical data must use JetBrains Mono. 
- Use "Hairline" dividers (0.5px where possible) to separate line items in list views.