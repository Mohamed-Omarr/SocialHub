import type { ReactNode } from 'react';

type Feature = {
  title: string;
  text: string;
  accent: 'pink' | 'violet' | 'cyan' | 'green' | 'amber' | 'rose';
  icon: ReactNode;
};

const features: Feature[] = [
  {
    title: 'Share',
    text: 'Post photos, ideas, updates, and moments.',
    accent: 'pink',
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <circle cx="8.5" cy="10" r="1.5" />
        <path d="M21 16l-5.5-5.5L7 19" />
      </svg>
    ),
  },
  {
    title: 'Connect',
    text: 'Build friendships and connect with people.',
    accent: 'violet',
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="8" cy="9" r="3" />
        <circle cx="16" cy="9" r="3" />
        <path d="M3 19c.6-3 2.7-5 5-5s4.4 2 5 5M11 19c.6-3 2.7-5 5-5s4.4 2 5 5" />
      </svg>
    ),
  },
  {
    title: 'Chat',
    text: 'Have private conversations with friends.',
    accent: 'cyan',
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M5 18l-1.5 3 4-1.2A8.5 8.5 0 1 0 5 18z" />
      </svg>
    ),
  },
  {
    title: 'Voice & Video',
    text: 'Talk face-to-face with voice and video calls.',
    accent: 'green',
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="6" width="12" height="12" rx="3" />
        <path d="M15 10.5l5-3v9l-5-3v-3z" />
      </svg>
    ),
  },
  {
    title: 'Discover',
    text: 'Explore interesting content and communities.',
    accent: 'amber',
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3.2-3.2" />
      </svg>
    ),
  },
  {
    title: 'React & Engage',
    text: 'Comment, react, and share content.',
    accent: 'rose',
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 20s-7-4.2-9-8.1C1.4 8.6 3.2 5.5 6.6 5.5c1.9 0 3.2 1 3.8 1.8.6-.8 1.9-1.8 3.8-1.8 3.4 0 5.2 3.1 3.6 6.4C19 15.8 12 20 12 20z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-head">
          <h2>Everything you need to stay connected</h2>
          <p>Sharing, friendship, and conversation — designed to feel effortless and alive.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className={`feature-card accent-${feature.accent}`} key={feature.title}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
