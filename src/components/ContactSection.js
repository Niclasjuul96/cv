import React from 'react';
import PropTypes from 'prop-types';
import { Phone, Mail, Globe, LinkedinIcon } from 'lucide-react';
import { formatPhoneLink, formatMailLink } from '../utils/helpers';

export const ContactSection = ({ phone, email, webpage, linkedin }) => {
  return (
    <section className="contact-icons" aria-label="Contact information">
      <ul>
        <li>
          <a href={formatPhoneLink(phone)} title={phone} aria-label={`Phone: ${phone}`}>
            <Phone size={20} aria-hidden="true" />
            <span>{phone}</span>
          </a>
        </li>
        <li>
          <a href={formatMailLink(email)} title={email} aria-label={`Email: ${email}`}>
            <Mail size={20} aria-hidden="true" />
            <span>{email}</span>
          </a>
        </li>
        <li>
          <a
            href={webpage}
            target="_blank"
            rel="noreferrer"
            title={webpage}
            aria-label={`Portfolio: ${webpage}`}
          >
            <Globe size={20} aria-hidden="true" />
            <span>{webpage}</span>
          </a>
        </li>
        <li>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            title={linkedin}
            aria-label={`LinkedIn profile`}
          >
            <LinkedinIcon size={20} aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

ContactSection.propTypes = {
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  webpage: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};
