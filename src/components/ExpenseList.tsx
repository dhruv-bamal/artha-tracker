import type { Transaction } from "../types";
import ExpenseItem from "./ExpenseItem";

interface ExpenseListProps {
  transactions: Transaction[];
}

function ExpenseList({ transactions }: ExpenseListProps) {
  return (
    <div>
      {transactions.map((tx) => (
        <ExpenseItem key={tx.id} transaction={tx} />
      ))}
    </div>
  );
}

export default ExpenseList;
