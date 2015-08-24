var React = require('react');
var moment = require('moment-range');

var Cell = React.createClass({

    propTypes: {
        value: React.PropTypes.string,
        classes: React.PropTypes.string
    },

    render: function () {

        var cssClasses = this.props.classes + ' cell';

        return (
            <div className={ cssClasses }>{ this.props.value }</div>
        );
    }

});

module.exports = Cell;