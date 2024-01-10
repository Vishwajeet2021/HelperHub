import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  Avatar,
  CssBaseline,
  Divider,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hover,setOnhover]=useState(false);
  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with:', email, password);
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
          Welcome back
        </Typography>
        <form
          sx={{
            width: '100%',
            marginTop: 3,
          }}
          onSubmit={handleLogin}
        >
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
          <Button
            fullWidth
            variant="contained"
            color="warning"
            sx={{
              marginY: 3,
              backgroundColor: (theme) => theme.palette.warning.main, 
              transition:'all 0.5s ease-in-out'
            }}
            type='submit'
          >
            Continue
          </Button>
          <Typography sx={{textAlign:'center'}} variant='h4'>Or</Typography>
          <Typography sx={{paddingY:2,textAlign:'center',fontWeight:600}}>New user? &nbsp;&nbsp;<Link to={'/register'} style={textStyle} onMouseOver={hoverEffect} onMouseOut={discardHoverEffect}>Register here</Link></Typography>
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
      </Paper>
    </Container>
  );
};

export default Login;
