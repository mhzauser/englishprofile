import React, { useState } from 'react';
import axios from 'axios';
import { CheckIcon } from './SVGIcon';
import './ContactForm.css';

const API_URL = 'http://localhost:8000/api/contacts/';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [focused, setFocused] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (field) => {
    setFocused(field);
  };

  const handleBlur = () => {
    setFocused('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      await axios.post(API_URL, formData);
      setMessage({ type: 'success', text: 'Thank you! Your information has been submitted successfully. We will contact you soon.' });
      setFormData({
        first_name: '',
        last_name: '',
        phone_number: '',
        description: ''
      });
    } catch (error) {
      setMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="contact-header-decoration">
          <div className="contact-circle circle-1"></div>
          <div className="contact-circle circle-2"></div>
        </div>
        <h1>Get in Touch</h1>
        <p>Fill out the form below and we'll get back to you soon</p>
      </div>

      <div className="contact-container">
        <div className="contact-form-wrapper">
          <div className="form-header">
            <h2>Contact Form</h2>
            <p>Tell us about yourself and your goals</p>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="first_name">
                <span className="label-icon">👤</span>
                First Name *
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                onFocus={() => handleFocus('first_name')}
                onBlur={handleBlur}
                required
                placeholder="Enter your first name"
                className={focused === 'first_name' ? 'focused' : ''}
              />
            </div>

            <div className="form-group">
              <label htmlFor="last_name">
                <span className="label-icon">👤</span>
                Last Name *
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                onFocus={() => handleFocus('last_name')}
                onBlur={handleBlur}
                required
                placeholder="Enter your last name"
                className={focused === 'last_name' ? 'focused' : ''}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone_number">
                <span className="label-icon">📞</span>
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                onFocus={() => handleFocus('phone_number')}
                onBlur={handleBlur}
                required
                placeholder="Enter your phone number"
                className={focused === 'phone_number' ? 'focused' : ''}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">
                <span className="label-icon">✍️</span>
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                onFocus={() => handleFocus('description')}
                onBlur={handleBlur}
                required
                rows="5"
                placeholder="Tell us about yourself and your English learning goals..."
                className={focused === 'description' ? 'focused' : ''}
              />
            </div>

            {message.text && (
              <div className={`message ${message.type}`}>
                {message.type === 'success' && <CheckIcon className="message-icon" />}
                <span>{message.text}</span>
              </div>
            )}

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? (
                <>
                  <span className="btn-spinner"></span>
                  Submitting...
                </>
              ) : (
                <>
                  Submit
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12H19M12 5L19 12L12 19"/>
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>

        <div className="contact-info">
          <div className="info-header">
            <h2>Why Contact Us?</h2>
            <p>Experience the benefits of professional English instruction</p>
          </div>
          <ul className="info-list">
            <li>
              <span className="info-icon">📞</span>
              <div>
                <h3>Personalized Consultation</h3>
                <p>Get a customized learning plan tailored to your needs</p>
              </div>
            </li>
            <li>
              <span className="info-icon">🎯</span>
              <div>
                <h3>Custom Learning Plans</h3>
                <p>Structured programs designed for your specific goals</p>
              </div>
            </li>
            <li>
              <span className="info-icon">📚</span>
              <div>
                <h3>Flexible Scheduling</h3>
                <p>Choose times that work best for your schedule</p>
              </div>
            </li>
            <li>
              <span className="info-icon">🌟</span>
              <div>
                <h3>Proven Teaching Methods</h3>
                <p>Learn with techniques that have helped hundreds of students</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
