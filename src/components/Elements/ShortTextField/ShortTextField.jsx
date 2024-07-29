import PropTypes from 'prop-types';
import './ShortTextField.css';

const ShortTextField = ({ type="text", placeholder="", onChange }) => {
    return (
        <input
            className={type == "password" ? "input purple" : "input"}
            type={type}
            placeholder={placeholder}
            onChange={e => onChange(e.target.value)}
        />
    );
};

ShortTextField.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};

export default ShortTextField;