import type { Transaction } from "../types";
import { categorize } from "../lib/logic";

interface ExpenseItemProps {
  transaction: Transaction;
}

function ExpenseItem({ transaction }: ExpenseItemProps) {
  const category = categorize(transaction);

  return (
    <div>
      <span>{transaction.merchant}</span>
      <span>{transaction.amount}</span>
      <span>{transaction.date}</span>
      <span>{category}</span>
    </div>
  );
}

export default ExpenseItem;
