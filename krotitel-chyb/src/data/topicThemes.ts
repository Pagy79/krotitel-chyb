import type { TopicId } from "@/lib/types";

export type TopicTheme = {
  canvas: string;
  header: string;
  title: string;
  panel: string;
  panelText: string;
  panelMuted: string;
  bar: string;
  barTrack: string;
  chip: string;
};

export const TOPIC_THEMES: Record<TopicId, TopicTheme> = {
  vyrazy: {
    canvas: "#F9F7F0",
    header: "#E5D9B6",
    title: "#3A2A18",
    panel: "#5F4B32",
    panelText: "#FFFFFF",
    panelMuted: "#D4C4A8",
    bar: "#2D5F5D",
    barTrack: "#FFFFFF",
    chip: "#FFF8EC",
  },
  procenta: {
    canvas: "#FDF7E8",
    header: "#C9D6B8",
    title: "#2A3328",
    panel: "#F6EBC8",
    panelText: "#2A3328",
    panelMuted: "#6B7368",
    bar: "#E45A7C",
    barTrack: "#EDE4D0",
    chip: "#FFFDF8",
  },
  neznama: {
    canvas: "#D9E6F2",
    header: "#EAF2F8",
    title: "#1E2A38",
    panel: "#243044",
    panelText: "#F4F7FB",
    panelMuted: "#A9B7C8",
    bar: "#4C8DFF",
    barTrack: "#C5D4E4",
    chip: "#FFFFFF",
  },
  geometrie: {
    canvas: "#FDF7E8",
    header: "#F4ECD4",
    title: "#2C2416",
    panel: "#4E4943",
    panelText: "#FFF6E4",
    panelMuted: "#C9B8A0",
    bar: "#48A08B",
    barTrack: "#E8DFC8",
    chip: "#FFFDF8",
  },
};

export const MIX_THEME: TopicTheme = {
  canvas: "#F7F4EA",
  header: "#EFE8D4",
  title: "#3D3A34",
  panel: "#4E4943",
  panelText: "#FFFDF7",
  panelMuted: "#C9B8A0",
  bar: "#C4A35A",
  barTrack: "#E4DCC8",
  chip: "#FFFDF7",
};
