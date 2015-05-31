var React = require('react');
var Item = require('./item');

var List = React.createClass({
    render() {
        //var items = this.props.items.map(function (item) {
        //    return <Item key={item.id} {...item}/>;
        //});
        var items = this.props.items.map(item => <div key={item.id} {...item}>{item.title}</div>);

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