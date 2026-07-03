import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { NEXUS_SERVICES } from "@/lib/constants";
import Image from "next/image";

export function NexusServices() {
  return (
    <section id="servicos" className="relative py-28">
      <Container>
        <SectionHeading eyebrow="Serviços" title="O que fazemos por você" />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {NEXUS_SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={(i % 3) * 0.08}>
                <SpotlightCard className="h-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={280}
                    className="mb-6 h-44 w-full rounded-2xl object-cover"
                  />
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric/10 text-electric-soft">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.description}
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
