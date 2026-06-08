import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMedia } from "../../lib/api";
import MediaCard from "../../components/MediaCard";
import type { MediaItem } from "./types";

export default function MediaFeature() {
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMedia().then(data => { setMediaList(data); setLoading(false); });
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div style={{ color: "#94a3b8", fontSize: 18 }}>Loading...</div>
    </div>
  );

  return (
    <div className="min-h-screen py-12 px-6" style={{ background: "linear-gradient(160deg, #e8f0fe, #f0f4ff, #faf5ff)", fontFamily: "Georgia, serif" }}>
      <div className="text-center mb-12">
        <h1 style={{ fontSize: 48, fontWeight: 700, letterSpacing: "-1px", color: "#1e293b" }}>Media</h1>
        <div style={{ width: 48, height: 3, background: "#6366f1", margin: "12px auto 0" }} />
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {mediaList.map((item, i) => (
          <MediaCard key={i} item={item} onClick={() => navigate(`/media/${i}`, { state: item })} />
        ))}
      </div>
    </div>
  );
}