import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SchematicBackground } from "@/components/ui/schematic-background";
import { WHATSAPP_LINK_WEBTECH } from "@/lib/constants";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-32">
      <SchematicBackground />
      <Container className="relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-balance font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
            Pronto para fortalecer a presença digital da sua empresa?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg">
            Um site profissional pode ser o próximo passo para transmitir mais
            confiança e facilitar o contato com novos clientes.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <LinkButton
            href={WHATSAPP_LINK_WEBTECH}
            target="_blank"
            rel="noopener noreferrer"
            withArrow
            icon={<MessageCircle className="h-4 w-4" />}
            className="mt-10"
          >
            Falar no WhatsApp
          </LinkButton>
        </Reveal>
      </Container>
    </section>
  );
}
