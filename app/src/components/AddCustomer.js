import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCustomer = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [productId, setProductId] = useState("");
  const [prodLoc, setProdLoc] = useState("");
  const [vechicleModel, setVechicleModel] = useState("");
  const [vechicleNumber, setVechicleNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [keyNumber, setkeyNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [essentialDoc, setEssentialDoc] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (window.localStorage.getItem("token-info") === null) {
      window.location.href = "https://e480-2405-201-d006-8087-2818-b5e1-dde6-140e.in.ngrok.io/";
    }
  }, []);

  const saveCustomer = async (e) => {
    e.preventDefault();
    await axios.post(`https://04cf-2405-201-d006-8087-6406-60-d6cb-c534.in.ngrok.io/customers`, {
      id: Math.floor(Math.random() * 100000 + 1),
      name: name,
      address: address,
      mobile: mobile,
      product_id: productId,
      product_creation_loc: prodLoc,
      vechicle_model: vechicleModel,
      vechicle_number: vechicleNumber,
      amount: amount,
      key_number: keyNumber,
      bank_name: bankName,
      essential_doc: essentialDoc,
    });
    navigate("/home");
  };

  return (
    <div>
      <h1>
        <b>Add Customer</b>
      </h1>

      <form class="form-inline" onSubmit={saveCustomer}>
        <div className="form-control">
          <label className="label">Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="label">Address</label>
          <input
            className="form-control"
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label className="label">Mobile</label>
          <input
            className="form-control"
            type="text"
            placeholder="Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          <label className="label">ProductId</label>
          <input
            className="form-control"
            type="text"
            placeholder="ProductId"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />

          <label className="label">Vechicle Model</label>
          <input
            className="form-control"
            type="text"
            placeholder="Vechicle Model"
            value={vechicleModel}
            onChange={(e) => setVechicleModel(e.target.value)}
          />

          <label className="label">Vechicle Number</label>
          <input
            className="form-control"
            type="text"
            placeholder="Vechicle Number"
            value={vechicleNumber}
            onChange={(e) => setVechicleNumber(e.target.value)}
          />

          <label className="label">Amount</label>
          <input
            className="form-control"
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <label className="label">Key Number</label>
          <input
            className="form-control"
            type="text"
            placeholder="keyNumber"
            value={keyNumber}
            onChange={(e) => setkeyNumber(e.target.value)}
          />

          <label className="label">Bank Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Bank Name"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
          />

          <label className="label">Essential Document</label>
          <input
            className="form-control"
            type="text"
            placeholder="Essential Document"
            value={essentialDoc}
            onChange={(e) => setEssentialDoc(e.target.value)}
          />

          <label className="label">ProductCreationLoc</label>
          <input
            className="form-control"
            type="text"
            placeholder="ProductCreationLoc"
            value={prodLoc}
            onChange={(e) => setProdLoc(e.target.value)}
          />

          <div className="form-control">
            <button className="button is-primary">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCustomer;