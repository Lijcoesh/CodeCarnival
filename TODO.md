# CodeCarnival — Homepage Improvements TODO

This file contains the prioritized improvements identified during the homepage code review.

## High Priority

- [ ] Centralize colors into `src/theme/palette.ts` and reference via the MUI theme.
- [ ] Use theme tokens for spacing and typography (replace hard-coded px values).
- [ ] Make `src/pages/Homepage/CodeFeatures/CodeFeatures.tsx` data-driven: map a `features` array to `FeatureCard` components.
- [ ] Replace inline `style` with `sx` or `styled()` so styles are theme-aware.
- [ ] Normalize naming: `ContextBoxBorder` vs `ContentBoxBorder` — make file and export names consistent.
- [ ] Add semantic headings (`LogoText` -> `h1`, `SectionTitle` -> `h2`) with `component` props.
- [ ] Mark decorative elements (chevrons) `aria-hidden="true"` and `pointerEvents: 'none'`.
- [ ] Verify color contrast and accessible focus states for buttons and interactive elements.
- [ ] Add explicit TypeScript prop types for components that accept props and children.
- [ ] Standardize on one MUI styling approach (prefer `sx` + theme or `styled`).

## Medium Priority

- [ ] Extract repeated style snippets (font family, outlines, shadows) into theme variants or helpers.
- [ ] Use theme breakpoints (e.g., `theme.breakpoints.down('md')`) instead of `@media (max-width: 768px)`.
- [ ] Reduce heavy outlines/shadows on many nested elements to improve mobile readability and performance.
- [ ] Add small UX polish: consistent button focus rings, subtle hover states, and spacing adjustments.

## Long Term

- [ ] Add visual regression tests or Storybook stories for `ContextBox`, `FeatureCard`, and `PixelButton`.
- [ ] Perform a follow-up PR to extract all color/spacing tokens and migrate homepage components to the theme.

---

Notes:

- Start with the low-risk fixes: convert `FeatureCard` repetition to `.map()`, add `aria-hidden` to chevrons, and fix the `ContextBox` export name.
- After those, open a dedicated PR to centralize theme tokens and refactor styling consistently.
