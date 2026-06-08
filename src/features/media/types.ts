export type MediaType = "VIDEO" | "IMAGE" | "MUSIC";

export interface MediaItem {
  type: MediaType;
  url: string;
}

export interface MediaResponse {
  data: MediaItem[];
}