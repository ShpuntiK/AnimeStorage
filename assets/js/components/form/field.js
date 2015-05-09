import React, {PropTypes} from 'react';
import Utils from '../../utils';

var Field = React.createClass({
    propTypes: {
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        isDirty: PropTypes.bool.isRequired,
        validator: PropTypes.func,
        validationMessage: PropTypes.string
    },
    render() {
        var {
            name,
            type,
            validationMessage,
            isDirty,
            isValid
        } = this.props;
        var placeholder = Utils.capitalizeFirstLetter(name);
        var className = "form-group";

        if (!isValid && isDirty) {
            className += " has-error";
        }

        return (
            <div className={className}>
                <input type={type}
                       className="form-control"
                       placeholder={placeholder}
                       onChange={this.onChange}
                       onBlur={this.onBlur}/>
                <p className="help-block">{!isValid && isDirty && validationMessage}</p>
            </div>
        );
    },
    onChange(e) {
        var {onChange, name} = this.props;
        onChange(name, e.target.value);
    },
    onBlur(e) {
        var {onBlur, name} = this.props;
        onBlur(name, e.target.value);
    }
});

module.exports = Field;