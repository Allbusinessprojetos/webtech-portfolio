import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { STEPS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-28">
      <Container>
        <SectionHeading eyebrow="Processo" title="Como funciona" />

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:block" />
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.12}>
              <div className="relative flex flex-col items-start">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-electric/40 bg-night font-mono text-sm text-electric-soft">
                  {step.number}
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
