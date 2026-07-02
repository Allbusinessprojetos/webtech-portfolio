import type { Metadata } from "next";
import { NexusHeader } from "@/components/nexus/header";
import { NexusHero } from "@/components/nexus/hero";
import { NexusServices } from "@/components/nexus/services";
import { NexusDifferentials } from "@/components/nexus/differentials";
import { NexusAbout } from "@/components/nexus/about";
import { NexusTestimonials } from "@/components/nexus/testimonials";
import { NexusContact } from "@/components/nexus/contact";
import { NexusFinalCta } from "@/components/nexus/final-cta";
import { NexusFooter } from "@/components/nexus/footer";

export const metadata: Metadata = {
  title: "Nexus Tech — Demonstração de projeto | WebTech",
  description:
    "Página demonstrativa criada pela WebTech simulando o site de uma empresa fictícia de assistência técnica e tecnologia.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NexusTechPage() {
  return (
    <>
      <NexusHeader />
      <main>
        <NexusHero />
        <NexusServices />
        <NexusDifferentials />
        <NexusAbout />
        <NexusTestimonials />
        <NexusContact />
        <NexusFinalCta />
      </main>
      <NexusFooter />
    </>
  );
}
