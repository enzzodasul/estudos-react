export function Filter({ minPrice, maxPrice, onMinPriceChange, onMaxPriceChange }) {
    return (
        <div className="flex gap-3 my-3">
            <input
                value={minPrice}
                onChange={(e) => onMinPriceChange(e.target.value)}
                placeholder="Preço Minimo"
                className="p-2 bg-zinc-888 rounded outline-1"
                type="number"
            />

            <input
                value={maxPrice}
                onChange={(e) => onMaxPriceChange(e.target.value)}
                placeholder="Preço Máximo"
                className="p-2 bg-zinc-888 rounded outline-1"
                type="number"
            />
        </div>
    );
}
