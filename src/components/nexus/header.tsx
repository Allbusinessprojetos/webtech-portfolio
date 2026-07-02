"use client";

import { useEffect, useState } from "react";
import { Menu, X, Cpu, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NEXUS_NAV, NEXUS_WHATSAPP_LINK } from "@/lib/constants";

export function NexusHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-white/10 bg-night/80 backdrop-blur-lg" : "bg-transparent"
      )}
    >
      <div className="border-b border-white/5 bg-graphite/60 py-1.5">
        <Container className="flex items-center justify-center gap-1.5 text-center">
          <a
            href="/"
            className="flex items-center gap-1.5 font-mono text-[11px] text-white/40 transition-colors hover:text-electric-soft"
          >
            <ArrowLeft className="h-3 w-3" />
            Este é um site demonstrativo criado pela WebTech
          </a>
        </Container>
      </div>

      <Container className="flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-electric/15 text-electric-soft">
            <Cpu className="h-4 w-4" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            Nexus Tech
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {NEXUS_NAV.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <LinkButton
          href={NEXUS_WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex"
        >
          Solicitar atendimento
        </LinkButton>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-white/10 bg-night/95 backdrop-blur-lg md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NEXUS_NAV.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <LinkButton
              href={NEXUS_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full"
            >
              Solicitar atendimento
            </LinkButton>
          </Container>
        </div>
      )}
    </header>
  );
}
