import "./style.css";
const MiniProduct = ({ item }) => {
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
          <img src={item.img} />
        </div>
      )}
      <div id="miniNameAndCategory">
        <p id="miniProductName">{item.name}</p>
        <p id="miniProductCategory">{item.category}</p>
      </div>
      <button id="removeProductButton">Remover</button>
    </div>
  );
};
export default MiniProduct;
