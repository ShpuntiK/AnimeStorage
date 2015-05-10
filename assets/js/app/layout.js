import React, {PropTypes} from 'react';

var Layout = React.createClass({
    propTypes: {
        environment: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        component: PropTypes.string.isRequired,
        initialScript: PropTypes.string
    },
    render() {
        var {
            environment,
            title,
            initialScript,
            component
        } = this.props;

        return (
            <html>
            <head lang="en">
                <meta charSet="utf-8"/>
                <title>{title}</title>

                <link rel="stylesheet" href="/assets/vendor/bootstrap/bootstrap.css"/>
                {environment !== 'development' && <link rel="stylesheet" href="/assets/_/styles.css"/>}

                <script dangerouslySetInnerHTML={{__html: initialScript}}></script>
            </head>
            <body>
            <div id="app" dangerouslySetInnerHTML={{__html: component}}/>

            {environment === 'development' ?
                <script src="http://localhost:3001/assets/_/bundle.js"></script> :
                <script src="/assets/_/scripts.js"></script>
            }
            </body>
            </html>
        );
    }
});

module.exports = Layout;