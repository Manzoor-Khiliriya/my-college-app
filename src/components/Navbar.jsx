'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {  IconButton, Tab, Tabs } from "@mui/material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";

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
    { label: "About Us", href: "/about" },
    { label: "Courses", href: "/courses" },
    { label: "Faculties", href: "/faculties" },
    { label: "Admissions", href: "/admissions" },
    { label: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    const currentTab = menuItems.findIndex(
      (item) => item.href === router.pathname
    );
    setActiveTab(currentTab);
  }, [router.pathname]);

  return (
    <AppBar
      position="static"
      elevation={4}
      sx={{ backgroundColor: "darkblue" }}
    >
      <Toolbar>
        <Box component="a" href="/">
          <Image
            src="/images/my-logo.png"
            style={{ display: "flex", marginBlock: "5px" }}
            width={150}
            height={80}
            alt="logo"
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
          {menuItems.map((item) => (
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
        <Box sx={{ display: { xs: "flex", md: "none" }, marginInlineStart: "auto" }}>
        <IconButton
            color="inherit"
            aria-label="open menu"
            onClick={handleMenuOpen}
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            PaperProps={{
              sx: { 
                width: "100%", 
                backgroundColor: "darkblue",
                display: 'flex', 
                flexDirection: 'column'
              },
            }}
          >
            {menuItems.map((item) => (
              <MenuItem
                key={item.label}
                onClick={() => {
                  handleMenuClose();
                  router.push(item.href);
                }}
                sx={{
                  color: "white",
                  marginInlineStart: "0"
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
