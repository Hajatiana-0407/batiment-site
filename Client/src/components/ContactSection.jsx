import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './ContactSection.css';

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-card">
        <div className="contact-form-wrapper">
          <h2>CONTACTEZ NOUS</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti illo cupiditate.</p>
          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message" rows="4" />
            <button type="submit">SEND</button>
          </form>
        </div>
        <div className="contact-info-wrapper">
          <h3>Info</h3>
          <ul className="info-list">
            <li>
              <FaEnvelope /> example@gmail.com
            </li>
            <li>
              <FaPhoneAlt /> +261 00 55 985 47
            </li>
            <li>
              <FaMapMarkerAlt /> Dakar, Senegal
            </li>
            <li>
              <FaClock /> 07:00 - 18:00
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/**
 * <div className="contact-card">
        <div className="contact-form-wrapper">
          <h2>CONTACTEZ NOUS</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti illo cupiditate.</p>
          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message" rows="4" />
            <button type="submit">SEND</button>
          </form>
        </div>
        <div className="contact-info-wrapper">
          <h3>Info</h3>
          <ul className="info-list">
            <li>
              <FaEnvelope /> example@gmail.com
            </li>
            <li>
              <FaPhoneAlt /> +261 00 55 985 47
            </li>
            <li>
              <FaMapMarkerAlt /> Dakar, Senegal
            </li>
            <li>
              <FaClock /> 07:00 - 18:00
            </li>
          </ul>
        </div>
      </div>
 */