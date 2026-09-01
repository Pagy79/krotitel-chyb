# Krotitel chyb

Webová appka na přípravu na SŠ z matematiky. Diagnostika miskoncepcí + krocení tvorů bez trestu za špatnou odpověď.

## Místně

```bash
cd krotitel-chyb
npm install
npm run dev
```

Otevři [http://localhost:3000](http://localhost:3000).

## Nasazení na Vercel

1. Pushni repo na GitHub.
2. Na [vercel.com/new](https://vercel.com/new) importuj projekt.
3. **Root Directory** nastav na `krotitel-chyb`.
4. Framework: Next.js (detekuje se samo). Deploy.

Nebo z počítače:

```bash
cd krotitel-chyb
npx vercel
```

Postup krocení se ukládá v `localStorage` prohlížeče (zatím bez účtů).
