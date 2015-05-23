import React, {PropTypes} from 'react';
import Field from './field';

var Form = React.createClass({
    propTypes: {
        fields: PropTypes.object.isRequired,
        submitBtn: PropTypes.string.isRequired,
        onSubmit: PropTypes.func.isRequired
    },
    getInitialState() {
        var fieldsProps = this.props.fields;

        return Object.keys(fieldsProps).reduce((obj, fieldName) => {
            let {type, validator} = fieldsProps[fieldName];

            obj[fieldName] = {
                name: fieldName,
                type,
                isDirty: false,
                validator: validator.validate,
                validationMessage: validator.message
            };

            return obj;
        }, {});
    },
    render() {
        var fields = Object.keys(this.props.fields).map(fieldName =>
                <Field key={fieldName}
                       onChange={this.onChange}
                       onBlur={this.onBlur} {...this.state[fieldName]}/>
        );

        return (
            <form className="form-horizontal"
                  onSubmit={this.onSubmit}>

                {fields}

                <div className="form-group form__actions">
                    <div className="">
                        <button type="submit"
                                className="btn btn-primary">{this.props.submitBtn}</button>
                    </div>
                </div>
            </form>
        );
    },
    onChange(name, value) {
        var field = this.state[name];

        this.setState({
            [name]: {
                ...field,
                isValid: this.state[name].validator(value),
                isDirty: true,
                value
            }
        });
    },
    onBlur(name, value) {
        var field = this.state[name];

        this.setState({
            [name]: {
                ...field,
                isValid: this.state[name].validator(value),
                isDirty: true
            }
        });
    },
    onSubmit(e) {
        e.preventDefault();

        var data = {};
        var formIsValid = Object.keys(this.props.fields).reduce((isValid, fieldName) => {
            let field = this.state[fieldName];
            let newField = {
                ...field,
                isValid: field.validator(field.value),
                isDirty: true
            };

            data[fieldName] = field.value;

            if (!newField.isValid) {
                this.setState({[fieldName]: newField});
                return false;
            }

            return true;
        }, true);

        if (formIsValid) {
            this.props.onSubmit(data);
        }
    }
});

module.exports = Form;