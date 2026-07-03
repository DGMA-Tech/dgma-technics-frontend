import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./ComingSoon.css";

import logo from "../../assets/dgma-logo.jpg";

function ComingSoon() {
  return (
    <Layout>
      <main className="coming-page">

        <div className="coming-grid"></div>

        <div className="coming-ring ring-one"></div>
        <div className="coming-ring ring-two"></div>

        <div className="coming-container">

         

          <span className="coming-badge">
            🚧 UNDER CONSTRUCTION
          </span>

          <h1>
            This page is
            <span> Coming Soon</span>
          </h1>

          <p>
            We are currently developing this section to provide
            professional content, capability information and an
            exceptional user experience.
          </p>

          <p className="coming-small">
            Thank you for your patience.
          </p>

          <div className="coming-buttons">

            <Link
              to="/"
              className="coming-primary"
            >
              Return Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="coming-secondary"
            >
              Go Back
            </button>

          </div>

        </div>

      </main>
    </Layout>
  );
}

export default ComingSoon;