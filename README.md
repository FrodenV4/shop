# FrodenCode

Premium marketplace for production-ready code templates, UI systems, backend modules, and fullstack kits.

## Stack

- Next.js App Router
- TypeScript
- TailwindCSS
- PostgreSQL
- Prisma ORM
- JWT cookies
- bcrypt password hashing
- Telegram Bot API payment review flow
- Protected ZIP downloads from private storage

## Local Setup

```bash
npm install
cp .env.example .env
npm run db:generate
npm run seed
npm run dev
```

## Production Notes

- Keep ZIP assets outside `public`.
- Set `PRIVATE_STORAGE_DIR` to a private volume on the Oracle Cloud server.
- Run `npm run build` during deployment so Prisma Client is generated.
- Apply migrations with `npm run db:migrate`.
- Terminate TLS at Nginx/Caddy and proxy to `next start`.
