# MD Intake

Read the site markdown and extract these buckets before changing code.

## 1. Business Core

- business name
- business type
- audience
- market or geography
- primary offer
- trust signals

## 2. Conversion Goals

Look for the main actions the site should drive:

- book
- contact
- request quote
- call
- WhatsApp
- visit clinic/store/office

These actions shape both the route set and the shared components.

## 3. Page Map

Infer the smallest page set that matches the brief. Start from:

- home
- about
- services or procedures
- contact

Add pages only when the markdown clearly justifies them:

- faq
- testimonials
- locations
- packages
- gallery
- blog

## 4. Section Inventory

Group the markdown into likely page sections:

- hero
- authority/proof
- service overview
- process or journey
- team
- faq
- testimonials
- final CTA

Do not create a separate component for every paragraph. Components should represent meaningful UI sections.

## 5. Reuse Check

Before extracting content or utilities, ask:

- Is this rendered in more than one route?
- Does this need the same shape in multiple places?
- Is this a real shared UI primitive?

If the answer is no, keep it local.

## 6. Hardcoded Content Decision

Keep content inside the component when:

- it is short or medium-length editorial copy
- it belongs only to one section
- separating it would make the component harder to follow

Extract content only when readability or reuse clearly improves.
