import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa';
import './ContactSection.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Envoi en cours...');
    setSubmitted(false);

    try {
      const res = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(true); // Indiquer que le message a été envoyé
      } else {
        const data = await res.json();
        setStatus(`Erreur : ${data.errors || 'Impossible d’envoyer le message.'}`);
      }
    } catch (err) {
      setStatus('Erreur réseau. Veuillez réessayer.');
    }
  };

  const handleBackToForm = () => {
    setSubmitted(false); // Revenir au formulaire
    setStatus(''); // Réinitialiser le statut
  };

  return (
    <section className="contact-section">
      <div className="contact-card">
        <div className="contact-form-wrapper">
          <h2>CONTACTEZ NOUS</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti illo cupiditate.</p>

          {/* Formulaire ou Message de succès */}
          {!submitted ? (
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit">SEND</button>
              {status && <p className="form-status">{status}</p>}
            </form>
          ) : (
            <div className="success-message">
              <FaCheckCircle size={60} color="green" />
              <h3>Merci !</h3>
              <p>Votre message a été envoyé avec succès.</p>
              <button className="back-button" onClick={handleBackToForm}>OK</button>
            </div>
          )}
        </div>

        <div className="contact-info-wrapper">
          <h3>Info</h3>
          <ul className="info-list">
            <li><FaEnvelope /> example@gmail.com</li>
            <li><FaPhoneAlt /> +261 00 55 985 47</li>
            <li><FaMapMarkerAlt /> Dakar, Sénégal</li>
            <li><FaClock /> 07:00 - 18:00</li>
          </ul>
        </div>
      </div>
    </section>
  );
}