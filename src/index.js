var React = require('react');
var moment = require('moment');
var Calendar = require('./Calendar.js');

const today = new moment();

React.render(
    <Calendar
        format="MM-DD-YYYY"
        date={ today.format('MM-DD-YYYY') }
        placeholder="date"
        closeOnSelect
        openOnInputFocus
    />,
document.getElementById('app'));