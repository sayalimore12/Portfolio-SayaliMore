import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

// Sample certification data
const certifications = [
    {
        title: 'Web Accessibility - WCAG 2.1 & 2.2 Compliance ',
    },
    {
        title: 'Front-End Web Development with React',
    },
    {
        title: 'DevOps and Agile Foundations Specialization',
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
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

export default function Certification() {
    return (
        <Box sx={{ bgcolor: '#ffffff', py: 4 }} id="Certifications" className="certification">
            <Container maxWidth="md">
                <Typography
                    gutterBottom
                    sx={{ color: '#0d0d0d', fontWeight: 'bold', textAlign: 'center' }}
                >
                    <h2>Certifications</h2>

                </Typography>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            style={{
                                marginBottom: '2rem',
                                padding: '1.5rem 2rem',
                                backgroundColor: '#ffffff',
                                borderRadius: '10px',
                                borderLeft: '6px solid #D1E3DD',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
                            }}
                        >
                            <Typography variant="h6" sx={{ fontWeight: 600, color: '#0D0D0D' }}>
                                {cert.title}
                            </Typography>

                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </Box>
    );
}
