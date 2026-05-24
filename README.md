# AMERO — FlexPOS Onboarding

Et intuitivt onboarding-flow til FlexPOS, der gør oplæringen tryg og ensartet for nye medarbejdere og frivillige i butikker.

Live: https://vbstudio.dk

## Om projektet

Sitet præsenterer det nye indbyggede onboarding-flow i FlexPOS og indeholder:

- **Forside** (`/`) — Introduktion til onboarding-flowet og dets fordele.
- **Prototypen** (`/prototypen`) — Interaktiv Figma-prototype, som kan afprøves direkte.
- **Designguiden** (`/designguiden`) — Designprincipper, komponenter, typografi, grid og tilgængelighed.

## Teknologi

- [TanStack Start](https://tanstack.com/start) (React 19 + Vite 7) med SSR på Cloudflare Workers
- [Tailwind CSS v4](https://tailwindcss.com) med design tokens i `src/styles.css`
- [shadcn/ui](https://ui.shadcn.com) + Radix UI komponenter
- TypeScript (strict mode)
- File-based routing i `src/routes/`

## Kom i gang

Krav: [Bun](https://bun.sh) eller Node.js 20+.

```bash
# Installer dependencies
bun install

# Start dev-server
bun run dev

# Byg til produktion
bun run build

# Forhåndsvis production build
bun run preview

# Lint
bun run lint

# Formatér kode
bun run format
```

Dev-serveren kører på `http://localhost:5173`.

## Projektstruktur

```
src/
  routes/           # File-based routes (TanStack Router)
    __root.tsx      # Root layout (html/head/body shell)
    index.tsx       # Forside
    prototypen.tsx  # Prototype-side
    designguiden.tsx# Designguide
    sitemap[.]xml.ts# Auto-genereret sitemap
  components/       # Genbrugelige komponenter (SiteNav m.fl.)
  components/ui/    # shadcn/ui komponenter
  hooks/            # Custom React hooks
  lib/              # Utilities
  styles.css        # Tailwind + design tokens (oklch)
public/             # Statiske filer (robots.txt, llms.txt, billeder)
```

## Deployment

Projektet er hosted via Lovable og deployes automatisk ved push. Custom domæne: `vbstudio.dk`.

## Redigér via Lovable

Åbn projektet i [Lovable](https://lovable.dev) og skriv prompts for at ændre koden. Ændringer commits automatisk til repoet.
