import React from 'react';
import './App.css';
import Product from './Product';

function App() {
    const products = [
        { id: 1, name: 'Gasolina Regular', description: 'Gasolina de alta calidad.', price: 3.50 },
        { id: 2, name: 'Aceite de Motor', description: 'Aceite para motores de alto rendimiento.', price: 25.00 },
        { id: 3, name: 'Batería', description: 'Batería de larga duración.', price: 120.00 },
    ];

    return (
        <div className="App">
            <header className="App-header">
                <h1>Bienvenido a la Tienda de Gasolinera</h1>
                <p>Encuentra los mejores productos para tu viaje.</p>
            </header>
            <main>
                <h2>Productos Disponibles</h2>
                <div className="product-list">
                    {products.map(product => (
                        <Product key={product.id} name={product.name} description={product.description} price={product.price} />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default App;
