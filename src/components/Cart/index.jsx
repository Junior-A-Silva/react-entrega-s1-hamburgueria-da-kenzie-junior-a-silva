import "./style.css";
import MiniProduct from "../MiniProduct";
const Cart = ({ cartProducts, cleanCart, removeFromCart }) => {
  if (cartProducts === "") {
    return (
      <div id="cartSide">
        <div id="headerCart">
          <p>Carrinho de compras</p>
        </div>
        <div id="emptyCart">
          <p id="suaSacola">Sua sacola está vazia</p>
          <p id="adicioneItens">Adicione itens</p>
        </div>
      </div>
    );
  } else {
    return (
      <div id="cartSide">
        <div id="headerCart">
          <p>Carrinho de compras</p>
        </div>
        <div id="notEmptyCart">
          <ul>
            {cartProducts.map((item) => (
              <li key={item[0].id}>
                <MiniProduct item={item} removeFromCart={removeFromCart} />
              </li>
            ))}
          </ul>
          <div id="totalPanel">
            <div id="greyLine"></div>
            <div id="miniTotal">
              <p id="miniTotalLabel">Total</p>
              <p id="miniValue">
                {cartProducts
                  .reduce((acc, item) => acc + item[0].price, 0)
                  .toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
              </p>
            </div>
            <button id="btnRemove" onClick={cleanCart}>
              Remover tudo
            </button>
          </div>
        </div>
      </div>
    );
  }
};
export default Cart;
