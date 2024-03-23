import React, { useState } from "react";
import axios from "axios";
import "./CustomerTable.css";
import { Link } from "react-router-dom";
import { TbLayoutNavbarExpand } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function Customertable() {
  const [name, setName] = useState("");
  const [q, setQ] = useState("");
  const [BD, setBD] = useState("");
  const [CD, setCD] = useState("");
  const [A, setA] = useState("");
  const gotocl=useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const price = q * 100;
    axios
      .post("https://65e2e74188c4088649f4fef4.mockapi.io/CRUD/Milan/CRUD-poject", {
        name: name,
        quantity: q,
        Date: BD,
        mobile: CD,
        address: A,
        price: price,
      })
      .then((res) => {
        alert('Order confirmed');
        gotocl('/CL')

      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <div className="menu">
            <ul className="sech-nav">
              <li className="lih">
                <TbLayoutNavbarExpand style={{}} />
                <ul className="srh-submenu">
                  <li>
                    <Link to={'/CL'}><button>Customer-List</button></Link>
                  </li>
                </ul>
              </li>
              <li>
                <h1>Customer Table</h1>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-9">
          <form className="customer-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Client Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact Details</label>
              <input
                type="tel"
                className="form-control"
                id="contact"
                onChange={(e) => setCD(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="1234 Main St"
                onChange={(e) => setA(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="billing-date">Billing Date</label>
              <input
                type="date"
                className="form-control"
                id="billing-date"
                onChange={(e) => setBD(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Product Quantity</label>
              <select
                className="form-control"
                id="quantity"
                onChange={(e) => setQ(e.target.value)}
              >
                <option value="" disabled selected>Choose...</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="billing-price">Billing Price</label>
              <input
                type="text"
                className="form-control"
                id="billing-price"
                value={q * 100}
                readOnly
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Customertable;

