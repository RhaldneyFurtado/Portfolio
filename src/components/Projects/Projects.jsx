import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projetosData = [
  {
    id: 1,
    titulo: "Lista de Compras PWA",
    descricao:
      "Aplicação Web Progressiva para gerenciamento de listas de compras em tempo real, com autenticação e sincronização na nuvem.",
    tecnologias: ["React", "Tailwind CSS", "Firebase", "Vite"],
    github: "https://github.com/RhaldneyFurtado/Lista-de-compras-PWA",
    deploy: "https://rhaldneyfurtado.github.io/Lista-de-compras-PWA/",
  },
  {
    id: 2,
    titulo: "Site de Cafeteria",
    descricao:
      "Interface interativa para cafeteria com filtro de busca de produtos em tempo real e carrinho de compras dinâmico.",
    tecnologias: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/RhaldneyFurtado/Cafena",
    deploy: "https://rhaldneyfurtado.github.io/Cafena/",
  },
  {
    id: 3,
    titulo: "Gerenciador de Funcionários",
    descricao:
      "Aplicação desenvolvida em Python voltada para a gestão e controle de colaboradores via terminal, aplicando lógica de programação e manipulação de dados.",
    tecnologias: ["Python", "Lógica de Programação", "Terminal / CLI"],
    github: "https://github.com/RhaldneyFurtado/Gerenciador-de-funcion-rios",
    deploy: "",
  },
];

const Projects = () => {
  return (
    <section id="projetos" className="projects">
      <h2>Projetos em Destaque</h2>
      <p className="projects-sub">
        Aplicações desenvolvidas na prática unindo lógica de negócio, foco no
        usuário e código limpo.
      </p>

      <div className="projects-grid">
        {projetosData.map((projeto) => (
          <article key={projeto.id} className="project-card">
            <div className="project-content">
              <h3>{projeto.titulo}</h3>
              <p className="project-desc">{projeto.descricao}</p>

              <div className="project-tags">
                {projeto.tecnologias.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-links">
              <a
                href={projeto.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-project btn-code"
              >
                <FaGithub /> Código
              </a>

              {projeto.deploy && (
                <a
                  href={projeto.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-project btn-live"
                >
                  <FaExternalLinkAlt /> Ver Online
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
