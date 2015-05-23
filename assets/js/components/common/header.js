import React, {PropTypes} from 'react';
var {State, Link} = require('react-router');
var {FluxMixin, StoreWatchMixin} = require('fluxxor');

var Tab = React.createClass({
    mixins: [State],
    propTypes: {
        to: PropTypes.string.isRequired,
        children: PropTypes.string.isRequired,
    },
    render() {
        var className = this.isActive(this.props.to) ? 'active' : '';

        return (
            <li className={className}>
                <Link {...this.props}/>
            </li>
        );
    }
});

var Header = React.createClass({
    mixins: [
        FluxMixin(React),
        StoreWatchMixin('user')
    ],
    propTypes: {
        flux: PropTypes.object.isRequired
    },
    getStateFromFlux() {
        var store = this.getFlux().store('user');

        return {user: store.user};
    },
    render() {
        return (
            <nav className="header navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button"
                                className="navbar-toggle collapsed"
                                data-toggle="collapse"
                                data-target="#navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand"
                              to="app">Anime storage</Link>
                    </div>
                    {this.state.user ? this.getAuthLinks() : this.getNotAuthLinks()}
                </div>
            </nav>
        );
    },
    getAuthLinks() {
        return (
            <div className="collapse navbar-collapse" id="navbar">
                <ul className="nav navbar-nav">
                    <Tab to="app">Dashboard</Tab>
                    <Tab to="profile">Profile</Tab>
                </ul>

                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="#">Logout ({this.state.user.username})</a>
                    </li>
                </ul>
            </div>
        );
    },
    getNotAuthLinks() {
        return (
            <div className="collapse navbar-collapse" id="navbar">
                <ul className="nav navbar-nav navbar-right">
                    <Tab to="login">Login</Tab>
                    <Tab to="signup">Sign up</Tab>
                </ul>
            </div>
        );
    }
});

module.exports = Header;