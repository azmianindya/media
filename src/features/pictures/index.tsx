import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import type { MediaItem } from "../media/types";

interface Props {
  item: MediaItem;
}

export default function ImageFeature({ item }: Props) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center blur-2xl opacity-30 scale-110"
        style={{ backgroundImage: `url(${item.url})` }}
      />

      <div
        onClick={() => navigate("/media")}
        className="absolute top-6 left-6 cursor-pointer text-2xl text-black"
      >
        <IoMdArrowRoundBack />
      </div>

      <div className="relative z-10 w-full max-w-3xl px-6">
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
            <img src={item.url} alt="media" className="w-full h-full object-contain" />
        </div>
        <div className="mt-4 text-center">
            <div className="text-black font-semibold text-lg">Bulbasaur</div>
            <div className="text-black/50 text-sm">Official Art</div>
        </div>
        </div>
    </div>
  );
}