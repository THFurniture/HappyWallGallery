# Marketing Structure

Use this as the default shape for service businesses, personal brands, clinics, agencies, restaurants, studios, and similar marketing sites.

## Default Tree

```text
app/
  routes/
    home.tsx
    about.tsx
    services.tsx
    contact.tsx
  features/
    home/
      HomePage.tsx
      HeroSection.tsx
      ProofSection.tsx
      FeaturedServicesSection.tsx
      CTASection.tsx
    about/
      AboutPage.tsx
      StorySection.tsx
      TeamSection.tsx
      ValuesSection.tsx
    services/
      ServicesPage.tsx
      ServicesHero.tsx
      ServiceGridSection.tsx
      ServiceCard.tsx
    contact/
      ContactPage.tsx
      ContactHero.tsx
      ContactForm.tsx
      ContactInfo.tsx
  shared/
    layout/
      Navbar.tsx
      Footer.tsx
      MobileNav.tsx
    ui/
      Button.tsx
      SectionIntro.tsx
      Card.tsx
    hooks/
      useScrollToTop.ts
    lib/
      utils.ts
      constants.ts
  root.tsx
```

## Naming Guidance

- Use route names that match the business language: `services`, `procedures`, `menu`, `locations`, `team`.
- Use `Page` suffix for page composers.
- Use `Section` suffix for page sections.
- Use neutral `shared/ui` names for reusable primitives.

## What Not To Do

- Do not keep growing one global `components/` directory forever.
- Do not add a `data/` layer just because content exists.
- Do not move one-off copy into constants or config files without a concrete need.
- Do not make every section configurable if the site is mostly static.

## Adaptation Examples

Clinic:
- `services` becomes `procedures`
- `team` may include `certifications` or `education`

Restaurant:
- `services` becomes `menu`
- `contact` may include `reservations`

Agency:
- `services` may split into `services` and `case-studies`

Personal Brand:
- `about` may include `story`, `experience`, `speaking`, or `press`
