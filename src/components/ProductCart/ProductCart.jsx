import "./Product.css";
function ProductCart({ products, id }) {
  return (
    <div class="productCard">
      <img src={products[id].img} />
      <div class="productName">{products[id].name}</div>
      <div class="productCategory">{products[id].category}</div>
      <div class="productPrice">R$ {products[id].price}</div>
    </div>
  );
}

export default ProductCart;
