import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

const CalendarComponent = () => {
  const [range, setRange] = useState({ start: null, end: null });

  const handleDateSelect = (selectInfo) => {
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    setRange({
      start: selectInfo.startStr,
      end: selectInfo.endStr,
    });

    // Here you can call your API to fetch available rooms based on the selected dates
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        select={handleDateSelect}
      />
      {range.start && range.end && (
        <div>
          <p>Selected range:</p>
          <p>Start: {range.start}</p>
          <p>End: {range.end}</p>
          {/* Render your room availability and booking options here */}
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;
