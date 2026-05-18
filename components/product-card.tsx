import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ProductCardProps = { product: { slug: string; title: string; category: string; price: string; description: string; stack: string[] } };

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/catalog/${product.slug}`} className="glass premium-hover group rounded-3xl p-5">
      <div className="mb-5 aspect-[1.4] rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.24),transparent_28%),linear-gradient(135deg,#15151b,#070707)] p-5"><div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-black/25 p-4"><span className="w-fit rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-platinum">{product.category}</span><div className="grid grid-cols-3 gap-2"><span className="h-16 rounded-2xl bg-white/15" /><span className="h-16 rounded-2xl bg-white/10" /><span className="h-16 rounded-2xl bg-white/5" /></div></div></div>
      <div className="flex items-start justify-between gap-4"><div><h3 className="text-lg font-semibold text-white">{product.title}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-mercury">{product.description}</p></div><ArrowUpRight className="mt-1 text-mercury transition group-hover:text-white" size={18} /></div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3"><div className="flex flex-wrap gap-2">{product.stack.slice(0, 3).map((item) => <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-mercury">{item}</span>)}</div><span className="text-sm font-semibold text-white">{product.price}</span></div>
    </Link>
  );
}
