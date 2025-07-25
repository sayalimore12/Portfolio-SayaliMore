
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import myPhoto from '../images/professional-photo.png';
import '../styles/styles.scss';



export default function Home() {
    return (
        <Box sx={{ pt: { xs: 8, md: 12 }, bgcolor: '#ff9b9b36', color: '#000000' }}>
            <Container className="profile-section">
                <div className="profile-flex">
                    <div className="myPhotoContainer">
                        <img src={myPhoto} alt="Sayali More" />
                    </div>
                    <div className="profile-text">
                      <h1>Hi, I'm Sayali More</h1>
                     <h2> Frontend Developer • UI/UX Specialist</h2>
                        <p className="introText">
                            I'm a Front-End UI/UX Developer with over 7 years of experience crafting responsive, accessible, and user-centric web applications. I specialize in building scalable front-end architectures using React, TypeScript, and modern design systems.
                            <br /><br />
                            I work closely with design tools like Figma and Adobe XD to translate ideas into clean, reusable components. With hands-on experience in Material UI and Tailwind CSS, I create consistent, modern interfaces that are both visually engaging and developer-friendly.
                            <br /><br />
                            I'm passionate about performance optimization and writing maintainable code that brings designs to life across devices and platforms.
                        </p>
                    </div>
                </div>
            </Container>
        </Box>
    );
}
