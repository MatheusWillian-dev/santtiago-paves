---
name: Artisanal Confectionery System
colors:
  surface: '#fef9f3'
  surface-dim: '#ded9d4'
  surface-bright: '#fef9f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f3ed'
  surface-container: '#f2ede7'
  surface-container-high: '#ece7e2'
  surface-container-highest: '#e6e2dc'
  on-surface: '#1d1b18'
  on-surface-variant: '#504442'
  inverse-surface: '#32302c'
  inverse-on-surface: '#f5f0ea'
  outline: '#827472'
  outline-variant: '#d4c3c0'
  surface-tint: '#755753'
  primary: '#321c19'
  on-primary: '#ffffff'
  primary-container: '#4a312d'
  on-primary-container: '#bb9893'
  inverse-primary: '#e4beb8'
  secondary: '#76574b'
  on-secondary: '#ffffff'
  secondary-container: '#fed4c4'
  on-secondary-container: '#795a4d'
  tertiary: '#301e0a'
  on-tertiary: '#ffffff'
  tertiary-container: '#48331d'
  on-tertiary-container: '#b99b7e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#e4beb8'
  on-primary-fixed: '#2b1613'
  on-primary-fixed-variant: '#5b403c'
  secondary-fixed: '#ffdbcd'
  secondary-fixed-dim: '#e6beaf'
  on-secondary-fixed: '#2c160d'
  on-secondary-fixed-variant: '#5c4035'
  tertiary-fixed: '#ffdcbd'
  tertiary-fixed-dim: '#e1c1a2'
  on-tertiary-fixed: '#291805'
  on-tertiary-fixed-variant: '#59422b'
  background: '#fef9f3'
  on-background: '#1d1b18'
  surface-variant: '#e6e2dc'
  chocolate-dark: '#2D1D1B'
  caramel-rich: '#B58463'
  cream-vanilla: '#FDFBF7'
  pistachio-accent: '#A3B18A'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Outfit
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Outfit
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Outfit
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system is anchored in the concept of "Handcrafted Luxury." It targets a sophisticated audience that values the slow, intentional process of high-end confectionery. The emotional response should be one of warmth, indulgence, and trust—evoking the sensory experience of a premium pâtisserie.

The design style is **Corporate Modern with a Tactile twist**. It utilizes heavy whitespace to allow high-fidelity photography to shine, while incorporating soft, organic depth to mimic the creamy textures of the product. The interface feels "delicious" through the use of soft-touch surfaces, generous roundedness, and a palette that feels edible. This isn't just a digital interface; it is a digital extension of the kitchen’s craftsmanship.

## Colors

The palette is a monochromatic exploration of earth and cream, designed to highlight the product. 

- **Primary (#4A312D):** Representing deep cocoa; used for core branding, primary actions, and high-level headings.
- **Secondary (#8C6B5E):** A roasted coffee tone; used for secondary UI elements and supporting text.
- **Tertiary (#D9B99B):** A golden caramel; used for subtle accents and decorative strokes.
- **Neutral (#FAF5EF):** A "clotted cream" base; used as the primary background color to maintain a warm, non-clinical feel.

For semantic feedback, use desaturated versions of standard status colors to maintain the "luxury" aesthetic (e.g., a dusty rose for errors instead of a bright red).

## Typography

The typographic hierarchy relies on the contrast between the serif **Playfair Display** and the geometric sans-serif **Outfit**. 

**Playfair Display** is reserved for high-level headings and "editorial" moments. It should be used sparingly to maintain its impact. **Outfit** handles the heavy lifting for body copy, buttons, and navigation, providing a clean, modern counter-balance to the classical serif. 

Always maintain generous line heights (1.5x minimum for body) to ensure a relaxed reading rhythm. Labels should occasionally use increased letter spacing and uppercase styling to denote categorization without adding visual weight.

## Layout & Spacing

This design system uses a **Fixed Grid** on desktop and a **Fluid Grid** on mobile. The spacing rhythm is strictly based on an 8px scale (8, 16, 24, 32, 48, 64, 80, 120).

- **Desktop (1280px+):** 12-column grid with 24px gutters. Use wide 64px outside margins to create a "gallery" feel.
- **Tablet (768px - 1279px):** 8-column grid with 24px gutters and 32px margins.
- **Mobile (< 767px):** 4-column fluid grid with 16px gutters and 16px margins.

Whitespace is used as a structural element. Avoid crowding elements; if in doubt, increase the vertical padding between sections (e.g., 120px on desktop) to emphasize the premium nature of the brand.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Ambient Shadows**. 

1.  **Base Layer:** The "Cream" neutral color (#FAF5EF).
2.  **Surface Layer:** High-priority cards and containers use a pure white (#FFFFFF) with a very soft, diffused shadow (Blur: 30px, Y: 10px, Opacity: 4% of the Primary Color).
3.  **Active Depth:** Interactive elements like buttons should use a subtle inner-glow (1px stroke in a lighter tint) to appear slightly "extruded" or "pressed."

Avoid harsh black shadows. All shadows must be tinted with the Primary #4A312D color to ensure they feel organic and warm, rather than digital.

## Shapes

The shape language is defined by "Generous Softness." Corners should never be sharp, as this contradicts the "creamy" and "approachable" brand personality. 

A standard **0.5rem (8px)** radius is the baseline for inputs and small components. Larger containers like product cards should utilize **1.5rem (24px)** to create a friendly, organic frame for photography. Interactive elements like "Add to Cart" or specialized "Chips" may utilize pill-shapes to further distinguish them from informational blocks.

## Components

### Buttons
- **Primary:** Solid #4A312D with white Outfit text. Rounded-lg (16px).
- **Secondary:** Transparent with a 1.5px border of #8C6B5E. 
- **States:** Hover state should involve a subtle shift in background saturation or a slight lift (shadow increase).

### Cards
- White background, 24px corner radius, and ambient tinted shadows.
- Imagery should always be top-aligned with no margin, bleeding into the card edges to showcase texture.

### Input Fields
- Background should be a slightly darker tint of the neutral cream.
- 2px bottom border only, or a full soft-border with 8px radius. Use the Tertiary color for the focus state to avoid "error-like" high contrast.

### Photography & Icons
- **Photography:** Focus on "Macro-Indulgence." High-detail shots of textures (layers of pavé, dripping caramel). Lighting should be warm and natural.
- **Icons:** Use thin-stroke (1.5px) linear icons. Avoid filled icons unless used for active navigation states.

### Accessibility
- Ensure all text-on-cream combinations maintain a 4.5:1 contrast ratio.
- Secondary #8C6B5E should be used cautiously for small text; prefer Primary #4A312D for readability.