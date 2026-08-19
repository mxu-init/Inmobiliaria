import { Routes, Route } from "react-router-dom";
import "./style/App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Apartments from "./pages/apartments/Apartments";
import Welcome from "./pages/welcome/Welcome";
import History from "./pages/history/History";
import Agentes from "./pages/agents/Agentes";

import ContactSection from "./pages/contact/Contact";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="mainApp">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/pisos" element={<Apartments />} />
          <Route path="/historia" element={<History />} />
          <Route path="/agentes" element={<Agentes />} />
          <Route path="/contacto" element={<ContactSection />} />
          {/* <Route path="/recetas" element={<Recetas />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
