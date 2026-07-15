---
name: marketing-site-from-md
description: Build or refactor marketing websites from a markdown site brief. Use when Codex receives a `.md` file with business information, sitemap notes, services, contact details, FAQs, reviews, brand notes, or page copy and needs to turn that into a reusable site structure with routes, features, shared UI, and mostly local hardcoded content instead of a centralized global data layer.
---

# Marketing Site From MD

Turn a markdown brief into a clean marketing-site codebase that is easy to read, easy to extend, and not over-abstracted.

## Workflow

1. Read the provided markdown file before proposing structure changes.
2. Extract the business model, page list, primary conversion goals, proof elements, recurring section types, and any hard requirements.
3. Infer the smallest useful information architecture.
4. Organize the project by routes and features, not by one giant `components/` bucket.
5. Keep content local to the page or section unless reuse is real.
6. Build shared UI only for elements that are truly reused across multiple features.
7. Prefer simple readable files over a centralized `data/` layer.

## Intake

Use [references/md-intake.md](references/md-intake.md) to parse the markdown brief into:

- business and audience
- page map
- section inventory
- conversion actions
- reusable entities
- copy that should stay local

If the markdown is incomplete, infer only what is necessary to keep the structure coherent and state the assumptions briefly.

## Structure Rules

Use [references/marketing-structure.md](references/marketing-structure.md) as the default target shape.

Follow these rules:

- Put URL entry points in `routes/`.
- Put business/page-specific code in `features/<feature-name>/`.
- Put truly reusable UI in `shared/ui/`.
- Put layout shell pieces in `shared/layout/`.
- Put reusable hooks in `shared/hooks/`.
- Put utilities, helpers, and integration code in `shared/lib/` or `lib/` depending on the repo's current convention.
- Keep assets in the framework's normal asset location.

## Local Content Policy

Default to local hardcoded content.

Keep copy inside the page component or section component when:

- the content is only used once
- seeing the copy inline makes the component easier to understand
- the section is mostly editorial and does not require cross-file reuse

Extract content only when at least one of these is true:

- the same content is rendered in multiple places
- the content is long enough to bury the component's structure
- a repeated data shape benefits from iteration or transformation
- non-UI code needs access to the same values

Do not create a global `data/` directory by default. Only keep one if the existing codebase already relies on it heavily or the same structured content is reused across multiple features.

## Page-Building Pattern

Prefer this composition style:

1. `routes/<page>.tsx` is thin and maps the route to a page component
2. `features/<feature>/<FeaturePage>.tsx` composes the page sections
3. `features/<feature>/<Section>.tsx` contains the section UI and most of its local copy

Example:

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
      CTASection.tsx
    about/
      AboutPage.tsx
      StorySection.tsx
      TeamSection.tsx
    services/
      ServicesPage.tsx
      ServicesHero.tsx
      ServicesListSection.tsx
    contact/
      ContactPage.tsx
      ContactForm.tsx
      ContactInfo.tsx
  shared/
    layout/
      Navbar.tsx
      Footer.tsx
    ui/
      Button.tsx
      SectionIntro.tsx
    hooks/
      useScrollToTop.ts
    lib/
      utils.ts
  root.tsx
```

## Refactoring Existing Repos

When the repo already exists:

- preserve the framework conventions already in place
- rename gradually instead of rewriting everything at once
- move files toward `features/` and `shared/` only when it reduces ambiguity
- avoid churn if the current organization is already clear for the repo size

For existing marketing repos, the safest migration is usually:

1. keep `routes/` as-is
2. split `components/` into `features/` and `shared/`
3. inline one-off content back into feature components when separation hurts readability
4. remove or shrink centralized content folders only after imports are stable

## Output Expectations

When using this skill, produce:

- the proposed or implemented folder structure
- any route-to-feature mapping
- concise assumptions taken from the markdown file
- code that keeps one-off copy local unless there is a concrete reuse reason

Optimize for readability and maintainability for small-to-medium marketing sites, not for abstract purity.
