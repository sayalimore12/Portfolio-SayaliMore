import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

// Education data
const educationData = [
  {
    degree: "Master's in Computer Science",
    school: 'Wayne State University-Detroit, MI, USA',
    date: '2022 – 2024',
    description:
      'Graduated with a GPA of 3.93. Focused on Web Technologies, Database Management Systems, Software Developement and Software Testing',
  },
  {
    degree: "Bachelor's in Computer Engineering",
    school: 'Savitribai Phule Pune University, India',
    date: '2013 – 2017',
    description:
      'Graduated with First Class with Distinction. Built final-year project  in mobile app frontend development.',
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Education() {
  return (
    <Box sx={{ bgcolor: '#f2f0ed', py: 4 }} className="Education-section" id="Education">
      <Container>
        <Typography
            variant="h4"
          gutterBottom
          sx={{ color: '#0d0d0d', fontWeight: 'bold', textAlign: 'center' }}
        >
            <h2>Education</h2>
          
        </Typography>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              style={{
                marginBottom: '3rem',
                padding: '1.5rem 2rem',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                borderLeft: '6px solid #D1E3DD',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#0D0D0D' }}>
                {item.degree}
              </Typography>
              <Typography variant="subtitle2" sx={{ color: '#000000', mb: 1 }}>
                {item.school} | {item.date}
              </Typography>
              <Typography variant="body1" sx={{ color: '#000000' }}>
                {item.description}
              </Typography>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Box>
  );
}
