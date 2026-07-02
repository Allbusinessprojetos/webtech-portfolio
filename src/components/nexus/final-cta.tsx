import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SchematicBackground } from "@/components/ui/schematic-background";
import { NEXUS_WHATSAPP_LINK } from "@/lib/constants";

export function NexusFinalCta() {
  return (
    <section className="relative overflow-hidden py-32">
      <SchematicBackground tint="violet" />
      <Container className="relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
            Precisa de suporte técnico?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <LinkButton
            href={NEXUS_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            withArrow
            icon={<MessageCircle className="h-4 w-4" />}
            className="mt-10"
          >
            Chamar no WhatsApp
          </LinkButton>
        </Reveal>
      </Container>
    </section>
  );
}
