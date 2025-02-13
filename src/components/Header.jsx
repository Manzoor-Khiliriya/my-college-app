import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  useMediaQuery,
  Typography,
  Divider,
  Link,
} from "@mui/material";
import { Close as CancelIcon, Menu as MenuIcon } from "@mui/icons-material";
import Image from "next/image";
import TopBar from "./TopBar";

const tabStyles = (isActive, isHovered) => ({
  color: isActive || isHovered ? "#3db166" : "#163269",
  fontFamily: "sans-serif",
  fontSize: "14px",
  fontWeight: "500",
  paddingBlock: 4,
  position: "relative",
  transition: "color 0.3s ease",
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: 0,
    height: "6px",
    backgroundColor: isActive || isHovered ? "#3db166" : "transparent",
    display: "inline-block",
    width: isActive || isHovered ? "100%" : "0",
    transition: " background-color 0.3s ease",
  },
});

export default function Header({ isDrawerOpen, setIsDrawerOpen }) {
  const router = useRouter();
  const { pathname } = router;
  const isMobile = useMediaQuery("(max-width: 1260px)");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [expandedTab, setExpandedTab] = useState(null);
  const [hoveredTab, setHoveredTab] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = useMemo(
    () => [
      { label: "Home", href: "/" },
      {
        label: "Institution",
        href: "#",
        subLinks: [
          { label: "About Us", href: "/about-us" },
          { label: "College Map", href: "/college-map" },
          {
            label: "Mandatory Disclosure",
            href: "https://lbscek.ac.in/wp-content/uploads/2024/12/mandatory_disclosure2425.pdf",
          },
          { label: "AICTE Orders", href: "/aicte-orders" },
        ],
      },
      {
        label: "Administration",
        href: "#",
        subLinks: [
          { label: "Board of Governors", href: "/board-of-governance" },
          { label: "Director", href: "/director" },
        ],
      },
      {
        label: "Admission",
        href: "#",
        subLinks: [
          { label: "Admission Process", href: "/admission-procedure" },
          { label: "Admission (KEAM)", href: "/admission-keam" },
        ],
      },
      {
        label: "Academics",
        href: "#",
        subLinks: [
          { label: "Departments", href: "/departments" },
          { label: "Programs", href: "/programs" },
        ],
      },
      {
        label: "Activities",
        href: "#",
        subLinks: [
          { label: "Career Guidance & Placement Unit(CGPU)", href: "/cgpu" },
          { label: "Alumni Association", href: "/alumni-association" },
        ],
      },
      {
        label: "Facilities",
        href: "#",
        subLinks: [
          { label: "Central Library", href: "/central-library" },
          { label: "Digital Library", href: "/digital-library" },
        ],
      },
      {
        label: "Fee Payment",
        href: "#",
        subLinks: [
          { label: "Annual / Admission", href: "/online-annual-admission" },
          {
            label: "Exam / Other Fee",
            href: "https://lbscentre.kerala.gov.in/lbscek/studlogin/login",
          },
        ],
      },
    ],
    []
  );

  useEffect(() => {
    const matchingMenuItem = menuItems.find((item) => {
      if (item.href === pathname) return true;
      if (item.subLinks) {
        return item.subLinks.some((subLink) => subLink.href === pathname);
      }
      return false;
    });
    setActiveTab(matchingMenuItem ? matchingMenuItem.label : null);
  }, [pathname, menuItems]);

  const handleNavigation = useCallback(
    (href, label, subLinks) => {
      if (subLinks && subLinks.length > 0) {
        setExpandedTab(expandedTab === label ? null : label);
      } else {
        router.push(href);
        setIsDrawerOpen(false);
      }
    },
    [expandedTab, router, setIsDrawerOpen]
  );

  const handleSublinkNavigation = (subLinkHref) => {
    router.push(subLinkHref);
    setIsDrawerOpen(false);
    setExpandedTab(null);
  };

  return (
    <>
      {/* Top Bar */}
      <TopBar isMobile={isMobile} isScrolled={isScrolled} />

      {/* Navigation Bar */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          top: 0,
          zIndex: 1100,
          backgroundColor: "white",
          px: { xs: "1.5%", sm: "5%", md: "1.5%" },
          boxShadow: isScrolled ? 1 : 0,
          transition: "box-shadow 0.3s ease, padding 0.3s ease",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: isScrolled || isMobile ? "row" : "column",
            pb: isScrolled || isMobile ? 1 : 0,
            transition:
              "flex-direction 0.3s ease-in-out, padding 0.3s ease-in-out",
          }}
        >
          {/* Logo */}
          <Box
            component="a"
            href="/"
            sx={{
              cursor: "pointer",
              display: "flex",
              width: isScrolled ? 200 : { xs: 200, md: 350 },
              height: isScrolled ? 40 : { xs: 40, md: 73 },
              position: "relative",
              mr: "auto",
              my: { xs: 1.5, md: 2.5 },
              transition: "all 0.3s ease",
            }}
          >
            <Image src="/images/my-logo.png" fill alt="College Logo" priority />
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ ml: "auto", display: "flex" }}>
              {menuItems.map(({ label, href, subLinks }) => {
                const isActive = activeTab === label;
                return (
                  <Box
                    key={href}
                    sx={{
                      position: "relative",
                      marginInline: "20px",
                      cursor: "pointer",
                    }}
                    onMouseEnter={() => {
                      setHoveredTab(label);
                      if (subLinks) setDropdownOpen(label);
                    }}
                    onMouseLeave={() => {
                      setHoveredTab(null);
                      setDropdownOpen(null);
                    }}
                    onBlur={() => setDropdownOpen(null)}
                  >
                    <Typography
                      sx={{ ...tabStyles(isActive, hoveredTab === label) }}
                      onClick={() => {
                        handleNavigation(href);
                      }}
                      tabIndex={0}
                    >
                      {label}
                    </Typography>

                    {subLinks && dropdownOpen === label && (
                      <Box
                        className="dropdown"
                        sx={{
                          position: "absolute",
                          backgroundColor: "#f3f3f3",
                          zIndex: 3,
                          fontSize: "14px",
                          padding: "6px",
                          width: "max-content",
                          display: "block",
                          "& a": {
                            color: "#000000",
                            padding: "6px 10px",
                            display: "block",
                            textDecoration: "none",
                            "&:hover": { color: "#163269" },
                          },
                        }}
                      >
                        {subLinks.map(({ label: subLabel, href: subHref }) => (
                          <Link
                            key={subHref}
                            href={subHref}
                            onClick={() => {
                              setDropdownOpen(null);
                              handleNavigation(subHref);
                            }}
                          >
                            {subLabel}
                          </Link>
                        ))}
                      </Box>
                    )}
                  </Box>
                );
              })}
            </Box>
          )}

          {/* Mobile Toggle Button */}
          {isMobile && (
            <IconButton
              aria-label={isDrawerOpen ? "close drawer" : "open drawer"}
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              sx={{
                ml: "auto",
                transition: "transform 0.3s ease-in-out",
                transform: isDrawerOpen ? "rotate(90deg)" : "rotate(0deg)",
                color: "black",
                "&:focus": { bgcolor: "transparent" },
              }}
            >
              {isDrawerOpen ? <CancelIcon /> : <MenuIcon />}
            </IconButton>
          )}
        </Toolbar>

        {/* Mobile Navigation Drawer */}
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          sx={{
            "& .MuiDrawer-paper": {
              width: { xs: "50%", sm: 350 },
              maxWidth: 350,
              backgroundColor: "#1f1f1f",
              px: 3,
              color: "white",
            },
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "start", pt: 4 }}>
            <IconButton onClick={() => setIsDrawerOpen(false)}>
              <CancelIcon
                sx={{ color: "#5e5e5e", "&:hover": { color: "white" } }}
              />
            </IconButton>
          </Box>

          {/* Drawer Navigation Links */}
          <List sx={{ pt: 7 }}>
            {menuItems.map(({ label, href, subLinks }) => (
              <React.Fragment key={label}>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => handleNavigation(href, label, subLinks)}>
                    <Link
                      href={href}
                      sx={{
                        textDecoration: "none",
                        fontSize: "12px",
                        fontWeight: 800,
                        color: activeTab === label ? "white" : "#5e5e5e",
                        transition: "color 0.2s ease",
                        "&:hover": { color: "white" },
                        width: "100%",
                        textAlign: "left",
                        textTransform: "uppercase",
                      }}
                    >
                      {label}
                    </Link>
                  </ListItemButton>
                </ListItem>

                {expandedTab === label && subLinks && (
                  <List sx={{ pl: 2 }}>
                    {subLinks.map((subLink) => (
                      <ListItem key={subLink.label} disablePadding>
                        <ListItemButton onClick={() => handleSublinkNavigation(subLink.href)}>
                          <Link
                            href={subLink.href}
                            sx={{
                              textDecoration: "none",
                              fontSize: "12px",
                              fontWeight: 600,
                              color: "#5e5e5e",
                              transition: "color 0.2s ease",
                              "&:hover": { color: "white" },
                              width: "100%",
                              textAlign: "left",
                              textTransform: "uppercase",
                            }}
                          >
                            {subLink.label}
                          </Link>
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                )}

                <Divider sx={{ width: "100%", bgcolor: "#5e5e5e", mt: 1, mb: 1 }} />
              </React.Fragment>
            ))}
          </List>
        </Drawer>
      </AppBar>
    </>
  );
}
