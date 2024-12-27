import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Tab, Tabs } from "@mui/material";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const open = Boolean(anchorEl);
  const router = useRouter(); 

 

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Admissions", href: "/admissions" },
    { label: "Contact", href: "/contact" },
  ];
 

  useEffect(() => {
    const currentTab = menuItems.findIndex(
      (item) => item.href === router.pathname
    );
    setActiveTab(currentTab);
  }, [router.pathname]);

  return (
    <AppBar position="static" elevation={4} sx={{ backgroundColor: "darkblue" }}>
      <Toolbar>
        <Box component="a" href="/">
          <img
            src="../images/my-logo.png"
            style={{ display: "flex", marginBlock: "5px" }}
            height={80}
            alt="Logo"
          />
        </Box>
      </Toolbar>

      {/* Desktop Menu */}
      <Toolbar>
        <Tabs
          value={activeTab}
          aria-label="navigation tabs"
          sx={{
            display: { xs: "none", md: "flex" },
            marginInline: "auto",
          }}
        >
          {menuItems.map((item, index) => (
            <Tab
              key={item.label}
              label={item.label}
              onClick={() => router.push(item.href)}
              sx={{
                color: "white",
              }}
            />
          ))}
        </Tabs>

        {/* Mobile Menu */}
        <Box sx={{ display: { xs: "flex", md: "none" }, marginInline: "auto" }}>
          <Button
            variant="contained"
            color="primary"
            aria-label="navigation"
            onClick={handleMenuOpen}
          >
            Navigation
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            PaperProps={{
              sx: { width: "200px", maxWidth: "100%" },
            }}
          >
            {menuItems.map((item) => (
              <MenuItem
                key={item.label}
                onClick={() => {
                  handleMenuClose();
                  router.push(item.href);
                }}
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
