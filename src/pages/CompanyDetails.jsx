import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchCompanyById } from "../services/api";
import {
  Box,
  Typography,
  CircularProgress,
  Button,
  Container,
  Alert,
} from "@mui/material";

const CompanyDetails = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getCompanyDetails = async () => {
      try {
        const data = await fetchCompanyById(id);
        setCompany(data);
      } catch (err) {
        setError("Unable to load company details.");
      } finally {
        setLoading(false);
      }
    };
    getCompanyDetails();
  }, [id]);

  if (loading)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <CircularProgress />
      </Box>
    );

  if (error)
    return (
      <Container>
        <Alert severity="error" sx={{ mt: 4 }}>
          {error}
        </Alert>
      </Container>
    );

  if (!company)
    return (
      <Typography variant="h6" align="center" mt={4}>
        Company not found.
      </Typography>
    );

  return (
    <Container>
      <Box className="details-card" textAlign="center">
        {company.logo && <img src={company.logo} alt={company.name} />}
        <Typography variant="h4" gutterBottom>
          {company.name}
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          {company.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          📍 {company.location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          🏢 Industry: {company.industry}
        </Typography>
        {company.website && (
          <Typography variant="body2" sx={{ mt: 2 }}>
            🌐{" "}
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2563eb", textDecoration: "none" }}
            >
              {company.website}
            </a>
          </Typography>
        )}
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{ mt: 3, background: "#2563eb", textTransform: "none" }}
        >
          ← Back to Companies
        </Button>
      </Box>
    </Container>
  );
};

export default CompanyDetails;
