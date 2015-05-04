var React = require('react');

var Item = React.createClass({
    render: function () {
        return (
            <div className="list__item list-item panel panel-default">
                <div className="panel-heading">
                    <span>{this.props.title} </span>
                    <span className="label label-info">{this.props.community_rating.toFixed(1)}</span>
                </div>
                <div className="panel-body">
                    <div className="col-sm-6">
                        <img className="list-item__image img-responsive" src={this.props.cover_image} alt="poster"/>
                    </div>
                    <div className="col-sm-6">
                        <p className="list-item__description">{this.props.synopsis}</p>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Item;