import agents from '../../data/agentsData';
import AgentCard from '../../components/AgentCard';
import "./Agents.css";

function Agents() {
  return (
    <section id="agentes" className="agents">
      <div className="sectionContainer">
        <p className="kicker">Nuestro equipo</p>
        <h2>Conoce a nuestros agentes</h2>
        <p className="sectionSubtitle">
          Un equipo cercano que te acompaña en cada paso para encontrar tu piso ideal.
        </p>
        <div className="agentsGrid">
          {agents.map((agent) => (
            <AgentCard
              key={agent.id}
              name={agent.name}
              role={agent.role}
              bio={agent.bio}
              photo={agent.photo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Agents;