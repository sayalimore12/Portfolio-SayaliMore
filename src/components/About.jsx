
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
         I'm a creative and detail-oriented Front-End Developer with over 7 years of experience building modern, responsive, and user-focused web applications. My expertise spans ReactJS, JavaScript, Material UI, Tailwind CSS, and CMS platforms like WordPress and Strapi.
          I collaborate with design tools like Figma to create clean, reusable components and optimize UX and performance using Agile practices and Lighthouse audits.
          I specialize in creating accessible, SEO-friendly websites by following WCAG standards and modern best practices, ensuring every digital experience is both inclusive and high-performing.
        </Typography>
        <Typography variant="body1" paragraph>
            I'm passionate about bringing impactful web experiences to life. With a strong foundation in front-end development, modern tools, and user-centered design, I'm always excited to take on new projects. I aim to collaborate with clients and stakeholders to build accessible, responsive, and visually engaging websites that align with their goals and connect with their audiences.                 
        </Typography>

        <Typography variant="body1" paragraph>
          One of the most defining moments in my career was being selected to represent my company for an international client project in the Netherlands. There, I led training sessions on our in-house ERP software and contributed to a successful deployment - an achievement that earned me the Star Performer Award.
        </Typography>

        <Typography variant="body1" paragraph>
          Driven by a passion to deepen my technical expertise, I pursued a Master's degree in Computer Science at Wayne State University, graduating in 2024 with a GPA of 3.93. Since then, I have focused on applying my front-end development and UI/UX design skills to deliver innovative, user-centered, and accessible web solutions that create lasting impact.
        </Typography>

        <Typography variant="body1" paragraph>
          Beyond the screen, I'm an explorer at heart. I love traveling, camping under the stars, and experimenting with new recipes in the kitchen.
        </Typography>
      </Container>
    </Box>
  );
}

