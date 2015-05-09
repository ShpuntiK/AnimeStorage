import React, {PropTypes} from 'react';

var Layout = React.createClass({
    propTypes: {
        title: PropTypes.string.isRequired,
        component: PropTypes.string.isRequired,
        initialScript: PropTypes.string
    },
    render() {
        return (
            <html>
            <head lang="en">
                <meta charSet="utf-8"/>
                <title>{this.props.title}</title>

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