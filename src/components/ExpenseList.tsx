import type { Transaction } from "../types";
import ExpenseItem from "./ExpenseItem";

interface ExpenseListProps {
  transactions: Transaction[];
  onDelete: (id: string) => void;
  recurringMerchants: Set<string>;
}

function ExpenseList({
  transactions,
  onDelete,
  recurringMerchants,
}: ExpenseListProps) {
  if (transactions.length === 0) {
    return (
      <div>
        <p>No expenses yet - add your first one.</p>
      </div>
    );
  }

  return (
    <div>
      {transactions.map((tx) => (
        <ExpenseItem
          key={tx.id}
          transaction={tx}
          onDelete={onDelete}
          isRecurring={recurringMerchants.has(tx.merchant)}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
