import { useState } from 'react';
import { ProductList } from '../components/product-list.jsx';
import { Search } from '../components/search.jsx';
import { Filter } from '../components/filter.jsx';
import { products } from '../data.jsx';

export function Home() {
    const [query, setQuery] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const filtered = products
        .filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))
        .filter((product) => minPrice === '' || product.price > Number(minPrice))
        .filter((product) => maxPrice === '' || product.price < Number(maxPrice));

    return (
        <div>
            <Search
                value={query}
                onChange={setQuery}
            />

            <Filter
                minPrice={minPrice}
                maxPrice={maxPrice}
                onMinPriceChange={setMinPrice}
                onMaxPriceChange={setMaxPrice}
            />

            <ProductList products={filtered} />
        </div>
    );
}
