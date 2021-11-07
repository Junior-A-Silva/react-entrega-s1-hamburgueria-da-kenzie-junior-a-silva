import "./Product.css";
function Product({ products, id, handleClick, shoppingCart }) {
  return (
    <div class="productCard">
      <img src={products[id].img} />
      <div class="productName">{products[id].name}</div>
      <div class="productCategory">{products[id].category}</div>
      <div class="productPrice">
        R${" "}
        {Number(products[id].price).toLocaleString("br", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </div>
      <button
        onClick={() =>
          handleClick(
            products[id].id,
            products[id].name,
            products[id].category,
            products[id].price,
            products[id].img
          )
        }
      >
        Adicionar
      </button>
    </div>
  );
}

export default Product;
