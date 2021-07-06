import Profile from "./profile";

export default function UserProfile({ user }) {
  return (
    <div>
      <Profile
        key={user}
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}
