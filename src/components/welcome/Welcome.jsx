import "./Welcome.css";

function Welcome() {
  return (
    <section id="welcome" className="welcome">
      <div className="welcomeContainer">
        <p className="kicker">Bienvenido a</p>
        <h1 className="welcomeBrand">
          Coliving<span>Campus</span>
        </h1>
        <h2 className="welcomeSubtitle">Encuentra tu hogar ideal como estudiante</h2>
        <p className="welcomeText">
          Te ayudamos a encontrar el piso compartido perfecto, cerca de tu
          facultad y con la mejor compañía. Sin líos, sin sorpresas.
        </p>
        <div className="welcomeActions">
          <a href="#apartments" className="btn btnPrimary">Ver pisos disponibles</a>
          <a href="#aboutUs" className="btn btnSecondary">Conócenos</a>
        </div>
      </div>
    </section>
  );
}

export default Welcome;