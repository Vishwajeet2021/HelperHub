import { Avatar, Button, CssBaseline, Paper, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const {token}=useParams();
  const [oldPassword,setOldPassword]=useState('');
  const [newPassword,setNewPassword]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');
  const handleResetPassword=(e)=>{
    console.log(token)
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
        Set your password
      </Typography>
      <form
        sx={{
          width: '100%',
          marginTop: 3,
        }}
        onSubmit={handleResetPassword}
      >
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Old Password"
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="New Password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
          Submit
        </Button>
        
      </form>
     
    </Paper>
  </Container>
  )
}

export default ResetPassword

