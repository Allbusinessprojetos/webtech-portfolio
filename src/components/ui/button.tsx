import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export const buttonBase =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-night disabled:opacity-50";

export const buttonVariants = {
  primary:
    "bg-electric text-white shadow-[0_0_0_0_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_4px_rgba(59,130,246,0.45)] hover:bg-electric-soft",
  outline:
    "border border-white/15 text-white hover:border-electric hover:bg-electric/10",
  ghost: "text-white/80 hover:text-white",
};

/**
 * Returns the visual classes of a button without rendering any element.
 * Use this when you need something that LOOKS like a button but must not
 * render its own <a>/<button> tag — e.g. inside a card that is already
 * wrapped in a single <Link>/<a>, where a nested interactive element
 * would be invalid HTML and break hydration.
 */
export function buttonClasses(
  variant: keyof typeof buttonVariants = "primary",
  className?: string
) {
  return cn(buttonBase, buttonVariants[variant], className);
}

interface CommonProps {
  variant?: keyof typeof buttonVariants;
  withArrow?: boolean;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

type LinkButtonProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & { href: string };

export function Button({
  variant = "primary",
  withArrow,
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonClasses(variant, className)} {...props}>
      {icon}
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
}

/**
 * Renders a single <a>. Never nest this inside another <a> or another
 * LinkButton — if you need button styling inside an element that is
 * already a link, use `buttonClasses()` on a <span>/<div> instead.
 */
export function LinkButton({
  variant = "primary",
  withArrow,
  icon,
  className,
  children,
  href,
  ...props
}: LinkButtonProps) {
  return (
    <a href={href} className={buttonClasses(variant, className)} {...props}>
      {icon}
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </a>
  );
}
