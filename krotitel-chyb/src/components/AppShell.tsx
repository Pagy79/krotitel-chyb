import { C } from "@/data/theme";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="fixed inset-0 z-0 w-full max-w-[100vw] flex justify-center sm:items-center p-0 sm:p-6 overflow-hidden"
      style={{ backgroundColor: C.bgDeep, fontFamily: "var(--font-sans), Nunito, ui-rounded, system-ui, sans-serif" }}
    >
      <div
        className="w-full max-w-md h-full max-h-full min-h-0 sm:h-auto sm:min-h-[51rem] sm:max-h-[calc(100dvh-3rem)] overflow-hidden flex flex-col relative rounded-none sm:rounded-[28px]"
        style={{
          backgroundColor: C.bg,
          border: "1px solid #EAE3D2",
        }}
      >
        {children}
      </div>
    </div>
  );
}
