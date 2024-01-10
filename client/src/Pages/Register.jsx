import React, { useState } from 'react';
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
//import { FacebookLogin } from "facebook-login-react";

const Register = () => {
  const [username, setUsername] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [hover, setOnhover] = useState(false);



  const handleRegistration = () => {
    console.log('Register with:',username, email, password);
  };
  const hoverEffect=()=>{
    setOnhover(true);
  }
  const discardHoverEffect=()=>{
    setOnhover(false);
  }
  const textStyle={
    fontWeight:'900',
    color:hover?'#f57c00':'#ffa726',
    transition:'all 0.5s ease-in-out'

  }
  
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <FormControlLabel
                value="admin"
                control={<Radio />}
                label="Admin"
              />
              <FormControlLabel
                value="user"
                control={<Radio />}
                label="User"
              />
              <FormControlLabel
                value="employee"
                control={<Radio />}
                label="Employee"
              />
            </RadioGroup>
          </FormControl>
          <Button
            fullWidth
            variant="contained"
            color="warning"
            type='submit'
            sx={{
              marginY: 3,
              backgroundColor: (theme) => theme.palette.warning.main,
              transition:'all 0.5s ease-in-out'
            }}
            
          >
            Sign In
          </Button>
          <Typography sx={{textAlign:'center'}} variant='h4'>Or</Typography>
          <Typography sx={{paddingY:2,textAlign:'center',fontWeight:600}}>Already have an account? &nbsp;&nbsp;<Link to={'/login'} style={textStyle} onMouseOver={hoverEffect} onMouseOut={discardHoverEffect}>Log In</Link></Typography>
        </form>
        <Divider sx={{ width: '100%', marginY: 2 }} />
        <GoogleOAuthProvider clientId="205218426151-3fvtvvkqptugarltigmm7igvvqpbstq5.apps.googleusercontent.com">
        <GoogleLogin
            onSuccess={credentialResponse => {
                console.log(credentialResponse);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
            />;
        </GoogleOAuthProvider>
        {/* <FacebookLogin
            appId="1670370456820938"
            autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="my-facebook-button-class"
            icon="fa-facebook"
        /> */}
      </Paper>
    </Container>
    
  );
};

export default Register;
