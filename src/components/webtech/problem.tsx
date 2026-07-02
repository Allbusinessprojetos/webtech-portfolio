import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { PROBLEMS } from "@/lib/constants";

export function Problem() {
  return (
    <section className="relative py-28">
      <Container>
        <SectionHeading
          eyebrow="O problema"
          title="Sua empresa pode estar perdendo oportunidades por não ter uma presença digital profissional."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {PROBLEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="flex h-full gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-white/60">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
