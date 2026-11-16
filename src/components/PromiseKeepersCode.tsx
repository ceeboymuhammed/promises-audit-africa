
const principles = [
  {
    number: "01",
    title: "SAY IT — MEAN IT",
    description: "We don't promise what we cannot do.",
  },
  {
    number: "02",
    title: "DO IT — ON TIME",
    description: "A promise delayed is trust broken.",
  },
  {
    number: "03",
    title: "TRUST IS OUR NAME",
    description: "When we say it, we stand by it.",
  },
  {
    number: "04",
    title: "NO EXCUSE",
    description: "We take responsibility, we don't blame others.",
  },
  {
    number: "05",
    title: "KEEP IT EVEN WHEN IT'S HARD",
    description: "Real character is keeping your word.",
  },
];

export default function PromiseKeepersCode() {
  return (
    <>
      <section className="pkc-section">
        <div className="pkc-container">
          <div className="pkc-heading">
            <span className="pkc-eyebrow">THE STANDARD WE LIVE BY</span>
            <h2>
              THE PROMISE
              <br />
              <span>KEEPERS CODE</span>
            </h2>
            <p>
              A promise is more than words. It is a commitment backed by
              responsibility, action and integrity.
            </p>
          </div>

          <div className="pkc-grid">
            {principles.map((principle) => (
              <article className="pkc-card" key={principle.number}>
                <span className="pkc-number">{principle.number}</span>
                <div className="pkc-card-line" />
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pkc-identity">
        <div className="pkc-container">
          <div className="pkc-identity-heading">
            <span className="pkc-eyebrow">OUR GUIDING PURPOSE</span>
            <h2>What drives us</h2>
          </div>

          <div className="pkc-identity-grid">
            <article>
              <span>01 / VISION</span>
              <h3>A trusted Africa where promises are kept.</h3>
            </article>

            <article>
              <span>02 / MISSION</span>
              <h3>To track, verify, and hold leaders accountable.</h3>
            </article>

            <article>
              <span>03 / MOTTO</span>
              <h3>A Promise Made Must Be A Promise Kept.</h3>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
