/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditCustomer = () => {
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
  const { id } = useParams();

  const updateCustomer = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/customers/${id}`, {
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

  useEffect(() => {
    if (window.localStorage.getItem("token-info") === null) {
      window.location.href = "http://localhost:3000/";
    } else {
      getProductById();
    }
  }, []);

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:5000/customers/${id}`);
    setName(response.data.name);
    setAddress(response.data.address);
    setMobile(response.data.mobile);
    setProductId(response.data.product_id);
    setProdLoc(response.data.product_creation_loc);
    setVechicleModel(response.data.vechicle_model);
    setVechicleNumber(response.data.vechicle_number);
    setAmount(response.data.amount);
    setkeyNumber(response.data.key_number);
    setBankName(response.data.bank_name);
    setEssentialDoc(response.data.essential_doc);
  };

  return (
    <div>
      <h5>
        <b>Edit Customer</b>
      </h5>
      <form onSubmit={updateCustomer}>
        <div className="form-control">
          <label className="label">Name</label>
          <input
            className="form-control"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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

          <label className="label">ProductCreationLoc</label>
          <input
            className="form-control"
            type="text"
            value={prodLoc}
            onChange={(e) => setProdLoc(e.target.value)}
          />

          <div className="form-control">
            <button className="button is-primary">Update</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditCustomer;
