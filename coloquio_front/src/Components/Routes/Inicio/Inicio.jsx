//Home.js
import Navbar from "../../Layout/NavBar/Navbar.jsx";
import Coloquio_image from "../../Images/logoColoquio.png";
const Inicio = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="image-container">
          <img className="mx-auto d-block" src={Coloquio_image} alt="" />
        </div>
        <p className="h2">
          La Facultad de Ingeniería Mecánica y Eléctrica, extiende una cordial
          invitación a participar en el primer Coloquio de Vinculación
          Profesional (CVP 2023), que tiene como finalidad brindar un espacio
          para identificar áreas de oportunidad de vinculación
          Empresa-Universidad, a través de la estancia profesional o laboral.
          <br />
          <p>
            El evento va dirigido a alumnos(as) y egresados(as) de la facultad,
            y se llevará a cabo del 7 al 9 de junio del presente año.
          </p>
        </p>
      </div>
    </div>
  );
};

export default Inicio;
