import Product from "../Product/Product";
function MenuContainer({ products, handleClick }) {
  return (
    <div>
      <ul>
        {products.map((item, index) => (
          <li key={item.id}>
            <Product products={products} id={Number(index)} handleClick />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuContainer;
