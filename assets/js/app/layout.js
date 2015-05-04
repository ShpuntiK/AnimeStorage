var React = require('react');

var Layout = React.createClass({
    propTypes: {
        component: React.PropTypes.string.isRequired,
        initialScript: React.PropTypes.string
    },
    render: function () {
        return (
            <html>
            <head lang="en">
                <meta charSet="utf-8"/>
                <title></title>

                <link rel="stylesheet" href="/assets/vendor/bootstrap/bootstrap.css"/>
                <link rel="stylesheet" href="/assets/_/styles.css"/>

                <script dangerouslySetInnerHTML={{__html: this.props.initialScript}}></script>
            </head>
            <body>
            <div id="app" dangerouslySetInnerHTML={{__html: this.props.component}}/>

            <script src="/assets/_/scripts.js"></script>
            </body>
            </html>
        );
    }
});

module.exports = Layout;