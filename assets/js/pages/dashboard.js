var React = require('react');
var List = require('../components/list');

var Dashboard = React.createClass({
    propTypes: {
        items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
    },
    render: function () {
        return (
            <div className="fluid-container">
                <div className="jumbotron">
                    <div className="container">
                        <h1>Dashboard</h1>

                        <p>Here you can see all animes</p>
                    </div>
                </div>

                <List {...this.props}/>
            </div>
        );
    }
});

module.exports = Dashboard;