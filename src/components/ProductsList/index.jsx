import Cart from "../Cart";
import Product from "../Product";
import "./style.css";
import { useState } from "react";

const ProductsList = ({ products, filteredProducts, click }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [idCartProducts, setIdCartProducts] = useState([]);

  const addToCart = (productId) => {
    if (idCartProducts.find((e) => e === productId) === undefined) {
      setCartProducts([
        ...cartProducts,
        products.filter((item) => item.id === productId),
      ]);
      setIdCartProducts([...idCartProducts, productId]);
    }
  };

  if (click === 0) {
    return (
      <div>
        <div id="mainContainer">
          <ul id="productsContainer">
            {products.map((item) => (
              <li key={item.id}>
                <Product item={item} addToCart={addToCart} />
              </li>
            ))}
          </ul>
          <div id="cart">
            <Cart
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div id="mainContainer">
          <ul id="productsContainer">
            {filteredProducts.map((item) => (
              <li key={item.id}>
                <Product item={item} addToCart={addToCart} />
              </li>
            ))}
          </ul>
          <div id="cart">
            <Cart
              cartProducts={cartProducts}
              setIdCartProducts={setIdCartProducts}
              setCartProducts={setCartProducts}
            />
          </div>
        </div>
      </div>
    );
  }
};
export default ProductsList;
