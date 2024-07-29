import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ text="", size='normal', id='', onClick }) => {
    return (
        <>
            {size == 'wide' ? (
                <button onClick={onClick} id={id} className="buttonComponent buttonWide">{text}</button>
            ) : (
                <button onClick={onClick} id={id} className="buttonComponent buttonNormal">{text}</button>
            )}
        </>
        
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    id: PropTypes.string,
    text: PropTypes.string,
    size: PropTypes.string
};

export default Button;