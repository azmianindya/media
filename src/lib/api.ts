import type { MediaItem, MediaResponse } from "../features/media/types";

export const fetchMedia = async (): Promise<MediaItem[]> => {
  const res = await fetch("https://dummyjson.com/c/3c28-57e0-499a-b013");
  const json: MediaResponse = await res.json();
  return json.data;
};