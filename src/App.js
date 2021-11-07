import { useState } from "react";
import "./App.css";
import MenuContainer from "./components/MenuContainer/MenuContainer";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import ProductCart from "./components/ProductCart/ProductCart";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Fanta",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [shoppingCart, setShoppingCart] = useState([]);

  function showProducts(searchInput) {
    setFilteredProducts(products.filter((item) => item.name === searchInput));

    filteredProducts.map(
      (item) => (item.id = Number(filteredProducts.indexOf(item)) + 1)
    );

    <MenuContainer
      products={filteredProducts}
      handleClick={handleClick}
      shoppingCart={shoppingCart}
    />;
  }
  function cleanShoppingCart(shoppingCart) {
    setShoppingCart([]);
  }

  function handleClick(
    productID,
    productName,
    productCategory,
    produtctPrice,
    productImg
  ) {
    let isInTheCart = false;
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].name === productName) {
        isInTheCart = true;
      }
    }

    if (isInTheCart === false) {
      setShoppingCart([
        ...shoppingCart,
        {
          id: shoppingCart.length + 1,
          name: productName,
          category: productCategory,
          price: produtctPrice,
          img: productImg,
        },
      ]);
    }

    filteredProducts.map(
      (item) => (item.id = Number(filteredProducts.indexOf(item)) + 1)
    );
  }

  if (searchInput === "") {
    return (
      <div className="App">
        <header>
          <div id="companyName01">Burger</div>
          <div id="companyName02">Kenzie</div>
          <form>
            <input
              type="text"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
            />
          </form>
          <button onClick={() => showProducts(searchInput)} id="addTodoButton">
            Pesquisa
          </button>
        </header>
        <main>
          <div id="MenuContainer">
            <MenuContainer
              products={products}
              handleClick={handleClick}
              shoppingCart={shoppingCart}
            />
          </div>

          <section id="shoppingCart">
            <div>
              <h2 id="shoppingCart">Carrinho de compras</h2>
              {/* Aqui vai o carrinho */}
              <ShoppingCart
                products={shoppingCart}
                cleanShoppingCart={cleanShoppingCart}
              />
            </div>
          </section>
        </main>
      </div>
    );
  } else {
    return (
      <div className="App">
        <header>
          <div id="companyName01">Burger</div>
          <div id="companyName02">Kenzie</div>
          <form>
            <input
              type="text"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
            />
          </form>
          <button onClick={() => showProducts(searchInput)} id="addTodoButton">
            Pesquisa
          </button>
        </header>
        <main>
          <div id="MenuContainer">
            <MenuContainer
              products={filteredProducts}
              handleClick={handleClick}
            />
          </div>

          <section id="shoppingCart">
            <div>
              <h2 id="shoppingCart">Carrinho de compras</h2>
              <ShoppingCart
                products={shoppingCart}
                cleanShoppingCart={cleanShoppingCart}
              />
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
