import React from 'react';

const ProductCard = ({ title, price, rating, sale, imageSrc }) => {
    return (
        <div className="col mb-5">
            <div className="card h-100">
                <img className="card-img-top" src={imageSrc} alt="Product" />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{title}</h5>
                        {sale && (
                            <span className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</span>
                        )}
                        {rating && (
                            <div className="d-flex justify-content-center small text-warning mb-2">
                                {Array.from({ length: rating }, (_, index) => (
                                    <div key={index} className="bi-star-fill"></div>
                                ))}
                            </div>
                        )}
                        {sale ? (
                            <>
                                <span className="text-muted text-decoration-line-through">{`$${price.old}`}</span>
                                {` $${price.new}`}
                            </>
                        ) : (
                            `$${price}`
                        )}
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <a className="btn btn-outline-dark mt-auto" href="#">{sale ? 'Add to cart' : 'View options'}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
