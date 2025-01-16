"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { IconButton, Collapse, Link, Grid } from "@mui/material";
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
    { label: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    setActiveTab(router.pathname);
  }, [router.pathname]);

  const handleToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleNavigation = (href) => {
    router.push(href);
    setActiveTab(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <AppBar
      position="static"
      elevation={4}
      sx={{ backgroundColor: "darkblue" }}
    >
      <Toolbar>
        {/* Logo */}
        <Box component="a" href="/" sx={{ flexGrow: { xs: 1, md: 0 } }}>
          <Image
            src="/images/my-logo.png"
            width={150}
            height={80}
            alt="Logo"
            style={{ marginBlock: "5px", cursor: "pointer" }}
          />
        </Box>


        {/* Desktop Navigation */}
        <Box sx={{ marginInline: "auto" }}>
          <Grid
            container
            spacing={4}
            sx={{
              display: { xs: "none", md: "flex" },
             alignItems: "center"
            }}
          >
            {menuItems.map((item, index) => (
              <Grid item key={index}>
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => handleNavigation(item.href)}
                  aria-current={activeTab === item.href ? "page" : undefined}
                  sx={{
                    color: activeTab === item.href ? "lightgreen" : "white",
                    textDecoration: "none",
                    "&:hover": {
                      color: "lightblue",
                    },
                  }}
                >
                  {item.label}
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Mobile Menu Icon */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            marginInlineStart: "auto",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open menu"
            onClick={handleToggle}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Navigation Dropdown */}
      <Collapse in={isMobileMenuOpen} timeout="auto" unmountOnExit>
        <Box
          sx={{
            backgroundColor: "darkblue",
            display: "flex",
            flexDirection: "column",
            padding: 2,
          }}
        >
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              onClick={() => handleNavigation(item.href)}
              sx={{
                color: activeTab === item.href ? "red" : "white",
                textAlign: "center",
                textTransform: "none",
                padding: 1,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "lightblue",
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
