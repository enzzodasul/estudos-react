export function Filter({ minPrice, maxPrice, onMinPriceChance, onMaxPriceChange }) {
    return (
        <div className="flex gap-3 my-3">
            <input
                value={minPrice}
                onChange={(e) => onMinPriceChance(e.target.value)}
                placeholder="Preço Minimo"
                className="p-2 bg-zinc-888 rounded outline-1"
                type="number"
            />

            <input
                value={maxPrice}
                onChange={(e) => onMaxPriceChance(e.target.value)}
                placeholder="Preço Máximo"
                className="p-2 bg-zinc-888 rounded outline-1"
                type="number"
            />
        </div>
    );
}
