import "./style.css";
import MiniProduct from "../MiniProduct";
const Cart = ({ products }) => {
  if (products === "") {
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
            {products.map((item) => (
              <li key={item.id}>
                <MiniProduct item={item} />
              </li>
            ))}
          </ul>
          <div id="totalPanel">
            <div id="greyLine"></div>
            <div id="miniTotal">
              <p id="miniTotalLabel">Total</p>
              <p id="miniValue">
                {products
                  .reduce((acc, item) => acc + item.price, 0)
                  .toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
              </p>
            </div>
            <button id="btnRemove">Remover tudo</button>
          </div>
        </div>
      </div>
    );
  }
};
export default Cart;
