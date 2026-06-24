import Header from "./components/Header";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";
import transactions from "./lib/data";

function App() {
  return (
    <div>
      <Header />
      <Summary transactions={transactions} />
      <ExpenseList transactions={transactions} />
    </div>
  );
}

export default App;
