
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Globe2,
  ShieldCheck,
  Camera,
  FileText,
  Mail,
  MapPin,
} from "lucide-react";

const stories = [
  {
    category: "FLAGSHIP INVESTIGATION",
    title: "The 30% Promise: Women's Land Rights in Africa",
    description:
      "An investigation into commitments on women's access to land, ownership and economic opportunity.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
    label: "Investigation in development",
    href: "/promises",
  },
  {
    category: "PUBLIC ACCOUNTABILITY",
    title: "When Public Promises Meet Public Reality",
    description:
      "Examining the gap between institutional commitments and the experiences of the people they affect.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    label: "Editorial series",
    href: "/investigations",
  },
  {
    category: "PEOPLE & COMMUNITIES",
    title: "The Voices Behind the Numbers",
    description:
      "Documenting the people, communities and everyday realities behind development commitments.",
    image:
      "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1200&q=85",
    label: "Field stories",
    href: "/watch",
  },
];

const services = [
  {
    icon: Camera,
    title: "Investigative Films",
    description:
      "Visual investigations and documentary storytelling that examine important public-interest issues.",
  },
  {
    icon: FileText,
    title: "Investigative Journalism",
    description:
      "Research, reporting and evidence-led stories that bring important issues into public conversation.",
  },
  {
    icon: Globe2,
    title: "Broadcast & Interviews",
    description:
      "Conversations with leaders, institutions, experts and people whose experiences deserve to be heard.",
  },
  {
    icon: ShieldCheck,
    title: "Promise Accountability",
    description:
      "Tracking commitments, examining evidence and documenting progress through Promises Audit Africa.",
  },
];

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

export default function HomePage() {
  return (
    <main className="cms-home">
      {/* HERO */}
      <section className="cms-hero">
        <div className="cms-hero-image" />
        <div className="cms-hero-overlay" />

        <div className="container-main cms-hero-content">
          <div className="cms-hero-copy">
            <span className="cms-kicker cms-kicker-light">
              <span className="cms-kicker-line" />
              MEDIA • INVESTIGATIONS • DOCUMENTARIES
            </span>

            <h1>
              The story
              <br />
              doesn&apos;t end
              <br />
              <span>with a promise.</span>
            </h1>

            <p>
              We Audit Promises. We Ensure Completion. We Celebrate Keepers.

We track promises across Africa to ensure works are completed as promised — and we honor those who deliver.
            </p>

            <div className="cms-hero-actions">
              <Link
                href="/investigations"
                className="cms-button cms-button-gold"
              >
                Explore our investigations <ArrowRight size={17} />
              </Link>

              <Link href="/watch" className="cms-play-link">
                <span className="cms-play-circle">
                  <Play size={16} fill="currentColor" />
                </span>
                Discover our stories
              </Link>
            </div>
          </div>

          <div className="cms-hero-bottom">
            <span>DOCUMENTING INTEGRITY. DEMANDING ACCOUNTABILITY.</span>
            <span>BASED IN NIGERIA · STORIES WITHOUT BORDERS</span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="cms-intro section-padding">
        <div className="container-main cms-intro-grid">
          <div>
            <span className="eyebrow">WHO WE ARE</span>
            <h2 className="cms-section-heading">
              We document the distance between what is promised and what is
              delivered.
            </h2>
          </div>

          <div className="cms-intro-text">
            <p>
              Clint Multicom Services is a media and investigative film
              company committed to documenting promise keepers, examining
              public commitments and telling stories that contribute to a
              more accountable society.
            </p>

            <p>
              Through investigative reporting, documentary films, interviews
              and special projects, we bring attention to the people,
              institutions and decisions shaping our world.
            </p>

            <Link href="/about" className="cms-text-link">
              Discover Clint Multicom Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED STORIES */}
      <section className="cms-featured section-padding">
        <div className="container-main">
          <div className="cms-section-top">
            <div>
              <span className="eyebrow">THE WORK WE DO</span>
              <h2 className="cms-section-heading">
                Stories that demand attention.
              </h2>
            </div>

            <Link href="/investigations" className="cms-text-link">
              View all investigations <ArrowRight size={16} />
            </Link>
          </div>

          <div className="cms-story-grid">
            {stories.map((story, index) => (
              <article className="cms-story-card" key={story.title}>
                <Link href={story.href} className="cms-story-image">
                  <div
                    className="cms-story-photo"
                    role="img"
                    aria-label={story.title}
                    style={{
                      backgroundImage: `url("${story.image}")`,
                    }}
                  />

                  <span className="cms-story-number">0{index + 1}</span>
                  <span className="cms-story-arrow">
                    <ArrowRight size={19} />
                  </span>
                </Link>

                <div className="cms-story-body">
                  <span className="cms-story-category">
                    {story.category}
                  </span>

                  <h3>
                    <Link href={story.href}>{story.title}</Link>
                  </h3>

                  <p>{story.description}</p>

                  <span className="cms-story-label">{story.label}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FLAGSHIP PROGRAMME */}
      <section className="cms-programme section-padding">
        <div className="container-main cms-programme-grid">
          <div className="cms-programme-visual">
            <div className="cms-programme-image" />

            <div className="cms-programme-stamp">
              <Globe2 size={27} />
              <span>
                AN AFRICAN
                <br />
                INVESTIGATION
              </span>
            </div>

            <div className="cms-programme-caption">
              <span>OUR SIGNATURE PROGRAMME</span>
              <strong>PROMISES AUDIT AFRICA</strong>
            </div>
          </div>

          <div className="cms-programme-copy">
            <span className="eyebrow">OUR FLAGSHIP PROGRAMME</span>

            <h2>
              Promises Audit
              <br />
              <span>Africa.</span>
            </h2>

            <p className="cms-programme-lead">
              Every promise deserves a follow-up. Every commitment deserves
              scrutiny. Every delivery deserves recognition.
            </p>

            <p>
              Promises Audit Africa investigates public commitments made by
              individuals, governments, institutions and organisations. We
              follow the evidence, examine progress and document what happens
              after the announcement.
            </p>
<p className="cms-programme-lead">
Promises Audit Africa was founded on a triple mandate:
            </p>
            <div className="cms-programme-points">
              <div>
                <ShieldCheck size={19} />
                <span>To Track and Audit Promises</span>
              </div>
                <p>
              We track promises made by leaders, governments, institutions and individuals across Africa. We monitor timelines, verify evidence and audit progress on the ground.
            </p>
              <div>
                <FileText size={19} />
                <span>To Ensure Works Are Completed as Promised</span>
              </div>
                <p>
                  Beyond tracking, we follow up to ensure that projects, commitments and works are actually completed as promised. Accountability through verification.
                </p>
              <div>
                <Globe2 size={19} />
                <span>To Celebrate Promise Keepers</span>
              </div>
            </div>
              <p>
                When promises are kept and works are completed, we celebrate. We publicly honor and amplify those who keep their word to inspire a culture of integrity and promise-keeping across Africa.
              </p>

            <Link href="/promises" className="cms-button cms-button-dark">
              Explore Promises Audit Africa <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* AFRICA INVESTIGATION MAP */}
      <section className="cms-africa section-padding">
        <div className="container-main cms-africa-grid">
          <div className="cms-africa-copy">
            <span className="eyebrow">A CONTINENTAL PERSPECTIVE</span>

            <h2 className="cms-section-heading">
              Following the story across Africa.
            </h2>

            <p>
              Our planned field investigation network brings together
              country-level perspectives on commitments, institutions and
              people&apos;s lived experiences.
            </p>

            <p>
              The initial investigation focus includes 11 African countries.
              Locations indicate planned areas of inquiry, not completed
              investigations or verified findings.
            </p>

            <Link href="/promises" className="cms-text-link">
              Follow the investigation <ArrowRight size={16} />
            </Link>
          </div>

          <div className="cms-country-panel">
            <div className="cms-country-heading">
              <Globe2 size={21} />
              <div>
                <strong>AFRICA FIELD FOCUS</strong>
                <span>Initial investigation locations</span>
              </div>
            </div>

            <div className="cms-country-grid">
              {countries.map((country, index) => (
                <div className="cms-country" key={country}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {country}
                </div>
              ))}
            </div>

            <div className="cms-country-footer">
              <span>11 COUNTRIES</span>
              <span>AFRICA-WIDE INVESTIGATION AMBITION</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="cms-services section-padding">
        <div className="container-main">
          <div className="cms-section-top">
            <div>
              <span className="eyebrow">OUR MEDIA PRACTICE</span>
              <h2 className="cms-section-heading">
                Beyond the headlines.
              </h2>
            </div>

            <p className="cms-services-intro">
              We combine reporting, visual storytelling and public-interest
              investigations to make important stories impossible to ignore.
            </p>
          </div>

          <div className="cms-services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article className="cms-service-card" key={service.title}>
                  <span className="cms-service-index">0{index + 1}</span>
                  <Icon size={27} strokeWidth={1.5} />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ArrowRight className="cms-service-arrow" size={18} />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="cms-founder section-padding">
        <div className="container-main cms-founder-grid">
          <div className="cms-founder-photo">
            <Image
              src="/Mr%20Agbor%20Clinton.jpeg"
              alt="Agbor Clinton, Founder of Clint Multicom Services"
              width={700}
              height={850}
              className="cms-founder-image"
            />
          </div>

          <div className="cms-founder-copy">
            <span className="eyebrow">LEADERSHIP</span>

            <h2 className="cms-section-heading">
              A commitment to documenting the truth.
            </h2>

            <p>
              Founded by Agbor Clinton, Clint Multicom Services is driven by
              the conviction that accountability is essential to development
              and that integrity deserves to be documented.
            </p>

            <p>
              The company exists to follow important commitments beyond
              announcements, recognise meaningful delivery and create space
              for stories that can inspire a culture of responsibility.
            </p>

            <h3>Agbor Clinton</h3>
            <span className="cms-founder-role">
              FOUNDER · CLINT MULTICOM SERVICES
            </span>

            <Link href="/about" className="cms-text-link">
              More about our leadership <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* EDITORIAL PRINCIPLE */}
      <section className="cms-belief">
        <div className="container-main cms-belief-inner">
          <span className="eyebrow">OUR EDITORIAL PRINCIPLE</span>

          <h2>
            We do not just expose failure.
            <br />
            <span>We honour delivery.</span>
          </h2>

          <p>We Track. We Verify. We Celebrate.</p>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="cms-contact section-padding">
        <div className="container-main cms-contact-inner">
          <div>
            <span className="eyebrow">HAVE A STORY THAT MATTERS?</span>

            <h2 className="cms-section-heading">
              Let&apos;s put important stories in the spotlight.
            </h2>

            <p>
              Contact our team with story ideas, interview requests,
              documentary opportunities or partnership enquiries.
            </p>
          </div>

          <a
            href="mailto:hello@clintmulticomservices.com"
            className="cms-button cms-button-dark"
          >
            Contact the newsroom <Mail size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}