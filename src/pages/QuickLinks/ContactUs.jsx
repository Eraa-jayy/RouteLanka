import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    fleetSize: "",
    subject: "Support",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to backend/email service
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <main className="page contact-page">
      <section className="hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="lead">
            Whether you have a question about RouteLanka, need help with your
            account, or want to see the platform in action, our team is ready
            to assist.
          </p>
        </div>
      </section>

      <section className="container two-col">
        <div className="info-card">
          <h2>Support</h2>
          <p>
            For existing customers needing technical assistance, account
            help, or guidance on using RouteLanka features, our support team
            is available to help resolve issues quickly and keep your
            operations running smoothly.
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@routelanka.com">support@routelanka.com</a>
            <br />
            <strong>Phone:</strong> +94 XX XXX XXXX
          </p>
        </div>

        <div className="info-card">
          <h2>Sales Inquiries</h2>
          <p>
            Interested in learning how RouteLanka can fit your fleet size and
            operational needs? Our sales team can walk you through pricing,
            features, and onboarding options tailored to your business.
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:sales@routelanka.com">sales@routelanka.com</a>
            <br />
            <strong>Phone:</strong> +94 XX XXX XXXX
          </p>
        </div>
      </section>

      <section className="container cta-inline">
        <h2>Request a Demo</h2>
        <p>
          See RouteLanka in action with a personalized demo. We'll show you
          how the platform works with your fleet size, route structure, and
          business goals — completely free, with no obligation.
        </p>
      </section>

      <section className="container">
        <h2>Send Us a Message</h2>

        {submitted ? (
          <div className="form-success">
            <p>
              Thank you for reaching out. Our team will get back to you
              within one business day.
            </p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <label htmlFor="fleetSize">Fleet Size (Number of Vehicles)</label>
              <input
                type="number"
                id="fleetSize"
                name="fleetSize"
                min="0"
                value={formData.fleetSize}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <label htmlFor="subject">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="Support">Support</option>
                <option value="Sales">Sales</option>
                <option value="Demo Request">Demo Request</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>

            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit Message
            </button>
          </form>
        )}
      </section>

      <section className="container two-col">
        <div className="info-card">
          <h2>Business Hours</h2>
          <p>
            Monday – Friday: 8:30 AM – 6:00 PM
            <br />
            Saturday: 9:00 AM – 1:00 PM
            <br />
            Sunday &amp; Public Holidays: Closed
          </p>
        </div>

        <div className="info-card">
          <h2>Have Questions?</h2>
          <p>
            Visit our <a href="/faq">FAQ page</a> for answers to common
            questions about RouteLanka's features, pricing, and setup
            process.
          </p>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Let's Get Started</h2>
          <p>
            Ready to take control of your fleet operations? Contact us today
            and discover how RouteLanka can help your business run smarter
            and more profitably.
          </p>
          <a href="mailto:sales@routelanka.com" className="btn btn-primary">
            Contact Our Team
          </a>
        </div>
      </section>
    </main>
  );
}