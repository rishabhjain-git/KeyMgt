import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles.css";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    if (window.localStorage.getItem("token-info") === null) {
      window.location.href = "https://e480-2405-201-d006-8087-2818-b5e1-dde6-140e.in.ngrok.io/";
    } else {
      getCustomers();
    }
  }, []);

  const getCustomers = async () => {
    const response = await axios.get(`https://04cf-2405-201-d006-8087-6406-60-d6cb-c534.in.ngrok.io/customers`);
    setCustomers(response.data);
  };

  const deleteCustomers = async (id) => {
    await axios.delete(`https://04cf-2405-201-d006-8087-6406-60-d6cb-c534.in.ngrok.io/customers/${id}`);
    getCustomers();
  };

  const logout = () => {
    window.localStorage.clear();
    window.location.href = "https://e480-2405-201-d006-8087-2818-b5e1-dde6-140e.in.ngrok.io/";
  };

  return (
    <div>
      <h1>
        <b>Customer List</b>
      </h1>
      <Link to="/add" className="button is-primary mt-2">
        Add Customer
      </Link>
      <button
        style={{ float: "right" }}
        onClick={logout}
        type="button"
        class="btn btn-primary navbar-btn pull-right"
      >
        Logout
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Address</th>
            <th>Mobile</th>
            <th>ProductId</th>
            <th>Vechicle Model</th>
            <th>Vechicle Number</th>
            <th>Amount</th>
            <th>Key Number</th>
            <th>Bank Name</th>
            <th>Essential Document</th>
            <th>ProductCreationLoc</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={customer.id}>
              <td>{index + 1}</td>
              <td>{customer.name}</td>
              <td>{customer.address}</td>
              <td>{customer.mobile}</td>
              <td>{customer.product_id}</td>
              <td>{customer.vechicle_model}</td>
              <td>{customer.vechicle_number}</td>
              <td>{customer.amount}</td>
              <td>{customer.key_number}</td>
              <td>{customer.bank_name}</td>
              <td>{customer.essential_doc}</td>
              <td>{customer.product_creation_loc}</td>
              <td>
                <Link
                  to={`/edit/${customer.id}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteCustomers(customer.id)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
