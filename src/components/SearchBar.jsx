import React, { useState } from "react";
import { TextField, Box } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <TextField
        fullWidth
        label="Search companies..."
        variant="outlined"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </Box>
  );
};

export default SearchBar;
