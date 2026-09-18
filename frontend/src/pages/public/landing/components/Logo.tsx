import { useId } from 'react';

type LogoProps = {
  compact?: boolean;
};

export default function Logo({ compact = false }: LogoProps) {
  const gradId = useId().replaceAll(':', '');

  return (
    <a className="logo" href="#home" aria-label="SocialHub home">
      <span className="logo-mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" width="32" height="32">
          <rect width="32" height="32" rx="10" fill={`url(#${gradId})`} />
          <path
            d="M9 16.5c0-3.6 2.9-6.5 6.5-6.5 2.1 0 4 .99 5.2 2.55A5.5 5.5 0 0 1 23 22.2c-1.3.5-2.8.3-4-.5-.9 1.6-2.6 2.6-4.5 2.6C11.9 24.3 9 21.4 9 17.8v-1.3z"
            fill="white"
            opacity=".95"
          />
          <circle cx="13.2" cy="16.2" r="1.15" fill="#6D5EFC" />
          <circle cx="16.5" cy="16.2" r="1.15" fill="#6D5EFC" />
          <circle cx="19.7" cy="16.2" r="1.15" fill="#6D5EFC" />
          <defs>
            <linearGradient id={gradId} x1="4" y1="2" x2="30" y2="30">
              <stop stopColor="#7C5CFF" />
              <stop offset=".5" stopColor="#FF5CA8" />
              <stop offset="1" stopColor="#22D3EE" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      {!compact && <span className="logo-word">SocialHub</span>}
    </a>
  );
}
