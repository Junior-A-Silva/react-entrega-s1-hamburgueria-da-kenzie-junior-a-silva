import "./App.css";
import { useState, useEffect } from "react";
import ProductsList from "./components/ProductsList";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products/")
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }, []);

  const showProducts = () => {};

  const handleClick = (productId) => {};

  return (
    <div className="App">
      <header>
        <div id="headerCenter">
          <div id="headerLogo">
            <p id="burgerLabel">Burger</p>
            <p id="kenzieLabel">Kenzie</p>
          </div>
          <div id="searchBox">
            <input id="inputSearch" placeholder="Digite a pesquisa"></input>
            <button id="btnSearch">Pesquisar</button>
          </div>
        </div>
      </header>
      <ProductsList products={products} />
    </div>
  );
}

export default App;
