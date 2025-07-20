import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://portfolio-backend-mnfh.onrender.com/api/contact", formData);
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      alert("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" rows="5" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
