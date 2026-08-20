function AgentCard({ name, role, bio, photo }) {
  return (
    <article className="agentCard">
      <img src={photo} alt={`Foto de ${name}`} className="agentPhoto" />
      <h3>{name}</h3>
      <p className="agentRole">{role}</p>
      <p className="agentBio">{bio}</p>
    </article>
  );
}

export default AgentCard;