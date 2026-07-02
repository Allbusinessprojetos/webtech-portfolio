"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, PlayCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { SchematicBackground } from "@/components/ui/schematic-background";
import { fadeInUp } from "@/lib/animations";
import { WHATSAPP_LINK_WEBTECH } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20">
      <SchematicBackground />
      <Container className="relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-electric-soft">
            Sites sob medida para o setor de tecnologia
          </span>

          <motion.h1
            variants={fadeInUp}
            custom={0.1}
            className="mt-8 text-balance font-display text-4xl font-semibold leading-[1.08] text-white sm:text-6xl md:text-7xl"
          >
            Sites profissionais para empresas de tecnologia{" "}
            <span className="bg-gradient-to-r from-electric-soft to-electric bg-clip-text text-transparent">
              conquistarem mais clientes.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            custom={0.2}
            className="mt-7 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg"
          >
            Criamos sites modernos, rápidos e bem estruturados para transmitir
            mais credibilidade, destacar seus serviços e facilitar o contato
            de novos clientes.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            custom={0.3}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <LinkButton href="#demonstracao" withArrow icon={<PlayCircle className="h-4 w-4" />}>
              Ver demonstração
            </LinkButton>
            <LinkButton
              href={WHATSAPP_LINK_WEBTECH}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              icon={<MessageCircle className="h-4 w-4" />}
            >
              Falar no WhatsApp
            </LinkButton>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          custom={0.45}
          initial="hidden"
          animate="visible"
          className="relative mx-auto mt-20 flex max-w-3xl items-center justify-center gap-3 font-mono text-xs text-white/40"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20" />
          <span className="flex items-center gap-1">
            role: sites institucionais
            <ArrowRight className="h-3 w-3" />
            assistência técnica &amp; empresas de tecnologia
          </span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20" />
        </motion.div>
      </Container>
    </section>
  );
}
