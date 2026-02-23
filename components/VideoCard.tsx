import type { VideoItem } from '../data/videos';

interface VideoCardProps {
  video: VideoItem;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <a
      href={video.videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group overflow-hidden rounded-2xl border border-zinc-700/70 bg-zinc-900/70 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_50px_-20px_rgba(255,200,120,0.35)] transition duration-300 hover:-translate-y-1 hover:border-amber-300/50"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <span className="absolute bottom-3 right-3 rounded-full bg-amber-200/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-900">
          Watch
        </span>
      </div>

      <div className="p-4">
        <p className="text-sm uppercase tracking-[0.2em] text-amber-300/80">{video.category}</p>
        <h3 className="mt-2 text-lg font-medium text-zinc-100">{video.title}</h3>
      </div>
    </a>
  );
}
