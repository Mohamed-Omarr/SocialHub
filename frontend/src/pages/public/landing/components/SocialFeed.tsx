import { posts } from '../../../../data.ts';

export default function SocialFeed() {
  return (
    <section className="feed-section">
      <div className="container">
        <div className="section-head">
          <h2>See what your world is sharing</h2>
          <p>Stories, photos, and conversations unfolding in real time.</p>
        </div>
        <div className="masonry">
          {posts.map((post) => (
            <article className="social-card" key={post.author.handle + post.time}>
              <header>
                <img src={post.author.img} alt="" />
                <div>
                  <strong>{post.author.name}</strong>
                  <span>
                    {post.author.handle} · {post.time}
                  </span>
                </div>
              </header>
              <p>{post.text}</p>
              {post.image ? <img className="post-image" src={post.image} alt="" /> : null}
              <footer>
                <button type="button">❤️ {post.likes}</button>
                <button type="button">💬 {post.comments}</button>
                <button type="button">↗ {post.shares}</button>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
