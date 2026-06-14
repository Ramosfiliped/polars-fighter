import "./Modalities.css";
import heroImage from "../../assets/jiujitsu.png"

import PageHero from "../../components/PageHero/PageHero"
const modalities = [
  {
    title: "Jiu-Jitsu",
    description:
      "Desenvolva técnica, disciplina e autoconfiança através da arte suave. Treinamento para iniciantes, defesa pessoal e competição.",
    icon: "🥋",
  },
  {
    title: "Muay Thai",
    description:
      "Melhore seu condicionamento físico e aprenda uma das artes marciais mais eficientes do mundo.",
    icon: "🥊",
  },
  {
    title: "Karatê",
    description:
      "Fortaleça corpo e mente com uma arte marcial tradicional focada em disciplina, respeito e desenvolvimento pessoal.",
    icon: "👊",
  },
  {
    title: "MMA",
    description:
      "Treinamento completo combinando luta em pé, quedas e solo para evolução física e técnica.",
    icon: "🔥",
  },
];

export default function Modalities() {
  return (
    <div className="modalities-page">
      <PageHero
        image={heroImage}
        title="Nossas Modalidades"
        subtitle="Escolha a modalidade que mais combina com seus objetivos e
            comece sua evolução hoje."
      />

      <section className="modalities-section">
        {modalities.map((modality) => (
          <article
            key={modality.title}
            className="modality-card"
          >
            <span className="modality-icon">
              {modality.icon}
            </span>

            <h2>{modality.title}</h2>

            <p>{modality.description}</p>

            <button>
              Saiba Mais
            </button>
          </article>
        ))}
      </section>

      <section className="cta-section">
        <h2>
          Pronto para começar?
        </h2>

        <p>
          Agende sua aula experimental e conheça nosso centro de treinamento.
        </p>

        <a
          href="https://wa.me/5531989090839"
          target="_blank"
          rel="noreferrer"
          className="cta-button"
        >
          Aula Experimental
        </a>
      </section>
    </div>
  );
}