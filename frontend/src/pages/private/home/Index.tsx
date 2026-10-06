import { useState } from "react";
import Header from "./components/Header";
import FriendsSidebar from "./components/Friends-sidebar";
import MessagePanel from "./components/Message-Panel";
import { friends } from "./mockData";

export default function Home() {
  const [selectedFriendId, setSelectedFriendId] = useState<string | null>(null);

  const selectedFriend =
    friends.find((friend) => friend.id === selectedFriendId) ?? null;

  return (
    <div className="home-page">
      <Header />

      <div className={`home-shell ${selectedFriend ? "has-panel" : ""}`}>
        <FriendsSidebar
          selectedFriendId={selectedFriendId}
          onSelectFriend={setSelectedFriendId}
        />

        {/* Feed is intentionally empty for now. Real feed content will
            render here in a future iteration without changing this layout. */}
        <main className="home-feed" aria-hidden="true" />

        {selectedFriend && (
          <MessagePanel
            friend={selectedFriend}
            onClose={() => setSelectedFriendId(null)}
          />
        )}
      </div>
    </div>
  );
}
