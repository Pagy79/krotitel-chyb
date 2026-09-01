import { C } from "@/data/theme";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex justify-center items-center p-6" style={{ backgroundColor: C.bgDeep }}>
      <div
        className="w-full max-w-md overflow-hidden flex flex-col relative rounded-[28px]"
        style={{
          minHeight: "640px",
          backgroundColor: C.bg,
          border: "1px solid #EAE3D2",
        }}
      >
        <div className="relative z-10 flex-1 flex flex-col">{children}</div>
      </div>
    </div>
  );
}
