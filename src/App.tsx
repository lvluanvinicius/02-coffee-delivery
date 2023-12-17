import { CoffeeShow } from "./components/CoffeeShow";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <CoffeeShow />
    </>
  );
}

export default App;
