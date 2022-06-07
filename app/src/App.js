import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/CustomerList";
import AddProduct from "./components/AddCustomer";
import EditProduct from "./components/EditCustomer";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<ProductList />} />
              <Route path="/add" element={<AddProduct />} />
              <Route path="/edit/:id" element={<EditProduct />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
