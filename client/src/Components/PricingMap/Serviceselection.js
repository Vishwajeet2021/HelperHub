// Install Material-UI
// npm install @mui/material @emotion/react @emotion/styled

// Import necessary dependencies
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

// Gender options
const genderOptions = [
  { id: "male", label: "Male" },
  { id: "female", label: "Female" },
  { id: "other", label: "Other" },
];

// Sample service data
const serviceData = {
  title: "Brooming, Mopping",
  image:
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  price: "1000 rupees",
  description: "Description of the service goes here.",
  description2: "Add Inclusive services",
};

// Sample add-ons data
const addonsData = [
  {
    title: "Dusting",
    image:
      "https://www.housedigest.com/img/gallery/5-time-saving-dusting-hacks-you-must-try/intro-1658417306.jpg",
    price: "500 rupees",
    description: "Add-on service for cleaning windows.",
  },
  {
    title: "Bathroom Cleaning",
    image:
      "https://www.housedigest.com/img/gallery/5-time-saving-dusting-hacks-you-must-try/intro-1658417306.jpg",
    price: "1000 rupees",
    description: "Add-on service for bathroom cleaning.",
  }
];

const ServiceSelection = () => {
  const [selectedGender, setSelectedGender] = useState("male");
  const [screenName, setScreenName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate(); 

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleScreenNameChange = (event) => {
    setScreenName(event.target.value);
  };

  const handleBookingDetails = () => {
    navigate("/booking-details"); // Navigate to BookingDetails component using navigate
  };

  const handleQuantityChange = (increment) => {
    setQuantity((prevQuantity) =>
      increment ? prevQuantity + 1 : Math.max(1, prevQuantity - 1)
    );
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Select Service
      </Typography>

      <FormControl component="fieldset" sx={{ marginBottom: 2 }}>
        <Typography variant="h6" gutterBottom>
          Gender
        </Typography>
        <RadioGroup
          row
          aria-label="gender"
          name="gender"
          value={selectedGender}
          onChange={handleGenderChange}
        >
          {genderOptions.map((option) => (
            <FormControlLabel
              key={option.id}
              value={option.id}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      </FormControl>

      <Typography variant="h5" marginTop={1}>
        Cleaning
      </Typography>

      {/* Card for main service */}
      <Card
        sx={{
          height: "100%",
          display: "flex",
          borderRadius: "1rem",
          marginBottom: "1rem",
        }}
      >
        <img
          src={serviceData.image}
          alt="Service Image"
          style={{
            width: "20%",
            objectFit: "cover",
            margin: "1rem",
            borderRadius: "1rem",
          }}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {serviceData.title}
            </Typography>
            <Typography variant="h6">Price: {serviceData.price}</Typography>
            <Typography variant="body2" color="textSecondary">
              {serviceData.description}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {serviceData.description2}
            </Typography>
          </div>
          <CardActions sx={{ alignSelf: "flex-end" }}>
          <Button
          variant="contained"
          color="primary"
          style={{
            borderRadius: "50%",
            minWidth: "3rem",
            padding: "0.5rem",
            background: "black",
          }}
          onClick={handleBookingDetails} // Call handleBookingDetails function to navigate to BookingDetails component
        >
          <Typography
            variant="h6"
            style={{ color: "white", borderColor: "white" }}
          >
            +
          </Typography>
        </Button>
          </CardActions>
        </CardContent>
      </Card>

      <Typography variant="h5" marginTop={2} fontWeight={"bold"}>
        Add-Ons
      </Typography>
      {addonsData.map((addon, index) => (
  <Card
    key={index}
    sx={{
      height: "100%",
      display: "flex",
      width: "calc(50% - 1rem)", // Adjusted width to fit two cards with margin
      borderRadius: "1rem",
      marginBottom: "1rem",
      marginRight: "1rem", // Added margin between cards
    }}
  >
    <img
      src={addon.image}
      alt={`Addon Image ${index}`}
      style={{
        width: "40%",
        objectFit: "cover",
        margin: "1rem",
        borderRadius: "1rem",
      }}
    />
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "60%", // Adjusted width for content
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {addon.title}
        </Typography>
        <Typography variant="h6">Price: {addon.price}</Typography>
        <Typography variant="body2" color="textSecondary">
          {addon.description}
        </Typography>
      </div>
      <CardActions sx={{ alignSelf: "flex-end" }}>
        <Button
          variant="contained"
          color="primary"
          style={{
            borderRadius: "50%",
            minWidth: "3rem",
            padding: "0.5rem",
            background: "black",
          }}
          onClick={() => handleQuantityChange(true)}
        >
          <Typography
            variant="h6"
            style={{ color: "white", borderColor: "white" }}
          >
            +
          </Typography>
        </Button>
      </CardActions>
    </CardContent>
  </Card>
))}


    </Container>
  );
};

export default ServiceSelection;
