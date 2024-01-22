import React, { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  Avatar,
  CssBaseline,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const Register = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    role: 'user',
    dob: '',
    gender: 'Male',
    mobileNumber: '',
  });

  const handleFormChange = async(e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const [hover, setOnhover] = useState(false);

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('http://localhost:4000/api/v1/register', form);
      console.log(data);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const hoverEffect = () => {
    setOnhover(true);
  };

  const discardHoverEffect = () => {
    setOnhover(false);
  };

  const textStyle = {
    fontWeight: '900',
    color: hover ? '#f57c00' : '#ffa726',
    transition: 'all 0.5s ease-in-out',
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'rgb(255, 251, 245)',
        }}
      >
        <Avatar
          sx={{
            margin: 1,
            backgroundColor: (theme) => theme.palette.warning.main,
          }}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create your account
        </Typography>
        <form
          sx={{
            width: '100%',
            marginTop: 3,
          }}
          onSubmit={handleRegistration}
        >
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Username"
            type="text"
            name="username"
            value={form.username}
            onChange={handleFormChange}
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Email Address"
            type="email"
            name="email"
            value={form.email}
            onChange={handleFormChange}
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleFormChange}
            required
          />
          <FormControl
            component="fieldset"
            sx={{
              marginTop: 2,
            }}
          >
            <FormLabel component="legend">Role</FormLabel>
            <RadioGroup
              row
              aria-label="role"
              name="role"
              value={form.role}
              onChange={handleFormChange}
            >
            </RadioGroup>
          </FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Date of Birth"
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleFormChange}
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Mobile Number"
            type="text"
            name="mobileNumber"
            value={form.mobileNumber}
            onChange={handleFormChange}
            required
          />
          <FormControl
            component="fieldset"
            sx={{
              marginTop: 2,
            }}
          >
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              value={form.gender}
              onChange={handleFormChange}
            >
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>

          <Button
            fullWidth
            variant="contained"
            color="warning"
            type="submit"
            sx={{
              marginY: 3,
              backgroundColor: (theme) => theme.palette.warning.main,
              transition: 'all 0.5s ease-in-out',
            }}
          >
            Sign In
          </Button>
          <Typography sx={{ textAlign: 'center' }} variant="h4">
            Or
          </Typography>
          <Typography
            sx={{ paddingY: 2, textAlign: 'center', fontWeight: 600 }}
          >
            Already have an account? &nbsp;&nbsp;
            <Link
              to={'/login'}
              style={textStyle}
              onMouseOver={hoverEffect}
              onMouseOut={discardHoverEffect}
            >
              Log In
            </Link>
          </Typography>
        </form>
        <Divider sx={{ width: '100%', marginY: 2 }} />
        <GoogleOAuthProvider clientId="your-google-client-id">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
          ;
        </GoogleOAuthProvider>
      </Paper>
    </Container>
  );
};

export default Register;
