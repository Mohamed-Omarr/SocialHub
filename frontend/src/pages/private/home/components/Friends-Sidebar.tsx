import { friends, getFriendStatusLabel } from "../mockData";

type FriendsSidebarProps = {
  selectedFriendId: string | null;
  onSelectFriend: (friendId: string) => void;
};

export default function FriendsSidebar({
  selectedFriendId,
  onSelectFriend,
}: FriendsSidebarProps) {
  return (
    <aside className="friends-sidebar" aria-label="Friends">
      <div className="friends-sidebar-header">
        <h2>Friends</h2>
        <span className="friends-count">{friends.length}</span>
      </div>

      <div className="friends-list">
        {friends.map((friend) => (
          <button
            key={friend.id}
            type="button"
            className={`friend-item ${selectedFriendId === friend.id ? "is-active" : ""}`}
            onClick={() => onSelectFriend(friend.id)}
            aria-pressed={selectedFriendId === friend.id}
          >
            <span className="friend-avatar">
              <img src={friend.avatar} alt="" />
              <i className={`status ${friend.status}`} />
            </span>

            <span className="friend-info">
              <span className="friend-name">{friend.name}</span>
              <span className="friend-status-text">
                {getFriendStatusLabel(friend.status)}
              </span>
            </span>

            {friend.unread > 0 && (
              <span className="friend-unread">{friend.unread}</span>
            )}
          </button>
        ))}
      </div>

      <button type="button" className="friends-view-all">
        View all friends
      </button>
    </aside>
  );
}
