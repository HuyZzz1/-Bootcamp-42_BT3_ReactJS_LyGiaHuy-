import React from "react";

function ProductItem({ product, onSelectProduct, onAddToCart, setIsOpenModalDetail }) {
  return (
    <div className="card">
      <img
        src={product.image}
        alt={product.name}
        className="card-image"
        height={300}
      />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-text">{product.price}$</p>
        <button
          className="btn btn-dark"
          onClick={() => (onSelectProduct(product),setIsOpenModalDetail(true)) }
        >
          Xem chi tiết
        </button>
        <button
          className="btn btn-success m-3"
          onClick={() => onAddToCart(product)}
        >
          Thêm giỏ hàng
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
