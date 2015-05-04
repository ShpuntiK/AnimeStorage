var React = require('react');
var Item = require('./item');

var List = React.createClass({
    render: function () {
        var items = this.props.items.map(function (item) {
            return <Item key={item.id} {...item}/>;
        });

        return (
            <div className="fluid-container">
                <div className="list">
                    {items.length ? items : 'There are no items...'}
                </div>
            </div>
        );
    }
});

module.exports = List;