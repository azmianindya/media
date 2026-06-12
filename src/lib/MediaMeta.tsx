import { TbPlayerTrackPrevFilled, TbPlayerTrackNextFilled } from "react-icons/tb";
import { IoPauseOutline } from "react-icons/io5";
import type { MediaCardMeta } from "./types";

export const META: Record<string, MediaCardMeta> = {
  VIDEO: {
    label: "Video", accent: "#3b82f6", border: "#93c5fd", bg: "from-blue-100 to-blue-50",
    thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    footer: () => (
      <div>
        <div className="text-xs text-gray-400">Latest Upload:</div>
        <div className="font-semibold">Mountain Serenity</div>
      </div>
    ),
  },
  IMAGE: {
    label: "Image", accent: "#22c55e", border: "#86efac", bg: "from-green-100 to-green-50",
    thumbnail: null,
    footer: () => (
      <div className="text-center italic text-gray-500">Bulbasaur — 
        <div className="font-bold">Official Art</div>
      </div>
    ),
  },
  MUSIC: {
    label: "Music", accent: "#a855f7", border: "#d8b4fe", bg: "from-purple-100 to-purple-50",
    thumbnail: "https://radartv.disway.id/upload/21da3b05ebb71d73b617735a2b958435.jpg",
    footer: ({ accent }) => (
      <div>
        <div className="text-xs text-gray-400">Now Playing:</div>
        <div className="font-semibold">"hate that i made you love me"</div>
        <div className="text-sm text-gray-400">by Ariana Grande</div>
        <div className="flex gap-3 mt-3">
          {[<TbPlayerTrackPrevFilled />, <IoPauseOutline />, <TbPlayerTrackNextFilled />].map((icon, i) => (
            <div key={i} onClick={e => e.stopPropagation()}
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: i === 1 ? accent : "#f1f5f9", color: i === 1 ? "#fff" : "#64748b" }}>{icon}
            </div>
          ))}
        </div>
      </div>
    ),
  },
};