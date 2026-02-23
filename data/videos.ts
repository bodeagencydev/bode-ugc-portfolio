export type VideoCategory = 'beauty' | 'fashion' | 'tech' | 'lifestyle';

export interface VideoItem {
  title: string;
  category: VideoCategory;
  thumbnail: string;
  videoUrl: string;
}

export const categories: { label: string; slug: VideoCategory }[] = [
  { label: 'Beauty', slug: 'beauty' },
  { label: 'Fashion', slug: 'fashion' },
  { label: 'Tech', slug: 'tech' },
  { label: 'Lifestyle', slug: 'lifestyle' },
];

export const videos: VideoItem[] = [
  {
    title: 'Glass Skin Morning Routine',
    category: 'beauty',
    thumbnail: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=QY6L2J7f3WQ',
  },
  {
    title: 'Bold Evening Glam Tutorial',
    category: 'beauty',
    thumbnail: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=tiQevGDPgRY',
  },
  {
    title: 'Luxury Streetwear Lookbook',
    category: 'fashion',
    thumbnail: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=5Qx6f9Wf0wY',
  },
  {
    title: 'Capsule Wardrobe Essentials',
    category: 'fashion',
    thumbnail: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=65_DY5wQ4YQ',
  },
  {
    title: 'Desk Setup Reel for Creators',
    category: 'tech',
    thumbnail: 'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=s5j3Q7g3VxA',
  },
  {
    title: 'Smartphone Camera Hacks',
    category: 'tech',
    thumbnail: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=9No-FiEInLA',
  },
  {
    title: 'Aesthetic Morning Vlog',
    category: 'lifestyle',
    thumbnail: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=0J2QdDbelmY',
  },
  {
    title: 'Weekend Wellness Reset',
    category: 'lifestyle',
    thumbnail: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=eWJVvNptHZ4',
  },
];
