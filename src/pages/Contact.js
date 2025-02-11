import React, { useState } from 'react';
import '../assets/css/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, message } = formData;
    const subject = `Contact from ${name}`;
    const body = `${message}`;

   
    if (window.innerWidth >= 768) {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=anshulrathore010@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailUrl, '_blank');
    } else {
   
      const mailtoLink = `mailto:anshulrathore010@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    }
  };

  return (
    <div className="contact-page">
      <h1 className="page-title">Contact Me</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="form-label">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message" className="form-label">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          className="form-textarea"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="form-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
