import React, { useState, useEffect } from 'react';
import {  AppBar, Toolbar, Box, Button, IconButton, Collapse} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-scroll';
import '../styles/styles.scss';

const sections = [
  'home', 'about', 'skills', 'projects',
  'Experience', 'Certifications', 'Education', 'contact'
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const navBgColor = scrolled ? '#000000' : '#000000';
  const linkColor = scrolled ? '#ffffff' : '#ffffff';
  const hoverColor = scrolled ? '#ffffff' : '#ffffff';
  const borderColor = scrolled ? '#ffffff' : '#ffffff';
  return (
    <>
      <AppBar
        className="navigation"
        position="fixed"
        sx={{
          zIndex: 1201,
          backgroundColor: navBgColor,
          boxShadow: scrolled ? '0px 4px 10px rgba(0,0,0,0.1)' : 'none',
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        <Toolbar sx={{ position: 'relative', minHeight: 64 }}>
          {/* Desktop Nav Centered */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 8,
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            {sections.map((section) => (
              <Button
                key={section}
                color="inherit"
                component={Link}
                to={section}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                sx={{
                  textTransform: 'capitalize',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  color: linkColor,
                  '&:hover': {
                    color: hoverColor,
                    borderBottom: `2px solid ${borderColor}`,
                  },
                  '&.active': {
                    borderBottom: `2px solid ${borderColor}`,
                    color: linkColor,
                    fontWeight: 'bold',
                  },
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon on the Right */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleToggle}
              sx={{ color: linkColor }}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Toolbar>
        {/* Mobile Dropdown Menu */}
        <Collapse in={menuOpen} timeout="auto" unmountOnExit>
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexDirection: 'column',
              backgroundColor: scrolled ? '#ffffff' : '#121212',
              padding: 2,
            }}
          >
            {sections.map((section) => (
              <Button
                key={section}
                component={Link}
                to={section}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setMenuOpen(false)}
                sx={{
                  textTransform: 'capitalize',
                  color: scrolled ? '#000000' : '#ffffff',
                  justifyContent: 'flex-start',
                  fontSize: '1rem',
                  '&:hover': {
                    color: scrolled ? '#000000' : '#ffffff',
                  },
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            ))}
          </Box>
        </Collapse>
      </AppBar>
    </>
  );
}
