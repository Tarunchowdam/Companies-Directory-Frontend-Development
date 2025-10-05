import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";

const CompanyCard = ({ company }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 3,
        boxShadow: 3,
        transition: "transform 0.3s",
        "&:hover": { transform: "scale(1.03)", boxShadow: 6 },
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={company.logo || "https://via.placeholder.com/140"}
        alt={`${company.name} logo`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="primary">
          {company.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {company.description}
        </Typography>
        <Typography variant="caption" display="block" mt={1}>
          Location: {company.location}
        </Typography>
        <Typography variant="caption" display="block">
          Industry: {company.industry}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          component={Link}
          to={`/company/${company.id}`}
        >
          Details
        </Button>
        <Button
          size="small"
          color="secondary"
          href={company.website}
          target="_blank"
        >
          Website
        </Button>
      </CardActions>
    </Card>
  );
};

export default CompanyCard;
