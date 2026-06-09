import type { JSX } from "react"

export type MediaCardMeta = {
  label: string;
  accent: string;
  border: string;
  bg: string;
  thumbnail: string | null;
  footer: (props: { accent: string }) => JSX.Element;
};