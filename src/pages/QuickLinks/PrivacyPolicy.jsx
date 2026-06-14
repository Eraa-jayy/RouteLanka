import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="page legal-page">
      <section className="hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="lead">Last Updated: [Date]</p>
        </div>
      </section>

      <section className="container legal-content">
        <p>
          RouteLanka ("we," "us," or "our") is committed to protecting the
          privacy and security of our customers, their staff, drivers, and
          any individuals whose data is processed through our platform. This
          Privacy Policy explains how we collect, use, store, and protect
          information when you use RouteLanka.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We collect the following types of information:</p>
        <p>
          <strong>Account Information:</strong> Name, business name, email
          address, phone number, and login credentials provided during
          registration.
        </p>
        <p>
          <strong>Fleet and Operational Data:</strong> Vehicle details,
          driver information, trip schedules, booking records, expense data,
          and maintenance records entered by your business.
        </p>
        <p>
          <strong>GPS and Location Data:</strong> Real-time and historical
          location data from vehicles equipped with GPS tracking devices
          connected to RouteLanka.
        </p>
        <p>
          <strong>Payment Information:</strong> Billing details required to
          process subscription payments. Sensitive payment information is
          processed through secure, PCI-compliant third-party payment
          processors.
        </p>
        <p>
          <strong>Usage Data:</strong> Information about how you interact
          with our platform, including login times, feature usage, and
          device information.
        </p>

        <h2>2. How We Use GPS Tracking Data</h2>
        <p>
          GPS data is collected to provide core platform features, including
          real-time fleet tracking, route monitoring, and operational
          reporting. This data:
        </p>
        <ul className="bullet-list">
          <li>Is accessible only to your authorized account users</li>
          <li>
            Is used solely to support fleet management functions you have
            subscribed to
          </li>
          <li>
            Is stored securely and retained according to your subscription
            plan's data retention terms
          </li>
          <li>Is not sold or shared with third parties for marketing purposes</li>
        </ul>
        <p>
          Transport companies are responsible for informing drivers and
          relevant staff that vehicles are equipped with GPS tracking, in
          accordance with applicable local laws.
        </p>

        <h2>3. Fleet Data Protection</h2>
        <p>
          All fleet operational data — including expense records, maintenance
          logs, and booking information — is stored using industry-standard
          security practices. Access to this data is restricted to authorized
          users within your organization based on roles and permissions you
          configure.
        </p>

        <h2>4. User Account Information</h2>
        <p>
          Your account information is used to authenticate access, provide
          customer support, send important service notifications, and manage
          your subscription. We do not share your account information with
          unrelated third parties without your consent, except where required
          by law.
        </p>

        <h2>5. Cookies and Tracking Technologies</h2>
        <p>RouteLanka's website and platform may use cookies and similar technologies to:</p>
        <ul className="bullet-list">
          <li>Keep you logged in securely</li>
          <li>Remember your preferences</li>
          <li>
            Understand how our platform is used to improve performance and
            usability
          </li>
        </ul>
        <p>
          You can control cookie settings through your browser. Disabling
          certain cookies may affect platform functionality.
        </p>

        <h2>6. Data Security Measures</h2>
        <p>We implement robust security measures to protect your data, including:</p>
        <ul className="bullet-list">
          <li>Encrypted data transmission (HTTPS/TLS)</li>
          <li>Secure data storage with access controls</li>
          <li>Role-based permissions for user accounts</li>
          <li>Regular security monitoring and system updates</li>
        </ul>
        <p>
          While we take data security seriously, no system can guarantee
          absolute security. We encourage customers to use strong passwords
          and manage user access responsibly.
        </p>

        <h2>7. Third-Party Integrations</h2>
        <p>
          RouteLanka may integrate with third-party services such as GPS
          hardware providers, payment processors, and SMS or notification
          services. These third parties are required to handle data in
          accordance with applicable privacy and security standards. We do
          not permit third parties to use your data for purposes unrelated to
          providing the Service.
        </p>

        <h2>8. Data Retention</h2>
        <p>
          We retain your data for as long as your account remains active or
          as needed to provide the Service. Upon account termination, data
          may be retained for a limited period to allow for export requests,
          after which it will be securely deleted in accordance with our data
          retention policies.
        </p>

        <h2>9. Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="bullet-list">
          <li>
            Access the personal and business data we hold about your account
          </li>
          <li>Request correction of inaccurate information</li>
          <li>
            Request deletion of your data, subject to legal and contractual
            obligations
          </li>
          <li>Request a copy of your data in a portable format</li>
        </ul>
        <p>
          To exercise these rights, contact us at{" "}
          <a href="mailto:privacy@routelanka.com">privacy@routelanka.com</a>.
        </p>

        <h2>10. Compliance with Privacy Standards</h2>
        <p>
          RouteLanka is committed to aligning with modern data protection
          principles, including those reflected in Sri Lanka's Personal Data
          Protection Act and internationally recognized privacy frameworks.
          We continuously review our practices to maintain high standards of
          data protection.
        </p>

        <h2>11. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. Significant changes
          will be communicated to customers through email or platform
          notifications. Continued use of the Service after updates
          constitutes acceptance of the revised policy.
        </p>

        <h2>12. Contact Us</h2>
        <p>
          For privacy-related questions or requests, please contact{" "}
          <a href="mailto:privacy@routelanka.com">privacy@routelanka.com</a>.
        </p>
      </section>
    </main>
  );
}