import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { LogoutOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function ButtonAppBar() {
    const navigate=useNavigate();
    const handleLogOut=()=>{
        localStorage.removeItem('user');
        toast.success('Logout Success')
        navigate('/')
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Post
          </Typography>
          <Button onClick={handleLogOut} color="inherit"> LogOUT <LogoutOutlined/></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
