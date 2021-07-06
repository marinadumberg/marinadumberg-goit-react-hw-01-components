import PropTypes from "prop-types";
export default function Profile(props) {
  const { name, tag, location, avatar, stats } = props;

  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="Аватар пользователя" class="avatar" />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul cclassName="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span cclassName="quantity">{stats.wievs}</span>
        </li>
        <li>
          <span classNames="label">Likes</span>
          <span cclassName="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.ProptTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.string,
};
