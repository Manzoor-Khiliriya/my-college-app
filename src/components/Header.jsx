"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { IconButton, Collapse, Tabs, Tab, MenuItem } from "@mui/material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const router = useRouter();

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Courses", href: "/courses" },
    { label: "Faculties", href: "/faculties" },
    { label: "Admissions", href: "/admissions" },
    { label: "Students Registration", href: "/students-registration" },
    { label: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    setActiveTab(router.pathname);
  }, [router.pathname]);

  const handleToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleNavigation = useCallback(
    (href) => {
      // Perform navigation and set active tab after navigation completes
      router.push(href).then(() => {
        setActiveTab(href);
        setIsMobileMenuOpen(false);
      });
    },
    [router]
  );

  const menuLinkStyles = {
    color: "white",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: 0,
      height: "2px",
      backgroundColor: "transparent",
      transition: "width 0.3s ease-in-out, background-color 0.3s ease-in-out",
    },
    "&:hover::after": {
      width: "100%",
      backgroundColor: "white",
    },
  };

  return (
    <AppBar position="static" elevation={4} sx={{ backgroundColor: "darkblue" }}>
      <Toolbar>
        {/* Logo */}
        <Box component="a" href="/">
          <Image
            src="/images/my-logo.png"
            width={150}
            height={80}
            layout="responsive"
            alt="Logo"
            style={{ display: "flex",marginBlock: "5px", cursor: "pointer",maxHeight: '80px' }}
            priority
          />
        </Box>

        {/* Desktop Navigation */}
        <Box sx={{ marginInline: "auto", display: { xs: "none", lg: "flex" } }}>
          <Tabs
            value={activeTab}
            onChange={(_, newValue) => handleNavigation(newValue)}
            aria-label="Navigation Tabs"
            textColor="primary"
            indicatorColor="primary"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "white",
              },
            }}
          >
            {menuItems.map((item, index) => (
              <Tab
                key={index}
                value={item.href}
                label={item.label}
                sx={{
                  ...(activeTab === item.href
                    ? { ...menuLinkStyles, color: "lightblue" }
                    : { ...menuLinkStyles }),
                  "&:hover": {
                    color: activeTab === item.href ? "lightblue" : "red",
                  },
                }}
              />
            ))}
          </Tabs>
        </Box>

        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: "flex", lg: "none" }, marginInlineStart: "auto" }}>
          <IconButton color="inherit" aria-label="open menu" onClick={handleToggle}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Navigation Dropdown */}
      <Collapse in={isMobileMenuOpen} timeout="auto" unmountOnExit>
        <Box sx={{ backgroundColor: "darkblue", padding: 2 }}>
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              onClick={() => handleNavigation(item.href)}
              sx={{
                color: activeTab === item.href ? "black" : "white",
                textAlign: "center",
                padding: 1,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: activeTab === item.href ? "black" : "red",
                },
              }}
            >
              {item.label}
            </MenuItem>
          ))}
        </Box>
      </Collapse>
    </AppBar>
  );
}
