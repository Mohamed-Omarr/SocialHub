import { useEffect, useState } from 'react';
import Logo from '../../pages/public/landing/components/Logo.tsx';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#features', label: 'Features' },
  { href: '#community', label: 'Community' },
  { href: '#about', label: 'About' },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <Logo />
        <nav className="nav-desktop" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="btn btn-ghost" href="#login">
            Log In
          </a>
          <a className="btn btn-primary" href="#get-started">
            Get Started
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span className={`burger ${open ? 'is-open' : ''}`} aria-hidden="true" />
          </button>
        </div>
      </div>
      <div id="mobile-nav" className={`mobile-nav ${open ? 'is-open' : ''}`} hidden={!open}>
        <nav aria-label="Mobile">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="btn btn-ghost" href="#login" onClick={() => setOpen(false)}>
            Log In
          </a>
          <a className="btn btn-primary" href="#get-started" onClick={() => setOpen(false)}>
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
