var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({
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

                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="app">Dashboard</Link>
                            </li>
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="profile">Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});

module.exports = Header;