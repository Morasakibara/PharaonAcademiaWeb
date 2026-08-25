import AnimatedCounter from "./AnimatedCounter";

export default function StatsBar() {
  return (
    <section className="statbar">
      <div className="wrap">
        <div className="stat-item">
          <b>
            <AnimatedCounter end={4} duration={1200} />
          </b>
          <span>Filières professionnalisantes</span>
        </div>
        <div className="stat-item">
          <b>
            <AnimatedCounter end={12} duration={1500} />
          </b>
          <span>Mois de formation intensive</span>
        </div>
        <div className="stat-item">
          <b>
            <AnimatedCounter end={100} suffix="%" duration={1800} />
          </b>
          <span>Ateliers &amp; projets pratiques</span>
        </div>
        <div className="stat-item">
          <b>1ère</b>
          <span>Promotion — places limitées</span>
        </div>
      </div>
    </section>
  );
}
