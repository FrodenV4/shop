export const featuredProducts = [
  { slug: "aura-dashboard-system", title: "Aura Dashboard System", category: "UI System", price: "$149", stack: ["Next.js", "Tailwind", "Prisma"], description: "Executive SaaS dashboard with analytics, billing screens, command palette, and design tokens.", cover: "/previews/aura.svg" },
  { slug: "forge-backend-kit", title: "Forge Backend Kit", category: "Backend Module", price: "$119", stack: ["PostgreSQL", "JWT", "Queues"], description: "Production API foundation with auth, roles, webhooks, storage, rate limits, and audit logs.", cover: "/previews/forge.svg" },
  { slug: "nebula-fullstack-commerce", title: "Nebula Fullstack Commerce", category: "Fullstack", price: "$249", stack: ["Next.js", "Stripe", "Postgres"], description: "Marketplace-grade starter with catalog, checkout, admin, transactional emails, and observability.", cover: "/previews/nebula.svg" },
];

export const catalogProducts = [
  ...featuredProducts,
  { slug: "vector-ai-components", title: "Vector AI Components", category: "AI UI", price: "$99", stack: ["React", "RSC", "AI SDK"], description: "Chat, prompt studio, eval panels, model routing settings, and usage dashboards.", cover: "/previews/vector.svg" },
  { slug: "atlas-admin-suite", title: "Atlas Admin Suite", category: "Admin", price: "$189", stack: ["Next.js", "RBAC", "Charts"], description: "Admin cockpit for users, products, permissions, audit trails, and operational metrics.", cover: "/previews/atlas.svg" },
  { slug: "pulse-auth-module", title: "Pulse Auth Module", category: "Auth", price: "$79", stack: ["JWT", "bcrypt", "Prisma"], description: "Drop-in auth flow with secure cookies, profile settings, roles, sessions, and middleware.", cover: "/previews/pulse.svg" },
];

export function findProduct(slug: string) {
  return catalogProducts.find((product) => product.slug === slug);
}
