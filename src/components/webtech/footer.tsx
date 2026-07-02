import { Zap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { WEBTECH_NAV } from "@/lib/constants";

export function WebTechFooter() {
  return (
    <footer className="border-t border-white/10 py-12">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-electric/15 text-electric-soft">
            <Zap className="h-3.5 w-3.5" />
          </span>
          <span className="font-display text-base font-semibold text-white">WebTech</span>
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {WEBTECH_NAV.map((link) => (
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
          © {new Date().getFullYear()} WebTech. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}
