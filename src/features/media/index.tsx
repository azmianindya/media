import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMediaFromAPI } from "../../lib/api";
import MediaCard from "../../components/MediaCard";
import type { MediaItem } from "./types";

export default function MediaFeature() {
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMediaFromAPI().then(data => { setMediaList(data.data); setLoading(false); });
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-lg text-gray-400">Loading...</div>
    </div>
  );

  return (
    <div className="min-h-screen py-12 px-6 bg-linear-to-br from-blue-50 to-purple-50 font-serif">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800">Media</h1>
        <div className="w-12 h-0.5 bg-blue-500 mx-auto mt-3" />
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {mediaList.map((item, i) => (
          <MediaCard key={i} item={item} onClick={() => navigate(`/media/${i}`, { state: item })} />
        ))}
      </div>
    </div>
  );
}