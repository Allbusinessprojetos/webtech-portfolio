import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { BENEFITS } from "@/lib/constants";

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-28">
      <Container>
        <SectionHeading
          eyebrow="Benefícios"
          title="O que um site profissional pode gerar para sua empresa"
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.08}>
                <SpotlightCard className="h-full">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric/10 text-electric-soft">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
