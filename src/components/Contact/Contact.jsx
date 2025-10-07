// components/Contact/Contact.js
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Check if EmailJS is configured
      if (!serviceId || !templateId || !publicKey || 
          serviceId === 'your_service_id_here' || 
          templateId === 'your_template_id_here' || 
          publicKey === 'your_public_key_here') {
        
        // Fallback: Show success message and log to console
        console.log('📧 Contact Form Submission (EmailJS not configured):');
        console.log('Name:', formData.name);
        console.log('Email:', formData.email);
        console.log('Message:', formData.message);
        console.log('---');
        console.log('To configure email delivery, follow the setup guide in EMAILJS_SETUP.md');
        
        setStatus('demo');
        setFormData({ name: '', email: '', message: '' });
        return;
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'imteazkhan12@gmail.com',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right" data-aos-delay="200">
            <h3>Let's work together!</h3>
            <p>I'm always interested in new opportunities and challenges.</p>
            <div className="contact-details">
              <div className="contact-item" data-aos="fade-up" data-aos-delay="400">
                <strong>Email:</strong> imteazkhan12@gmail.com
              </div>
              <div className="contact-item" data-aos="fade-up" data-aos-delay="500">
                <strong>Phone:</strong> (+880)1521 394018
              </div>
              <div className="contact-item" data-aos="fade-up" data-aos-delay="600">
                <strong>Location:</strong> Dhaka,BD
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-left" data-aos-delay="300">
            <div className="form-group" data-aos="fade-up" data-aos-delay="400">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group" data-aos="fade-up" data-aos-delay="500">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group" data-aos="fade-up" data-aos-delay="600">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              data-aos="fade-up"
              data-aos-delay="700"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className="status-message success" data-aos="fade-up">
                ✅ Thank you! Your message has been sent successfully.
              </div>
            )}

            {status === 'demo' && (
              <div className="status-message demo" data-aos="fade-up">
                📝 Thank you! Your message has been received (demo mode). 
                <br />
                <small>To enable email delivery, configure EmailJS following the setup guide.</small>
              </div>
            )}

            {status === 'error' && (
              <div className="status-message error" data-aos="fade-up">
                ❌ Sorry, there was an error sending your message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;