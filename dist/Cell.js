var React = require('react');
var moment = require('moment-range');

var Cell = React.createClass({displayName: "Cell",

    propTypes: {
        value: React.PropTypes.string,
        classes: React.PropTypes.string
    },

    render: function () {

        var cssClasses = this.props.classes + ' cell';

        return (
            React.createElement("div", {className:  cssClasses },  this.props.value)
        );
    }

});

module.exports = Cell;