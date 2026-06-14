import React from "react";

export default function About() {
  return (
    <main className="page about-page">
      <section className="hero">
        <div className="container">
          <h1>About RouteLanka</h1>
          <p className="lead">
            Helping Sri Lankan transport companies to digitize operations,
            reduce costs, and grow profitably through intelligent fleet
            management technology.
          </p>
        </div>
      </section>

      <section className="container">
        <h2>Our Mission</h2>
        <p>
          RouteLanka exists to help Sri Lankan transport companies run
          smarter, safer, and more profitable operations. We provide a
          complete fleet and bus management platform that replaces manual
          processes with intelligent, real-time digital tools.
        </p>
      </section>

      <section className="container">
        <h2>Our Vision</h2>
        <p>
          We envision a Sri Lankan transport industry where every bus
          operator — from small private fleets to large intercity networks —
          has access to world-class technology that improves reliability,
          reduces costs, and builds passenger trust.
        </p>
      </section>

      <section className="container">
        <h2>Why RouteLanka Was Created</h2>
        <p>
          Sri Lanka's private transport sector keeps the country moving, yet
          most operators still rely on paper logs, phone calls, and manual
          record-keeping to manage their fleets. This leads to lost revenue,
          unpredictable maintenance costs, and limited visibility into daily
          operations.
        </p>
        <p>
          RouteLanka was built by people who understand these challenges. Our
          goal was simple: create an affordable, easy-to-use platform that
          gives Sri Lankan transport businesses the same operational power as
          large international fleet operators — without the complexity.
        </p>
      </section>

      <section className="container">
        <h2>Challenges Faced by Sri Lankan Transport Operators</h2>
        <ul className="bullet-list">
          <li>
            Difficulty tracking vehicle locations and driver activity in real
            time
          </li>
          <li>Unclear or untracked fuel and maintenance expenses</li>
          <li>
            Manual booking systems that lead to overbooking or lost revenue
          </li>
          <li>Missed vehicle servicing, resulting in breakdowns and downtime</li>
          <li>Lack of reliable data for business decisions</li>
          <li>
            Limited communication between depots, drivers, and management
          </li>
        </ul>
      </section>

      <section className="container">
        <h2>How RouteLanka Solves These Challenges</h2>
        <p>RouteLanka brings every part of your operation into one centralized platform:</p>
        <ul className="bullet-list">
          <li>
            <strong>Real-Time GPS Tracking</strong> gives you full visibility
            of your fleet at all times
          </li>
          <li>
            <strong>Smart Expense Management</strong> helps control fuel,
            maintenance, and allowance costs
          </li>
          <li>
            <strong>Booking &amp; Reservation Management</strong> centralizes
            passenger bookings and seat allocation
          </li>
          <li>
            <strong>Maintenance Tracking</strong> keeps vehicles serviced on
            schedule and reduces downtime
          </li>
          <li>
            <strong>Analytics &amp; Reports</strong> turn raw data into clear
            business insights
          </li>
          <li>
            <strong>Instant Notifications</strong> keep your team informed
            and responsive
          </li>
        </ul>
      </section>

      <section className="container">
        <h2>Benefits to Bus Operators</h2>
        <ul className="bullet-list">
          <li>Lower operational costs through better expense visibility</li>
          <li>Improved fleet reliability and reduced breakdowns</li>
          <li>Higher revenue through efficient booking management</li>
          <li>Better decision-making with real-time data and reports</li>
          <li>Increased passenger satisfaction and trust</li>
          <li>More time to focus on growing your business</li>
        </ul>
      </section>

      <section className="container">
        <h2>Our Commitment to Innovation and Customer Success</h2>
        <p>
          We are committed to continuously improving RouteLanka based on real
          feedback from Sri Lankan transport operators. Our team works
          closely with clients to ensure the platform fits the realities of
          local operations — from depot management to long-distance intercity
          routes.
        </p>
        <p>
          Your success is our success. We provide ongoing support, training,
          and platform updates to ensure you get the most value from
          RouteLanka every day.
        </p>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Fleet Operations?</h2>
          <p>
            See how RouteLanka can help your business reduce costs, increase
            efficiency, and grow profitably.
          </p>
          <a href="/contact" className="btn btn-primary">
            Request a Demo
          </a>
        </div>
      </section>
    </main>
  );
}