import React from "react";

export default function Terms() {
  return (
    <main className="page legal-page">
      <section className="hero">
        <div className="container">
          <h1>Terms &amp; Conditions</h1>
          <p className="lead">Last Updated: [Date]</p>
        </div>
      </section>

      <section className="container legal-content">
        <p>
          Welcome to RouteLanka. These Terms and Conditions ("Terms") govern
          your access to and use of the RouteLanka platform, including our
          website, software, mobile applications, and related services
          (collectively, the "Service"), provided by RouteLanka ("we," "us,"
          or "our").
        </p>
        <p>
          By accessing or using the Service, you agree to be bound by these
          Terms. If you do not agree, please do not use the Service.
        </p>

        <h2>1. Eligibility and Account Registration</h2>
        <p>
          To use RouteLanka, you must register an account and provide
          accurate, complete, and current information. You are responsible
          for maintaining the confidentiality of your login credentials and
          for all activities that occur under your account.
        </p>
        <p>
          You must be a legally registered business or authorized
          representative of a transport operating entity to use this Service
          for commercial purposes.
        </p>

        <h2>2. User Responsibilities</h2>
        <p>As a user of RouteLanka, you agree to:</p>
        <ul className="bullet-list">
          <li>
            Use the platform only for lawful business purposes related to
            fleet and transport management
          </li>
          <li>
            Provide accurate fleet, vehicle, driver, and booking information
          </li>
          <li>
            Ensure that any GPS tracking devices installed comply with
            applicable laws, including obtaining necessary consents from
            drivers and staff
          </li>
          <li>
            Not misuse, reverse-engineer, copy, or attempt to disrupt the
            platform
          </li>
          <li>Not share account access with unauthorized third parties</li>
        </ul>

        <h2>3. Account Usage Rules</h2>
        <ul className="bullet-list">
          <li>
            Each subscription account is licensed for use by the registered
            business and its authorized employees only
          </li>
          <li>
            Account credentials must not be shared outside the organization
          </li>
          <li>
            We reserve the right to suspend accounts found to be in violation
            of these Terms or used for fraudulent or unlawful activity
          </li>
        </ul>

        <h2>4. Subscription Terms</h2>
        <p>
          RouteLanka is provided on a subscription basis. Subscription plans,
          features, and pricing are detailed on our website or as agreed in
          your service contract.
        </p>
        <ul className="bullet-list">
          <li>
            Subscriptions renew automatically unless cancelled before the
            renewal date
          </li>
          <li>
            Plan upgrades or downgrades may be requested and will take effect
            according to our standard billing cycle policies
          </li>
          <li>
            We reserve the right to modify subscription plans and pricing
            with reasonable advance notice to existing customers
          </li>
        </ul>

        <h2>5. Payment Terms</h2>
        <ul className="bullet-list">
          <li>
            Subscription fees are payable in advance according to the billing
            cycle selected (monthly, quarterly, or annually)
          </li>
          <li>Payments must be made through approved payment methods</li>
          <li>
            Failure to pay subscription fees on time may result in suspension
            or limitation of access to the Service
          </li>
          <li>
            All fees are exclusive of applicable taxes unless otherwise
            stated, and customers are responsible for any taxes applicable
            under Sri Lankan law
          </li>
        </ul>

        <h2>6. Data Ownership</h2>
        <ul className="bullet-list">
          <li>
            All operational data you input into RouteLanka — including fleet
            information, booking records, GPS data, and financial records —
            remains the property of your business
          </li>
          <li>
            RouteLanka does not claim ownership over your business data and
            will not sell or share it with third parties except as described
            in our Privacy Policy
          </li>
          <li>
            Upon termination of your subscription, you may request export of
            your data within a reasonable period, after which data may be
            deleted from our systems in accordance with our data retention
            policies
          </li>
        </ul>

        <h2>7. Service Limitations</h2>
        <ul className="bullet-list">
          <li>
            RouteLanka strives to maintain high service availability but does
            not guarantee uninterrupted or error-free operation
          </li>
          <li>
            GPS tracking accuracy may be affected by external factors such as
            network coverage, satellite availability, and hardware
            limitations beyond our control
          </li>
          <li>
            We are not liable for losses arising from service interruptions,
            third-party network issues, or hardware malfunctions
          </li>
          <li>
            The Service is provided "as is" and "as available," and we make
            no warranties beyond those expressly stated in your service
            agreement
          </li>
        </ul>

        <h2>8. Termination</h2>
        <ul className="bullet-list">
          <li>
            You may cancel your subscription at any time in accordance with
            the notice period specified in your subscription plan
          </li>
          <li>
            We reserve the right to suspend or terminate accounts that
            violate these Terms, engage in fraudulent activity, or remain
            unpaid for an extended period
          </li>
          <li>
            Upon termination, your access to the Service will cease, and data
            export requests should be made promptly as outlined in Section 6
          </li>
        </ul>

        <h2>9. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, RouteLanka shall not be
          liable for any indirect, incidental, special, or consequential
          damages arising from the use of, or inability to use, the Service,
          including but not limited to loss of revenue, data, or business
          opportunities.
        </p>

        <h2>10. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. Continued use of the
          Service after changes are posted constitutes acceptance of the
          revised Terms. We will make reasonable efforts to notify customers
          of significant changes.
        </p>

        <h2>11. Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the
          laws of the Democratic Socialist Republic of Sri Lanka. Any
          disputes arising from these Terms or your use of the Service shall
          be subject to the exclusive jurisdiction of the courts of Sri
          Lanka.
        </p>

        <h2>12. Contact Information</h2>
        <p>
          If you have questions about these Terms, please contact us at{" "}
          <a href="mailto:legal@routelanka.com">legal@routelanka.com</a>.
        </p>
      </section>
    </main>
  );
}