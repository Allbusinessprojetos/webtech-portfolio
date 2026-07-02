import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { INCLUDES } from "@/lib/constants";

export function Includes() {
  return (
    <section className="relative py-28">
      <Container>
        <SectionHeading eyebrow="O que está incluso" title="O que seu site pode incluir" />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INCLUDES.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.06}>
                <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 transition-colors hover:border-electric/30 hover:bg-electric/[0.04]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-electric-soft">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-white/85">
                    {item.title}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
