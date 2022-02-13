import "./style.css";
const MiniProduct = ({ item, id, removeFromCart }) => {
  return (
    <div id="miniProductBox">
      {item.id === 4 ? (
        <div id="miniFantaGuarana">
          <img src={item.img} />
        </div>
      ) : item.id === 5 ? (
        <div id="miniCocaCola">
          <img src={item.img} />
        </div>
      ) : item.id === 6 ? (
        <div id="miniOvomaltine">
          <img src={item.img} />
        </div>
      ) : (
        <div id="miniProductImg">
          <img src={item[0].img} />
        </div>
      )}
      <div id="miniNameAndCategory">
        <p id="miniProductName">{item[0].name}</p>

        <p id="miniProductCategory">{item[0].category}</p>
      </div>
      <button id="removeProductButton" onClick={removeFromCart}>
        Remover
      </button>
    </div>
  );
};
export default MiniProduct;
