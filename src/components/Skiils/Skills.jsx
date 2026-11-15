import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaWindows,
} from "react-icons/fa";

const Skills = () => {
  return (
    <section id="habilidades" className="skills">
      <h2>Tecnologias organizadas por domínio</h2>
      <p className="skills-sub">
        Hard skills e ferramentas com foco nas tecnologias que uso no dia a dia.
      </p>

      <div className="skills-container-dominios">
        {/* Caixa 1: Linguagens, Marcação & Estilo */}
        <div className="dominio-card">
          <h3>Linguagens & Core</h3>
          <div className="skills-grid-interno">
            <div className="skill-item">
              <FaJs className="skill-icon js" />
              <span>JavaScript</span>
            </div>
            <div className="skill-item">
              <FaPython className="skill-icon python" />
              <span>Python</span>
            </div>
            <div className="skill-item">
              <FaHtml5 className="skill-icon html" />
              <span>HTML5</span>
            </div>
            <div className="skill-item">
              <FaCss3Alt className="skill-icon css" />
              <span>CSS3</span>
            </div>
          </div>
        </div>

        {/* Caixa 2: Frameworks, Libs e Ecossistema */}
        <div className="dominio-card">
          <h3>Frameworks e Libs</h3>
          <div className="skills-grid-interno">
            <div className="skill-item">
              <FaReact className="skill-icon react" />
              <span>React</span>
            </div>
            <div className="skill-item">
              <FaNodeJs className="skill-icon node" />
              <span>Node.js</span>
            </div>
          </div>
        </div>

        {/* Caixa 3: Ferramentas, Ambiente & Versionamento */}
        <div className="dominio-card">
          <h3>Ferramentas e Ambiente</h3>
          <div className="skills-grid-interno">
            <div className="skill-item">
              <FaWindows className="skill-icon windows" />
              <span>Windows</span>
            </div>

            {/* Ícone oficial do VS Code via Devicon */}
            <div className="skill-item">
              <i className="devicon-vscode-plain colored skill-icon"></i>
              <span>VS Code</span>
            </div>

            <div className="skill-item">
              <FaGitAlt className="skill-icon git" />
              <span>Git</span>
            </div>
            <div className="skill-item">
              <FaGithub className="skill-icon github" />
              <span>GitHub</span>
            </div>
            <div className="skill-item">
              <FaDatabase className="skill-icon firebase" />
              <span>Firebase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
