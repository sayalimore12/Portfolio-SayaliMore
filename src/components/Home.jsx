
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
                     <h2> Frontend Developer & UI/UX Specialist</h2> <i>Transforming ideas into engaging, user-focused digital solutions</i>
                        <p className="introText">
                            I design and build responsive, accessible, and user-focused digital experiences. With 7+ years of expertise in JavaScript, React, CMS platforms, and modern UI/UX design, I bring creativity and precision to every project. I follow WCAG accessibility standards to ensure inclusivity and leverage SEO best practices to create high-performing, discoverable websites
                            <br /><br />
                           I'm passionate about bringing impactful web experiences to life. With a strong foundation in front-end development, modern tools, and user-centered design, I'm always excited to take on new projects. I aim to collaborate with clients and stakeholders to build accessible, responsive, and visually engaging websites that align with their goals and connect with their audiences.
                            <br /><br />
                           
                        </p>
                    </div>
                </div>
            </Container>
        </Box>
    );
}
