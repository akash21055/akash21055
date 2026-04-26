<!-- SCOPE: Reference documentation hub (ADRs, Guides, Manuals, Research) with links to subdirectories -->

# Reference Documentation

This directory contains architecture decisions, project guides, package references, and research documents for the Astrology Website project.

## Quick Navigation

- **[Architecture Decisions (ADRs)](#architecture-decision-records-adrs)** - Why we chose certain technologies
- **[Project Guides](#project-guides)** - Reusable patterns and best practices
- **[Package Manuals](#package-manuals)** - Reference documentation for key libraries
- **[Research](#research)** - Investigation notes and spikes

## Agent Entry Point

Claude Code agents should consult this hub when:
- Adding new technologies or frameworks
- Implementing patterns described in guides
- Integrating third-party packages
- Investigating technical questions

---

## Architecture Decision Records (ADRs)

Architecture decisions document **why** we chose certain technologies and frameworks when alternatives existed.

### Entries

- [ADR-001: Frontend Framework Selection (Next.js)](adrs/adr-001-frontend-framework.md)
- [ADR-002: Styling Approach (Tailwind CSS + Framer Motion)](adrs/adr-002-styling-approach.md)
- [ADR-003: Component Architecture (Server + Client Components)](adrs/adr-003-component-architecture.md)
- [ADR-004: Type Safety (TypeScript Strict Mode)](adrs/adr-004-type-safety.md)

**Purpose**: Provide context for technology choices and document alternatives considered.

**Format**: Nygard ADR format (7 sections: Title, Context, Decision, Rationale, Alternatives, Consequences, Status)

**When to Create**: When a nontrivial technology choice is made with real alternatives (React vs Vue vs Svelte, not obvious/trivial choices)

---

## Project Guides

Project guides document **how** we implement reusable patterns specific to this codebase.

### Entries

- [01-Scroll Animation Pattern](guides/01-scroll-animation-pattern.md) - Framer Motion `whileInView` implementation
- [02-Component Composition Pattern](guides/02-component-composition-pattern.md) - Section-based page structure
- [03-Tailwind Utility Patterns](guides/03-tailwind-utility-patterns.md) - Custom Tailwind class composition
- [04-Form Handling Pattern](guides/04-form-handling-pattern.md) - Lead generation and submission

**Purpose**: Codify project-specific patterns so team members follow consistent approaches.

**Format**: Do/Don't/When tables with references to actual code

**When to Create**: When a pattern is used 2+ times or has nontrivial configuration

---

## Package Manuals

Package manuals document **how to use** key third-party libraries in our tech stack.

### Entries

- [Next.js 16 API Reference](manuals/nextjs-16-reference.md) - App Router, Image optimization, API routes
- [Framer Motion 12 Guide](manuals/framer-motion-12-guide.md) - Animation primitives and scroll detection
- [Tailwind CSS 4 Integration](manuals/tailwindcss-4-integration.md) - Utility classes, custom config, v4 changes
- [TypeScript 6 Configuration](manuals/typescript-6-configuration.md) - Strict mode, path aliases, type checking

**Purpose**: Quick reference for how to use key libraries in our specific setup.

**Format**: API summary with examples (no full code blocks; reference source files instead)

**When to Create**: When a package has complex API (10+ methods) or nontrivial setup (>20 lines of config)

---

## Research

Research documents record investigations into specific technical questions.

### Entries

- [Frontend Framework Comparison 2025](research/frontend-framework-comparison-2025.md) - React vs Vue vs Svelte evaluation
- [Styling Solutions Deep Dive](research/styling-solutions-deep-dive.md) - Tailwind vs CSS Modules vs Styled Components
- [Form Submission Options Analysis](research/form-submission-options.md) - Resend vs Formspree vs Custom API

**Purpose**: Document research spikes and investigation results for future reference.

**Format**: Question-driven with findings, pros/cons, and recommendations

**When to Create**: When investigating a concrete technical question (not general learning)

---

## How to Use This Documentation

### For Development

1. **Adding a new section?** → Check [02-Component Composition Pattern](guides/02-component-composition-pattern.md)
2. **Implementing animations?** → See [01-Scroll Animation Pattern](guides/01-scroll-animation-pattern.md)
3. **Styling components?** → Check [03-Tailwind Utility Patterns](guides/03-tailwind-utility-patterns.md)
4. **Questions about tech choices?** → Read relevant ADR (e.g., [ADR-001](adrs/adr-001-frontend-framework.md))

### For Framework Integration

1. **Using Next.js features?** → Reference [Next.js 16 API Reference](manuals/nextjs-16-reference.md)
2. **Creating animations?** → Check [Framer Motion 12 Guide](manuals/framer-motion-12-guide.md)
3. **Working with styles?** → See [Tailwind CSS 4 Integration](manuals/tailwindcss-4-integration.md)

### For Decision Making

1. **Considering a new framework?** → Review relevant ADRs first
2. **Implementing a new pattern?** → Check if pattern guide exists
3. **Unsure about approach?** → Consult research documents

---

## Navigation by Technology

### Frontend Frameworks & Libraries

- **Next.js 16**: [ADR-001](adrs/adr-001-frontend-framework.md) | [Manual](manuals/nextjs-16-reference.md)
- **React 19**: [ADR-001](adrs/adr-001-frontend-framework.md) | [ADR-003](adrs/adr-003-component-architecture.md)
- **TypeScript 6**: [ADR-004](adrs/adr-004-type-safety.md) | [Manual](manuals/typescript-6-configuration.md)

### Styling & Animation

- **Tailwind CSS v4**: [ADR-002](adrs/adr-002-styling-approach.md) | [Manual](manuals/tailwindcss-4-integration.md) | [Guide 03](guides/03-tailwind-utility-patterns.md)
- **Framer Motion 12**: [ADR-002](adrs/adr-002-styling-approach.md) | [Manual](manuals/framer-motion-12-guide.md) | [Guide 01](guides/01-scroll-animation-pattern.md)

### Architecture & Patterns

- **Component Architecture**: [ADR-003](adrs/adr-003-component-architecture.md) | [Guide 02](guides/02-component-composition-pattern.md)
- **Forms & Submission**: [Guide 04](guides/04-form-handling-pattern.md) | [Research](research/form-submission-options.md)

---

## Maintenance

**Last Updated:** 2026-04-24

**Update Triggers:**
- New ADRs added when nontrivial technology choices are made
- New guides added when project-specific patterns emerge
- New manuals added for new major dependencies
- Research documents added for investigations

**Verification Checklist:**
- [ ] All ADR links are valid and reference correct files
- [ ] All guide links are valid and reference correct patterns
- [ ] All manual links reference correct library documentation
- [ ] No placeholder text (`[TBD: ...]`, `TODO`) in published documents
- [ ] All links use relative paths (`guides/`, not absolute)
- [ ] Research documents include question, findings, and recommendation

**How to Update:**
1. Create new document in appropriate subdirectory (adrs/, guides/, manuals/, research/)
2. Follow template format for that document type
3. Add entry to this README with brief description
4. Update "Navigation by Technology" section if relevant

---

## Document Conventions

### File Naming

- **ADRs**: `adr-NNN-{category}.md` (e.g., `adr-001-frontend-framework.md`)
- **Guides**: `NN-{topic}-pattern.md` (e.g., `01-scroll-animation-pattern.md`)
- **Manuals**: `{package}-{version}-{type}.md` (e.g., `nextjs-16-reference.md`)
- **Research**: `{topic}-{year}-{keywords}.md` (e.g., `styling-solutions-deep-dive.md`)

### Content Standards

All documents must:
- Have a clear title describing the content
- Include a "Purpose" or "Question" section
- Use consistent markdown formatting
- Include references to related documents
- End with a single blank line (POSIX compliance)

### Quality Standards (WCAG Compliance)

- [ ] Tables have proper headers (`| Header |`)
- [ ] Code blocks have language specified (` ```tsx`)
- [ ] Links use descriptive text (not "here" or "click")
- [ ] Headings use proper hierarchy (no skipped levels)
- [ ] No image-only content without alt text

---

## Related Documentation

- **CLAUDE.md** - Development guide for Claude Code agents
- **docs/api-guide.md** - Form submission integration options
- **docs/design-guidelines.md** - Design system and accessibility standards
- **docs/getting-started.md** - Setup and quickstart guide
- **docs/project-overview.md** - Architecture and roadmap

---

**Last Generated:** 2026-04-24  
**Version:** 1.0.0
