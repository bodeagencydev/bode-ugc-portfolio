import Link from 'next/link';
import { notFound } from 'next/navigation';
import VideoCard from '../../components/VideoCard';
import { categories, videos, type VideoCategory } from '../../data/videos';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categorySlug = params.category.toLowerCase() as VideoCategory;
  const selectedCategory = categories.find((category) => category.slug === categorySlug);

  if (!selectedCategory) {
    notFound();
  }

  const filteredVideos = videos.filter((video) => video.category === selectedCategory.slug);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <header className="mb-10 rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8">
          <Link href="/" className="text-sm text-zinc-400 transition hover:text-amber-200">
            ← Back to portfolio
          </Link>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {selectedCategory.label} Videos
          </h1>
          <p className="mt-3 text-zinc-300">Premium UGC content in the {selectedCategory.label.toLowerCase()} category.</p>
        </header>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredVideos.map((video) => (
            <VideoCard key={`${video.category}-${video.title}`} video={video} />
          ))}
        </section>
      </div>
    </main>
  );
}
