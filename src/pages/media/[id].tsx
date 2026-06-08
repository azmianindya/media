import { useLocation, useNavigate } from "react-router-dom";
import type { MediaItem } from "../../features/media/types";

export default function MediaDetailPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  
  console.log("state:", state); // tambah ini

  const item = state as MediaItem;

  if (!item) {
    navigate("/media");
    return null;
  }

  return (
    <div className="p-6 max-w-2xl">
      <div
        onClick={() => navigate("/media")}
        className="mb-4 cursor-pointer text-sm text-gray-500 hover:text-gray-800"
      >
        ← Kembali
      </div>

      <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
        {item.type}
      </div>

      {item.type === "IMAGE" && (
        <img src={item.url} alt="media" className="w-full rounded-xl" />
      )}

      {item.type === "VIDEO" && (
        <video controls autoPlay className="w-full rounded-xl">
          <source src={item.url} />
        </video>
      )}

      {item.type === "MUSIC" && (
        <audio controls autoPlay className="w-full">
          <source src={item.url} />
        </audio>
      )}
    </div>
  );
}