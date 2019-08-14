import React from 'react';
import DayPicker from 'react-day-picker';	//for date selection
import DayPickerInput from 'react-day-picker/DayPickerInput';	//for date selection
import 'react-day-picker/lib/style.css';

export default class DatePicker extends React.Component{
	constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }

  handleDayClick(day, { selected }) {
    if (selected) {
      // Unselect the day if already selected
      this.setState({ selectedDay: undefined });
      return;
    }
    this.setState({ selectedDay: day });
  }

  render() {
    return (
      <div>
        <DayPicker
          onDayClick={this.handleDayClick}
          selectedDays={this.state.selectedDay}
        />
      </div>
    );
  }
}