import { PremiumCelebrateHost } from "@/components/PremiumCelebrateHost";
import { COSMIC_BG_STYLE } from "@/lib/cosmicBg";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="fixed inset-0 z-0 w-full h-full overflow-hidden flex flex-col"
      style={{
        ...COSMIC_BG_STYLE,
        fontFamily: "var(--font-sans), Nunito, ui-rounded, system-ui, sans-serif",
      }}
    >
      <div className="relative flex-1 min-h-0 w-full overflow-hidden flex flex-col">{children}</div>
      <PremiumCelebrateHost />
    </div>
  );
}
