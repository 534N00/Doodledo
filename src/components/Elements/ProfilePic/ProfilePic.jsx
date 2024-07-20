import PropTypes from 'prop-types';

const ProfilePic = ({ imageUrl }) => {
    return (
        <div className="profile-picture">
            <img src={imageUrl} alt="Profile" />
        </div>
    );
};

ProfilePic.propTypes = {
    imageUrl: PropTypes.string
  };

export default ProfilePic;