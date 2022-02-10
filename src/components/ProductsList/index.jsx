import Product from "../Product";
import "./style.css";
const ProductsList = ({ products }) => {
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
        <div id="cart"></div>
      </div>
    </div>
  );
};
export default ProductsList;
