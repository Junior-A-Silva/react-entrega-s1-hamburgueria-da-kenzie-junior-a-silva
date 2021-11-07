import "./ProductCart.css";
function ProductCart({ products, id }) {
  return (
    <div class="productSCard">
      <img src={products[id].img} class="imageProductCart" />
      <div class="productSName">{products[id].name}</div>
      <div class="productSCategory">{products[id].category}</div>
      <div class="productSPrice">
        R${" "}
        {Number(products[id].price).toLocaleString("br", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </div>
    </div>
  );
}

export default ProductCart;
