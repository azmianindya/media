import type { MediaResponse } from "../features/media/types";

export const fetchMediaFromAPI = async (): Promise<MediaResponse> => {
  try {
    console.log("Mulai Request...");
    const res = await fetch("https://dummyjson.com/c/3c28-57e0-499a-b013");
    if (!res.ok) throw new Error("Gagal fetch data");
    return res.json();
  } catch (error) {
    console.error("Error fetching media:", error);
    throw error;
  }
};