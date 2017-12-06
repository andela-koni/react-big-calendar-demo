import React, { Component } from 'react';
import './App.css';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import style from 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class App extends Component {
  constructor(props) {
    super(props);
    this.onSelectSlot = this.onSelectSlot.bind(this)
    this.state = {
      events: [] 
    }
  }

  eventStyleGetter(event, start, end, isSelected) {
    var style = {
        backgroundColor: "#02ae7c",
        border: "1px solid white",
        borderRadius: "2px",
        color: "white",
        display: "block",
        textTransform: "capitalize"
    };

    return {
        style: style
    };
  }


  onSelectSlot(slotinfo) {
    const { start, end, action } = slotinfo;
    if (action === "select") {
      const event = {
        start: start,
        end: end
      };

      this.setState(state => {
        const { events } = state
        return {
          events: [...events, event]
        }
      });
    }
  }

  render() {
    const formats = {
      dayFormat: "dddd"
    }

    return (
      <div className="clearfix">
        <div style={{ height: "400px" }}>
          <BigCalendar
            selectable
            toolbar={false}
            formats={formats}
            style={style}
            events={this.state.events}
            scrollToTime={new Date(2016, 10, 6, 9, 0, 0)}
            eventPropGetter={(this.eventStyleGetter)}
            views={["week"]}
            defaultView="week"
            defaultDate={new Date()}
            onSelectSlot={this.onSelectSlot}
          >
          </BigCalendar>
        </div>
      </div>
    );
  }
}

export default App;
