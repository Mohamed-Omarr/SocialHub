import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { notifications } from "../mockData";

function IconSearch() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.2-3.2" />
    </svg>
  );
}

function IconBell() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 4 1.5 5.5 2 6H4c.5-.5 2-2 2-6Z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </svg>
  );
}

export default function Header() {
  const [isNotifOpen, setNotifOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (notifRef.current && !notifRef.current.contains(target)) {
        setNotifOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(target)) {
        setProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <header className="home-header">
      <div className="home-header-inner">
        <Link className="logo" to="/home" aria-label="SocialHub home">
          <span className="logo-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="32" height="32">
              <rect
                width="32"
                height="32"
                rx="10"
                fill="url(#home-logo-grad)"
              />
              <path
                d="M9 16.5c0-3.6 2.9-6.5 6.5-6.5 2.1 0 4 .99 5.2 2.55A5.5 5.5 0 0 1 23 22.2c-1.3.5-2.8.3-4-.5-.9 1.6-2.6 2.6-4.5 2.6C11.9 24.3 9 21.4 9 17.8v-1.3z"
                fill="white"
                opacity=".95"
              />
              <circle cx="13.2" cy="16.2" r="1.15" fill="#6D5EFC" />
              <circle cx="16.5" cy="16.2" r="1.15" fill="#6D5EFC" />
              <circle cx="19.7" cy="16.2" r="1.15" fill="#6D5EFC" />
              <defs>
                <linearGradient
                  id="home-logo-grad"
                  x1="4"
                  y1="2"
                  x2="30"
                  y2="30"
                >
                  <stop stopColor="#7C5CFF" />
                  <stop offset=".5" stopColor="#FF5CA8" />
                  <stop offset="1" stopColor="#22D3EE" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="logo-word">SocialHub</span>
        </Link>

        <div className="home-search">
          <IconSearch />
          <input
            type="search"
            placeholder="Search people, posts, and more"
            aria-label="Search"
          />
        </div>

        <div className="home-header-actions">
          <div className="dropdown" ref={notifRef}>
            <button
              type="button"
              className="icon-btn"
              aria-label="Notifications"
              aria-expanded={isNotifOpen}
              onClick={() => {
                setNotifOpen((v) => !v);
                setProfileOpen(false);
              }}
            >
              <IconBell />
              {unreadCount > 0 && (
                <span className="badge-dot" aria-hidden="true" />
              )}
            </button>

            {isNotifOpen && (
              <div className="dropdown-menu" role="menu">
                <p className="dropdown-title">Notifications</p>
                {notifications.map((notif) => (
                  <div
                    className={`notif-item ${notif.unread ? "is-unread" : ""}`}
                    key={notif.id}
                  >
                    <span className="notif-dot" aria-hidden="true" />
                    <span className="notif-text">
                      {notif.text}
                      <span className="notif-time">{notif.time}</span>
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="dropdown" ref={profileRef}>
            <button
              type="button"
              className="avatar-btn"
              aria-label="Your profile"
              aria-expanded={isProfileOpen}
              onClick={() => {
                setProfileOpen((v) => !v);
                setNotifOpen(false);
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=120&q=80"
                alt=""
              />
            </button>

            {isProfileOpen && (
              <div className="dropdown-menu" role="menu">
                <p className="dropdown-title">Sofia Alvarez</p>
                <button type="button" className="dropdown-item">
                  Profile
                </button>
                <button type="button" className="dropdown-item">
                  Settings
                </button>
                <div className="dropdown-divider" />
                <button type="button" className="dropdown-item is-danger">
                  Log out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
