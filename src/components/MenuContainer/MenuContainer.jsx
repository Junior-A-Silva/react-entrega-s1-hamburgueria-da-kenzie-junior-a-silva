import Product from "../Product/Product";
function MenuContainer({ products, handleClick }) {
  return (
    <div>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <Product products={products} id={Number(item.id) - 1} handleClick />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuContainer;
