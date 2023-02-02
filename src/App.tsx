import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Homepage } from "./pages/Homepage";
import GlobalStyle from "./style/GlobalStyle";


function App() {
  return (
    <ShoppingCartProvider>
      <GlobalStyle />
      <Homepage />
    </ShoppingCartProvider>
  );
}

export default App;
