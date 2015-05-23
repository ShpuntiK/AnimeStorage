import React, {PropTypes} from 'react';
var {FluxMixin} = require('fluxxor');
var DocumentTitle = require('react-document-title');
var {Form, validator, fieldTypes} = require('../components/common/form');

var LoginPage = React.createClass({
    mixins: [
        FluxMixin(React)
    ],
    propTypes: {
        flux: PropTypes.object.isRequired
    },
    render() {
        var formProps = {
            fields: {
                username: {
                    type: fieldTypes.text,
                    validator: validator.required
                },
                password: {
                    type: fieldTypes.password,
                    validator: validator.required
                }
            },
            submitBtn: 'Login',
            onSubmit: this.onSubmit
        };

        return (
            <DocumentTitle title="Login">
                <div className="fluid-container">
                    <div className="container">
                        <h2>Login</h2>

                        <div className="col-lg-4 col-lg-offset-4">
                            <Form {...formProps}/>
                        </div>
                    </div>
                </div>
            </DocumentTitle>
        );
    },
    onSubmit(data) {
        this.getFlux().actions.user.login(data);
    }
});

module.exports = LoginPage;