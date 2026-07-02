import { Cpu } from "lucide-react";
import { Container } from "@/components/ui/container";
import { NEXUS_NAV } from "@/lib/constants";

export function NexusFooter() {
  return (
    <footer className="border-t border-white/10 py-12">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-electric/15 text-electric-soft">
            <Cpu className="h-3.5 w-3.5" />
          </span>
          <span className="font-display text-base font-semibold text-white">Nexus Tech</span>
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {NEXUS_NAV.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="font-mono text-xs text-white/30">
          Empresa fictícia — projeto demonstrativo da WebTech.
        </p>
      </Container>
    </footer>
  );
}
