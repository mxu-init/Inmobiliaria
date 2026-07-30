import React from 'react';
import { agentes } from './agentesData'; // O puedes declararlo arriba del componente
import './Agentes.css';

const Agentes = () => {
  return (
    <section className="agentes-section">
      <div className="agentes-header">
        <span className="subtitulo">Nuesto equipo --</span>
        <h2>Conoce a nuestros agentes</h2>
        <p>Un equipo cercano que te acompaña en cada paso para encontrar tu piso ideal.</p>
      </div>

      <div className="agentes-grid">
        {agentes.map((agente) => (
          <div className="agente-card" key={agente.id}>
            <div 
              className="agente-avatar" 
              style={{ backgroundColor: agente.colorCirculo }}
            >
              {agente.iniciales}
            </div>
            
            <h3>{agente.nombre}</h3>
            <span className="agente-cargo">Cargo: {agente.cargo}</span>
            <p className="agente-descripcion">
              <strong>Descripción:</strong> {agente.descripcion}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Agentes;