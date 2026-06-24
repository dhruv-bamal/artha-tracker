import type { Transaction, Category, CategoryTotals } from "../types";
import { totalByCategory } from "../lib/logic";

interface SummaryProps {
  transactions: Transaction[];
}

function Summary({ transactions }: SummaryProps) {
  const totals: CategoryTotals = totalByCategory(transactions);
  const categories = Object.keys(totals) as Category[];

  return (
    <div>
      <h2>Spending by category</h2>
      {categories.map((category) => (
        <div key={category}>
          <span>{category}</span>
          <span>₹{totals[category]}</span>
        </div>
      ))}
    </div>
  );
}

export default Summary;
