import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import type { MediaItem } from "../media/types";

interface Props {
  item: MediaItem;
}

export default function MusicFeature({ item }: Props) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center blur-2xl opacity-60 scale-110"
        style={{ backgroundImage: `url(https://radartv.disway.id/upload/21da3b05ebb71d73b617735a2b958435.jpg)` }}
      />

      <div
        onClick={() => navigate("/media")}
        className="absolute top-6 left-6 cursor-pointer text-2xl text-black"
      >
        <IoMdArrowRoundBack />
      </div>

      <div className="relative z-10 w-full max-w-lg px-6">
        <audio controls autoPlay className="w-full rounded-2xl shadow-xl">
          <source src={item.url} />
        </audio>
      </div>

    </div>
  );
}