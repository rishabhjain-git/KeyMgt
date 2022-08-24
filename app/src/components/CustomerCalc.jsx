import { Button, ButtonGroup, Container, Grid, Link } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles.css";

const CustomerCalc = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [total, setTotal] = useState("");
  const [date, setDate] = useState(formatDate(new Date()));

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  const columns = [
    { field: "index", headerName: "S.No.", width: 20 },
    {
      field: "name",
      headerName: "Name",
      width: 120,
      renderCell: (cellValues) => {
        return (
          <Link
            component="button"
            variant="body2"
            onClick={() =>
              navigate("/profile", {
                state: {
                  id: cellValues.row.id,
                  name: cellValues.row.name,
                  address: cellValues.row.address,
                },
              })
            }
          >
            {cellValues.row.name}
          </Link>
        );
      },
    },
    { field: "createdAt", headerName: "Created Date", width: 100 },
    { field: "address", headerName: "Address", width: 120 },
    { field: "mobile", headerName: "Mobile" },
    { field: "product_id", headerName: "ProductId" },
    { field: "vechicle_model", headerName: "Vehicle Model", width: 120 },
    { field: "vechicle_number", headerName: "Vehicle Number", width: 120 },
    { field: "amount", headerName: "Amount", width: 90 },
    { field: "key_number", headerName: "Key Number", width: 90 },
    { field: "bank_name", headerName: "Bank", width: 90 },
    { field: "product_creation_loc", headerName: "Location", width: 80 },
    { field: "essential_doc", headerName: "Documents", width: 90 },
  ];

  useEffect(() => {
    calculate();
  }, []);

  const calculate = async () => {
    const response = await axios.get(
      `http://localhost:5000/customers/records/${date}`
    );
    let total = 0.0;
    let index = 1;
    response.data.forEach((t) => {
      total += parseFloat(t.amount);
      t.index = index++;
    });
    setTotal(total);
    setCustomers(response.data);
  };

  return (
    <Container
      style={{
        width: "1370px",
        "margin-left": "-135px",
      }}
      maxWidth={false}
      sx={{
        mt: 6,
        marginTop: "8px",
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button variant="outlined" onClick={() => navigate(-1)}>
              Back
            </Button>
          </ButtonGroup>
          <h5>
            <b>Customers List By Date</b>
          </h5>
          <div class="form-group" style={{ "margin-left": "500px" }}>
            <label
              style={{ float: "center", "margin-left": "10px" }}
              for="Date"
            >
              Date
            </label>
            <input
              style={{
                float: "center",
                width: 130,
                height: 35,
                "margin-left": "10px",
              }}
              name="Date"
              type="text"
              value={date}
              placeholder="YYYY-MM-DD"
              onChange={(e) => setDate(e.target.value)}
            />
            <button
              style={{ float: "center", "margin-left": "10px" }}
              onClick={calculate}
              type="button"
              class="btn btn-primary navbar-btn pull-centre"
            >
              Calculate
            </button>
            {
              <span style={{ float: "center", "margin-left": "30px" }}>
                {total !== "" ? <b>Total Amount: {total}</b> : ""}
              </span>
            }
          </div>
        </Grid>
        <Grid item xs={15} sx={{ height: "500px" }}>
          <DataGrid rows={customers} columns={columns} pageSize={20} />
        </Grid>
      </Grid>
    </Container>
  );
};
export default CustomerCalc;
