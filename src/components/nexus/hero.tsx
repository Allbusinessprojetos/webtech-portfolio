"use client";

import { motion } from "framer-motion";
import { MessageCircle, Wrench } from "lucide-react";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { SchematicBackground } from "@/components/ui/schematic-background";
import { fadeInUp } from "@/lib/animations";
import { NEXUS_WHATSAPP_LINK } from "@/lib/constants";

export function NexusHero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-36 pb-20">
      <SchematicBackground tint="violet" />
      <Container className="relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-electric-soft">
            Assistência técnica &amp; soluções em tecnologia
          </span>

          <motion.h1
            variants={fadeInUp}
            custom={0.1}
            className="mt-8 text-balance font-display text-4xl font-semibold leading-[1.1] text-white sm:text-6xl"
          >
            Soluções rápidas e profissionais para seus equipamentos.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            custom={0.2}
            className="mt-7 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg"
          >
            Manutenção de computadores, notebooks, redes, celulares e suporte
            técnico com atendimento ágil e especializado.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            custom={0.3}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <LinkButton
              href={NEXUS_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              withArrow
              icon={<MessageCircle className="h-4 w-4" />}
            >
              Solicitar atendimento
            </LinkButton>
            <LinkButton href="#servicos" variant="outline" icon={<Wrench className="h-4 w-4" />}>
              Ver serviços
            </LinkButton>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
