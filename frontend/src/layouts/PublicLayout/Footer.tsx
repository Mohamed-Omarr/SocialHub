import Logo from '../../pages/public/landing/components/Logo.tsx';

export default function Footer() {
  return (
    <footer className="site-footer" id="about">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>
            SocialHub is a colorful home for discovery, friendship, and conversation — from posts to
            voice and video.
          </p>
        </div>
        <div>
          <h3>Product</h3>
          <a href="#preview">Dashboard</a>
          <a href="#get-started">Get Started</a>
          <a href="#login">Log In</a>
        </div>
        <div>
          <h3>Explore</h3>
          <a href="#features">Features</a>
          <a href="#community">Community</a>
          <a href="#about">About</a>
        </div>
        <div>
          <h3>Legal</h3>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
        <div className="footer-social">
          <h3>Follow</h3>
          <div className="social-row">
            <a href="#social" aria-label="Instagram">
              IG
            </a>
            <a href="#social" aria-label="X">
              X
            </a>
            <a href="#social" aria-label="YouTube">
              YT
            </a>
          </div>
        </div>
      </div>
      <div className="container copyright">
        <p>© {new Date().getFullYear()} SocialHub. Stay close.</p>
      </div>
    </footer>
  );
}
