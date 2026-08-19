import { agents } from "./agentsData";
import "./Agents.css";

const Agents = () => {
  return (
    <section id="agents" className="agentsSection">
      <div className="agentsHeader">
        <p className="kicker">Nuestro equipo</p>
        <h2 className="sectionTitle">Conoce a nuestros agentes</h2>
         <p className="bodyText">Un equipo cercano que te acompaña en cada paso para encontrar tu piso ideal.</p>
      </div>

      <div className="agentsGrid">
        {agents.map((agent) => (
          <div className="agentCard" key={agent.id}>
            <div
              className="agentAvatar"
              style={{ backgroundColor: agent.circleColor }}
            >
              {agent.initials}
            </div>

            <h3>{agent.name}</h3>
            <span className="agentRole">Cargo: {agent.role}</span>
            <p className="agentDescription">
              <strong>Descripción:</strong> {agent.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Agents;