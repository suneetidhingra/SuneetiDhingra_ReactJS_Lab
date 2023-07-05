import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Header from "./components/Header";
import ExpensesTable from "./components/ExpensesTable";
import ResultTable from "./components/ResultTable";
import Button from "./components/Button";
import AddExpense from "./components/AddExpense";

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const getExpenses = async () => {
      const expensesFromServer = await fetchExpenses();
      setExpenses(expensesFromServer);
    };
    getExpenses();
  }, []);

  // Fetch Expenses
  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    return data;
  };

  // Add Expense
  const addExpense = async (expense) => {
    const res = await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(expense),
    });

    const data = await res.json();

    setExpenses([...expenses, data]);
  };

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header title="Expense Tracker" />
                <div className="add_btn">
                  <Link to="/add">
                    <Button
                      color={"orange"}
                      text={"Add Expense"}
                      align="center"
                    />
                  </Link>
                </div>
                {expenses.length > 0 && <ExpensesTable expenses={expenses} />}
                {expenses.length > 0 && <ResultTable expenses={expenses} />}
              </>
            }
          />
          <Route
            path="/add"
            element={
              <>
                <Header title="Add Expense" />
                <AddExpense onAdd={addExpense} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
