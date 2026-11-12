
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  Film,
  Mic2,
  Globe2,
  Clock3,
  Clapperboard,
} from "lucide-react";

const programmes = [
  {
    number: "01",
    category: "DOCUMENTARY",
    title: "The 30% Promise",
    description:
      "An investigative documentary exploring women's access to land and the gap between public commitments and lived realities.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
    status: "IN DEVELOPMENT",
  },
  {
    number: "02",
    category: "FIELD REPORT",
    title: "Voices from the Community",
    description:
      "Stories from people whose lives are shaped by the decisions, policies and promises made around them.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85",
    status: "UPCOMING",
  },
  {
    number: "03",
    category: "INTERVIEWS",
    title: "The Accountability Conversation",
    description:
      "Conversations with leaders, institutions, experts and citizens about commitments and measurable results.",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=85",
    status: "UPCOMING",
  },
];

const categories = [
  {
    icon: Film,
    title: "Documentaries",
    description: "In-depth films examining commitments, institutions and real-world outcomes.",
  },
  {
    icon: Mic2,
    title: "Interviews",
    description: "Direct conversations with decision-makers, experts and affected communities.",
  },
  {
    icon: Globe2,
    title: "Field Reports",
    description: "On-the-ground reporting from communities and countries across Africa.",
  },
  {
    icon: Clapperboard,
    title: "Special Features",
    description: "Original stories, explainers and editorial productions.",
  },
];

export default function WatchPage() {
  return (
    <main className="watch-page">
      <section className="watch-hero">
        <div className="watch-hero-image" />
        <div className="watch-hero-overlay" />

        <div className="watch-container watch-hero-content">
          <div className="watch-eyebrow">
            <span />
            CLINT MULTICOM BROADCAST
          </div>

          <p className="watch-overline">STORIES THAT DEMAND ATTENTION</p>

          <h1>
            Watch beyond
            <br />
            <span>the headlines.</span>
          </h1>

          <p className="watch-hero-description">
            Documentaries, interviews and investigative films that examine
            public commitments, amplify community voices and bring evidence
            into focus.
          </p>

          <a href="#programmes" className="watch-primary-button">
            Explore our programmes <ArrowRight size={17} />
          </a>
        </div>

        <div className="watch-hero-bottom">
          <span>ORIGINAL PRODUCTIONS</span>
          <span>DOCUMENTARY / INTERVIEWS / FIELD REPORTS</span>
        </div>
      </section>

      <section className="watch-featured" id="programmes">
        <div className="watch-container">
          <div className="watch-section-heading">
            <div>
              <div className="watch-eyebrow watch-dark-eyebrow">
                <span />
                FEATURED PRODUCTION
              </div>
              <h2>Stories in development</h2>
              <p>
                Investigative projects and original productions being
                developed by our editorial team.
              </p>
            </div>
            <span className="watch-section-number">01 / PRODUCTIONS</span>
          </div>

          <div className="watch-feature-grid">
            <article className="watch-feature-main">
              <div className="watch-feature-image">
                <div className="watch-feature-photo" />
                <span className="watch-production-label">
                  FEATURED PROJECT
                </span>
                <span className="watch-play-indicator">
                  <Play size={23} fill="currentColor" />
                </span>
              </div>

              <div className="watch-feature-info">
                <div className="watch-category">INVESTIGATIVE DOCUMENTARY</div>
                <h3>The 30% Promise: Land, Rights and Reality</h3>
                <p>
                  What happens when a continental commitment meets the
                  realities of land ownership, access and women's rights?
                  This proposed documentary follows the questions, evidence
                  and experiences behind the commitment.
                </p>
                <div className="watch-project-status">
                  <span />
                  PROJECT IN DEVELOPMENT
                </div>
                <Link
                  href="/investigations"
                  className="watch-inline-link"
                >
                  Explore the investigation <ArrowUpRight size={17} />
                </Link>
              </div>
            </article>

            <div className="watch-side-projects">
              {programmes.slice(1).map((item) => (
                <article className="watch-side-card" key={item.number}>
                  <div
                    className="watch-side-image"
                    style={{ backgroundImage: `url("${item.image}")` }}
                  >
                    <span>{item.status}</span>
                  </div>
                  <div className="watch-side-info">
                    <div className="watch-category">{item.category}</div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="watch-categories">
        <div className="watch-container">
          <div className="watch-eyebrow">
            <span />
            OUR BROADCAST FORMATS
          </div>
          <h2>More than a news report.</h2>
          <p className="watch-category-intro">
            Different formats. One commitment: meaningful stories supported
            by research, reporting and evidence.
          </p>

          <div className="watch-category-grid">
            {categories.map((category, index) => {
              const Icon = category.icon;

              return (
                <article className="watch-category-card" key={category.title}>
                  <div className="watch-category-top">
                    <Icon size={27} strokeWidth={1.4} />
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <span className="watch-category-status">PROGRAMME FORMAT</span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="watch-editorial">
        <div className="watch-editorial-image" />
        <div className="watch-editorial-overlay" />

        <div className="watch-container watch-editorial-content">
          <div className="watch-eyebrow">
            <span />
            OUR EDITORIAL COMMITMENT
          </div>
          <h2>
            We don't just tell
            <br />
            <span>the story. We examine it.</span>
          </h2>
          <p>
            Every production begins with questions. We pursue records,
            engage relevant voices, examine claims and distinguish what is
            established from what remains unknown.
          </p>
          <Link href="/investigations" className="watch-primary-button">
            Discover our investigations <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="watch-coming">
        <div className="watch-container watch-coming-inner">
          <div>
            <div className="watch-eyebrow watch-dark-eyebrow">
              <span />
              THE NEXT BROADCAST
            </div>
            <h2>There is more to the story.</h2>
            <p>
              Our documentary and interview library will grow as productions
              are completed and verified material is ready for publication.
            </p>
          </div>

          <div className="watch-coming-card">
            <Clock3 size={26} />
            <span>PROGRAMME LIBRARY</span>
            <strong>Coming soon</strong>
            <p>New original productions are in development.</p>
          </div>
        </div>
      </section>

      <section className="watch-contact">
        <div className="watch-container watch-contact-inner">
          <div>
            <div className="watch-eyebrow">
              <span />
              WORK WITH OUR MEDIA TEAM
            </div>
            <h2>
              Have a story
              <br />
              <span>worth telling?</span>
            </h2>
            <p>
              Suggest a story, share an investigative lead, propose an
              interview or explore a production partnership.
            </p>
          </div>

          <Link href="/contact" className="watch-primary-button">
            Contact our team <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
