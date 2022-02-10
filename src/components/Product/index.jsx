import "./style.css";
const Product = ({ item }) => {
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
      <p id="productPrice">R$ {item.price}</p>

      <button id="addProductButton">Adicionar</button>
    </div>
  );
};
export default Product;
