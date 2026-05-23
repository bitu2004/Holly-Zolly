import './FeatureStrip.css';

export default function FeatureStrip({ features }) {
  return (
    <div className="feature-strip">
      {features.map((feature) => (
        <article className="feature-card" key={feature.title}>
          <div className="feature-dot" aria-hidden="true" />
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </article>
      ))}
    </div>
  );
}
