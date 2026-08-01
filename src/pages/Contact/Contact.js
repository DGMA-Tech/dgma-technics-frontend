import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaShieldAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

function Contact() {
  return (
    <Layout>
    <div className="contact-page">

      {/* Hero */}

      <section className="contact-hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <h1>Let's Start a Conversation</h1>

          <p>
            Professional Defence Enquiries Only
          </p>

          <a href="#enquiry" className="hero-btn">
            Submit Secure Enquiry
          </a>

        </div>

      </section>

      {/* Contact Cards */}

      <section className="contact-info container">

        <div className="info-card">
          <FaMapMarkerAlt />
          <h3>Office Location</h3>
          <p>United Kingdom</p>
        </div>

        <div className="info-card">
          <FaEnvelope />
          <h3>Email</h3>
          <p>info@dgmatechnics.com</p>
        </div>

        <div className="info-card">
          <FaPhoneAlt />
          <h3>Phone</h3>
          <p>+44 XXXX XXXX</p>
        </div>

        <div className="info-card">
          <FaClock />
          <h3>Business Hours</h3>
          <p>Monday - Friday</p>
          <span>09:00 - 17:00</span>
        </div>

      </section>

      {/* Form */}

      <section
        className="contact-form-section container"
        id="enquiry"
      >

        <div className="form-heading">

          <h2>Secure Enquiry Form</h2>

          <p>
            All enquiries are reviewed by our professional team.
          </p>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Company Name *"
          />

          <input
            type="text"
            placeholder="Contact Person *"
          />

          <input
            type="email"
            placeholder="Email Address *"
          />

          <input
            type="text"
            placeholder="Phone Number"
          />

          <input
            type="text"
            placeholder="Country"
          />

          <select>

            <option>
              Organisation Type
            </option>

            <option>
              Government
            </option>

            <option>
              Defence Organisation
            </option>

            <option>
              Military
            </option>

            <option>
              Manufacturer
            </option>

            <option>
              Commercial Company
            </option>

            <option>
              Research Institution
            </option>

            <option>
              Other
            </option>

          </select>

          <select>

            <option>
              Capability Interest
            </option>

            <option>
              Land Systems
            </option>

            <option>
              Aerospace & Aviation
            </option>

            <option>
              Naval & Maritime
            </option>

            <option>
              Electronics & Communications
            </option>

            <option>
              General Enquiry
            </option>

          </select>

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="7"
            placeholder="Please provide a brief overview of your organisation and your enquiry."
          ></textarea>

          <button>

            <FaPaperPlane />

            Submit Secure Enquiry

          </button>

        </form>

      </section>

      {/* Regions */}

      <section className="regions">

        <h2>Global Business Regions</h2>

        <div className="regions-grid">

          <span>Europe</span>

          <span>Middle East</span>

          <span>Asia</span>

          <span>Africa</span>

        </div>

      </section>

      {/* Notice */}

      <section className="notice container">

        <FaShieldAlt className="shield"/>

        <div>

          <h3>Professional Enquiries</h3>

          <p>

            DGMA Technics Limited welcomes enquiries from government
            organisations, defence manufacturers and qualified commercial
            partners.

          </p>

          <p>

            Detailed technical information, commercial proposals and
            controlled documentation are provided only through the
            appropriate review process.

          </p>

        </div>

      </section>

      {/* Map */}

      <section className="map">

        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb="
          loading="lazy"
        ></iframe>

      </section>

    </div>
    </Layout>
  );
}

export default Contact;