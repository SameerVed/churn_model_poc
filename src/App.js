import logo from "./logo.svg";
import "./App.css";
import Transactions from "./components/Analytics/Transactions/Transactions";
import CustomerValLifetime from "./components/Table/CustomerValLifetime/CustomerValLifetime";
import Charts from "./components/Chart";
import CustomerValAnalytics from "./components/Analytics/CustomerValAnalytics/CustomerValAnalytics";

function App() {
  return (
    <div className="App">
      <header className="App-header">BITS</header>
      <Transactions />
      <CustomerValLifetime />
    </div>
  );
}

export default App;
