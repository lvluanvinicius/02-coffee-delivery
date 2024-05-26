import { CoffeeProvider } from "./context/coffee.context";
import { AppRouters } from "./routes/index.routes";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <CoffeeProvider>
      <GlobalStyles />
      <AppRouters />
    </CoffeeProvider>
  );
}

export default App;
