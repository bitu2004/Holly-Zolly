import './TrustStrip.css';

const items = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
           strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" rx="2"/>
        <path d="M16 8h4l3 5v3h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    label: 'FREE\nDELIVERY',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
           strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
        <path d="M3 3v5h5"/>
      </svg>
    ),
    label: '7 DAY\nRETURN',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
           strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    label: '100%\nAUTHENTIC',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
           strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    label: 'SECURE\nPAYMENT',
  },
];

export default function TrustStrip() {
  return (
    <div className="trust-strip">
      <svg className="trust-strip__wave" viewBox="0 0 1200 120"
           preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,54 C150,14 300,94 450,54 C600,14 750,94 900,54 C1050,14 1150,74 1200,54"
              fill="none" stroke="#e8824a" strokeWidth="2" strokeDasharray="0"/>
        <path d="M0,66 C150,26 300,106 450,66 C600,26 750,106 900,66 C1050,26 1150,86 1200,66"
              fill="none" stroke="#e8824a" strokeWidth="2" strokeDasharray="0"/>
      </svg>

      <div className="trust-strip__inner">
        {items.map((item, i) => (
          <div key={i} className="trust-item">
            <div className="trust-item__circle">
              {item.icon}
              <p className="trust-item__label">
                {item.label.split('\n').map((line, j) => (
                  <span key={j}>{line}<br /></span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
