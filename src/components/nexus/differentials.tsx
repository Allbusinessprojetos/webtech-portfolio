import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { NEXUS_DIFFERENTIALS } from "@/lib/constants";

export function NexusDifferentials() {
  return (
    <section className="relative py-28">
      <Container>
        <SectionHeading eyebrow="Diferenciais" title="Por que escolher a Nexus Tech" />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {NEXUS_DIFFERENTIALS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="flex h-full flex-col items-start rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-electric-soft">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
