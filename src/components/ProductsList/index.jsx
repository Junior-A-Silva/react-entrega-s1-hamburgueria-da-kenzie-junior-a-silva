import Cart from "../Cart";
import Product from "../Product";
import "./style.css";
const ProductsList = ({ products, filteredProducts, click }) => {
  if (click === 0) {
    return (
      <div>
        <div id="mainContainer">
          <ul id="productsContainer">
            {products.map((item) => (
              <li key={item.id}>
                <Product item={item} />
              </li>
            ))}
          </ul>
          <div id="cart">
            <Cart products={products} />
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
                <Product item={item} />
              </li>
            ))}
          </ul>
          <div id="cart">
            <Cart products={products} />
          </div>
        </div>
      </div>
    );
  }
};
export default ProductsList;
