import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setLoading(true);

      try {
        const response = await fetch('http://localhost:5000/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        setLoading(false);

        if (response.ok) {
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
        } else {
          setSubmitted(false);
          alert(data.error || 'Failed to send message');
        }
      } catch (error) {
        setLoading(false);
        setSubmitted(false);
        alert('Error sending message. Please try again later.');
      }
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  return (
    <>
      {/* Animated Background Circles */}
      <div className="animated-bg">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>

      {/* Contact Form Box */}
      <div className="contact-us-box">
        <h2>Contact Us</h2>

        <p><strong>GST Number (GSTIN):</strong> 24AUUPS1763L1ZV</p>
        <p>Email: <a href="mailto:info@sonirameshbhai.com">info@sonirameshbhai.com</a></p>
        <p>Phone: <a href="tel:+919427171850">+91 9427171850</a></p>
        <p>
          Visit us at:{' '}
          <a
            href="https://maps.app.goo.gl/9HcRLD2pdYJJVRf89?g_st=ic"
            target="_blank"
            rel="noopener noreferrer"
          >
            JAMNA CHAMBERS SHOP NO.A-7, KANAIYA WADI, OLD SHAKTI VIJAY VARACHHA ROAD, Surat, Gujarat 395006
          </a>
        </p>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
              disabled={loading}
              placeholder="Your Name"
            />
            {errors.name && <small className="error-msg">{errors.name}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              disabled={loading}
              placeholder="your@email.com"
            />
            {errors.email && <small className="error-msg">{errors.email}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'error' : ''}
              disabled={loading}
              placeholder="Your message here..."
            />
            {errors.message && <small className="error-msg">{errors.message}</small>}
          </div>

          <button type="submit" disabled={loading} className={loading ? 'loading' : ''}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {submitted && <p className="success-msg">Thank you! Your message has been sent.</p>}
        </form>
      </div>
    </>
  );
}

export default ContactUs;
