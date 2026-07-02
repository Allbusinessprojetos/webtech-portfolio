import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/container";
import { SchematicBackground } from "@/components/ui/schematic-background";

export function NexusAbout() {
  return (
    <section id="sobre" className="relative overflow-hidden py-28">
      <SchematicBackground tint="violet" />
      <Container className="relative max-w-3xl text-center">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-electric-soft">
            Sobre a Nexus Tech
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 text-balance font-display text-2xl font-medium leading-snug text-white sm:text-3xl">
            Há anos ajudando pessoas e empresas a manterem seus equipamentos
            funcionando sem dor de cabeça.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 text-balance text-base leading-relaxed text-muted sm:text-lg">
            A Nexus Tech nasceu para simplificar a manutenção de tecnologia.
            Unimos técnicos especializados, processos transparentes e
            atendimento próximo para que você resolva seu problema com
            rapidez e confiança — seja em casa, seja na sua empresa.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
