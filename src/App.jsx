import {Routes, Route } from "react-router-dom";
import './style/App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Apartaments from './pages/apartaments/Apartaments';
import Welcome from './pages/welcome/Welcome';
import History from './pages/history/History';
import Agentes from './pages/agents/Agentes';
// PENDIENTE DE COMPONENTES AGENTES Y RECETAS, SE DEBE PONER TANTO EN IMPORT COMO EN ROUTES


function App() {
    return (
        
            <div className="app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Header />
                <main style={{ flex: 1, marginTop: '80px' }}>
                    <Routes>
                        <Route path="/" element={<Welcome />} />
                        <Route path="/pisos" element={<Apartaments />} />
                        <Route path="/historia" element={<History />} />
                        <Route path="/agentes" element={<Agentes />} />
                        {/* <Route path="/recetas" element={<Recetas />} /> */}
                    </Routes>
                </main>
                <Footer />
            </div>
        
    );
}

export default App;