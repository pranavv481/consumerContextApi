import './App.css';
import ShopContextProvider from "./Contexts/ShopContext";
import ShowProducts from "./Components/ShowProducts";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <ShowProducts />
      </ShopContextProvider>
    </div>
  );
}

export default App;
