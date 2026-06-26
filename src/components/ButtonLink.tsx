import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({ className = "", variant = "primary", ...props }: ButtonLinkProps) {
  const styles = {
    primary: "bg-[#C8102E] text-white shadow-[0_20px_60px_rgba(200,16,46,0.35)] hover:bg-[#a80d27]",
    secondary: "border border-[#D4AF37]/70 bg-[#D4AF37] text-black hover:bg-[#f1cf60]",
    ghost: "border border-white/20 bg-white/10 text-white hover:bg-white/15",
  };

  return (
    <Link
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-black uppercase tracking-[0.18em] transition ${styles[variant]} ${className}`}
      {...props}
    />
  );
}
