
import React from 'react';
import { Box, Container, Typography } from '@mui/material';

export default function About() {
  return (
    <Box
      sx={{
        py: 4,
        bgcolor: '#ffffff',
        color: '#0D0D0D',
        display: 'flex',
      //  alignItems: 'center',
        justifyContent: 'center',
       // minHeight: '100vh', // Ensures vertical centering
      //  textAlign: 'center',
      }}
    >
      <Container className="about-section">
        <Typography
          gutterBottom
          sx={{ color: '#0d0d0d', fontWeight: 'bold', textAlign: 'center' }}
        >
          <h2> About Me</h2>
       </Typography>

        <Typography variant="body1" paragraph>
          My name is Sayali More, a Front-End UI/UX Developer with a strong foundation in building clean, scalable, and user-focused web applications. My journey in tech began after earning my Bachelor's in Computer Engineering, and since then, I’ve had the opportunity to work with multiple companies across various industries.
        </Typography>

        <Typography variant="body1" paragraph>
          One of the most defining moments in my career was being selected to represent my company for an international client project in the Netherlands. There, I led training sessions on our in-house ERP software and contributed to a successful deployment—an achievement that earned me the Star Performer Award.
        </Typography>

        <Typography variant="body1" paragraph>
          Driven by a passion to deepen my technical expertise, I pursued a Master’s degree in Computer Science at Wayne State University, graduating with a GPA of 3.93. Currently, I’m working at the university, developing and maintaining a mentoring platform for the School of Business—combining my skills in frontend development, UI/UX, and problem-solving to enhance student engagement.
        </Typography>

        <Typography variant="body1" paragraph>
          Beyond the screen, I’m an explorer at heart. I love traveling, camping under the stars, and experimenting with new recipes in the kitchen.
        </Typography>
      </Container>
    </Box>
  );
}

