import { useLocation, useNavigate } from "react-router-dom";
import type { MediaItem } from "../../features/media/types";
import VideoFeature from "../../features/video";
import ImageFeature from "../../features/pictures";
import MusicFeature from "../../features/music";

export default function MediaDetailPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const item = state as MediaItem;

  if (!item) {
    navigate("/media");
    return null;
  }

  return (
    <div>
      {item.type === "VIDEO" && <VideoFeature item={item} />}
      {item.type === "IMAGE" && <ImageFeature item={item} />}
      {item.type === "MUSIC" && <MusicFeature item={item} />}
    </div>
  );
}