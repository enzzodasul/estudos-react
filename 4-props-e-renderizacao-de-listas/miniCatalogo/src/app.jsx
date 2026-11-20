import { Footer } from './components/footer.jsx';
import { Header } from './components/header.jsx';
import { ProductList } from './components/product-list.jsx';
import { products } from './data.jsx';

export function App() {
    return (
        <div className="flex flex-col min-h-screen bg-zinc-900 text-zinc-100">
            <Header />

            <main className="flex-1 container px-4 py-8 mx-auto">
                <ProductList products={products} />
            </main>

            <Footer />
        </div>
    );
}
