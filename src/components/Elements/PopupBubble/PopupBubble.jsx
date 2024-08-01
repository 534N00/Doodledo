import PropTypes from 'prop-types';

const PopupBubble = ({ child }) => {
    return (
        <div className="popup-bubble">
            {child}
        </div>
    );
};

PopupBubble.propTypes = {
    child: PropTypes.node
};

export default PopupBubble;