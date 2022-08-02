import React from 'react';
import BookingCalendar from 'react-booking-calendar';
import "../pages/rent.css"


const bookings = [
  new Date(2016, 7, 1),
  new Date(2016, 7, 2),
  new Date(2016, 7, 3),
  new Date(2016, 7, 9),
  new Date(2016, 7, 10),
  new Date(2016, 7, 11),
  new Date(2016, 7, 12),
];


const Rent = () => (



  <>
  <div id="bookingcalendar">

  <BookingCalendar id="booking" clickable={true} bookings={bookings} />
  </div>
  <div>
    <h2> {BookingCalendar.selected} </h2>
  </div>

  </>
  
);


export default Rent