"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonClasses } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function DemoCta() {
  return (
    <section id="demonstracao" className="relative py-28">
      <Container>
        <SectionHeading
          eyebrow="Demonstração"
          title="Veja uma demonstração real de como sua empresa pode se apresentar."
          description="Criamos uma página demonstrativa para uma empresa fictícia de tecnologia chamada Nexus Tech."
        />

        {/*
          Todo o card é UM ÚNICO <a> (via motion.a). O "botão" visual dentro
          dele é um <span> estilizado com buttonClasses — nunca outro <a> —
          para evitar <a> aninhado dentro de <a>, que é HTML inválido e
          quebra a hidratação no React.
        */}
        <Reveal delay={0.2}>
          <motion.a
            href="/nexus-tech"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative mx-auto mt-14 block max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-graphite/60"
          >
            <div className="relative flex aspect-[16/8] items-center justify-center overflow-hidden bg-schematic">
              <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-transparent" />
              <div className="relative flex flex-col items-center gap-3 text-center">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-electric-soft">
                  nexus-tech.demo
                </span>
                <span className="font-display text-3xl font-semibold text-white sm:text-4xl">
                  Nexus Tech
                </span>
                <span className="text-sm text-muted">
                  Assistência técnica &amp; soluções em tecnologia
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 px-7 py-5">
              <span className="text-sm text-muted">
                Site completo, com todas as seções de um projeto real.
              </span>
              <span className={buttonClasses("outline")}>
                <ExternalLink className="h-4 w-4" />
                Ver site demonstrativo
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </motion.a>
        </Reveal>
      </Container>
    </section>
  );
}
