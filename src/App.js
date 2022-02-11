import "./App.css";
import { useState, useEffect } from "react";
import ProductsList from "./components/ProductsList";

function App() {
  const [products, setProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [query, setQuery] = useState("");
  const [click, setClick] = useState(0);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products/")
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }, []);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const showProducts = (query) => {
    if (query.length === 0) {
      setFilteredProducts(products.filter((item) => item.price !== 0));
    } else {
      setFilteredProducts(
        products.filter(
          (item) =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase())
        )
      );
      setClick(click + 1);
    }
    setQuery("");
  };

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
            <input
              id="inputSearch"
              placeholder="Digite a pesquisa"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            ></input>
            <button id="btnSearch" onClick={() => showProducts(query)}>
              Pesquisar
            </button>
          </div>
        </div>
      </header>
      <ProductsList
        products={products}
        filteredProducts={filteredProducts}
        click={click}
      />
    </div>
  );
}

export default App;
