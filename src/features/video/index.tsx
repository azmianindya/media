import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import type { MediaItem } from "../media/types";

interface Props {
  item: MediaItem;
}

export default function VideoFeature({ item }: Props) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black">

      <div className="absolute inset-0 bg-cover bg-center blur-2xl opacity-30 scale-110"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80)` }}/>

        <div onClick={() => navigate("/media")}
        className="absolute top-6 left-6 cursor-pointer text-2xl text-white/65"><IoMdArrowRoundBack /></div>

        <div className="relative w-full max-w-3xl px-6">
          <div className="bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video">
            <video controls autoPlay className="w-full h-full">
              <source src={item.url} />
            </video>
          </div>
        </div>

    </div>
  );
}