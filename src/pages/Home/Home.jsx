import "./Home.css";
import heroImage from "../../assets/images/hero.png";

export default function Home() {
  return (
    <main>
      <section className="hero"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="hero-tag">
            Centro de Treinamento de Alto Nível
          </span>

          <h1>
            Transforme seu corpo.
            <br />
            Fortaleça sua mente.
          </h1>

          <p>
            Jiu-Jitsu, Muay Thai e preparação física com
            professores experientes e ambiente profissional.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Aula Experimental
            </button>

            <button className="secondary-btn">
              Conheça o CT
            </button>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stat-card">
          <h2>+500</h2>
          <p>Alunos Treinados</p>
        </div>

        <div className="stat-card">
          <h2>10+</h2>
          <p>Anos de Experiência</p>
        </div>

        <div className="stat-card">
          <h2>30+</h2>
          <p>Turmas Semanais</p>
        </div>
      </section>

      <section className="modalities">
        <h2>Nossas Modalidades</h2>

        <div className="modalities-grid">
          <div className="modality-card">
            <h3>Jiu-Jitsu</h3>
            <p>
              Desenvolvimento técnico, defesa pessoal e competição.
            </p>
          </div>

          <div className="modality-card">
            <h3>Muay Thai</h3>
            <p>
              Condicionamento físico e técnicas de combate.
            </p>
          </div>
          
          <div className="modality-card">
            <h3>Karate</h3>
            <p>
              Disciplina, respeito e desenvolvimento pessoal.
            </p>
          </div>

          <div className="modality-card">
            <h3>MMA</h3>
            <p>
              Treinamento completo para evolução marcial.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}