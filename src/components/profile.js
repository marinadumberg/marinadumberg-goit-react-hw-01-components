import PropTypes from 'prop-types';
const Profile = ({ name, tag, location, avatar, stats }) => {

    return (
        <div class="profile">
            <div class="description">
                <img
                    src={avatar}
                    alt="Аватар пользователя"
                    class="avatar"
                />
                <p class="name">{name}</p>
                <p class="tag">{tag}</p>
                <p class="location">{location}</p>
            </div>

            {/* <ul class="stats">
        <li>
          <span class="label">{props.stats}</span>
          <span class="quantity">{props.stats}</span>
        </li>
        <li>
          <span class="label">{props.stats}</span>
          <span class="quantity">{props.stats}</span>
        </li>
        <li>
          <span class="label">{props.stats}</span>
          <span class="quantity">{props.stats}</span>
        </li>
      </ul> */}
        </div>);
};


Profile.ProptTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.string,
};

export default Profile;