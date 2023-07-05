import { useState } from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

const AddExpense = ({ onAdd }) => {
  const [payee, setPayee] = useState("None");
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    if (payee === "None" || !product || !price || !date) {
      alert("Please enter all required fields");
      return;
    }
    onAdd({ payee, product, price, date });

    navigate("/");
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "0.8rem",
        minWidth: "300px",
        boxShadow: "0 0.8rem 1.6rem #0005",
      }}
    >
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label for="dropdown">
            Payee <span style={{ color: "red" }}>*</span>
          </label>
          <select
            id="dropdown"
            style={{ padding: "5px" }}
            onChange={(e) => setPayee(e.target.value)}
          >
            <option value="None">None</option>
            <option value="Rahul">Rahul</option>
            <option value="Ramesh">Ramesh</option>
          </select>
        </div>
        <div className="form-control">
          <label>
            Product <span style={{ color: "red" }}>*</span>
          </label>
          <input
            style={{ padding: "10px" }}
            type="text"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <label>
            Price <span style={{ color: "red" }}>*</span>
          </label>
          <input
            style={{ padding: "10px" }}
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <label>
            Date <span style={{ color: "red" }}>*</span>
          </label>
          <input
            style={{ padding: "10px" }}
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></input>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button type="submit" color={"green"} text={"Add"} align="left" />
          <Link to="/">
            <Button color={"orange"} text={"Go Back"} align="right" />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;
