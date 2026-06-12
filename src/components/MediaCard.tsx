import type { MediaItem } from "../features/media/types";
import { IoIosPlayCircle } from "react-icons/io";
import { META } from "../lib/MediaMeta";

interface Props {
  item: MediaItem;
  onClick: () => void;
}

export default function MediaCard({ item, onClick }: Props) {
  const meta = META[item.type];
  const imgSrc = item.type === "IMAGE" ? item.url : meta.thumbnail;

  return (
    <div onClick={onClick} className="cursor-pointer rounded-2xl overflow-hidden bg-white border-2 shadow-md hover:-translate-y-1.5 transition-transform" style={{ borderColor: meta.border }}>
      <div className={`bg-linear-to-br ${meta.bg} px-5 py-4`}>
        <div className="text-xl font-bold text-gray-800">{meta.label}</div>
      </div>

      <div className="relative h-56 bg-gray-100">
        {imgSrc && <img src={imgSrc} alt="media" className="w-full h-full object-cover" />}
        {item.type === "VIDEO" && (
          <div>
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <IoIosPlayCircle className="text-white/90 text-6xl drop-shadow-lg" />
            </div>
            <div className="absolute bottom-2.5 right-3 bg-black/65 text-white rounded px-2 py-0.5 text-xs font-mono">05:12</div>
          </div>
        )}
      </div>

      <div className="px-5 py-4 text-sm text-gray-800">
        <meta.footer accent={meta.accent} />
      </div>
    </div>
  );
}