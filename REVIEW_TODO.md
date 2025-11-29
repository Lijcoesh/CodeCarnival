# Code review TODO — CodeCarnival

Dit bestand bevat de actiepunten voortkomend uit de code-review.

Prioriteit: Hoog → Laag

- [ ] Verwijder gedupliceerde `ContentBox` / `ContentBoxBorder` / `StyledComponents` duplicaten
- [ ] Refactor knoppen: maak `BasePixelButton` en exporteer `Primary`/`Secondary` varianten
- [ ] Controleer en herstel kleurcontrast (WCAG) voor gele achtergrond / witte tekst
- [ ] Voeg keyboard `focus-visible` en `aria-label` toe aan chevrons en icon-only elementen
- [ ] Maak `LogoText` responsive (gebruik `clamp()` of MUI responsive fonts)
- [ ] Respecteer `prefers-reduced-motion` voor animaties/transforms
- [ ] Voeg Prettier, `husky` en `lint-staged` toe voor consistente formatting
- [ ] Voeg `eslint-plugin-jsx-a11y` en relevante rules toe (accessibility linting)
- [ ] Setup tests: `vitest` + `@testing-library/react` + basis a11y checks (axe)
- [ ] Voeg een eenvoudige CI workflow toe (lint → test → build)
- [ ] Optimaliseer assets (svgo voor SVGs, lazy-load afbeeldingen)
- [ ] Voer `npm audit` en update kwetsbare deps

Extra / toekomst

- [ ] Internationalisatie (i18n) als meerdere talen gewenst
- [ ] E2E tests met Playwright voor belangrijke flows
- [ ] Overweeg herstructurering wanneer de app groter wordt (routes, state)

Als je wilt kan ik stapsgewijs PRs aanmaken voor de bovenste punten — geef aan welke je eerst wilt.
