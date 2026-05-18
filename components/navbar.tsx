import Link from "next/link";
import { LogOut, Sparkles } from "lucide-react";
import type { AuthUser } from "@/lib/auth";
import { Button } from "@/components/ui/button";

export function Navbar({ user }: { user: AuthUser | null }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-white/15 bg-white text-black"><Sparkles size={18} /></span><span className="text-sm font-semibold tracking-wide text-white">FrodenCode</span></Link>
        <nav className="hidden items-center gap-7 text-sm text-mercury md:flex"><Link className="hover:text-white" href="/catalog">Catalog</Link><Link className="hover:text-white" href="/profile">Profile</Link><Link className="hover:text-white" href="/orders">Orders</Link><Link className="hover:text-white" href="/admin">Admin</Link></nav>
        <div className="flex items-center gap-3">{user ? <><Link href="/profile" className="hidden items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white sm:flex"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-bold text-black">{user.username.slice(0, 2).toUpperCase()}</span>{user.username}</Link><form action="/api/auth/logout" method="post"><button className="rounded-2xl border border-white/10 p-3 text-mercury transition hover:text-white" aria-label="Logout"><LogOut size={17} /></button></form></> : <><Button href="/login" variant="ghost" className="hidden sm:inline-flex">Login</Button><Button href="/register">Create Account</Button></>}</div>
      </div>
    </header>
  );
}
