import type { CSSProperties } from "react";

export const COSMIC_BG_STYLE: CSSProperties = {
  backgroundColor: "#0a0818",
  backgroundImage:
    "linear-gradient(180deg, rgba(8,6,22,0.32) 0%, rgba(8,6,22,0.52) 100%), url(/nebula-bg.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export const COSMIC_BUTTON_SHADOW: CSSProperties = {
  boxShadow: "0 10px 30px -5px rgba(99, 102, 241, 0.3)",
};

export const AUTH_GLASS_STYLE: CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75)), url(/nebula-bg.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderColor: "rgba(34, 211, 238, 0.3)",
  boxShadow: "0 0 30px rgba(56, 189, 248, 0.15), 0 25px 50px -12px rgba(15, 23, 42, 0.5)",
};
