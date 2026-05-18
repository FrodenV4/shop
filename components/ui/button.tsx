import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = { children: React.ReactNode; href?: string; variant?: "primary" | "secondary" | "ghost"; className?: string; type?: "button" | "submit" };

export function Button({ children, href, variant = "primary", className, type = "button" }: ButtonProps) {
  const classes = cn("inline-flex min-h-11 items-center justify-center rounded-2xl px-5 text-sm font-medium transition duration-200", variant === "primary" && "bg-white text-black shadow-glow hover:bg-platinum", variant === "secondary" && "glass text-white hover:bg-white/15", variant === "ghost" && "text-mercury hover:text-white", className);
  if (href) return <Link href={href} className={classes}>{children}</Link>;
  return <button type={type} className={classes}>{children}</button>;
}
