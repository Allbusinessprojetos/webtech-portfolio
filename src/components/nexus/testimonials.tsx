import { Star, Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { NEXUS_TESTIMONIALS } from "@/lib/constants";

export function NexusTestimonials() {
  return (
    <section id="avaliacoes" className="relative py-28">
      <Container>
        <SectionHeading eyebrow="Avaliações" title="Quem confia na Nexus Tech" />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {NEXUS_TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-7">
                <Quote className="h-6 w-6 text-electric/40" />
                <p className="mt-5 flex-1 text-sm leading-relaxed text-white/80">
                  “{t.quote}”
                </p>
                <div className="mt-6 flex items-center gap-0.5">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-3.5 w-3.5 fill-electric-soft text-electric-soft" />
                  ))}
                </div>
                <div className="mt-4 border-t border-white/10 pt-4">
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
