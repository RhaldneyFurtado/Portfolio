/* COMPONENTE FOOTER - CONTATOS DIRETOS */

import "./Footer.css";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer id="contato" className="footer">
      <div className="footer-container">
        <div className="footer-header">
          <span className="footer-tag">CONTATO</span>
          <h2 className="footer-titulo">Vamos conversar?</h2>
          <p className="footer-subtitulo">
            Estou disponível para oportunidades na área de desenvolvimento e
            novos projetos.
          </p>
        </div>

        <div className="footer-contatos">
          {/* WhatsApp */}
          <a
            href="https://wa.me/5581991142179?text=Ol%C3%A1%20Rhaldney,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar!"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-card whatsapp"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="footer-icon" />
            <div className="footer-card-text">
              <strong>WhatsApp</strong>
              <span>Mensagem direta</span>
            </div>
          </a>

          {/* E-mail */}
          <a
            href="mailto:rhaldney.furtado@gmail.com?subject=Contato%20via%20Portf%C3%B3lio"
            className="footer-card email"
            aria-label="E-mail"
          >
            <FaEnvelope className="footer-icon" />
            <div className="footer-card-text">
              <strong>E-mail</strong>
              <span>Enviar mensagem</span>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rhaldney-furtado"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-card linkedin"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="footer-icon" />
            <div className="footer-card-text">
              <strong>LinkedIn</strong>
              <span>Conectar perfil</span>
            </div>
          </a>
        </div>

        <div className="footer-bottom">
          <p>© {anoAtual} Rhaldney Furtado • Desenvolvedor Full Stack</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
