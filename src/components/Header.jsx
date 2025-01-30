"use client";
import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { useRouter } from "next/router";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { IconButton, Collapse, Tabs, Tab, MenuItem } from "@mui/material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const { pathname } = router; 

  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const menuItems = useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about-us" },
      { label: "Courses", href: "/courses" },
      { label: "Faculties", href: "/faculties" },
      { label: "Admissions", href: "/admissions" },
      { label: "Students Registration", href: "/students-registration" },
      { label: "Contact Us", href: "/contact-us" },
    ],
    []
  );

  const handleToggle = () => setIsMobileMenuOpen((prev) => !prev);

  const handleNavigation = useCallback(
    (href) => {
      router.push(href);
      setIsMobileMenuOpen(false);
    },
    [router]
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if ( mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target) && 
        toggleButtonRef.current && 
        !toggleButtonRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const tabStyles = {
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
    "&:hover::after": { width: "100%", backgroundColor: "white" },
    "&:hover": { color: "red" },
  };

  const activeTabStyles = {
    color: "#00FFFF",
  };

  return (
    <AppBar position="static" elevation={4} sx={{ backgroundColor: "#003366" }}>
      <Toolbar>
        {/* Logo */}
        <Box component="a" href="/" sx={{ cursor: "pointer", display: "flex" }}>
          <Image src="/images/my-logo.png" width={150} height={80} style={{marginBlock: 3}} alt="College Logo" priority />
        </Box>

        {/* Desktop Navigation */}
        <Box sx={{ marginInline: "auto", display: { xs: "none", lg: "flex" } }}>
          <Tabs
            value={pathname}
            aria-label="Navigation Tabs"
            textColor="primary"
            indicatorColor="primary"
            sx={{ "& .MuiTabs-indicator": { backgroundColor: "white" } }}
          >
            {menuItems.map(({ label, href }) => (
            <Tab key={href} value={href}   onClick={() => handleNavigation(href)} label={label} sx={pathname === href ? activeTabStyles : tabStyles} />
            ))}
          </Tabs>
        </Box>

        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: "flex", lg: "none" }, marginLeft: "auto" }}>
          <IconButton
            color="inherit"
            aria-label="open menu"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            onClick={handleToggle}
            sx={{ transition: "transform 0.3s ease-in-out", transform: isMobileMenuOpen ? "rotate(90deg)" : "rotate(0deg)" }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Navigation Dropdown */}
      <Collapse in={isMobileMenuOpen} timeout="auto" unmountOnExit>
        <Box ref={mobileMenuRef} sx={{ backgroundColor: "darkblue", padding: 2, maxHeight: "60vh", overflowY: "auto" }}>
          {menuItems.map(({ label, href }) => (
            <MenuItem
              key={href}
              onClick={() => handleNavigation(href)}
              sx={{
                color: pathname === href ? activeTabStyles.color : "white",
                padding: 1,
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)", color: pathname === href ? activeTabStyles.color : "red" },
              }}
            >
              {label}
            </MenuItem>
          ))}
        </Box>
      </Collapse>
    </AppBar>
  );
}
