
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  MapPin,
  Search,
  ShieldCheck,
  FileText,
  Camera,
  Scale,
} from "lucide-react";

const countries = [
  "Nigeria",
  "Ghana",
  "Senegal",
  "Kenya",
  "Rwanda",
  "Uganda",
  "Malawi",
  "Zambia",
  "South Africa",
  "Ethiopia",
  "Botswana",
];

const investigations = [
  {
    number: "01",
    category: "Gender & Land Rights",
    title: "The 30% Promise: Are Women Getting Their Share of Land?",
    description:
      "An investigation into the African Union's 2009 commitment on women's access to land, examining how policy commitments translate into access, ownership and opportunity.",
    location: "Multi-country investigation",
    status: "Research focus",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85",
    href: "#research-focus",
  },
  {
    number: "02",
    category: "Community Stories",
    title: "The Stories Behind the Promises",
    description:
      "Beginning with community-level perspectives in Ikom, Cross River State, this research direction seeks to document lived experiences and examine commitments that affect everyday lives.",
    location: "Ikom, Cross River State, Nigeria",
    status: "Field research lead",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1400&q=85",
    href: "#community-research",
  },
  {
    number: "03",
    category: "Public Accountability",
    title: "From Public Commitments to Verifiable Results",
    description:
      "A continuing editorial focus on how institutions and individuals make commitments, what evidence demonstrates progress, and whether promised outcomes reach the people concerned.",
    location: "Across Africa",
    status: "Editorial focus",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1400&q=85",
    href: "/promises",
  },
];

export default function InvestigationsPage() {
  return (
    <main className="inv-page">
      <section className="inv-hero">
        <div className="inv-hero-image" />
        <div className="inv-hero-overlay" />

        <div className="inv-container inv-hero-content">
          <div className="inv-eyebrow">
            <span />
            THE INVESTIGATIONS DESK
          </div>

          <h1>
            Beyond the promise.
            <br />
            <span>Into the evidence.</span>
          </h1>

          <p>
            We investigate public commitments, follow the evidence and
            document what happens when promises meet reality.
          </p>

          <div className="inv-hero-actions">
            <a href="#featured-investigations" className="inv-button">
              Explore investigations <ArrowRight size={17} />
            </a>
            <Link href="/promises" className="inv-text-link">
              Explore the promise register <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        <div className="inv-hero-caption">
          <span>INDEPENDENT INVESTIGATION</span>
          <span>ACCOUNTABILITY THROUGH EVIDENCE</span>
        </div>
      </section>

      <section className="inv-intro inv-container">
        <div className="inv-intro-label">
          <span>01 / OUR APPROACH</span>
        </div>

        <div className="inv-intro-content">
          <h2>
            Every promise deserves
            <br />
            <span>to be examined.</span>
          </h2>

          <p>
            A public commitment is only the beginning. The real question is
            what follows: Was action taken? Who benefited? What changed? And
            what evidence supports the answer?
          </p>

          <p>
            Clint Multicom Services investigates these questions through
            research, interviews, field documentation and evidence
            verification. Our work recognises delivery as much as it examines
            failure.
          </p>
        </div>
      </section>

      <section
        className="inv-featured"
        id="featured-investigations"
      >
        <div className="inv-container">
          <div className="inv-section-heading">
            <div>
              <div className="inv-eyebrow inv-eyebrow-dark">
                <span />
                RESEARCH & FIELDWORK
              </div>
              <h2>Areas of investigation</h2>
              <p>
                Issues and research directions guiding our investigative work.
              </p>
            </div>
            <span className="inv-section-index">02 / THE DESK</span>
          </div>

          <div className="inv-investigation-grid">
            {investigations.map((item) => (
              <article className="inv-card" key={item.number}>
                <div className="inv-card-image">
                  <div
                    className="inv-card-photo"
                    style={{ backgroundImage: `url("${item.image}")` }}
                  />
                  <span className="inv-card-number">{item.number}</span>
                  <span className="inv-card-status">{item.status}</span>
                </div>

                <div className="inv-card-body">
                  <span className="inv-card-category">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <div className="inv-card-location">
                    <MapPin size={14} />
                    {item.location}
                  </div>

                  <Link href={item.href} className="inv-card-link">
                    Explore focus <ArrowUpRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="inv-focus" id="research-focus">
        <div className="inv-container inv-focus-grid">
          <div className="inv-focus-copy">
            <div className="inv-eyebrow">
              <span />
              FEATURED RESEARCH DIRECTION
            </div>

            <h2>
              The 30% Promise:
              <br />
              <span>Land. Rights. Reality.</span>
            </h2>

            <p>
              In 2009, African Union leaders adopted a declaration that
              included a commitment to allocate at least 30% of documented
              land to women. We want to examine what that commitment means
              today, how implementation differs across countries and what
              women experience on the ground.
            </p>

            <div className="inv-focus-note">
              <ShieldCheck size={20} />
              <span>
                This is a proposed research focus. Country-level findings
                will be published only after investigation and verification.
              </span>
            </div>

            <a href="#country-coverage" className="inv-button">
              View research scope <ArrowRight size={17} />
            </a>
          </div>

          <div className="inv-focus-visual">
            <div className="inv-focus-image" />
            <div className="inv-focus-image-caption">
              <span>LAND & GENDER EQUALITY</span>
              <span>AFRICA / RESEARCH SERIES 001</span>
            </div>
          </div>
        </div>
      </section>

      <section className="inv-countries" id="country-coverage">
        <div className="inv-container">
          <div className="inv-country-heading">
            <div>
              <div className="inv-eyebrow inv-eyebrow-dark">
                <span />
                INITIAL RESEARCH SCOPE
              </div>
              <h2>Across borders. Beyond headlines.</h2>
              <p>
                The initial research direction identifies 11 African
                countries for potential investigation and engagement.
                Inclusion here indicates planned scope, not completed
                fieldwork.
              </p>
            </div>

            <div className="inv-country-icon">
              <Globe2 size={36} strokeWidth={1.2} />
            </div>
          </div>

          <div className="inv-country-list">
            {countries.map((country, index) => (
              <div className="inv-country-item" key={country}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{country}</strong>
                <ArrowUpRight size={15} />
              </div>
            ))}
          </div>

          <div className="inv-country-footnote">
            <MapPin size={16} />
            <span>
              Initial country coverage is subject to research access,
              available evidence and fieldwork arrangements.
            </span>
          </div>
        </div>
      </section>

      <section className="inv-method">
        <div className="inv-container">
          <div className="inv-method-heading">
            <div className="inv-eyebrow">
              <span />
              OUR EDITORIAL METHOD
            </div>
            <h2>
              We don't just report
              <br />
              <span>what is said.</span>
            </h2>
          </div>

          <div className="inv-method-grid">
            <div className="inv-method-item">
              <Search size={25} />
              <span>01</span>
              <h3>Investigate</h3>
              <p>
                Identify commitments, examine context and ask the questions
                that matter.
              </p>
            </div>

            <div className="inv-method-item">
              <FileText size={25} />
              <span>02</span>
              <h3>Document</h3>
              <p>
                Gather records, interviews, field observations and supporting
                material.
              </p>
            </div>

            <div className="inv-method-item">
              <ShieldCheck size={25} />
              <span>03</span>
              <h3>Verify</h3>
              <p>
                Assess evidence carefully and distinguish verified facts from
                claims and unanswered questions.
              </p>
            </div>

            <div className="inv-method-item">
              <Camera size={25} />
              <span>04</span>
              <h3>Broadcast</h3>
              <p>
                Present findings through documentary storytelling, interviews
                and accessible reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="inv-community" id="community-research">
        <div className="inv-container inv-community-inner">
          <div>
            <div className="inv-eyebrow">
              <span />
              BE PART OF THE STORY
            </div>
            <h2>
              Have a promise
              <br />
              <span>we should investigate?</span>
            </h2>
            <p>
              Share a public commitment, supporting documents, a relevant
              experience or a lead that deserves independent examination.
            </p>
          </div>

          <div className="inv-community-actions">
            <Link href="/contact" className="inv-button">
              Contact our team <ArrowRight size={17} />
            </Link>
            <Link href="/promises" className="inv-community-link">
              Visit Promises Audit Africa <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
