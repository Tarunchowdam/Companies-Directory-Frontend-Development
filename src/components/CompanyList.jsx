import React from "react";
import { Grid, Typography } from "@mui/material";
import CompanyCard from "./CompanyCard";

const CompanyList = ({ companies }) => {
  if (!companies || companies.length === 0) {
    return (
      <Typography variant="h6" align="center" sx={{ marginTop: 4 }}>
        No companies found.
      </Typography>
    );
  }

  return (
    <Grid container spacing={4} sx={{ marginTop: 2 }}>
      {companies.map((company) => (
        <Grid item xs={12} sm={6} md={4} key={company.id}>
          <CompanyCard company={company} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CompanyList;
