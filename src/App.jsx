import Header from './components/header/header';
import Footer from './components/footer/footer';
import Apartaments from './components/apartaments/Apartaments';

function App() {
    return (
        <div className="app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />

            {/* Espacio principal con los IDs de sección preparados */}
            <main style={{ flex: 1, marginTop: '80px' }}>
                <section id="inicio"></section>
                <section id="agentes"></section>
                <section id="nosotros"></section>
                <Apartaments />
                <section id="contacto"></section>
            </main>

            <Footer />
        </div>
    );
}

export default App;