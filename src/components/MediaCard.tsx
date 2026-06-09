import type { MediaItem } from "../features/media/types";
import type { MediaCardMeta } from "../lib/types";
import { TbPlayerTrackPrevFilled, TbPlayerTrackNextFilled } from "react-icons/tb";
import { IoPauseOutline } from "react-icons/io5";

const META: Record<string, MediaCardMeta> = {
  VIDEO: {
    label: "Video", accent: "#3b82f6", border: "#93c5fd",
    bg: "from-blue-100 to-blue-50",
    thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    footer: () => (
      <div>
        <div className="text-xs text-gray-400">Latest Upload:</div>
        <div className="font-semibold">Mountain Serenity</div>
      </div>
    ),
  },
  IMAGE: {
    label: "Image", accent: "#22c55e", border: "#86efac",
    bg: "from-green-100 to-green-50",
    thumbnail: null,
    footer: () => (
      <div className="text-center italic text-gray-500">Bulbasaur — <b>Official Art</b></div>
    ),
  },
  MUSIC: {
    label: "Music", accent: "#a855f7", border: "#d8b4fe",
    bg: "from-purple-100 to-purple-50",
    thumbnail: "https://radartv.disway.id/upload/21da3b05ebb71d73b617735a2b958435.jpg",
    footer: ({ accent }) => (
      <div>
        <div className="text-xs text-gray-400">Now Playing:</div>
        <div className="font-semibold">"hate that i made you love me"</div>
        <div className="text-sm text-gray-400">by Ariana Grande</div>
        <div className="flex gap-3 mt-3">
          {[<TbPlayerTrackPrevFilled />, <IoPauseOutline />, <TbPlayerTrackNextFilled />].map((icon, i) => (
            <div
              key={i}
              onClick={e => e.stopPropagation()}
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: i === 1 ? accent : "#f1f5f9", color: i === 1 ? "#fff" : "#64748b" }}
            >{icon}</div>
          ))}
        </div>
      </div>
    ),
  },
};

interface Props {
  item: MediaItem;
  onClick: () => void;
}

export default function MediaCard({ item, onClick }: Props) {
  const meta = META[item.type];
  const imgSrc = item.type === "IMAGE" ? item.url : meta.thumbnail;

  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-2xl overflow-hidden bg-white border-2 shadow-md hover:-translate-y-1.5 transition-transform duration-200"
      style={{ borderColor: meta.border }}
    >
      <div className={`bg-linear-to-br ${meta.bg} px-5 py-4 flex justify-between items-center`}>
        <span className="text-xl font-bold text-gray-800">{meta.label}</span>
      </div>

      <div className="relative h-56 bg-gray-100">
        {imgSrc && <img src={imgSrc} alt="media" className="w-full h-full object-cover" />}
        {item.type === "VIDEO" && (
          <>
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                <svg width="22" height="22" viewBox="0 0 24 24" fill={meta.accent}><path d="M6 4l14 8-14 8V4z" /></svg>
              </div>
            </div>
            <div className="absolute bottom-2.5 right-3 bg-black/65 text-white rounded px-2 py-0.5 text-xs font-mono">05:12</div>
          </>
        )}
      </div>

      <div className="px-5 py-4 text-sm text-gray-800">
        <meta.footer accent={meta.accent} />
      </div>
    </div>
  );
}