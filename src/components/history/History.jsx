import "./History.css";

const stats = [
  { id: 1, value: '10+', label: 'Años de experiencia' },
  { id: 2, value: '500+', label: 'Estudiantes alojados' },
  { id: 3, value: '150+', label: 'Pisos gestionados' },
  { id: 4, value: '98%', label: 'Clientes satisfechos' },
];

function History() {
  return (
    <section id="aboutUs" className="history">
      <div className="sectionContainer">
        <p className="kicker">Sobre nosotros</p>
        <h2>Nuestra historia</h2>
        <p className="historyText">
          Desde 2015, en Coliving Campus nos dedicamos a conectar a estudiantes con
          pisos compartidos de calidad en Salamanca. Lo que empezó como un
          pequeño proyecto entre amigos que sabían lo difícil que es
          encontrar piso siendo estudiante, se ha convertido en la
          inmobiliaria de confianza para cientos de estudiantes cada año.
          Cuidamos cada detalle, desde la ubicación hasta la convivencia,
          para que tu experiencia universitaria empiece con buen pie.
        </p>
        <div className="statsGrid">
          {stats.map((stat) => (
            <div key={stat.id} className="statItem">
              <span className="statValue">{stat.value}</span>
              <span className="statLabel">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default History;