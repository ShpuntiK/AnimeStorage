import React, {PropTypes} from 'react';
var {FluxMixin} = require('fluxxor');
var DocumentTitle = require('react-document-title');
var {Form, validator, fieldTypes} = require('../components/common/form');

var SignUpPage = React.createClass({
    mixins: [
        FluxMixin(React)
    ],
    propTypes: {
        flux: PropTypes.object.isRequired
    },
    //componentDidMount() {
    //    if (!this.props.initialData) {
    //        this.getFlux().actions.anime.loadDashboard();
    //    }
    //},
    render() {
        var formProps = {
            fields: {
                username: {
                    type: fieldTypes.text,
                    validator: validator.required
                },
                password: {
                    type: fieldTypes.password,
                    validator: validator.minLength(8)
                }
            },
            submitBtn: 'Sign up',
            onSubmit: this.onSubmit
        };

        return (
            <DocumentTitle title="Sign up">
                <div className="fluid-container">
                    <div className="container">
                        <h2>Sign up</h2>

                        <div className="col-lg-4 col-lg-offset-4">
                            <Form {...formProps}/>
                        </div>
                    </div>
                </div>
            </DocumentTitle>
        );
    },
    onSubmit(data) {
        this.getFlux().actions.user.signUp(data);
    }
});

module.exports = SignUpPage;