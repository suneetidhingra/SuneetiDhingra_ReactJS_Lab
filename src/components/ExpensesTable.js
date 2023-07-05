const ExpensesTable = ({ expenses }) => {
  expenses.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="box expenses_table">
      <section className="table__header">
        <h1>Expense List</h1>
      </section>
      <section className="table__body">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Product Purchased</th>
              <th>Price (Rs.)</th>
              <th>Payee</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.date}</td>
                <td>{expense.product}</td>
                <td>
                  <strong>{expense.price}</strong>
                </td>
                <td>{expense.payee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ExpensesTable;
