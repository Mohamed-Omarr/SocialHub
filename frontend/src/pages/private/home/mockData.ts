export type FriendStatus = "online" | "voice" | "video" | "offline";

export type ChatMessage = {
  id: string;
  from: "me" | "them";
  text: string;
  time: string;
};

export type Friend = {
  id: string;
  name: string;
  avatar: string;
  status: FriendStatus;
  unread: number;
  messages: ChatMessage[];
};

export type Notification = {
  id: string;
  text: string;
  time: string;
  unread: boolean;
};

function statusLabel(status: FriendStatus): string {
  if (status === "online") return "Online";
  if (status === "voice") return "In a voice call";
  if (status === "video") return "In a video call";
  return "Offline";
}

export const friends: Friend[] = [
  {
    id: "maya",
    name: "Maya Chen",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    status: "online",
    unread: 2,
    messages: [
      {
        id: "1",
        from: "them",
        text: "Did you see the photos from the rooftop cafe?",
        time: "9:14 AM",
      },
      {
        id: "2",
        from: "me",
        text: "Not yet, send them over!",
        time: "9:16 AM",
      },
      {
        id: "3",
        from: "them",
        text: "Sending now, the matcha there was incredible",
        time: "9:17 AM",
      },
      {
        id: "4",
        from: "them",
        text: "You have to try it this weekend",
        time: "9:17 AM",
      },
    ],
  },
  {
    id: "jordan",
    name: "Jordan Lee",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    status: "voice",
    unread: 0,
    messages: [
      {
        id: "1",
        from: "them",
        text: "You coming to the call?",
        time: "Yesterday",
      },
      {
        id: "2",
        from: "me",
        text: "On my way, hopping on now.",
        time: "Yesterday",
      },
    ],
  },
  {
    id: "aisha",
    name: "Aisha Rahman",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80",
    status: "video",
    unread: 5,
    messages: [
      {
        id: "1",
        from: "them",
        text: "The lighting in your last post was perfect ✨",
        time: "2:40 PM",
      },
      {
        id: "2",
        from: "me",
        text: "Thank you! Golden hour did all the work.",
        time: "2:42 PM",
      },
      { id: "3", from: "them", text: "Teach me your ways", time: "2:43 PM" },
    ],
  },
  {
    id: "leo",
    name: "Leo Martins",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    status: "offline",
    unread: 0,
    messages: [
      {
        id: "1",
        from: "them",
        text: "Let\u2019s catch up soon",
        time: "Monday",
      },
      {
        id: "2",
        from: "me",
        text: "For sure, this week is packed but next week works",
        time: "Monday",
      },
    ],
  },
  {
    id: "sofia",
    name: "Sofia Alvarez",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=120&q=80",
    status: "online",
    unread: 0,
    messages: [
      {
        id: "1",
        from: "them",
        text: "Found a rooftop cafe with the best matcha in the city.",
        time: "11:02 AM",
      },
      {
        id: "2",
        from: "me",
        text: "Okay we\u2019re going this weekend, no debate",
        time: "11:05 AM",
      },
    ],
  },
];

export const notifications: Notification[] = [
  {
    id: "1",
    text: "Maya liked your story",
    time: "5 minutes ago",
    unread: true,
  },
  {
    id: "2",
    text: "Jordan started following you",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: "3",
    text: 'Aisha commented on your photo: "This is stunning!"',
    time: "3 hours ago",
    unread: true,
  },
  {
    id: "4",
    text: "Leo shared a moment with you",
    time: "Yesterday",
    unread: false,
  },
];

export function getFriendStatusLabel(status: FriendStatus): string {
  return statusLabel(status);
}
