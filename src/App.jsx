import { Routes, Route } from "react-router-dom";
import "./style/Typography.css";
import "./style/App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Apartments from "./pages/apartments/Apartments";
import Welcome from "./pages/welcome/Welcome";
import History from "./pages/history/History";
import Agents from "./pages/agents/Agents";
import ContactSection from "./pages/contact/Contact";
import Menu from "./pages/menu/Menu";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="mainApp">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/pisos" element={<Apartments />} />
          <Route path="/historia" element={<History />} />
          <Route path="/agentes" element={<Agents />} />
          <Route path="/contacto" element={<ContactSection />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
