import PropTypes from "prop-types";

import FriendListItem from "./FriendListItem";

export default function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline }) => {
        return (
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        );
      })}
    </ul>
  );
}
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
