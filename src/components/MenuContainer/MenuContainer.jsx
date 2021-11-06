import Product from "../Product/Product";
function MenuContainer({ products, handleClick, shoppingCart }) {
  return (
    <div>
      <ul>
        {products.map((item, index) => (
          <li key={item.id}>
            <Product
              products={products}
              id={Number(index)}
              handleClick={handleClick}
              shoppingCart={shoppingCart}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuContainer;
