import { people, posts } from '../../../../data.ts';
import type { Presence } from '../../../../data.ts';

const navItems = [
  { label: 'Home', active: true },
  { label: 'Discover', active: false },
  { label: 'Friends', active: false },
  { label: 'Messages', active: false },
  { label: 'Calls', active: false },
  { label: 'Notifications', active: false },
] as const;

export default function DashboardPreview() {
  const featured = posts[0];

  return (
    <section className="preview-section" id="preview">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Product preview</p>
          <h2>Your world, in one colorful hub</h2>
          <p>
            A feed that feels alive, friends who are actually there, and conversation that can jump
            into voice or video in a tap.
          </p>
        </div>

        <div
          className="dashboard"
          aria-label="SocialHub dashboard preview with feed, friends, and chat"
        >
          <aside className="dash-side">
            <p className="dash-brand">SocialHub</p>
            <ul>
              {navItems.map((item) => (
                <li key={item.label} className={item.active ? 'is-active' : ''}>
                  <span className={`nav-ico ico-${item.label.toLowerCase()}`} />
                  {item.label}
                </li>
              ))}
            </ul>
            <div className="side-card">
              <p>Start a room</p>
              <button type="button">New hangout</button>
            </div>
          </aside>

          <div className="dash-feed">
            <div className="composer">
              <img src={people[1].img} alt="" />
              <p>Share a moment with your circle…</p>
              <span>Post</span>
            </div>
            <article className="feed-card">
              <header>
                <img src={featured.author.img} alt="" />
                <div>
                  <strong>{featured.author.name}</strong>
                  <span>
                    {featured.author.handle} · {featured.time}
                  </span>
                </div>
              </header>
              <p>{featured.text}</p>
              {featured.image ? <img className="feed-photo" src={featured.image} alt="" /> : null}
              <div className="reactions">
                <span>🔥 {featured.likes}</span>
                <span>💬 {featured.comments} comments</span>
                <span>↗ Share</span>
              </div>
            </article>
          </div>

          <div className="dash-right">
            <div className="panel">
              <h3>Online friends</h3>
              {people.map((person) => (
                <div className="friend-row" key={person.handle}>
                  <div className="avatar-wrap">
                    <img src={person.img} alt="" />
                    <i className={`status ${person.status}`} />
                  </div>
                  <div>
                    <strong>{person.name}</strong>
                    <span>{statusLabel(person.status)}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="panel chat-panel">
              <h3>Chat</h3>
              <p className="bubble them">Did you see Maya’s photos?</p>
              <p className="bubble me">Already saved three of them.</p>
              <p className="bubble them">Hopping on a call in 5.</p>
              <div className="chat-input">Say something…</div>
            </div>
            <div className="notify-pill">
              <span className="chip-dot" />3 new notifications
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function statusLabel(status: Presence) {
  if (status === 'online') return 'Online';
  if (status === 'voice') return 'In a voice call';
  if (status === 'video') return 'In a video call';
  return 'Away';
}
