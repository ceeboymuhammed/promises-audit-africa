
import Link from "next/link";
import {
  Award,
  Handshake,
  ShieldCheck,
  FileCheck,
  ArrowRight,
  HeartHandshake,
  PlayCircle,
} from "lucide-react";

const awardPrinciples = [
  {
    number: "01",
    title: "Track the Promise",
    description:
      "We identify and document commitments made by leaders, institutions and organisations across Africa.",
    icon: FileCheck,
  },
  {
    number: "02",
    title: "Verify the Delivery",
    description:
      "We investigate the evidence, examine progress and establish whether promises have been fulfilled.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Celebrate Integrity",
    description:
      "We recognise those whose actions match their words and encourage a stronger culture of accountability.",
    icon: Award,
  },
];

export default function AwardsPage() {
  return (
    <main className="handshake-page">
      <section className="handshake-hero">
        <div className="handshake-container">
          <span className="handshake-eyebrow">
            PROMISES AUDIT AFRICA PRESENTS
          </span>

          <div className="handshake-hero-icon">
            <Handshake size={42} strokeWidth={1.4} />
          </div>

          <h1>
            THE
            <br />
            HANDSHAKE
            <br />
            <span>AWARD</span>
          </h1>

          <p className="handshake-hero-subtitle">
            Celebrating leaders who keep their promises.
          </p>

          <p className="handshake-hero-description">
            An annual celebration of trust, honour and integrity across Africa.
          </p>

          <Link href="/donations" className="handshake-gold-button">
            SUPPORT THE AWARD <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="handshake-introduction">
        <div className="handshake-container handshake-intro-grid">
          <div>
            <span className="handshake-eyebrow">THE MEANING</span>
            <h2>
              A handshake is more than a gesture. It is a promise.
            </h2>
          </div>

          <div className="handshake-intro-copy">
            <p>
              The Handshake Award is an annual celebration of leaders who
              keep their promises.
            </p>

            <p>
              Every year, Promises Audit tracks, verifies, and documents
              promises made by leaders across Africa. Those whose words match
              their actions are honoured with The Handshake — a symbol of
              trust, honour, and integrity.
            </p>

            <p>
              We celebrate them not just to reward them, but to encourage
              others. When we celebrate Promise Keepers, we inspire a new
              culture in Africa — where a promise is not just spoken, but kept.
            </p>
          </div>
        </div>
      </section>

      <section className="handshake-purpose">
        <div className="handshake-container">
          <div className="handshake-section-heading">
            <span className="handshake-eyebrow">OUR PURPOSE</span>
            <h2>Accountability that corrects, inspires and celebrates.</h2>
            <p>
              Our goal is not to condemn, but to correct and inspire.
            </p>
          </div>

          <div className="handshake-principles">
            {awardPrinciples.map((principle) => {
              const Icon = principle.icon;

              return (
                <article className="handshake-principle-card" key={principle.number}>
                  <span className="handshake-number">{principle.number}</span>
                  <div className="handshake-principle-icon">
                    <Icon size={25} strokeWidth={1.6} />
                  </div>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="handshake-documentary">
        <div className="handshake-container handshake-documentary-grid">
          <div className="handshake-documentary-symbol">
            <PlayCircle size={58} strokeWidth={1.2} />
            <span>THE POWER OF DOCUMENTARY</span>
          </div>

          <div>
            <span className="handshake-eyebrow">SHOWING THE TRUTH</span>
            <h2>Promises kept. Promises failed. The truth must be seen.</h2>

            <p>
              We carry documentaries that show both promises kept and promises
              failed — so the public will see the truth, and leaders will be
              motivated to do better.
            </p>

            <p>
              While we celebrate Promise Keepers, we also encourage those who
              are yet to complete their promises to do so. We believe that
              accountability should lead to improvement, not simply
              condemnation.
            </p>

            <Link href="/investigations" className="handshake-text-link">
              EXPLORE OUR DOCUMENTARIES <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="handshake-closing">
        <div className="handshake-container">
          <HeartHandshake size={42} strokeWidth={1.3} />
          <span className="handshake-eyebrow">THE HANDSHAKE AWARD</span>
          <h2>A Promise Made Must Be A Promise Kept.</h2>
          <p>
            Join us in building a trusted Africa where words are matched by
            action and integrity is recognised.
          </p>

          <div className="handshake-closing-actions">
            <Link href="/donations" className="handshake-gold-button">
              SUPPORT OUR WORK <ArrowRight size={17} />
            </Link>

            <Link href="/submit" className="handshake-outline-button">
              SUBMIT A PROMISE
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
