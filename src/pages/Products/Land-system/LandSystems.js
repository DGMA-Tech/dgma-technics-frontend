import Layout from "../../../components/Layout/Layout";
import { Link } from "react-router-dom";
import landProducts from "./landProducts";
import "../Systems.css";

function LandSystems() {
  return (
    <Layout>
      <main className="land-page">
        {/* ================= HERO ================= */}

        <section className="land-hero">
          <div className="land-grid"></div>

          <div className="land-ring land-ring-one"></div>
          <div className="land-ring land-ring-two"></div>

          <div className="container land-hero-content">
            <p className="land-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/products">Capabilities</Link>
              <span>/</span>
              Land Systems
            </p>

            <span className="land-tag">LAND DEFENCE CAPABILITY</span>

            <h1>
              Land Systems &<span> Defence Solutions</span>
            </h1>

            <p>
              DGMA Technics Limited, through its strategic representation of
              DEPO, promotes a broad range of land defence capabilities,
              supporting military, government and authorised organisations with
              advanced defence technologies and engineering solutions.
            </p>
          </div>
        </section>

        {/* ================= ABOUT ================= */}

        <section className="land-about">
          <div className="container land-about-grid">
            <div>
              <span className="section-title">LAND CAPABILITY</span>

              <h2>
                Advanced land defence technologies for modern operational
                requirements.
              </h2>
            </div>

            <div>
              <p>
                DGMA Technics Limited supports international cooperation by
                promoting comprehensive land defence capabilities covering
                weapons, armoured platforms, ammunition, launcher systems and
                battlefield support equipment.
              </p>

              <p>
                The information presented on this website provides a high-level
                overview only. Detailed specifications, documentation and
                commercial information are available through our professional
                enquiry process.
              </p>
            </div>
          </div>
        </section>

        {/* ================= PRODUCTS ================= */}

        <section className="land-products" id="portfolio">
          <div className="container">
            <div className="section-heading">
              <span className="section-title">LAND DEFENCE PORTFOLIO</span>

              <h2>Core capability areas.</h2>

              <p>Explore our primary land defence capability sectors.</p>
            </div>

            <div className="land-product-grid">
              {landProducts.map((item) => (
                <article className="land-card" key={item.id}>
                  <div className="land-card-image">
                    <img src={item.image} alt={item.title} />

                    <div className="land-overlay"></div>

                    <span>{item.id}</span>
                  </div>

                  <div className="land-card-content">
                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                    <ul>
                      {item.products.map((product) => (
                        <li key={product}>{product}</li>
                      ))}
                    </ul>

                    <Link to="/contact" className="land-card-btn">
                      Contact Us for More Details →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= NOTICE ================= */}

        <section className="land-notice">
          <div className="container">
            <div className="notice-box">
              <span>Important Notice</span>

              <h2>
                Product information shown on this website is intentionally
                high-level.
              </h2>

              <p>
                Technical specifications, product catalogues, pricing,
                commercial proposals and controlled documentation are provided
                only through the appropriate professional enquiry process.
              </p>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}

export default LandSystems;
