import { useState } from "react";
import "./App.css";
import MenuContainer from "./components/MenuContainer/MenuContainer";

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

  function showProducts(searchInput) {
    // setProducts([
    //   ...products,
    // {
    //   id: 7,
    //   name: "Bolacha",
    //   category: "Alimmento",
    //   price: 10,
    //   img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    // },
    // ]);
    // <MenuContainer products={products} handleClick={handleClick} />;

    // setProducts([...products, { id: 7, name: "asdf" }]);
    // <MenuContainer products={setProducts} handleClick={handleClick} />;

    // setFilteredProducts([...filteredProducts, { id: 7, name: "asdf" }]);
    // <MenuContainer products={filteredProducts} handleClick={handleClick} />;
    setProducts([
      ...products,
      {
        id: 7,
        name: "Bolacha",
        category: "Alimmento",
        price: 10,
        img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
      },
    ]);
    // setFilteredProducts(products.filter((item) => item.name === searchInput));
    <MenuContainer products={products} handleClick={handleClick} />;
  }

  function handleClick(productId) {}

  if (searchInput == "") {
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
            <button
              onClick={() => showProducts(searchInput)}
              id="addTodoButton"
            >
              Pesquisa
            </button>
          </form>
        </header>
        <main>
          <MenuContainer products={products} handleClick={handleClick} />
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
            <button
              onClick={() => showProducts(searchInput)}
              id="addTodoButton"
            >
              Pesquisa
            </button>
          </form>
        </header>
        <main>
          {/* <MenuContainer products={products} handleClick={handleClick} /> */}
        </main>
      </div>
    );
  }
}

export default App;
