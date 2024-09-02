import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Papa from 'papaparse';

const defaultTheme = createTheme();

export default function Login() {
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    // Validate email and password
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Please enter your password.');
      return;
    } else {
      setPasswordError('');
    }

    try {
      const users = await fetchCSV('src/assets/data.csv');
      const user = users.find((user) => user.email === email && user.password === password);

      if (user) {
        // Redirect to home page (replace with your home page route)
        window.location.href = '/home';
      } else { 
        setErrorMessage('Invalid email or password.');
      }
    } catch (error) {
      console.error('Error reading CSV:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const fetchCSV = (path) => {
    return new Promise((resolve, reject) => {
      Papa.parse(path, {
        download: true,
        header: true,
        complete: function (results) {
          resolve(results.data);
        },
        error: function (error) {
          reject(error);
        },
      });
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={Boolean(emailError)}
              helperText={emailError}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={Boolean(passwordError)}
              helperText={passwordError}
            />
            {errorMessage && (
              <Typography color="error" variant="body2" align="center" sx={{ mt: 2 }}>
                {errorMessage}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
