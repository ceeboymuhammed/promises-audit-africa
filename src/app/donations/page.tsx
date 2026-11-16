
"use client";

import { FormEvent } from "react";
import Link from "next/link";

export default function DonationsPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") as string;
    const phone = data.get("phone") as string;
    const email = data.get("email") as string;
    const location = data.get("location") as string;
    const support = data.get("support") as string;
    const currency = data.get("currency") as string;
    const amount = data.get("amount") as string;
    const message = (data.get("message") as string) || "No additional message";
    
    const whatsappMessage = `
Hello Promises Audit Africa,

I would like to support your work.

DONOR INFORMATION
Name: ${name}
Phone / WhatsApp: ${phone}
Email: ${email}
Country / State: ${location}

TYPE OF SUPPORT
${support}

PLEDGED AMOUNT
${currency} ${amount}

MESSAGE
${message}

I agree to be contacted for updates.

Please guide me on how to complete my donation.

Thank you.
    `.trim();

    const whatsappUrl = `https://wa.me/2348069666634?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="donations-page">
      <section className="donations-hero">
        <div className="donations-container">
          <span className="donations-eyebrow">MAKE A DIFFERENCE</span>
          <h1>Support the Work of Promises Audit</h1>
          <p>
            Your support helps us track promises, verify the truth, celebrate
            Promise Keepers, and produce documentaries that keep leaders
            accountable across Africa.
          </p>
        </div>
      </section>

      <section className="donations-section">
        <div className="donations-container donations-layout">
          <div className="donations-intro">
            <span className="donations-eyebrow">YOUR SUPPORT MATTERS</span>
            <h2>Help us build a culture where promises are kept.</h2>
            <p>
              Every contribution helps us investigate commitments, document
              progress, recognise leaders of integrity and encourage those
              who are yet to fulfil their promises.
            </p>
            <div className="donations-motto">
              <strong>A PROMISE MADE MUST BE A PROMISE KEPT.</strong>
            </div>
            <p className="donations-note">
              This form records your donation pledge. Our team will contact
              you through WhatsApp to guide you through completing your
              contribution.
            </p>
          </div>

          <div className="donations-form-card">
            <h2>Make a Donation Pledge</h2>
            <p className="donations-form-description">
              Complete the information below to get started.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="donations-field">
                <label htmlFor="donor-name">
                  Full Name / Organization Name *
                </label>
                <input
                  id="donor-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name or organization"
                  required
                />
              </div>

              <div className="donations-field">
                <label htmlFor="donor-phone">Phone / WhatsApp Number *</label>
                <input
                  id="donor-phone"
                  name="phone"
                  type="tel"
                  placeholder="+234..."
                  required
                />
              </div>

              <div className="donations-field">
                <label htmlFor="donor-email">Email Address *</label>
                <input
                  id="donor-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="donations-field">
                <label htmlFor="donor-location">Country / State *</label>
                <input
                  id="donor-location"
                  name="location"
                  type="text"
                  placeholder="e.g. Abuja, Nigeria"
                  required
                />
              </div>

              <div className="donations-field">
                <label htmlFor="donor-support">Type of Support *</label>
                <select id="donor-support" name="support" required defaultValue="">
                  <option value="" disabled>
                    Select your preferred support
                  </option>
                  <option>One-Time Donation</option>
                  <option>Monthly Support</option>
                  <option>Annual Partnership</option>
                  <option>Sponsorship for The Handshake Award</option>
                  <option>Documentary Sponsorship</option>
                  <option>Media / Volunteer Support</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="donations-field">
                <label>Amount You Wish To Donate *</label>
                <div className="donations-amount-row">
                  <select name="currency" aria-label="Donation currency">
                    <option value="NGN">₦ NGN</option>
                    <option value="USD">$ USD</option>
                  </select>
                  <input
                    name="amount"
                    type="number"
                    min="1"
                    step="any"
                    placeholder="Enter amount"
                    required
                  />
                </div>
              </div>

              <div className="donations-field">
                <label htmlFor="donor-message">Your Message (Optional)</label>
                <textarea
                  id="donor-message"
                  name="message"
                  rows={4}
                  placeholder="Tell us anything else you would like us to know..."
                />
              </div>

              <label className="donations-consent">
                <input type="checkbox" name="consent" required />
                <span>
                  I agree to support Promises Audit and be contacted for
                  updates.
                </span>
              </label>

              <button type="submit" className="donations-submit">
                SUPPORT PROMISES AUDIT <span aria-hidden="true">↗</span>
              </button>

              <p className="donations-privacy">
                Your submission opens WhatsApp with your pledge details.
                Your donation is not complete until you follow up with our
                team.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
