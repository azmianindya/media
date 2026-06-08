import type { MediaItem } from "../features/media/types";

const META = {
  VIDEO: {
    label: "Video", accent: "#3b82f6", border: "#93c5fd",
    bg: "linear-gradient(135deg, #e0f0ff, #f0f8ff)",
    thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    footer: (_: { accent: string }) => <div><div style={{ fontSize: 12, color: "#94a3b8" }}>Latest Upload:</div><div style={{ fontWeight: 600 }}>Mountain Serenity</div></div>,
  },
  IMAGE: {
    label: "Image", accent: "#22c55e", border: "#86efac",
    bg: "linear-gradient(135deg, #dcfce7, #f0fff4)",
    thumbnail: null,
    footer: (_: { accent: string }) => <div style={{ textAlign: "center", fontStyle: "italic", color: "#475569" }}>Bulbasaur — <b>Official Art</b></div>,
  },
  MUSIC: {
    label: "Music", accent: "#a855f7", border: "#d8b4fe",
    bg: "linear-gradient(135deg, #f3e8ff, #fdf4ff)",
    thumbnail: "https://radartv.disway.id/upload/21da3b05ebb71d73b617735a2b958435.jpg ",
    footer: ({ accent }: { accent: string }) => (
      <div>
        <div style={{ fontSize: 12, color: "#94a3b8" }}>Now Playing:</div>
        <div style={{ fontWeight: 600 }}>"hate that i made you love me"</div>
        <div style={{ fontSize: 13, color: "#94a3b8" }}>by Ariana Grande</div>
        <div style={{ display: "flex", gap: 12, marginTop: 10 }}>
          {["⏮", "⏸", "⏭"].map((c, i) => (
            <div key={i} onClick={e => e.stopPropagation()} style={{
              width: 32, height: 32, borderRadius: "50%", fontSize: 14, cursor: "pointer",
              background: i === 1 ? accent : "#f1f5f9", color: i === 1 ? "#fff" : "#64748b",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>{c}</div>
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
      className="cursor-pointer"
      style={{
        background: "#fff", borderRadius: 20, overflow: "hidden",
        border: `2px solid ${meta.border}`,
        boxShadow: `0 4px 24px 0 ${meta.accent}22`,
        transition: "transform 0.18s, box-shadow 0.18s",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 36px 0 ${meta.accent}44`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 4px 24px 0 ${meta.accent}22`;
      }}
    >
      <div style={{ background: meta.bg, padding: "16px 20px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 22, fontWeight: 700, color: "#1e293b" }}>{meta.label}</span>
      </div>

      <div style={{ position: "relative", height: 220, background: "#f1f5f9" }}>
        {imgSrc && <img src={imgSrc} alt="media" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />}
        {item.type === "VIDEO" && (
          <>
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.28)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(255,255,255,0.92)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill={meta.accent}><path d="M6 4l14 8-14 8V4z" /></svg>
              </div>
            </div>
            <div style={{ position: "absolute", bottom: 10, right: 12, background: "rgba(0,0,0,0.65)", color: "#fff", borderRadius: 6, padding: "2px 8px", fontSize: 12, fontFamily: "monospace" }}>05:12</div>
          </>
        )}
      </div>

      <div style={{ padding: "14px 20px 18px", fontSize: 15, color: "#1e293b" }}>
        <meta.footer accent={meta.accent} />
      </div>
    </div>
  );
}