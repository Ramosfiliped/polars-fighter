import { useParams } from "react-router-dom";

import { units } from "../../data/units";

import "./UnitDetails.css";

const icons = {
  "Jiu-Jitsu": "🥋",
  "Muay Thai": "🥊",
  "Karatê": "👊",
  "MMA": "🔥",
};

export default function UnitDetails() {
  const { slug } = useParams();

  const unit = units.find(
    (u) => u.slug === slug
  );

  if (!unit) {
    return (
      <h1>
        Unidade não encontrada
      </h1>
    );
  }

  return (
    <div className="unit-details">

        <section
            className="unit-banner"
            style={{
            backgroundImage:
                `url(${unit.image})`,
            }}
        >
            <div className="unit-banner-overlay" />

            <div className="banner-content">
            <h1>{unit.name}</h1>

            <p>{unit.city}</p>
            </div>
        </section>

        <section className="unit-info">

            <div className="info-card">
            <h2>Sobre a Unidade</h2>

            <p>{unit.description}</p>
            </div>

            <div className="info-card">
            <h2>Endereço</h2>

            <p>{unit.address}</p>

            <p>{unit.neighborhood}</p>
            </div>

        </section>

        <section className="modalities-section">
            <h2>Modalidades Disponíveis</h2>

            <div className="modalities-tags">
                {unit.modalities.map((modality) => (
                <span
                    key={modality}
                    className="modality-tag"
                >
                    {icons[modality]} {modality}
                </span>
                ))}
            </div>
        </section>

      <section className="schedule-section">
        <h2>Horários das Turmas</h2>

        <div className="table-container">
            <table className="schedule-table">
            <thead>
                <tr>
                <th>Modalidade</th>
                <th>Dias</th>
                <th>Horário</th>
                <th>Professor</th>
                </tr>
            </thead>

            <tbody>
                {unit.schedule.map((classItem, index) => (
                <tr key={index}>
                    <td>{classItem.modality}</td>
                    <td>{classItem.days}</td>
                    <td>{classItem.time}</td>
                    <td>{classItem.instructor}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    </section>

    <section className="cta-section">
        <div className="cta-card">
            <span className="cta-badge">
            Aula Experimental Gratuita
            </span>

            <h2>
            Venha conhecer a {unit.name}
            </h2>

            <p>
            Treine com professores qualificados,
            conheça nossa estrutura e descubra a
            modalidade ideal para você.
            </p>

            <div className="cta-buttons">
            <a
                href={unit.whatsapp}
                target="_blank"
                rel="noreferrer"
            >
                Falar no WhatsApp
            </a>

            <a
                href={unit.maps}
                target="_blank"
                rel="noreferrer"
            >
                Como Chegar
            </a>
            </div>
        </div>
    </section>

    </div>
  );
}