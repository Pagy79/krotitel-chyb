export function WorkingSource({
  text,
  light = false,
}: {
  text?: string;
  light?: boolean;
}) {
  if (!text) return null;
  return (
    <div
      className={`rounded-xl border p-3.5 mb-4 ${
        light ? "border-zinc-200 bg-zinc-50" : "border-white/15 bg-white/5"
      }`}
    >
      <p
        className={`text-[10px] font-semibold uppercase tracking-wide mb-1.5 ${
          light ? "text-zinc-500" : "text-indigo-300/70"
        }`}
      >
        Výchozí text
      </p>
      <p
        suppressHydrationWarning
        className={`text-sm leading-relaxed whitespace-pre-line ${light ? "text-zinc-800" : "text-slate-100"}`}
      >
        {text}
      </p>
    </div>
  );
}
