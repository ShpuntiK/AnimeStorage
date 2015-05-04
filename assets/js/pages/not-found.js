var React = require('react');

var Dashboard = React.createClass({
    render: function () {
        return (
            <div className="fluid-container">
                <div className="jumbotron">
                    <div className="container">
                        <h1>404</h1>

                        <p>Unfortunately, page not found...</p>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Dashboard;