import React, { useState } from "react";
import data from "./data.json";
import ProductList from "./ProductList";
import Cart from "./Cart";
import ModalProductDetails from "./ModalProductDetails";

const ShoeShop = () => {
  const [isOpenModalDetail, setIsOpenModalDetail] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [carts, setCarts] = useState([]);

  const handleGetProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    const index = carts.findIndex((item) => item.id === product.id);

    if (index === -1) {
      const newProduct = { ...product, quantity: 1 };
      setCarts([...carts, newProduct]);
    } else {
      const newCarts = [...carts];
      newCarts[index].quantity += 1;
      setCarts(newCarts);
    }
  };

  const handleDeleteProductFromCart = (productId) => {
    const newCarts = carts.filter((item) => item.id !== productId);
    setCarts(newCarts);
  };

  const handleUpdateQuantity = (productId, quantity) => {
    const newCarts = carts.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + quantity };
      }

      return item;
    });

    setCarts(newCarts);
  };

  const totalItems = carts.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <div>
      <h1 className="text-center">FPT Shop</h1>
      <div className=" container d-flex mb-3 justify-content-end">
        <button className="btn btn-success" onClick={() => setIsOpenCart(true)}>
          Giỏ hàng
          {totalItems > 0 && <span className="ms-2">({totalItems})</span>}
        </button>
      </div>
      <ProductList
        products={data}
        onSelectProduct={handleGetProduct}
        setIsOpenModalDetail={setIsOpenModalDetail}
        onAddToCart={handleAddToCart}
      />
      <ModalProductDetails
        isOpen={isOpenModalDetail}
        onClose={() => setIsOpenModalDetail(false)}
        product={selectedProduct}
      />
      <Cart
        carts={carts}
        onDelete={handleDeleteProductFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        isOpen={isOpenCart}
        onClose={() => setIsOpenCart(false)}
      />
    </div>
  );
};

export default ShoeShop;
