import React from 'react'
import { useReservationForm } from '../utils/forms'

const Reservations = () => {
  useReservationForm()
  return (
    <main className="reservations-page">
      <section className="page-hero">
        <h2>Reserve Table</h2>
      </section>
      <section className="form-container">
        <form id="reservationForm">
          <div className="form-group"><input type="text" name="name" placeholder="Name" required /></div>
          <div className="form-group"><input type="email" name="email" placeholder="Email" required /></div>
          <div className="form-group"><input type="tel" name="phone" placeholder="Phone" required /></div>
          <div className="form-group"><input type="date" name="date" required /></div>
          <div className="form-group">
            <select name="time" required>
              <option value="">Time</option><option>9AM</option><option>10AM</option><option>11AM</option>
            </select>
          </div>
          <div className="form-group">
            <select name="guests" required>
              <option value="">Guests</option><option>1</option><option>2</option><option>3</option>
            </select>
          </div>
          <div className="form-group"><textarea name="specialRequests" placeholder="Special Requests"></textarea></div>
          <button type="submit" className="submit-button">Reserve</button>
        </form>
      </section>
    </main>
  )
}
export default Reservations