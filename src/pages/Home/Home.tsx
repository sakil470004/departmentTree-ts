import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: ''
  });
  const navigate=useNavigate()

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    tempErrors.name = formData.name ? "" : "Name is required.";
    tempErrors.phoneNumber = formData.phoneNumber ? "" : "Phone number is required.";
    tempErrors.email = formData.email ? "" : "Email is required.";


    setErrors(tempErrors);
    return Object.keys(tempErrors).every(key => tempErrors[key] === "");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      toast.success('Log in Success');
      //Send Data to local Storage 
      localStorage.setItem('user', JSON.stringify(formData));
      setFormData({
        name: '',
        phoneNumber: '',
        email: ''
      });
      navigate('/table')

    }
  };

  return (
    <Container sx={{minHeight:'100vh',display:'flex',alignItems:'center'}} maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 4,
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: 'white',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Add User
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={Boolean(errors.name)}
            helperText={errors.name}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            error={Boolean(errors.phoneNumber)}
            helperText={errors.phoneNumber}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}
