import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  accent?: "electric" | "white";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  accent = "electric",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              "font-mono text-xs uppercase tracking-[0.25em]",
              accent === "electric" ? "text-electric-soft" : "text-white/60"
            )}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-[1.15] text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-balance text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
