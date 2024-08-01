import PropTypes from 'prop-types';
import './ShortTextField.css';

// One line text input field
const ShortTextField = ({ type="text", placeholder="", onChange }) => {
    return (
        <input
            className={type == "password" ? "input purple" : placeholder == "Screen Name" ? "input gold" : "input" }
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

ShortTextField.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};

export default ShortTextField;