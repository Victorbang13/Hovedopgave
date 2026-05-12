import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Maximize2, Minimize2 } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { useIsMobile } from "@/hooks/use-mobile";

export const Route = createFileRoute("/prototypen")({
  head: () => ({
    meta: [
      { title: "Prototypen — AMERO FlexPOS Onboarding" },
      {
        name: "description",
        content:
          "Interaktiv Figma-prototype af det nye onboarding-flow til FlexPOS.",
      },
      { property: "og:title", content: "Prototypen — AMERO" },
      {
        property: "og:description",
        content: "Afprøv det interaktive onboarding-flow.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://embed.figma.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://www.figma.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://static.figma.com", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://embed.figma.com" },
    ],
  }),
  component: Prototype,
});

function Prototype() {
  return (
    <>
      <SiteNav />
      <main id="main">
        <section className="bg-softer">
          <div className="mx-auto max-w-4xl px-4 py-8">
            <h1 className="text-3xl sm:text-4xl text-primary">Prototypen</h1>
            <p className="mt-3 text-base">
              Dette er en interaktiv Figma-prototype af det nye onboarding-flow
              til FlexPOS. Den er designet til at være tilgængelig for alle —
              uanset teknisk erfaringsniveau. Klik dig igennem flowet nedenfor.
            </p>
          </div>
        </section>

        <PrototypeEmbed />


        <div className="bg-primary on-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl px-4 py-8 text-center">
            <Link
              to="/designguiden"
              className="inline-block bg-background text-primary px-6 py-3 rounded-sm font-medium hover:opacity-90"
            >
              Se OBdesignguiden
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
