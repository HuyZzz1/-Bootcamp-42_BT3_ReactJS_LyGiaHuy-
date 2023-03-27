import React from "react";
import ProductItem from "./ProductItem";

function ProductList({
  products,
  onSelectProduct,
  onAddToCart,
  setIsOpenModalDetail,
}) {
  const handleGetProduct = (product) => {
    onSelectProduct(product);
  };

  const handleAddToCart = (product) => {
    onAddToCart(product);
  };

  return (
    <div className="row gap-5 justify-content-center mt-5">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="col-sm-3"
            style={{ cursor: "pointer" }}
          >
            <ProductItem
              product={product}
              onSelectProduct={handleGetProduct}
              onAddToCart={handleAddToCart}
              setIsOpenModalDetail={setIsOpenModalDetail}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
