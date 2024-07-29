import PropTypes from 'prop-types';

const ProfilePic = ({ src, alt, onClick, size }) => {
    const style = {
        width: size+'px',
        height: size+'px',
        borderRadius: '50%',
        cursor: 'pointer',
        objectFit: 'cover',
        margin: '0 15px'
    };

    return (
        <div className="profile-picture">
            <img src={src} alt={alt} onClick={onClick} style={style} />
        </div>
    );
};

ProfilePic.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.number
};

export default ProfilePic;