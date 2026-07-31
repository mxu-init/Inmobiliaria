import './style/App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Apartaments from './components/apartaments/Apartaments';
import Welcome from './components/welcome/Welcome';
import History from './components/history/History';


function App() {
    return (
        <div className="app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />

            <main style={{ flex: 1, marginTop: '80px' }}>
                <Welcome />
                <Apartaments />
                <History />
                <section id="agents"></section>
                <section id="contact"></section>
            </main>

            <Footer />
        </div>
    );
}

export default App;