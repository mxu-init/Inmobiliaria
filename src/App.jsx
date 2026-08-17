import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style/App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Apartaments from './components/apartaments/Apartaments';
import Welcome from './components/welcome/Welcome';
import History from './components/history/History';
// PENDIENTE DE COMPONENTES AGENTES Y RECETAS, SE DEBE PONER TANTO EN IMPORT COMO EN ROUTES


function App() {
    return (
        <BrowserRouter>
            <div className="app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Header />
                <main style={{ flex: 1, marginTop: '80px' }}>
                    <Routes>
                        <Route path="/" element={<Welcome />} />
                        <Route path="/pisos" element={<Apartaments />} />
                        <Route path="/historia" element={<History />} />
                        // PENDIENTE DE COMPONENTES AGENTES Y RECETAS, SE DEBE PONER TANTO EN IMPORT COMO EN ROUTES
                        {/* <Route path="/agentes" element={<Agents />} /> */}
                        {/* <Route path="/recetas" element={<Recetas />} /> */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;