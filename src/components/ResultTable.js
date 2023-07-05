const ResultTable = ({ expenses }) => {
  let totalAmount = 0;
  let rahulAmount = 0;
  let rameshAmount = 0;
  let taker = "Rahul";
  let giver = "Ramesh";

  for (let i = 0; i < expenses.length; i++) {
    const expense = expenses[i];
    const price = parseFloat(expense.price);
    totalAmount += price;

    if (expense.payee === "Rahul") {
      rahulAmount += price;
    } else if (expense.payee === "Ramesh") {
      rameshAmount += price;
    }
  }
  let balanceAmount = totalAmount / 2 - rahulAmount;
  if (balanceAmount > 0) {
    taker = "Ramesh";
    giver = "Rahul";
  } else {
    balanceAmount *= -1;
  }

  return (
    <div className="box result_table">
      <section className="table__header">
        <h1>Summary</h1>
      </section>
      <section className="table__body">
        <table>
          <tbody>
            <tr>
              <td>Total:</td>
              <td>
                <strong>{totalAmount}</strong>
              </td>
            </tr>
            <tr>
              <td>Ramesh Paid:</td>
              <td>
                <strong>{rameshAmount}</strong>
              </td>
            </tr>
            <tr>
              <td>Rahul Paid:</td>
              <td>
                <strong>{rahulAmount}</strong>
              </td>
            </tr>
            <tr>
              <td>
                {giver} pays {taker}:
              </td>
              <td>
                <strong>{balanceAmount}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ResultTable;
