import Header from "./components/header/header";
import Problem from "./components/body/Problem";
import MarketData from "./components/body/MarketData";
import Solution from "./components/body/Solution";
import TradeFinance from "./components/body/TradeFinance";
import How from "./components/body/How";

function App() {

  return (
    <div>
      <Header />
      <Problem />
      <MarketData />
      <Solution />
      <TradeFinance />
      <How />
    </div>
  )
}

export default App;
