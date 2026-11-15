import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <span className="logo">{"<Rhaldney Furtado 🚀>/"}</span>
        <ul className="nav-links">
          <li>
            <a href="#inicio">Perfil</a>
          </li>
          <li>
            <a href="#sobre">Sobre mim</a>
          </li>
          <li>
            <a href="#habilidades">Habilidades</a>
          </li>
          <li>
            <a href="#soft-skills">Soft skills</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#carreira">Carreira</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
