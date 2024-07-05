import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

const ErrorPage = () => {
  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      justifyContent="center" 
      alignItems="center" 
      height="100vh" 
      textAlign="center" 
      py={4}
    >
      <Typography variant="h1" fontWeight="bold" mb={4}>
        Error 404
      </Typography>
      <Typography variant="h4" mb={2}>
        Route Error Happened
      </Typography>
      <Button 
        variant="contained" 
        color="error"
        component={Link}
        to="/"
        sx={{ mt: 4 }}
      >
        HomePage
      </Button>
    </Box>
  );
};

export default ErrorPage;
