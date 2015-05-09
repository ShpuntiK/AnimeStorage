var React = require('react');
var DocumentTitle = require('react-document-title');
var {Form, validator, fieldTypes} = require('../components/form');

var LoginPage = React.createClass({
    render() {
        var formProps = {
            fields: {
                email: {
                    type: fieldTypes.email,
                    validator: validator.email
                },
                password: {
                    type: fieldTypes.password,
                    validator: validator.minLength(8)
                }
            },
            submitBtn: 'Login'
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
    }
});

module.exports = LoginPage;