import React from 'react';
import Link from 'next/link';

export const Menu: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link href="/" className="navbar-brand">Home</Link>
                <Link href="/LivroLista" className="nav-link">Livro Lista</Link>
                <Link href="/LivroDados" className="nav-link">Livro Dados</Link>
            </div>
        </nav>
    );
};
