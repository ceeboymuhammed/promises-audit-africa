
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Search,
  Camera,
  FileCheck2,
  Globe2,
  Target,
  Eye,
  HeartHandshake,
} from "lucide-react";

const principles = [
  {
    icon: Search,
    number: "01",
    title: "Investigate thoroughly",
    description:
      "We examine public commitments, ask difficult questions and pursue the context behind every story.",
  },
  {
    icon: FileCheck2,
    number: "02",
    title: "Verify before publishing",
    description:
      "We assess documents, testimony and other evidence. Claims are not presented as established facts without appropriate verification.",
  },
  {
    icon: Camera,
    number: "03",
    title: "Document with purpose",
    description:
      "We use film, interviews, photography and reporting to make important public-interest stories accessible.",
  },
  {
    icon: HeartHandshake,
    number: "04",
    title: "Recognise delivery",
    description:
      "Accountability is not only about failure. We also document progress and celebrate individuals and institutions that keep their word.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-image" />
        <div className="about-hero-overlay" />

        <div className="about-container about-hero-content">
          <div className="about-eyebrow">
            <span />
            ABOUT CLINT MULTICOM SERVICES
          </div>

          <h1>
            Documenting
            <br />
            <span>those who deliver.</span>
          </h1>

          <p>
            We are a media and investigative film company with a singular
            mandate: documenting promise keepers. We track promises, verify
            delivery and celebrate those who keep their word.
          </p>

          <a href="#our-story" className="about-primary-button">
            Discover our story <ArrowRight size={17} />
          </a>
        </div>

        <div className="about-hero-caption">
          <span>WE TRACK.</span>
          <span>WE VERIFY.</span>
          <span>WE CELEBRATE.</span>
        </div>
      </section>

      <section className="about-story" id="our-story">
        <div className="about-container about-story-grid">
          <div className="about-story-label">
            <span>01 / WHO WE ARE</span>
            <div className="about-story-mark">
              <Image
                src="/logo.jpg"
                alt="Clint Multicom Services logo"
                width={130}
                height={130}
                className="about-logo"
              />
            </div>
          </div>

          <div className="about-story-copy">
            <h2>
              A promise is a beginning.
              <br />
              <span>Delivery is the story.</span>
            </h2>

            <p>
              Clint Multicom Services is a media and investigative film
              company focused on the relationship between public commitments
              and real-world outcomes.
            </p>

            <p>
              Across communities, institutions and countries, important
              promises are made every day. Some lead to meaningful change.
              Others remain unfulfilled. Many deserve closer examination.
            </p>

            <p>
              Our work is to follow those commitments, document the evidence,
              listen to the people affected and tell the story responsibly.
              We believe that keeping one's word deserves recognition and
              that public accountability requires more than headlines.
            </p>
          </div>
        </div>
      </section>

      <section className="about-mandate">
        <div className="about-container about-mandate-grid">
          <div className="about-mandate-copy">
            <div className="about-eyebrow">
              <span />
              OUR MANDATE
            </div>

            <h2>
              Making promises
              <br />
              <span>accountable.</span>
            </h2>

            <p>
              We use investigative research, documentary storytelling,
              interviews and field reporting to examine commitments made by
              individuals, institutions, governments and organisations.
            </p>

            <p>
              Our work seeks to establish what was promised, what action was
              taken, what evidence exists and what outcomes people can
              actually experience.
            </p>
          </div>

          <div className="about-mandate-points">
            <div className="about-mandate-point">
              <Target size={25} />
              <div>
                <h3>Our mission</h3>
                <p>
                  To document commitments and their outcomes through
                  independent, evidence-led media and investigative work.
                </p>
              </div>
            </div>

            <div className="about-mandate-point">
              <Eye size={25} />
              <div>
                <h3>Our vision</h3>
                <p>
                  A society where promises are taken seriously, delivery is
                  visible and accountability becomes part of public culture.
                </p>
              </div>
            </div>

            <div className="about-mandate-point">
              <Globe2 size={25} />
              <div>
                <h3>Our outlook</h3>
                <p>
                  To tell stories that matter locally while examining
                  commitments and outcomes across Africa and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-founder">
        <div className="about-container about-founder-grid">
          <div className="about-founder-photo">
            <Image
              src="/Mr%20Agbor%20Clinton.jpeg"
              alt="Agbor Clinton, founder of Clint Multicom Services"
              fill
              sizes="(max-width: 700px) 100vw, 45vw"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
            <span>FOUNDING LEADERSHIP</span>
          </div>

          <div className="about-founder-copy">
            <div className="about-eyebrow about-dark-eyebrow">
              <span />
              MEET THE FOUNDER
            </div>

            <h2>
              Agbor
              <br />
              <span>Clinton.</span>
            </h2>

            <div className="about-founder-role">
              Broadcaster | Sports Journalist | Investigative Reporter | Documentarian
            </div>

            <p>
              Agbor Clinton Ayuk is a seasoned broadcaster with over two decades of experience at the forefront of Africa's media landscape.
            </p>

            <p>
              From the pinnacle of sports broadcasting to the heart of human stories, his voice has become synonymous with credibility, depth and passion. He has covered several World Cups across different sporting disciplines, bringing live action and insight to millions across the continent.
            </p>

            <p>
              Beyond sports, Clinton has distinguished himself through fearless investigative reporting in politics and humanitarian affairs and is a respected commentator on national issues.
            </p>
              <p>
                Above all, telling human stories remains his greatest delight.
              </p>

              <p> He is the Founder of Clint MultiCom Services and Lead Producer and Presenter of Promises Audit Africa.
              </p>

              <p>
                Promises Audit Programme has a clear objective: To track promises made across Africa, to audit and ensure that works are completed as promised, and to celebrate promise keepers who deliver on their word.
            </p>
             <p>
                Today, he is fulfilling his promise of documentary storytelling — tracking, auditing, ensuring completion and celebrating integrity across Africa.
              </p>
            <Link href="/contact" className="about-inline-link">
              Contact the company <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="about-principles">
        <div className="about-container">
          <div className="about-principles-heading">
            <div className="about-eyebrow about-dark-eyebrow">
              <span />
              HOW WE WORK
            </div>

            <h2>
              Our principles.
              <br />
              <span>Our responsibility.</span>
            </h2>

            <p>
              Credible storytelling requires discipline. These principles
              guide how we approach investigations and media production.
            </p>
          </div>

          <div className="about-principles-grid">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article className="about-principle" key={principle.number}>
                  <div className="about-principle-top">
                    <Icon size={27} strokeWidth={1.4} />
                    <span>{principle.number}</span>
                  </div>

                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-flagship">
        <div className="about-container about-flagship-grid">
          <div className="about-flagship-copy">
            <div className="about-eyebrow">
              <span />
              OUR FLAGSHIP PROGRAMME
            </div>

            <h2>
              Promises Audit
              <br />
              <span>Africa.</span>
            </h2>

            <p>
              Promises Audit Africa is the flagship accountability programme
              of Clint Multicom Services. It provides a platform for tracking
              commitments, examining progress, reviewing evidence and
              recognising verified delivery.
            </p>

            <p>
              It is where our central mandate becomes a structured public
              accountability initiative.
            </p>

            <Link href="/promises" className="about-primary-button">
              Explore Promises Audit Africa <ArrowRight size={17} />
            </Link>
          </div>

          <div className="about-flagship-visual">
            <div className="about-flagship-visual-inner">
              <span>THE FLAGSHIP PROGRAMME</span>
              <strong>
                PROMISES
                <br />
                AUDIT
                <br />
                AFRICA
              </strong>
              <small>TRACK. VERIFY. RECOGNISE.</small>
            </div>
          </div>
        </div>
      </section>

      <section className="about-closing">
        <div className="about-container about-closing-inner">
          <div>
            <div className="about-eyebrow">
              <span />
              THE WORK CONTINUES
            </div>

            <h2>
              Every promise has
              <br />
              <span>a story. Let's tell it.</span>
            </h2>

            <p>
              Partner with us, share a story, suggest an investigation or
              help document a commitment that deserves attention.
            </p>
          </div>

          <div className="about-closing-actions">
            <Link href="/contact" className="about-primary-button">
              Get in touch <ArrowRight size={17} />
            </Link>

            <Link href="/investigations" className="about-closing-link">
              Explore investigations <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
