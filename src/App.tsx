import { useEffect } from 'react'
import './App.css'
import founder1 from './assets/founder_1.jpeg'
import founder2 from './assets/founder_2.jpeg'
import palaflowLogo from './assets/palaflow_logo.jpeg'

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .78 0 1.74v20.52C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0z" />
  </svg>
)

function App() {
  useEffect(() => {
    const vanta = window.VANTA?.DOTS({
      el: '#vanta-background',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x20c6ff,
      color2: 0x20faff,
      showLines: false,
      backgroundColor: 0x050505,
    })

    return () => {
      if (vanta) {
        vanta.destroy()
      }
    }
  }, [])

  return (
    <main className="page">
      <div id="vanta-background" className="vanta-background" />

      <nav className="navbar">
        <div className="brand">
          <img src={palaflowLogo} alt="Palaflow logo" className="brand-mark" />
          <span>VF-Consultancy</span>
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#team">Team</a>
          <a href="#expertise">Expertise</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="badge">Former Palaflow · Founded by ex-Palantir team</div>

          <h1>Value. First.</h1>

          <p className="subtitle">
            VF-Consultancy helps organizations turn complex business visions into
            structured, efficient and consistent technology execution.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="primary-button">
              Start a conversation
            </a>
            <a href="#expertise" className="secondary-button">
              Explore expertise
            </a>
          </div>
        </div>

        <div className="hero-card">
          <p className="eyebrow">Core focus</p>
          <h2>Foundry / AIP Projects</h2>
          <p>
            Specialized support for organizations working with Palantir Foundry,
            AIP, operational workflows and data-driven transformation.
          </p>
        </div>
      </section>

      <section className="section" id="about">
        <p className="eyebrow">About VF-Consultancy</p>
        <h2>Structured execution for ambitious technology initiatives.</h2>
        <p>
          At VF-Consultancy, founded by an ex-Palantir team, we bring extensive
          experience with Foundry and AIP projects, supported by a team of
          specialized experts.
        </p>
        <p>
          Our goal is to deliver efficient and consistent results in a structured
          manner, helping clients bring their vision to life.
        </p>
      </section>

      <section className="section team-section" id="team">
        <p className="eyebrow">Team</p>
        <h2>Led by experienced operators from Palantir and enterprise technology.</h2>

        <p className="team-intro">
          VF-Consultancy brings together hands-on experience in product
          engineering, operations, enterprise transformation and Palantir
          Foundry/AIP delivery.
        </p>

        <div className="founders-photo-grid">
          <article className="founder-profile-card">
            <div className="founder-photo-wrapper">
              <img
                src={founder1}
                alt="Gerusa Pereira Gravina"
                className="founder-photo"
              />
            </div>

            <div className="founder-profile-content">
              <span className="founder-role">Operations Leader / COO</span>
              <h3>Gerusa Pereira Gravina</h3>
              <p>
                Operations and project leadership executive focused on
                structured delivery, process optimization and Foundry-based
                client transformation.
              </p>
              <a
                href="https://www.linkedin.com/in/gerusagravina/"
                className="founder-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Gerusa Pereira Gravina on LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </article>

          <article className="founder-profile-card">
            <div className="founder-photo-wrapper">
              <img
                src={founder2}
                alt="Henrique Valer"
                className="founder-photo"
              />
            </div>

            <div className="founder-profile-content">
              <span className="founder-role">Investor / Owner</span>
              <h3>Henrique Valer</h3>
              <p>
                Product engineering and digital transformation leader with
                experience across Palantir, SAP and complex enterprise
                technology programs.
              </p>
              <a
                href="https://www.linkedin.com/in/hvaler/"
                className="founder-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Henrique Valer on LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="expertise">
        <p className="eyebrow">Expertise</p>
        <h2>Where VF can help</h2>

        <div className="cards">
          <div className="card">
            <h3>Foundry & AIP Delivery</h3>
            <p>
              Support for Palantir Foundry and AIP initiatives, from project
              structuring to implementation and operational adoption.
            </p>
          </div>

          <div className="card">
            <h3>Data & Business Ontology</h3>
            <p>
              Helping teams organize data around real business entities,
              workflows and decisions instead of isolated technical layers.
            </p>
          </div>

          <div className="card">
            <h3>Operational Workflows</h3>
            <p>
              Translating business requirements into clear, reliable and
              scalable workflows that support day-to-day operations.
            </p>
          </div>

          <div className="card">
            <h3>Technology Consulting</h3>
            <p>
              Strategic support for companies that need experienced technical
              guidance to move faster with clarity and control.
            </p>
          </div>
        </div>
      </section>

      <section className="section approach" id="approach">
        <p className="eyebrow">Approach</p>
        <h2>From vision to consistent execution.</h2>

        <div className="steps">
          <div className="step">
            <span>01</span>
            <h3>Understand the vision</h3>
            <p>
              Clarify the business goals, operational context and expected
              outcomes before jumping into implementation.
            </p>
          </div>

          <div className="step">
            <span>02</span>
            <h3>Structure the path</h3>
            <p>
              Break complex initiatives into manageable workstreams, with clear
              priorities, ownership and delivery checkpoints.
            </p>
          </div>

          <div className="step">
            <span>03</span>
            <h3>Deliver with consistency</h3>
            <p>
              Execute with a focus on quality, reliability and measurable value
              for the organization.
            </p>
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <p className="eyebrow">Contact</p>
        <h2>Ready to bring your vision to life?</h2>
        <p>
          Get in touch with VF-Consultancy to discuss how structured technology
          execution can support your business goals.
        </p>
      </section>

      <footer>
        <span>VF-Consultancy · Value. First.</span>
        <span className="footer-note">
          Concept landing page prototype. Not an official VF-Consultancy website.
        </span>
      </footer>
    </main>
  )
}

export default App