import { useRef, useState } from "react";
import "./Contact.css";

function Contact() {
  const inputRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submitHandler = () => {
    if (!formData.name.trim()) {
      alert("Name is required");
      inputRef.current.focus();
      return;
    }

    if (!formData.email.trim()) {
      alert("Email is required");
      return;
    }

    if (!formData.message.trim()) {
      alert("Message is required");
      return;
    }

    alert("Message Submitted Successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">

      <div className="contact-header">
        <h1>Contact Grand Palace Hotel</h1>
        <p>
          We'd love to hear from you. Reach out for reservations,
          inquiries, or special requests.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <div className="info-card">
            <h3>📍 Address</h3>
            <p>123 Luxury Avenue, Hyderabad, India</p>
          </div>

          <div className="info-card">
            <h3>📞 Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-card">
            <h3>📧 Email</h3>
            <p>info@grandpalacehotel.com</p>
          </div>

          <div className="info-card">
            <h3>⏰ Working Hours</h3>
            <p>24/7 Customer Support</p>
          </div>

        </div>

        <div className="contact-form">

          <h2>Send Us a Message</h2>

          <input
            ref={inputRef}
            type="text"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
          />

          <input
            type="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
          />

          <textarea
            rows="5"
            placeholder="Write Your Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }
          />

          <button onClick={submitHandler}>
            Submit Message
          </button>

        </div>

      </div>

    </div>
  );
}

export default Contact;