import { CartCoffesProvider } from "./context/cart.context";
import { CoffeeProvider } from "./context/coffee.context";
import { AppRouters } from "./routes/index.routes";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <CoffeeProvider>
      <CartCoffesProvider>
        <GlobalStyles />
        <AppRouters />
      </CartCoffesProvider>
    </CoffeeProvider>
  );
}

export default App;
