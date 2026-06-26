import type { RecurringSubscription } from "../types";

interface RecurringSectionProps {
  subscriptions: RecurringSubscription[];
}

function RecurringSection({ subscriptions }: RecurringSectionProps) {
  if (subscriptions.length === 0) {
    return (
      <section>
        <h2>🔁 Subscriptions</h2>
        <p>
          Add a few months of expense and we'll automatically detect charges.
        </p>
      </section>
    );
  }

  return (
    <section>
      <h2>🔁 Detected Subscriptions</h2>
      {subscriptions.map((sub) => (
        <div key={sub.merchant}>
          <span>{sub.merchant}</span>
          <span>₹{sub.amount} / month</span>
          <span>({sub.count} charges detected)</span>
        </div>
      ))}
    </section>
  );
}

export default RecurringSection;
