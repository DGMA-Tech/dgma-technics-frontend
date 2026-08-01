import Layout from "../../../components/Layout/Layout";
import { Link } from "react-router-dom";
import "../Systems.css";
import electronicsProducts from "./electronicsProducts";

function ElectronicsSystems() {
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
              ELECTRONICS & COMMUNICATION CAPABILITY
            </p>

            <span className="land-tag">ELECTRONICS & COMMUNICATION CAPABILITY</span>

            <h1>
              ELECTRONICS &<span> COMMUNICATION SYSTEMS</span>
            </h1>

            <p>
              DGMA Technics Limited promotes advanced electronics and communication
              capabilities through internationally recognised manufacturers,
              supporting defence organisations, government agencies and communication
              partners with innovative technologies, engineering excellence and
              mission-ready solutions.
            </p>

            <a href="#portfolio" className="land-btn">
              Explore Portfolio →
            </a>
          </div>
        </section>

        {/* ================= ABOUT ================= */}

        <section className="land-about">
          <div className="container land-about-grid">
            <div>
              <span className="section-title">ELECTRONICS & COMMUNICATION CAPABILITY</span>

              <h2>
                Advanced electronics and communication technologies supporting modern defence and
                security operations.
              </h2>
            </div>

            <div>
              <p>
                Our electronics and communication capability portfolio includes military communication systems,
                electronic warfare solutions, radar and surveillance technologies, command and control systems,
                electro-optical sensors and cyber security solutions.
                maintenance solutions and ground support equipment.
              </p>

              <p>
                Information presented on this website provides a high-level
                overview of our electronics and communication capabilities. Detailed specifications,
                documentation and commercial information are available through
                our professional enquiry process.
              </p>
            </div>
          </div>
        </section>

        {/* ================= PRODUCTS ================= */}

        <section className="land-products" id="portfolio">
          <div className="container">
            <div className="section-heading">
              <span className="section-title">ELECTRONICS & COMMUNICATION PORTFOLIO</span>

              <h2>Electronics and communication capability sectors.</h2>

              <p>
                Explore our principal electronics and communication capability areas
                supporting defence and security operations.
              </p>
            </div>

            <div className="land-product-grid">
              {electronicsProducts.map((item) => (
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
              <span>Professional Information</span>

              <h2>
                Public information is intentionally presented at a high level.
              </h2>

              <p>
                Detailed technical specifications, commercial proposals, product
                documentation and capability information are available through
                our official enquiry process.
              </p>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}

        <section className="land-contact">
          <div className="container">
            <div className="land-contact-box">
              <span>CONTACT DGMA</span>

              <h2>
                Looking for more information about our electronics and communication capabilities?
              </h2>

              <p>
                Contact our team for detailed capability information, technical
                documentation and business enquiries regarding electronics and communication systems.
              </p>

              <Link to="/contact" className="land-btn">
                Contact Us →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default ElectronicsSystems;
