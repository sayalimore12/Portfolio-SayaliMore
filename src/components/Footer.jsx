import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Button,
} from '@mui/material';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function ContactFooter() {
  return (
    <Box sx={{ bgcolor: '#0d0d0d', color: '#ffffff', pt: 6, pb: 6 }} id="contact">
      <Container maxWidth="md">
        {/* Title */}
        <Typography align="center" fontWeight="bold" gutterBottom>
          <h2>Let's Connect</h2>
        </Typography>

        {/* Info Section */}
        <Typography variant="body1" align="center" mb={2}>
          Feel free to reach out for collaboration, opportunities, or just to say Hi...!
        </Typography>
        <Typography variant="body2" align="center" mb={2}>
          📧 sayalimore12@gmail.com
        </Typography>

        {/* Resume Download */}
        <Box textAlign="center" mb={3}>
          <Button
            variant="outlined"
            href="/resume.pdf"
            download
            sx={{
              color: '#ffffff',
              borderColor: '#ffffff',
              textTransform: 'none',
              '&:hover': {
                bgcolor: '#ffffff',
                color: '#000000',
              },
            }}
          >
            Download Resume
          </Button>
        </Box>

        {/* Social Icons */}
        <Stack direction="row" spacing={3} justifyContent="center" mb={3}>
          <IconButton
            component="a"
            href="https://github.com/sayalimore12"
            target="_blank"
            aria-label="GitHub profile"
            sx={{ color: '#ffffff' }}
          >
            <FaGithub size={24} />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/sayali-more-1a8bb7100/"
            target="_blank"
             aria-label="LinkedIn profile"
            sx={{ color: '#ffffff' }}
          >
            <FaLinkedin size={24} />
          </IconButton>
          <IconButton
            component="a"
             aria-label="Send email"
            href="mailto:sayalimore12@gmail.com"
            sx={{ color: '#ffffff' }}
          >
            <FaEnvelope size={24} />
          </IconButton>
        </Stack>

        {/* Footer */}
        <Typography variant="caption" display="block" align="center" >
            <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '0 auto', width: '100%' }} /> <br />
          © {new Date().getFullYear()} Sayali More. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
