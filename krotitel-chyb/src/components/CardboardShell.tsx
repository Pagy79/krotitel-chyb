import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  face?: string;
  edge?: string;
  radius?: string;
  dark?: boolean;
};

export function CardboardShell({
  children,
  className = "",
  face,
  edge,
  radius,
  dark = false,
}: Props) {
  const style = {
    "--cardboard-face": face,
    "--cardboard-edge": edge,
    "--cardboard-radius": radius,
  } as CSSProperties;

  return (
    <div className={`cardboard-shell ${dark ? "cardboard-shell--dark" : ""} ${className}`} style={style}>
      {children}
    </div>
  );
}
