import { useState } from "react";
import type { Transaction } from "../types";

interface AddExpenseFormProps {
  onAdd: (transaction: Transaction) => void;
}

function AddExpenseForm({ onAdd }: AddExpenseFormProps) {
  const [merchant, setMerchant] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setError(null);

    if (!merchant.trim()) {
      setError("Merchant name is required.");
      return;
    }

    if (!amount || Number(amount) <= 0) {
      setError("Amount must be greater than zero.");
      return;
    }

    if (!date) {
      setError("Date is required.");
      return;
    }

    const newTransaction: Transaction = {
      id: crypto.randomUUID(),
      amount: Number(amount),
      merchant: merchant.trim(),
      date,
    };

    onAdd(newTransaction);
    setMerchant("");
    setAmount("");
    setDate("");
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label htmlFor="merchant">Merchant</label>
        <input
          id="merchant"
          type="text"
          value={merchant}
          onChange={(e) => setMerchant(e.target.value)}
          placeholder="e.g. Swiggy, Netflix"
        />
      </div>

      <div>
        <label htmlFor="amount">Amount (₹)</label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0"
          min="0"
        />
      </div>

      <div>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpenseForm;
