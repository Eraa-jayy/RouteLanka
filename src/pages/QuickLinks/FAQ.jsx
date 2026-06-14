import React, { useState } from "react";

const faqData = [
  {
    category: "General",
    items: [
      {
        q: "What is RouteLanka?",
        a: "RouteLanka is a complete fleet and bus management platform designed for Sri Lankan transport operators. It combines GPS tracking, expense management, booking systems, maintenance tracking, and business analytics into one easy-to-use platform.",
      },
      {
        q: "Who is RouteLanka designed for?",
        a: "RouteLanka is built for private bus companies, intercity bus operators, fleet operators, depot administrators, and transport company managers across Sri Lanka.",
      },
      {
        q: "Do I need technical knowledge to use RouteLanka?",
        a: "No. RouteLanka is designed to be simple and intuitive, even for users with no technical background. Our interface uses clear language and straightforward navigation suited for everyday business use.",
      },
    ],
  },
  {
    category: "GPS Tracking",
    items: [
      {
        q: "How does the GPS tracking feature work?",
        a: "GPS devices installed in your vehicles send location data to RouteLanka in real time, allowing you to view your entire fleet's location on a live map from any device.",
      },
      {
        q: "Can I track multiple vehicles at the same time?",
        a: "Yes. RouteLanka allows you to monitor your entire fleet simultaneously, with individual vehicle details available at a glance.",
      },
      {
        q: "What if a vehicle goes off its assigned route?",
        a: "RouteLanka can notify you when a vehicle deviates significantly from its planned route, helping you identify unauthorized usage or delays quickly.",
      },
      {
        q: "Do I need special GPS hardware?",
        a: "Yes, compatible GPS tracking devices need to be installed in your vehicles. Our team can guide you on compatible hardware options during onboarding.",
      },
    ],
  },
  {
    category: "Fleet Management & Expenses",
    items: [
      {
        q: "How does RouteLanka help reduce fuel costs?",
        a: "RouteLanka tracks fuel consumption and expenses per vehicle, helping you identify unusual usage patterns, monitor efficiency, and control fuel-related spending.",
      },
      {
        q: "Can I track driver allowances and other operational costs?",
        a: "Yes. RouteLanka allows you to record and monitor driver allowances, toll charges, and other day-to-day operational expenses alongside fuel and maintenance costs.",
      },
      {
        q: "Will RouteLanka show me where my business is losing money?",
        a: "Yes. Our expense management and reporting tools highlight cost trends and inefficiencies, helping you make informed decisions to improve profitability.",
      },
    ],
  },
  {
    category: "Bookings & Reservations",
    items: [
      {
        q: "Can RouteLanka manage passenger bookings for intercity routes?",
        a: "Yes. RouteLanka includes a booking and reservation system that allows you to manage passenger bookings, seat allocation, and trip schedules from a central dashboard.",
      },
      {
        q: "Can I track seat availability in real time?",
        a: "Yes. Seat allocation is updated in real time as bookings are made, helping prevent overbooking and double allocations.",
      },
      {
        q: "Does RouteLanka support payment tracking for bookings?",
        a: "Yes. You can track payments received for bookings, helping you maintain accurate revenue records for each trip.",
      },
    ],
  },
  {
    category: "Maintenance Tracking",
    items: [
      {
        q: "How does maintenance tracking work?",
        a: "RouteLanka lets you schedule vehicle servicing, track repair history, and set automated reminders so vehicles are serviced on time and breakdowns are minimized.",
      },
      {
        q: "Will I get notified before a vehicle is due for service?",
        a: "Yes. The system sends automated maintenance reminders based on schedules you set, such as mileage intervals or time periods.",
      },
      {
        q: "Can I view the repair history of a specific vehicle?",
        a: "Yes. Each vehicle has a maintenance profile that records past repairs, service dates, and associated costs for easy reference.",
      },
    ],
  },
  {
    category: "Reporting & Analytics",
    items: [
      {
        q: "What kind of reports does RouteLanka provide?",
        a: "RouteLanka offers fleet performance dashboards, revenue reports, expense analysis, and route efficiency insights to support data-driven business decisions.",
      },
      {
        q: "Can I export reports for accounting or management review?",
        a: "Yes. Reports can be generated and exported for use in accounting, management meetings, or business planning.",
      },
    ],
  },
  {
    category: "Pricing & Plans",
    items: [
      {
        q: "How much does RouteLanka cost?",
        a: "Pricing depends on your fleet size and the features you require. Contact our sales team for a customized quote based on your business needs.",
      },
      {
        q: "Is there a free trial or demo available?",
        a: "Yes. We offer a free demo so you can see how RouteLanka works with your fleet before making a decision. Contact us to schedule one.",
      },
    ],
  },
  {
    category: "Data Security & Accounts",
    items: [
      {
        q: "Is my fleet and business data secure with RouteLanka?",
        a: "Yes. We use encrypted data transmission, secure storage, and role-based access controls to protect your business information.",
      },
      {
        q: "Can multiple staff members access the system with different permission levels?",
        a: "Yes. RouteLanka supports multiple user accounts with customizable access levels, so staff only see information relevant to their role.",
      },
    ],
  },
  {
    category: "Mobile Access & Support",
    items: [
      {
        q: "Can I access RouteLanka from my mobile phone?",
        a: "Yes. RouteLanka is accessible on mobile devices, allowing you to monitor your fleet and operations from anywhere.",
      },
      {
        q: "What kind of customer support is available?",
        a: "Our support team is available during business hours via email and phone to assist with technical issues, account questions, and platform guidance.",
      },
    ],
  },
  {
    category: "Implementation",
    items: [
      {
        q: "How long does it take to set up RouteLanka for my business?",
        a: "Setup time depends on your fleet size and existing data. Our team works closely with you to ensure a smooth onboarding process, including GPS device setup and staff training.",
      },
      {
        q: "Will my existing fleet data be migrated to RouteLanka?",
        a: "Yes. Our onboarding team can assist with migrating existing vehicle, driver, and booking data into the RouteLanka system during setup.",
      },
    ],
  },
];

function FaqItem({ q, a, isOpen, onClick }) {
  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <button className="faq-question" onClick={onClick} aria-expanded={isOpen}>
        <span>{q}</span>
        <span className="faq-icon">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="faq-answer">
          <p>{a}</p>
        </div>
      )}
    </div>
  );
}

export default function Faq() {
  const [openKey, setOpenKey] = useState(null);

  const toggle = (key) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  return (
    <main className="page faq-page">
      <section className="hero">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p className="lead">
            Find answers to common questions about RouteLanka's features,
            pricing, security, and implementation process.
          </p>
        </div>
      </section>

      <section className="container">
        {faqData.map((group, gIndex) => (
          <div key={group.category} className="faq-group">
            <h2>{group.category}</h2>
            {group.items.map((item, iIndex) => {
              const key = `${gIndex}-${iIndex}`;
              return (
                <FaqItem
                  key={key}
                  q={item.q}
                  a={item.a}
                  isOpen={openKey === key}
                  onClick={() => toggle(key)}
                />
              );
            })}
          </div>
        ))}
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Still Have Questions?</h2>
          <p>
            Contact our team for more information, or request a free demo to
            see RouteLanka in action.
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">
              Contact Support
            </a>
            <a href="/contact" className="btn btn-secondary">
              Request a Demo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}