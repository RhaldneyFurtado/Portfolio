import "./Hero.css";
import fotoPerfil from "../../assets/Foto_Perfil.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-texto">
        <p className="badge-local">
          SOFTWARE DEVELOPER | CABO DE SANTO AGOSTINHO - PE
        </p>

        <h1 className="saudacao">
          Olá! Seja Muito Bem Vindo. Eu sou Rhaldney Furtado
        </h1>
        <h2>Desenvolvedor Full Stack</h2>
        <p>
          Desenvolvedor Full Stack em formação, unindo mais de 11 anos de
          experiência em operações logísticas à criação de aplicações web
          responsivas, eficientes e automações em Python voltadas para resolver
          problemas reais.
        </p>
        <div className="hero-botoes">
          <a href="#projetos" className="btn-primario">
            Ver Projetos
          </a>
          <a
            href="https://github.com/RhaldneyFurtado"
            target="_blank"
            rel="noreferrer"
            className="btn-secundario"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="hero-imagem">
        <img src={fotoPerfil} alt="Rhaldney Furtado" />
      </div>
    </section>
  );
};

export default Hero;
