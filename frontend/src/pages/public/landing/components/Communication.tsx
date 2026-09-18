import { people } from '../../../../data.ts';

export default function Communication() {
  return (
    <section className="comm-section" id="community">
      <div className="container comm-layout">
        <div className="comm-copy">
          <p className="eyebrow">Communication</p>
          <h2>More than messages</h2>
          <p className="lede">
            Move naturally from a conversation to a voice call or video call whenever you want.
          </p>
          <ul className="comm-indicators">
            <li>
              <i className="status online" /> Online status
            </li>
            <li>
              <i className="status voice" /> Voice call
            </li>
            <li>
              <i className="status video" /> Video call
            </li>
            <li>
              <span className="mini-ico msg" /> Messages
            </li>
            <li>
              <span className="mini-ico share" /> Shared content
            </li>
          </ul>
        </div>

        <div className="comm-stage" aria-hidden="true">
          <div className="video-stage">
            <div className="video-grid">
              {people.slice(0, 4).map((person, i) => (
                <figure className={i === 0 ? 'is-speaking' : ''} key={person.handle}>
                  <img src={person.img} alt="" />
                  <figcaption>
                    {person.name.split(' ')[0]}
                    {i === 0 ? ' · talking' : ''}
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="call-bar">
              <span className="pill mute">Mute</span>
              <span className="pill cam">Camera</span>
              <span className="pill end">End</span>
            </div>
          </div>
          <aside className="stage-chat">
            <p className="chat-title">Room chat</p>
            <div className="bubble them">The lighting is perfect ✨</div>
            <div className="bubble me">Sending the recap after.</div>
            <div className="shared-card">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=200&q=80"
                alt=""
              />
              <span>Shared a moment</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
