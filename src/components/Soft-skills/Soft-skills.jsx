import { useState } from "react";
import "./Soft-skills.css";

const SoftSkills = () => {
  const softSkillsData = [
    {
      title: "Visão Crítica de Processos",
      description:
        "Facilidade em identificar gargalos operacionais e traduzir regras de negócio complexas (como WMS e fluxos de estoque) em soluções de software eficientes.",
    },
    {
      title: "Foco no Cliente (User-Centric)",
      description:
        "Compromisso em entender a dor real do usuário para entregar aplicações web funcionais, intuitivas e que gerem valor real.",
    },
    {
      title: "Resiliência & Adaptabilidade",
      description:
        "Transição de carreira estruturada, unindo a resiliência e a disciplina do chão de fábrica com a agilidade do desenvolvimento web moderno.",
    },
    {
      title: "Resolução de Problemas Reais",
      description:
        "Capacidade analítica aprimorada na logística para diagnosticar falhas rapidamente e estruturar código limpo focado na eficiência.",
    },
    {
      title: "Colaboração & Trabalho em Equipe",
      description:
        "Vivência em sessões de estudo em dupla, projetos compartilhados e constante troca de conhecimento prático com outros desenvolvedores.",
    },
    {
      title: "Comunicação & Liderança",
      description:
        "Histórico sólido na condução de equipes operacionais e alinhamento de demandas, garantindo clareza na comunicação e assertividade nas entregas.",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 3;
  const maxIndex = Math.max(0, softSkillsData.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="soft-skills" className="soft-skills">
      <div className="soft-skills-content-wrapper">
        <div className="soft-skills-header">
          <div className="header-textos">
            <h2>Soft skills</h2>
            <p className="soft-skills-sub">
              Competências comportamentais e diferenciais desenvolvidos ao longo
              da minha trajetória.
            </p>
          </div>

          <button
            className="toggle-view-btn"
            onClick={() => {
              setShowAll(!showAll);
              setCurrentIndex(0);
            }}
          >
            {showAll ? "Ver em carrossel" : "Ver todas"}
          </button>
        </div>

        {showAll ? (
          <div className="soft-skills-grid">
            {softSkillsData.map((skill, index) => (
              <div className="soft-skill-card" key={index}>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="carousel-container-wrapper">
            <button className="carousel-btn prev-btn" onClick={handlePrev}>
              &#10094;
            </button>

            <div className="carousel-track-container">
              <div
                className="carousel-track"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                }}
              >
                {softSkillsData.map((skill, index) => (
                  <div className="soft-skill-card carousel-card" key={index}>
                    <h3>{skill.title}</h3>
                    <p>{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <button className="carousel-btn next-btn" onClick={handleNext}>
              &#10095;
            </button>
          </div>
        )}

        {!showAll && (
          <div className="carousel-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <span
                key={index}
                className={`dot ${currentIndex === index ? "active-dot" : ""}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SoftSkills;
