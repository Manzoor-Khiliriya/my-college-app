import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: 'About', href: '/about' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <AppBar position="static" color="primary" elevation={4}>
      <Toolbar>
        <Typography
          variant="h6"
          component="a"
          href="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'inherit',
            fontWeight: 'bold',
            fontSize: { xs: '1.2rem', sm: '1.5rem' },
          }}
        >
         <img src='../images/my-logo.png' style={{display: 'flex', marginBlock: '5px'}} height={80}/>
        </Typography>
        {/* Desktop Menu */}
        <Box 
          sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            gap: 2 
          }}
        >
          {menuItems.map((item) => (
            <Button 
              key={item.label} 
              color="inherit" 
              href={item.href}
            >
              {item.label}
            </Button>
          ))}
        </Box>
        {/* Mobile Menu */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            PaperProps={{
              sx: { width: '200px', maxWidth: '100%' },
            }}
          >
            {menuItems.map((item) => (
              <MenuItem
                key={item.label}
                onClick={handleMenuClose}
                component="a"
                href={item.href}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
