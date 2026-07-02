import { MapPin, Clock, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { LinkButton } from "@/components/ui/button";
import { NEXUS_CONTACT, NEXUS_WHATSAPP_LINK } from "@/lib/constants";

export function NexusContact() {
  return (
    <section id="contato" className="relative py-28">
      <Container>
        <SectionHeading eyebrow="Contato" title="Fale com a Nexus Tech" />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-electric/10 text-electric-soft">
                    <MapPin className="h-[18px] w-[18px]" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Endereço</p>
                    <p className="mt-1 text-sm text-muted">{NEXUS_CONTACT.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-electric/10 text-electric-soft">
                    <Clock className="h-[18px] w-[18px]" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Horário de atendimento</p>
                    <p className="mt-1 text-sm text-muted">{NEXUS_CONTACT.hours}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-electric/10 text-electric-soft">
                    <MessageCircle className="h-[18px] w-[18px]" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">WhatsApp</p>
                    <p className="mt-1 text-sm text-muted">Resposta rápida, todos os dias úteis.</p>
                  </div>
                </div>
              </div>

              <LinkButton
                href={NEXUS_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                withArrow
                className="mt-8 w-full sm:w-fit"
              >
                Chamar no WhatsApp
              </LinkButton>
            </div>
          </Reveal>

          {/* Mapa estilizado — sem dependência de API externa */}
          <Reveal delay={0.1}>
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-graphite/60">
              <div className="absolute inset-0 bg-schematic opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-br from-electric/10 via-transparent to-transparent" />
              <svg
                className="absolute inset-0 h-full w-full text-electric/25"
                viewBox="0 0 400 300"
                fill="none"
              >
                <path d="M0 60 H400" stroke="currentColor" strokeWidth="1" />
                <path d="M0 160 H400" stroke="currentColor" strokeWidth="1" />
                <path d="M0 230 H400" stroke="currentColor" strokeWidth="1" />
                <path d="M90 0 V300" stroke="currentColor" strokeWidth="1" />
                <path d="M230 0 V300" stroke="currentColor" strokeWidth="1" />
                <path d="M320 0 V300" stroke="currentColor" strokeWidth="1" />
              </svg>
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <span className="flex h-12 w-12 animate-pulseGlow items-center justify-center rounded-full bg-electric/20 ring-4 ring-electric/10">
                  <MapPin className="h-6 w-6 text-electric-soft" />
                </span>
                <span className="mt-3 rounded-full border border-white/10 bg-night/80 px-3 py-1 font-mono text-[11px] text-white/70">
                  Nexus Tech
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
