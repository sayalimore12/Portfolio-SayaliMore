import React from 'react';
import { Box, Container, TextField, Button, Typography } from '@mui/material';
import resume from '../images/resume.pdf';

export default function Contact() {
  return (
    <Box sx={{ py: 10, bgcolor: '#f5f5f5' }}>
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>Contact Me</Typography>

        <form
          action="mailto:your.email@example.com"
          method="POST"
          encType="text/plain"
        >
          <TextField fullWidth margin="normal" label="Name" name="Name" required />
          <TextField fullWidth margin="normal" label="Email" name="Email" type="email" required />
          <TextField
            fullWidth
            margin="normal"
            label="Message"
            name="Message"
            multiline
            rows={4}
            required
          />
         <Button
          size="small"
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: '#863A6F',
            '&:hover': {
              backgroundColor: '#9A5E88',
            },
          }}
        >
          Send
        </Button>
        </form>

        <Button
          variant="outlined"
          sx={{ mt: 4 }}
          href={resume}
          download
          color='#863A6F'
        >
          Download Resume
        </Button>
      </Container>
    </Box>
  );
}
