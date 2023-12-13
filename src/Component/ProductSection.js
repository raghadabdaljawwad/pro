import React from 'react';
import ProductCard from './ProductCard';

const ProductSection = () => {
    const products = [
        { title: 'Fancy Product', price: { old: 40, new: 80 }, rating: null, sale: false, imageSrc: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg' },
        { title: 'Special Item', price: { old: 20, new: 18 }, rating: 5, sale: true, imageSrc: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg' },
        { title: 'Sale Item', price: { old: 50, new: 25 }, rating: 5, sale: true, imageSrc: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg' },
        { title: 'Popular Item', price: { new: 40 }, rating: 5, sale: true, imageSrc: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg' },
        { title: 'Sale Item', price: { old: 50, new: 25 }, rating: null, sale: true, imageSrc: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg' },
        { title: 'Fancy product', price: { old: 120, new: 280 }, rating: null, sale: true, imageSrc: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg' },
        { title: 'Special Item', price: { old: 20, new: 18 }, rating: 5, sale: true, imageSrc: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg' },
        { title: 'Popular Item', price: { new: 40 }, rating: 5, sale: true, imageSrc: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg' },
    ];

    return (
        
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 justify-content-center">
                        {products.map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))}
                    </div>
                </div>
            </section>
    
    );
};
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export { ProductSection, NavBar };
export default ProductSection;
