import "./PageHero.css";

export default function PageHero({
  image,
  title,
  subtitle,
  height = "50vh",
}) {
  return (
    <section
      className="page-hero"
      style={{
        backgroundImage: `url(${image})`,
        minHeight: height,
      }}
    >
      <div className="page-hero-overlay"></div>

      <div className="page-hero-content">
        <h1>{title}</h1>

        {subtitle && (
          <p>{subtitle}</p>
        )}
      </div>
    </section>
  );
}