import { Button, ButtonGroup, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const CustomerProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [customerImg, setCustomerImg] = useState("");

  useEffect(() => {
    getCustomerProfile();
  }, []);

  const getCustomerProfile = async () => {
    const response = await axios.get(
      `http://localhost:5000/customers/${location.state.id}`
    );
    setCustomerImg(response.data.image);
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        mt: 8,
        marginTop: "8px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button variant="outlined" onClick={() => navigate(-1)}>
              Back
            </Button>
          </ButtonGroup>
          <div>
            <div>
              <span>
                <b>Name: </b>
                {location.state.name}
              </span>
            </div>
            <div>
              <img
                alt="Customer Profile"
                src={`http://localhost:5000/${customerImg}`}
                width="200"
                height="200"
                fluid
              />
            </div>
            <div>
              <span>
                <b>Address: </b> {location.state.address}
              </span>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
export default CustomerProfile;
