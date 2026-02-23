import Link from 'next/link';
import VideoCard from '../components/VideoCard';
import { categories, videos } from '../data/videos';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <section className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 p-8 md:p-12">
          <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-300/10 blur-3xl" />

          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">Luxury UGC Showcase</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">UGC Creator Portfolio</h1>
          <p className="mt-4 max-w-2xl text-zinc-300 md:text-lg">
            Premium, high-converting short-form content crafted for modern brands in beauty, fashion, tech, and lifestyle.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/${category.slug}`}
                className="rounded-full border border-amber-200/30 bg-amber-200/10 px-5 py-2 text-sm font-medium text-amber-100 transition hover:border-amber-200/50 hover:bg-amber-200/20"
              >
                {category.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold">Featured Videos</h2>
            <span className="text-sm text-zinc-400">Click any video to watch in a new tab</span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {videos.map((video) => (
              <VideoCard key={`${video.category}-${video.title}`} video={video} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
