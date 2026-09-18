function IconHeart() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M12 21s-7.2-4.4-9.3-8.2C1 9.6 2.6 6 6.2 6c2 0 3.3 1 3.8 1.7C10.5 7 11.8 6 13.8 6c3.6 0 5.2 3.6 3.5 6.8C19.2 16.6 12 21 12 21z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="orb orb-a" aria-hidden="true" />
      <div className="orb orb-b" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="live-dot" aria-hidden="true" />
            Live with friends, everywhere
          </p>
          <h1>Connect. Share. Talk.</h1>
          <p className="lede">
            A place to discover what matters, share your world, and stay connected with the people
            who matter to you.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary btn-lg" href="#get-started">
              Get Started
            </a>
            <a className="btn btn-secondary btn-lg" href="#preview">
              Explore SocialHub
            </a>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack" aria-hidden="true">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=80&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                alt=""
              />
            </div>
            <p>
              <strong>2.4M</strong> people already sharing moments
            </p>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="float-chip chip-notify">
            <span className="chip-dot" />
            Maya liked your story
          </div>
          <div className="float-chip chip-voice">
            <span className="pulse-ring" />
            Voice with Aisha
          </div>
          <div className="product-stack">
            <article className="mini-post">
              <header>
                <img
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=80&q=80"
                  alt=""
                />
                <div>
                  <strong>Sofia Alvarez</strong>
                  <span>just now · Discover</span>
                </div>
              </header>
              <p>Found a rooftop cafe with the best matcha in the city.</p>
              <img
                className="mini-photo"
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=640&q=80"
                alt=""
              />
              <footer>
                <span>
                  <IconHeart /> 128
                </span>
                <span>24 comments</span>
                <span>Share</span>
              </footer>
            </article>

            <aside className="mini-chat">
              <p className="chat-title">Weekend crew</p>
              <div className="bubble them">You coming to the call?</div>
              <div className="bubble me">On my way — hopping on video.</div>
              <div className="chat-meta">Jordan is typing…</div>
            </aside>

            <div className="mini-call">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=280&q=80"
                alt=""
              />
              <div className="call-badge">
                <span className="live-dot" />
                Leo · Video
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
