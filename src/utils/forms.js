import { useEffect } from 'react';

const BACKEND_URL = 'http://localhost:8000'; // Change if your PHP server uses different port

export const useFeedbackForm = () => {
  useEffect(() => {
    const form = document.getElementById('feedbackForm');
    if (!form) return;

    const handleSubmit = async (e) => {
      e.preventDefault();
      const button = form.querySelector('.submit-button');
      const originalText = button.textContent;
      button.disabled = true;
      button.textContent = 'Sending...';

      const data = {
        name: form.name.value,
        email: form.email.value,
        rating: form.rating.value,
        message: form.message.value,
      };

      try {
        const res = await fetch(`${BACKEND_URL}/feedback.php`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        const result = await res.json();
        if (result.status === 'success') {
          alert('Thank you for your feedback! ☕');
          form.reset();
        } else {
          alert('Error: ' + result.message);
        }
      } catch (err) {
        alert('Submission failed. Please try again.');
        console.error(err);
      } finally {
        button.disabled = false;
        button.textContent = originalText;
      }
    };

    form.addEventListener('submit', handleSubmit);
    return () => form.removeEventListener('submit', handleSubmit);
  }, []);
};

export const useContactForm = () => {
  useEffect(() => {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const handleSubmit = async (e) => {
      e.preventDefault();
      const button = form.querySelector('.submit-button');
      const originalText = button.textContent;
      button.disabled = true;
      button.textContent = 'Sending...';

      const data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      };

      try {
        const res = await fetch(`${BACKEND_URL}/contact.php`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        const result = await res.json();
        if (result.status === 'success') {
          alert('Message sent successfully! We\'ll reply soon. 📧');
          form.reset();
        } else {
          alert('Error: ' + result.message);
        }
      } catch (err) {
        alert('Submission failed. Please try again.');
        console.error(err);
      } finally {
        button.disabled = false;
        button.textContent = originalText;
      }
    };

    form.addEventListener('submit', handleSubmit);
    return () => form.removeEventListener('submit', handleSubmit);
  }, []);
};

export const useReservationForm = () => {
  useEffect(() => {
    const form = document.getElementById('reservationForm');
    if (!form) return;

    const handleSubmit = async (e) => {
      e.preventDefault();
      const button = form.querySelector('.submit-button');
      const originalText = button.textContent;
      button.disabled = true;
      button.textContent = 'Confirming...';

      const data = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        date: form.date.value,
        time: form.time.value,
        guests: form.guests.value,
        specialRequests: form.specialRequests.value,
      };

      try {
        const res = await fetch(`${BACKEND_URL}/reservation.php`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        const result = await res.json();
        if (result.status === 'success') {
          alert(`Reservation confirmed! ID: ${result.reservation_id}\nWe'll contact you to confirm. ☕`);
          form.reset();
        } else {
          alert('Error: ' + result.message);
        }
      } catch (err) {
        alert('Reservation failed. Please try again.');
        console.error(err);
      } finally {
        button.disabled = false;
        button.textContent = originalText;
      }
    };

    form.addEventListener('submit', handleSubmit);
    return () => form.removeEventListener('submit', handleSubmit);
  }, []);
};