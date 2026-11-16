import "./Career.css";

const Career = () => {
  return (
    <section id="carreira" className="career">
      <div className="career-container">
        <span className="career-tag">TRAJETÓRIA PROFISSIONAL</span>
        <h2 className="career-titulo">Experiência Operacional</h2>
        <p className="career-subtitulo">
          Mais de 11 anos de solidez na JSL S/A, unindo disciplina com índices
          de qualidade, WMS-(Warenhouse Management System) e liderança
          situacional.
        </p>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-header">
              <h3>JSL S/A</h3>
              <span className="timeline-periodo">2019 – Atual</span>
            </div>
            <h4>Conferente de Carga e Descarga</h4>
            <p>
              Conferência física e sistêmica de cargas utilizando coletores de
              dados e sistema WMS-(Warenhouse Management System), rotinas
              administrativas com verificões rigorosas de documentos fiscais
              (NF-e e CT-e), lançamento de NF's no sistema para recebimento
              apoio aos motoristas e garantia de acuracidade nas operações de
              recebimento e expedição.
            </p>
            <p className="timeline-highlight">
              <strong>Liderança Situacional:</strong> Atuação com coordenação em
              direta de 2 auxiliares operacionais durante a execução das
              atividades, agindo como auxilio dos líderes e gestores assumindo
              total responsabilidade pela área de atuação, cumprimento das
              exigências específicas de cada cliente e padrões de qualidade.
            </p>
          </div>

          <div className="timeline-item">
            <div className="timeline-header">
              <h3>JSL S/A</h3>
              <span className="timeline-periodo">2015 – 2019</span>
            </div>
            <h4>Armazenista</h4>
            <p>
              Separação, expedição e organização física de estoque integrada ao
              sistema WMS, com rastreabilidade de lotes e aplicação rigorosa das
              metodologias FIFO, FEFO, LIFO e Curva ABC.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
