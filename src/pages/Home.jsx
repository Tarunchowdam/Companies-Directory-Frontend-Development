import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Paper,
  Button,
  Fade,
} from "@mui/material";
import CompanyList from "../components/CompanyList";
import SearchBar from "../components/SearchBar";
import { fetchCompanies } from "../services/api";

const Home = () => {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filtersKey, setFiltersKey] = useState(0); // For animation reset

  useEffect(() => {
    const getCompanies = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await fetchCompanies();
        setCompanies(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load companies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    getCompanies();
  }, []);

  const locations = [...new Set(companies.map((c) => c.location).filter(Boolean))];
  const industries = [...new Set(companies.map((c) => c.industry).filter(Boolean))];

  const filteredCompanies = companies.filter((company) => {
    const matchesSearch =
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.industry.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLocation = location ? company.location === location : true;
    const matchesIndustry = industry ? company.industry === industry : true;

    return matchesSearch && matchesLocation && matchesIndustry;
  });

  const resetFilters = () => {
    setSearchTerm("");
    setLocation("");
    setIndustry("");
    setFiltersKey((prev) => prev + 1); // Trigger animation
  };

  if (loading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
        <CircularProgress />
      </Box>
    );

  if (error)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );

  return (
    <Box>
      {/* Sticky Filter Bar with fade animation */}
      <Fade key={filtersKey} in timeout={400}>
        <Paper
          elevation={4}
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            padding: 2,
            backgroundColor: "background.paper",
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            alignItems: "center",
            animation: "fadeIn 0.5s ease-in-out",
          }}
        >
          <SearchBar onSearch={setSearchTerm} />

          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel>Location</InputLabel>
            <Select value={location} onChange={(e) => setLocation(e.target.value)}>
              <MenuItem value="">All Locations</MenuItem>
              {locations.map((loc) => (
                <MenuItem key={loc} value={loc}>
                  {loc}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel>Industry</InputLabel>
            <Select value={industry} onChange={(e) => setIndustry(e.target.value)}>
              <MenuItem value="">All Industries</MenuItem>
              {industries.map((ind) => (
                <MenuItem key={ind} value={ind}>
                  {ind}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            variant="outlined"
            color="secondary"
            onClick={resetFilters}
            sx={{ ml: "auto", animation: "fadeIn 0.4s ease-in-out" }}
          >
            Reset Filters
          </Button>
        </Paper>
      </Fade>

      {/* Company List */}
      <CompanyList companies={filteredCompanies} />
    </Box>
  );
};

export default Home;
