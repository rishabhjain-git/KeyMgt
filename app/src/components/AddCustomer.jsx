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
  const [image, setImage] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (window.localStorage.getItem("token-info") === null) {
      window.location.href = "http://localhost:3000/";
    }
  }, []);

  const saveCustomer = async (e) => {
    e.preventDefault();
    if (name === "" || amount === "") {
      setError(true);
    } else {
      const formData = new FormData();
      formData.append("id", Math.floor(Math.random() * 100000 + 1));
      formData.append("name", name);
      formData.append("address", address);
      formData.append("mobile", mobile);
      formData.append("product_id", productId);
      formData.append("product_creation_loc", prodLoc);
      formData.append("vechicle_model", vechicleModel);
      formData.append("vechicle_number", vechicleNumber);
      formData.append("amount", amount);
      formData.append("key_number", keyNumber);
      formData.append("bank_name", bankName);
      formData.append("essential_doc", essentialDoc);
      formData.append("image", image);

      await axios.post(`http://localhost:5000/customers`, formData);
      setError(false);
      navigate("/home");
    }
  };

  return (
    <div>
      <h5>
        <b>Add Customer</b>
      </h5>

      <form
        class="form-inline"
        onSubmit={saveCustomer}
        method="POST"
        encType="multipart/form-data"
      >
        <div className="form-control">
          <label className="label">Name</label>
          <input
            className="form-control"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div>
            {
              <span className="text-danger">
                {error && name === "" ? `Name is mandatory field.` : ""}
              </span>
            }
          </div>

          <label className="label">Address</label>
          <input
            className="form-control"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label className="label">Mobile</label>
          <input
            className="form-control"
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          <label className="label">ProductId</label>
          <input
            className="form-control"
            type="text"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />

          <label className="label">Vechicle Model</label>
          <input
            className="form-control"
            type="text"
            value={vechicleModel}
            onChange={(e) => setVechicleModel(e.target.value)}
          />

          <label className="label">Vechicle Number</label>
          <input
            className="form-control"
            type="text"
            value={vechicleNumber}
            onChange={(e) => setVechicleNumber(e.target.value)}
          />

          <label className="label">Amount</label>
          <input
            className="form-control"
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <div>
            {
              <span className="text-danger">
                {error && amount === "" ? `Amount is mandatory field.` : ""}
              </span>
            }
          </div>

          <label className="label">Key Number</label>
          <input
            className="form-control"
            type="text"
            value={keyNumber}
            onChange={(e) => setkeyNumber(e.target.value)}
          />

          <label className="label">Bank Name</label>
          <input
            className="form-control"
            type="text"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
          />

          <label className="label">Essential Document</label>
          <input
            className="form-control"
            type="text"
            value={essentialDoc}
            onChange={(e) => setEssentialDoc(e.target.value)}
          />

          <label className="label">Product Creation Location</label>
          <input
            className="form-control"
            type="text"
            value={prodLoc}
            onChange={(e) => setProdLoc(e.target.value)}
          />

          <label className="label">Customer Picture</label>
          <input
            className="form-control"
            type="file"
            name="image"
            width="100"
            height="200"
            onChange={(e) => setImage(e.target.files[0])}
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
