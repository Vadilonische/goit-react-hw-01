import clsx from 'clsx';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={clsx(css.transactionTable)}>
      <thead className={clsx(css.transactionTableHead)}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={clsx(css.tableBody)}>
        {items.map(transaction => (
          <tr className={clsx(css.tableList)} key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
