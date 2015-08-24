var React = require('react');
var moment = require('moment');
var Calendar = require('./Calendar.js');

const today = new moment();

React.render(
    React.createElement(Calendar, {
        format: "MM-DD-YYYY", 
        date:  today.format('MM-DD-YYYY'), 
        placeholder: "date", 
        closeOnSelect: true, 
        openOnInputFocus: true}
    ),
document.getElementById('app'));