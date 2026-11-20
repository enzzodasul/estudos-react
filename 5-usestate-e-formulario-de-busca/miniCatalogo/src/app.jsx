import { useState } from 'react';

import { Footer } from './components/footer.jsx';
import { Header } from './components/header.jsx';
import { ProductList } from './components/product-list.jsx';
import { Search } from './components/search.jsx';

import { products } from './data.jsx';

export function App() {
    const [query, setQuery] = useState('');

    const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()),
    );

    return (
        <div className="flex flex-col min-h-screen bg-zinc-900 text-zinc-100">
            <Header />

            <main className="flex-1 container px-4 py-8 mx-auto">
                <Search
                    value={query}
                    onChange={setQuery}
                />

                <ProductList products={filtered} />
            </main>

            <Footer />
        </div>
    );
}
