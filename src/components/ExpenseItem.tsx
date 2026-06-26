import type { Transaction } from "../types";
import { categorize } from "../lib/logic";

interface ExpenseItemProps {
  transaction: Transaction;
  onDelete: (id: string) => void;
  isRecurring: boolean;
}

function ExpenseItem({ transaction, onDelete, isRecurring }: ExpenseItemProps) {
  const category = categorize(transaction);

  return (
    <div>
      <span>{transaction.merchant}</span>
      {isRecurring && <span>🔁</span>}
      <span>{transaction.amount}</span>
      <span>{transaction.date}</span>
      <span>{category}</span>
      <button onClick={() => onDelete(transaction.id)}>Delete</button>
    </div>
  );
}

export default ExpenseItem;
