import Layout from "../../../components/Layout/Layout";
import { Link } from "react-router-dom";
import "../Systems.css";
import heavyMachineryProducts from "./heavyMachineryProducts";

function HeavyMachinery() {
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
              HEAVY MACHINERY CAPABILITY
            </p>

            <span className="land-tag">HEAVY MACHINERY CAPABILITY</span>

            <h1>
              HEAVY MACHINERY &<span> SUPPORT EQUIPMENT</span>
            </h1>

            <p>
              DGMA Technics Limited promotes a comprehensive range of heavy
              machinery and industrial equipment supporting defence,
              construction, infrastructure and engineering projects through
              internationally recognised manufacturers.
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
              <span className="section-title">HEAVY MACHINERY</span>

              <h2>
                Advanced heavy machinery for construction, engineering and
                industrial operations.
              </h2>
            </div>

            <div>
              <p>
  Our heavy machinery portfolio includes construction equipment,
  earth moving machinery, lifting solutions, material handling
  systems, mining equipment and engineering support machinery.
</p>

              <p>
  Information presented on this website provides a high-level
  overview of our capabilities. Detailed specifications,
  technical documentation and commercial information are
  available through our professional enquiry process.
</p>
            </div>
          </div>
        </section>

        {/* ================= PRODUCTS ================= */}

        <section className="land-products" id="portfolio">
          <div className="container">
            <div className="section-heading">
              <span className="section-title">
                HEAVY MACHINERY PORTFOLIO
              </span>

              <h2>Heavy Machinery and Support Equipment</h2>

              <p>
                Explore our principal heavy machinery and support equipment
                areas supporting construction, engineering and industrial operations.
              </p>
            </div>

            <div className="land-product-grid">
              {heavyMachineryProducts.map((item) => (
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


      </main>
    </Layout>
  );
}

export default HeavyMachinery;