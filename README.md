# React Input Calendar

React component for calendar widget.

## Installation

A [Patronage](http://patronage.org) fork of [react-input-calendar](https://github.com/Rudeg/react-input-calendar)


## API

#### props.format

Type: `String`

Default: 'MM-DD-YYYY'

Allowed Keys: All formats supported by [moment.js](http://momentjs.com/docs/#/parsing/string-format/)

Format of date, which display in input and set in date property.

#### props.date

Type: `String` or `Date`

Default: Current date

Set initial date value.

#### props.minView

Type: `Int` (from 0 to 2)

Default: 0 (DaysView)

Set minimal view. Values:

  0 - days

  1 - months

  2 - years.

#### props.computableFormat

Type: `String`

Default: 'MM-DD-YYYY'

Allowed Keys: All formats supported by [moment.js](http://momentjs.com/docs/#/parsing/string-format/)

Format of date for the onChange event. Default on the  date format (ISO 8601) to ease the save of data.

#### props.onChange

Type: `Function`

Default: null

Set an function that will be triggered whenever there is a change in the selected date. It will return the date in the `props.computableFormat` format.

#### props.closeOnSelect

Type: `Boolean`

Default: undefined

Define state when date picker would close once the user has clicked on a date.

#### props.openOnInputFocus

Type `Boolean`

Default: undefined

Setting this value to true makes the calendar widget open when the iput field is focused.

#### props.placeholder

Type: `String`

Default: undefined

Value to show in the input text box if no date is set.

## License

MIT