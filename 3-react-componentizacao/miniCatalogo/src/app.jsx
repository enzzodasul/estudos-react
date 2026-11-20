import { Footer } from './components/footer.jsx';
import { Header } from './components/header.jsx';

export function App() {
    return (
        <div className="flex flex-col h-screen">
            <Header />

            <main className="flex-1">
                <h1>Catálogo</h1>
            </main>

            <Footer />
        </div>
    );
}
