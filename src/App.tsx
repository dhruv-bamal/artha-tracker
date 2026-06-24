import { useState } from "react";
import type { Category } from "./types";
import Header from "./components/Header";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";
import transactions from "./lib/data";
import { categorize } from "./lib/logic";

type FilterCategory = Category | "All";

function App() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");

  const filteredTransactions =
    activeCategory === "All"
      ? transactions
      : transactions.filter((tx) => categorize(tx) === activeCategory);

  const buttons: FilterCategory[] = [
    "All",
    "Food",
    "Transport",
    "Subscriptions",
  ];

  return (
    <div>
      <Header />
      <Summary transactions={transactions} />
      <div>
        {buttons.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              fontWeight: activeCategory === cat ? "bold" : "normal",
              textDecoration: activeCategory === cat ? "underline" : "none",
            }}
          >
            {cat}
          </button>
        ))}
      </div>
      <ExpenseList transactions={filteredTransactions} />
    </div>
  );
}

export default App;
