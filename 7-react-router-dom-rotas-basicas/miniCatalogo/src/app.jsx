import { Footer } from './components/footer.jsx';
import { Header } from './components/header.jsx';
import { Home } from './pages/home.jsx';
import { Route, Routes } from 'react-router-dom';

export function App() {
    return (
        <div className="flex flex-col min-h-screen bg-zinc-900 text-zinc-100">
            <Header />

            <main className="flex-1 container px-4 py-8 mx-auto">
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}
