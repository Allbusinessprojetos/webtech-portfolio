import { X, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function BeforeAfter() {
  return (
    <section className="relative py-28">
      <Container>
        <SectionHeading eyebrow="Transformação" title="Antes e depois" />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/50">
                <X className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-white/40">
                Antes
              </h3>
              <p className="mt-3 text-balance font-display text-xl font-medium leading-snug text-white/80 sm:text-2xl">
                Empresa depende apenas do Instagram, WhatsApp e indicações.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-electric/30 bg-electric/[0.06] p-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-electric/15 text-electric-soft">
                <Check className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-electric-soft">
                Depois
              </h3>
              <p className="mt-3 text-balance font-display text-xl font-medium leading-snug text-white sm:text-2xl">
                Empresa possui um site moderno com serviços, contato,
                localização e apresentação profissional.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
