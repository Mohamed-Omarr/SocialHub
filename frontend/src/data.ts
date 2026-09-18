export type Presence = 'online' | 'voice' | 'video' | 'offline';

export type Person = {
  name: string;
  handle: string;
  status: Presence;
  img: string;
};

export type Post = {
  author: Person;
  time: string;
  text: string;
  image: string | null;
  likes: number;
  comments: number;
  shares: number;
};

export const people: Person[] = [
  {
    name: 'Maya Chen',
    handle: '@maya',
    status: 'online',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Jordan Blake',
    handle: '@jordan',
    status: 'online',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Aisha Rahman',
    handle: '@aisha',
    status: 'voice',
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Leo Park',
    handle: '@leopark',
    status: 'video',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Sofia Alvarez',
    handle: '@sofia',
    status: 'online',
    img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Noah Kim',
    handle: '@noah',
    status: 'offline',
    img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80',
  },
];

export const posts: Post[] = [
  {
    author: people[0],
    time: '12m',
    text: 'Sunset hike with the crew. The sky did that thing again.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    likes: 248,
    comments: 36,
    shares: 18,
  },
  {
    author: people[4],
    time: '41m',
    text: 'Dropping a new playlist for late-night study sessions. Headphones on.',
    image: null,
    likes: 92,
    comments: 14,
    shares: 7,
  },
  {
    author: people[1],
    time: '2h',
    text: 'Studio day. First take felt right.',
    image:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80',
    likes: 412,
    comments: 61,
    shares: 29,
  },
];
