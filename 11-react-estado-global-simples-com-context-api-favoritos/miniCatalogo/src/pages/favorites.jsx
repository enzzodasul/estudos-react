import { products } from '../../../../9-consumindo-api-fake/miniCatalogo/src/data';
import { ProductCard } from '../components/product-card';
import { useFavorites } from '../context/favorites-context';

export function Favorites() {
    const { favorites } = useFavorites();

    return (
        <div>
            <h1>Favoritos</h1>

            {favorites.length === 0 ? (
                <p>Nenhum produto ainda foi adicionado aos seus favoritos</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {favorites.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
