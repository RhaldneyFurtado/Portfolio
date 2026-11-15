import "./About.css";

const About = () => {
  return (
    <section id="sobre" className="about">
      <div className="about-container">
        <span className="about-tag">SOBRE MIM</span>
        <h2 className="about-titulo">
          Desenvolvedor fullstack com visão operacional e foco em entregas
          reais.
        </h2>

        <div className="about-conteudo">
          <div className="about-texto">
            <p>
              Estudante de Análise e Desenvolvimento de Sistemas, sou focado na
              criação de aplicações web responsivas, landing pages, sites,
              sistemas em Python, consumo de APIs REST e automações voltadas
              para resolver problemas reais.
            </p>
            <p>
              Possuo mais de 11 anos de experiência sólida em operações
              logísticas — com atuação direta em sistemas WMS (Warehouse
              Management System), controle de estoque, inventários e rotinas
              administrativas. Essa bagagem me proporciona uma visão crítica
              profunda sobre regras de negócio, facilidade na identificação de
              gargalos e rápida adaptação para entregar soluções seguras e
              eficientes.
            </p>
            <p>
              Atualmente em transição de carreira para a tecnologia, somo essa
              vivência operacional a uma forte capacidade analítica,
              organização, visão de dono e foco total na satisfação e
              fidelização de clientes.
            </p>
          </div>

          <div className="formacao">
            <h3>Formação</h3>
            <p>
              Análise e Desenvolvimento de Sistemas - Uninter | Julho 2025 à
              Dezembro de 2027
            </p>
          </div>

          {/* Subtítulo para dar contexto aos cards */}
          <h3 className="pilares-titulo">Pilares & Diferenciais</h3>

          {/* Os cards como pilares de destaque */}
          <div className="about-cards">
            <div className="about-card">
              <h3>Full Stack & Python</h3>
              <p>Aplicações web e Automações</p>
            </div>

            <div className="about-card">
              <h3>+11 Anos</h3>
              <p>Experiência em Logística e WMS</p>
            </div>

            <div className="about-card">
              <h3>Visão de Negócio</h3>
              <p>Foco em gargalos e Eficiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
