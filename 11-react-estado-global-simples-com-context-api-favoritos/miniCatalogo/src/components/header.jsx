import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className="w-full bg-zinc-800 py-3">
            <div className="container px-4 flex items-center justify-between mx-auto">
                <Link
                    to="/"
                    className="text-zinc-50 text-2xl font-bold"
                >
                    <h1>Mini Catálogo</h1>
                </Link>

                <nav>
                    <ul className="flex items-center gap-4">
                        <li>
                            <Link
                                to="/"
                                className="text-zinc-300 hover:text-zinc-50 text-sm"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/favoritos"
                                className="text-zinc-300 hover:text-zinc-50 text-sm"
                            >
                                Favoritos
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
