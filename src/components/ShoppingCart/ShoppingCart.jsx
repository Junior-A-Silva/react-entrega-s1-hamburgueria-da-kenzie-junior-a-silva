import ProductCart from "../ProductCart/ProductCart";
function ShoppingCart({ products, cleanShoppingCart }) {
  let subtotal = 0;
  for (let i = 0; i < products.length; i++) {
    subtotal += products[i].price;
  }

  if (products[0]) {
    return (
      <div>
        <ul>
          {products.map((item, index) => (
            <li key={item.id}>
              <ProductCart products={products} id={Number(index)} />
            </li>
          ))}
        </ul>
        <div>
          <div>Total</div>
          <div>R$ {subtotal}</div>
        </div>
        <button onClick={() => cleanShoppingCart(products)}>
          Remover tudo
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <ul>
          {products.map((item, index) => (
            <li key={item.id}>
              <ProductCart products={products} id={Number(index)} />
            </li>
          ))}
        </ul>
        {/* Here comes the code when the cart is empty */}
      </div>
    );
  }
}

export default ShoppingCart;
