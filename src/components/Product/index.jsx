import "./style.css";
const Product = ({ item, addToCart }) => {
  return (
    <div id="productBox">
      {item.id === 4 ? (
        <div id="fantaGuarana">
          <img src={item.img} />
        </div>
      ) : item.id === 5 ? (
        <div id="cocaCola">
          <img src={item.img} />
        </div>
      ) : item.id === 6 ? (
        <div id="ovomaltine">
          <img src={item.img} />
        </div>
      ) : (
        <div id="productImg">
          <img src={item.img} />
        </div>
      )}

      <p id="productName">{item.name}</p>
      <p id="productCategory">{item.category}</p>
      <p id="productPrice">
        {item.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>

      <button id="addProductButton" onClick={() => addToCart(item.id)}>
        Adicionar
      </button>
    </div>
  );
};
export default Product;
