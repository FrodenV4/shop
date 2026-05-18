import { ArrowRight, Blocks, Bot, Download, LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { featuredProducts } from "@/lib/products";

const benefits = [
  { icon: Blocks, title: "Production kits", text: "Reusable UI systems, backend modules, and fullstack products built for real projects." },
  { icon: ShieldCheck, title: "Verified access", text: "Paid orders unlock protected downloads with ownership checks and download logs." },
  { icon: Bot, title: "Telegram approvals", text: "Payment screenshots go straight to the admin bot with approve and reject actions." },
  { icon: LockKeyhole, title: "Private storage", text: "ZIP files never live in public routes and are served only through signed backend URLs." },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <section className="relative px-4 pb-20 pt-20 sm:px-6 lg:px-8 lg:pb-28 lg:pt-28">
        <div className="absolute inset-x-0 top-0 -z-10 h-[680px] bg-radial-fade" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/7 px-4 py-2 text-sm text-platinum backdrop-blur-xl"><Sparkles size={15} />Premium marketplace for developers</div>
            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">FrodenCode</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-mercury">Ship faster with polished code templates, elite UI systems, backend modules, and fullstack solutions that feel ready before sprint planning starts.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button href="/catalog" className="gap-2">Explore Catalog <ArrowRight size={16} /></Button><Button href="/register" variant="secondary">Create Account</Button></div>
          </div>
          <div className="glass relative rounded-3xl p-3"><div className="rounded-[1.35rem] border border-white/10 bg-black/45 p-5"><div className="mb-5 flex items-center justify-between"><div><p className="text-sm text-mercury">Marketplace revenue</p><p className="mt-1 text-3xl font-semibold text-white">$48.2k</p></div><span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-platinum">Live</span></div><div className="grid gap-3 sm:grid-cols-3">{["UI Kits", "Backends", "Fullstack"].map((label, index) => <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><p className="text-xs text-mercury">{label}</p><p className="mt-5 text-2xl font-semibold text-white">{[32, 18, 11][index]}</p></div>)}</div><div className="mt-5 h-72 rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.14),rgba(255,255,255,.02)),radial-gradient(circle_at_50%_0%,rgba(255,255,255,.24),transparent_20rem)] p-5"><div className="flex h-full items-end gap-3">{[38,58,42,75,62,88,71,96].map((height, index) => <span key={index} className="flex-1 rounded-t-2xl bg-white/80" style={{ height: `${height}%` }} />)}</div></div></div></div>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">{benefits.map(({ icon: Icon, title, text }) => <div key={title} className="glass premium-hover rounded-3xl p-6"><Icon className="text-white" size={24} /><h2 className="mt-5 text-lg font-semibold text-white">{title}</h2><p className="mt-3 text-sm leading-6 text-mercury">{text}</p></div>)}</div></section>
      <section className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="text-sm uppercase tracking-[0.24em] text-mercury">Popular templates</p><h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">Code assets with a premium edge.</h2></div><Button href="/catalog" variant="secondary">View all products</Button></div><div className="grid gap-5 md:grid-cols-3">{featuredProducts.map((product) => <ProductCard key={product.slug} product={product} />)}</div></div></section>
      <section className="px-4 pb-24 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">{[["Protected delivery", "Signed URLs, ownership checks, limits, and download logs keep premium ZIPs away from direct public access."], ["Admin operations", "Manage products, users, orders, previews, ZIP uploads, and payment decisions from a focused control surface."], ["Deployable architecture", "Prisma, PostgreSQL, server routes, private storage, and environment-driven settings are ready for Oracle Cloud."]].map(([title, text]) => <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.035] p-8"><Download className="text-white" size={22} /><h3 className="mt-8 text-2xl font-semibold text-white">{title}</h3><p className="mt-4 leading-7 text-mercury">{text}</p></div>)}</div></section>
    </div>
  );
}
