# Krotitel chyb

Kompas na školu — modul Matematika. Příprava na přijímačky: trénink po tématech, velký test nanečisto a účet v Supabase.

## Místně

```bash
cd krotitel-chyb
npm install
cp .env.example .env.local
npm run dev
```

Otevři [http://localhost:3000](http://localhost:3000). Produkce je na [https://krotitel-chyb.vercel.app](https://krotitel-chyb.vercel.app).

Do `.env.local` doplň `NEXT_PUBLIC_SUPABASE_URL` a `NEXT_PUBLIC_SUPABASE_ANON_KEY` z nového Supabase projektu. SQL schéma je v `krotitel-chyb/scripts/supabase-setup.sql`.

V Supabase **Authentication → URL Configuration**:
- Site URL: `https://krotitel-chyb.vercel.app`
- Redirect URLs: `https://krotitel-chyb.vercel.app/auth/callback/`, `http://localhost:3000/auth/callback/`

Google: v Supabase zapni **Authentication → Providers → Google** (Client ID + Secret z Google Cloud).  
V Google Cloud u OAuth klienta přidej Authorized redirect URI přesně:
`https://<projekt>.supabase.co/auth/v1/callback`

## Nasazení na Vercel

1. Pushni `master` na [github.com/Pagy79/krotitel-chyb](https://github.com/Pagy79/krotitel-chyb).
2. Importuj repo na [vercel.com/new](https://vercel.com/new).
3. **Root Directory** nech prázdné. V kořeni je `vercel.json`, který staví složku `krotitel-chyb`.
4. V Environment Variables nastav:
   - `NEXT_PUBLIC_SUPABASE_URL` = `https://<projekt>.supabase.co` (**bez** `/rest/v1/`)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = publishable/anon klíč
   Pak **Redeploy**, jinak se klíče do statického buildu nedostanou.
5. Deploy.
