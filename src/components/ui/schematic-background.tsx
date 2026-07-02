import { cn } from "@/lib/utils";

export function SchematicBackground({ tint = "blue" }: { tint?: "blue" | "violet" }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-schematic" />
      <div
        className={cn(
          "absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full blur-[110px] animate-pulseGlow",
          tint === "blue" ? "bg-electric/20" : "bg-indigo-500/15"
        )}
      />
      <div className="absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-electric/10 blur-[90px] animate-drift" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night to-transparent" />
    </div>
  );
}
