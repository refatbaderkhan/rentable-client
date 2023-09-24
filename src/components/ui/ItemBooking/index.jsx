import React, {useEffect, useState} from 'react'
import './style.css'
import Button from '../../base/Button'
import Calendar from 'react-calendar'
import {sendRequest} from '../../../core/config/request'
import {requestMethods} from '../../../core/enums/requestMethods'


const ItemBooking = ({foundItem, foundItemBookings}) => {


  const [calendarButton, setCalendarButton] = useState(false)
  const [value, onChange] = useState([]);
  const [total, setTotal] = useState("")
  const [breakdown, setBreakdown] = useState("")

  const calculateTotal = () => {
    if (value[1]) {
      const startDate = value[0]
      const endDate = value[1]
      const days = (endDate - startDate) / (1000 * 3600 * 24)
      const total = (foundItem.item_price * days).toFixed(2)
      setTotal(total)
      setBreakdown(`${foundItem.item_price} x ${days.toFixed(0)} days`)
    }
  }


  const tileDisabled = ({date, view}) => {
    if (view === 'month') {
      for (const booking of foundItem.item_bookings) {
        const startDate = new Date(booking.start_date)
        const endDate = new Date(booking.end_date)
        if (date >= startDate && date <= endDate) {
          return true
        }
      }
    }
  }

  const checkRange = (value) => {
  const startDate = value[0]
  const endDate = value[1]
    for (const booking of foundItemBookings) {
      const bookingStartDate = new Date(booking.start_date)
      const bookingEndDate = new Date(booking.end_date)
      if (bookingStartDate >= startDate && bookingEndDate <= endDate) {
        onChange([])
        return
      }
    }
    if (startDate > endDate) {
      onChange([])
    }
  }

  
  useEffect(() => {
    calculateTotal()
    checkRange(value)
  }, [value]);

  const bookItem = async () => {
    try {
      const response = await sendRequest({
        method: requestMethods.POST,
        route: `user/book/${foundItem._id}`,
      });

      console.log(response.message);
      onChange([])

      return response;
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <div className='booking-card'>
        <div className='booking-card-details'>
          <div className='booking-card-price'>
            ${foundItem.item_price}/day
          </div>
          <div className='booking-card-rating'>
          5.0(7)
          </div>
        </div>
        <div className='booking-date-buttons'>
          <Button
          text={value[0] ? `From: ${value[0].toLocaleDateString()}` : "Start Date" }
          style={"From"}
          onClick={() => setCalendarButton((prev) => !prev)}
          />
          <Button
          text={value[1] ? `To: ${value[1].toLocaleDateString()}` : "End Date" }
          style={"To"}
          onClick={() => setCalendarButton((prev) => !prev)}
          />
        </div>
        {calendarButton && (
        <div className='booking-calendar'>
          <div className='calendar-head'>
          </div>
          <div>
            <Calendar 
              onChange={onChange}
              value={value}
              selectRange={true}
              minDate={new Date()}
              tileDisabled={tileDisabled}
            />
          </div>
          <div className='clear-calendar'>
            <button                    
            onClick={() => onChange([])}
            > clear
            </button>
            <button
            onClick={() => setCalendarButton((prev) => !prev)}
            > close
            </button>
          </div>
        </div>
        )}
        <div className='booking-book-button'>
        <Button
        text="Book"
        style={"Book"}
        onClick={() => bookItem()}
        />
        </div>
        <div className='booking-breakdown'>
        {breakdown}
        </div>
        <div className='booking-card-line '>
        </div>
        <div className='booking-card-total'>
          <div className='booking-card-total-title'>
            Total 
          </div>
          <div className='booking-card-total-price'>
            ${total}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemBooking