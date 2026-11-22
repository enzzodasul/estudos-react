import { ProductCard } from './product-card.jsx';

export function ProductList({ products = [] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
}
