import { Heart } from 'lucide-react';

export function ProductCard({ product }) {
    return (
        <div className="bg-zinc-950 p-2 rounded border border-zinc-800 shadow-md">
            <img
                className="w-full h-40 object-cover rounded"
                src={product.image}
                alt={product.name}
            />

            <div className="mt-2">
                <h2 className="font-semibold text-white">{product.name}</h2>
                <p className="text-zinc-400 text-xs mt-0.5">{product.description}</p>
                <p className="font-bold text-white text-sm mt-1">
                    R$ {Number(product.price).toFixed(2)}
                </p>
            </div>

            <div className="mt-3">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-xs py-1.5 rounded transition-colors">
                    ver detalhes
                </button>

                <button className="mt-2 text-white hover:text-red-500 transition-colors flex items-center">
                    <Heart size={20} />
                </button>
            </div>
        </div>
    );
}
