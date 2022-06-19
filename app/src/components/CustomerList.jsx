import { Button, ButtonGroup, Container, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles.css";

const CustomerList = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [selectedRow, setSelectedRow] = useState({});

  const columns = [
    { field: "index", headerName: "S.No.", width: 20 },
    { field: "name", headerName: "Name", width: 120 },
    { field: "address", headerName: "Address", width: 120 },
    { field: "mobile", headerName: "Mobile" },
    { field: "product_id", headerName: "ProductId" },
    { field: "vechicle_model", headerName: "Vehicle Model", width: 120 },
    { field: "vechicle_number", headerName: "Vehicle Number", width: 120 },
    { field: "amount", headerName: "Amount" },
    { field: "key_number", headerName: "Key Number" },
    { field: "bank_name", headerName: "Bank" },
    { field: "product_creation_loc", headerName: "Location", width: 120  },
    { field: "essential_doc", headerName: "Documents" },
    {
      field: "Actions",
      headerName: "Actions",
      width: 80,
      renderCell: (cellValues) => {
        return (
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate(`/edit/${cellValues.row.id}`)}
            >
              Edit
            </Button>
          </ButtonGroup>
        );
      },
    },
  ];

  useEffect(() => {
    if (window.localStorage.getItem("token-info") === null) {
      window.location.href = "http://localhost:3000/";
    } else {
      getCustomers();
    }
  }, []);

  const getCustomers = async () => {
    const response = await axios.get(`http://localhost:5000/customers`);
    let index = 1;
    response.data.forEach((t) => {
      t.index = index++;
    });
    setCustomers(response.data);
  };

  const deleteCustomers = async (id) => {
    await axios.delete(`http://localhost:5000/customers/${id}`);
    window.location.reload();
  };

  const logout = () => {
    window.localStorage.clear();
    window.location.href = "http://localhost:3000/";
  };

  return (
    <Container
      style={{
        width: "1400px",
        "margin-left": "-142px",
      }}
      maxWidth={false}
      sx={{
        mt: 6,
        marginTop: "8px",
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <h5>
            <b>Customers List</b>
          </h5>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button variant="outlined"  onClick={() => navigate(`/add`)}>
              Add
            </Button>
            <Button  disabled={selectedRow.id ===undefined } onClick={() => deleteCustomers(selectedRow.id)}>Delete</Button>
          </ButtonGroup>
         

          <button
            style={{ float: "right" }}
            onClick={logout}
            type="button"
            class="btn btn-primary navbar-btn pull-right"
          >
            Logout
          </button>
        </Grid>
        <Grid item xs={15} sx={{ height: "500px" }}>
          <DataGrid
            onSelectionModelChange={(ids) => {
              const selectedIDs = new Set(ids);
              const selectedRow = customers.filter((row) =>
                selectedIDs.has(row.id)
              );
              setSelectedRow(selectedRow[0]);
            }}
            rows={customers}
            columns={columns}
            pageSize={10}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
export default CustomerList;