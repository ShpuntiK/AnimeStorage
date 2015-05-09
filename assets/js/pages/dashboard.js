var React = require('react');
var DocumentTitle = require('react-document-title');
var List = require('../components/list');

var Dashboard = React.createClass({
    propTypes: {
        items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
    },
    render() {
        return (
            <DocumentTitle title="Dashboard">
                <div className="fluid-container">
                    <h2>Dashboard</h2>

                    <List {...this.props}/>
                </div>
            </DocumentTitle>
        );
    }
});

module.exports = Dashboard;