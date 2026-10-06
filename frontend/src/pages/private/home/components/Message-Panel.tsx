import { useState, type FormEvent } from "react";
import type { Friend } from "../mockData";
import { getFriendStatusLabel } from "../mockData";

function IconBack() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function IconSend() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 11.5 20.5 4l-6.7 17.5-2.9-7.4L3 11.5Z" />
    </svg>
  );
}

type MessagePanelProps = {
  friend: Friend;
  onClose: () => void;
};

export default function MessagePanel({ friend, onClose }: MessagePanelProps) {
  const [draft, setDraft] = useState("");

  function handleSend(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!draft.trim()) return;
    // Sending is not wired up yet — mock data only for now.
    setDraft("");
  }

  return (
    <aside
      className="message-panel"
      aria-label={`Conversation with ${friend.name}`}
    >
      <div className="message-panel-header">
        <button
          type="button"
          className="icon-btn message-panel-back"
          onClick={onClose}
          aria-label="Back"
        >
          <IconBack />
        </button>

        <span className="message-panel-avatar">
          <img src={friend.avatar} alt="" />
          <i className={`status ${friend.status}`} />
        </span>

        <div className="message-panel-user">
          <strong>{friend.name}</strong>
          <span>{getFriendStatusLabel(friend.status)}</span>
        </div>

        <button
          type="button"
          className="icon-btn message-panel-close"
          onClick={onClose}
          aria-label="Close conversation"
        >
          <IconClose />
        </button>
      </div>

      <div className="message-thread">
        {friend.messages.map((message) => (
          <div key={message.id} className="message-bubble-wrap">
            <div className={`bubble ${message.from === "me" ? "me" : "them"}`}>
              {message.text}
            </div>
            <span
              className={`message-time ${message.from === "me" ? "is-me" : ""}`}
            >
              {message.time}
            </span>
          </div>
        ))}
      </div>

      <form className="message-panel-input" onSubmit={handleSend}>
        <input
          type="text"
          className="message-input-field"
          placeholder={`Message ${friend.name.split(" ")[0]}\u2026`}
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          aria-label="Message input"
        />
        <button
          type="submit"
          className="message-send-btn"
          disabled={!draft.trim()}
          aria-label="Send message"
        >
          <IconSend />
        </button>
      </form>
    </aside>
  );
}
