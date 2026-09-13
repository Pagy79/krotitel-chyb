# Krotitel chyb

Kompas na školu — modul Matematika. Příprava na přijímačky: trénink po tématech, velký test nanečisto a účet v Supabase.

## Místně

```bash
cd krotitel-chyb
npm install
cp .env.example .env.local
npm run dev
```

Otevři [http://localhost:3000](http://localhost:3000).

Do `.env.local` doplň `NEXT_PUBLIC_SUPABASE_URL` a `NEXT_PUBLIC_SUPABASE_ANON_KEY` z nového Supabase projektu. SQL schéma je v `krotitel-chyb/scripts/supabase-setup.sql`.

## Nasazení na Vercel

1. Pushni `master` na [github.com/Pagy79/krotitel-chyb](https://github.com/Pagy79/krotitel-chyb).
2. Importuj repo na [vercel.com/new](https://vercel.com/new).
3. **Root Directory** nech prázdné. V kořeni je `vercel.json`, který staví složku `krotitel-chyb`.
4. V Environment Variables přidej stejné `NEXT_PUBLIC_SUPABASE_*` klíče.
5. Deploy.
