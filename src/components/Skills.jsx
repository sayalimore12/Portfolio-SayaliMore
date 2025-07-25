import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import {
  DiHtml5, DiCss3, DiSass, DiJavascript1, DiReact, DiNodejs, DiMongodb, DiMysql,
  DiPostgresql, DiGit, DiGithubBadge, DiBootstrap, DiVisualstudio, DiNpm, DiGithubFull, DiPhotoshop, DiCodeBadge,
  DiDotnet, DiJsBadge, DiTerminal, DiChrome, DiJqueryLogo} from 'react-icons/di';
import {
  SiFigma,
  // SiGoogle,
  // SiGooglechrome,
   SiPostman,
   SiTailwindcss,
  // SiMaterialui,
   SiContentful,
   SiStrapi,
   SiWordpress,
   SiJirasoftware,
   SiTypescript,
   SiExpress 
} from 'react-icons/si';
import wcag from '../images/wcag.png'
import mui from '../images/mui.png'
import seo from '../images/SEO.png'
import scrum from '../images/scrum.png'
import api from '../images/api.png'
import '../styles/styles.scss';

const skillIcons = [
  { name: 'Figma', icon: <SiFigma color="#F24E1E" /> },
  // { name: 'SEO (Google)', icon: <SiGoogle color="#4285F4" /> },
  // { name: 'Lighthouse (Chrome)', icon: <SiGooglechrome color="#4285F4" /> },
   { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
   { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38B2AC" /> },
   { name: 'Typescript', icon: <SiTypescript color="#3178C6" /> },
   { name: 'ExpressJS', icon: <SiExpress color="grey" /> },
  // { name: 'Material UI', icon: <SiMaterialui color="#007FFF" /> },
   { name: 'CMS (Contentful)', icon: <SiContentful color="#2298BD" /> },
   { name: 'CMS (Strapi)', icon: <SiStrapi color="#4945FF" /> },
   { name: 'CMS(WordPress)', icon: <SiWordpress color="#21759B" /> },
   { name: 'Jira', icon: <SiJirasoftware color="#0052CC" /> },
   { name: 'Scrum', icon: <img src={scrum} alt="Scrum" style={{ width: 80, height: 76 }} /> },
  
];

const skills = [
  { name: 'HTML5', icon: <DiHtml5 color="#e34c26" /> },
  { name: 'CSS3', icon: <DiCss3 color="#1572B6" /> },
  { name: 'SASS', icon: <DiSass color="#CD6799" /> },
  { name: 'JavaScript', icon: <DiJavascript1 color="#f0db4f" /> },
  { name: 'React.js', icon: <DiReact color="#61dafb" /> },
  { name: 'Redux', icon: <DiJsBadge color="#764abc" /> },
  { name: 'Node.js', icon: <DiNodejs color="#68A063" /> },
  { name: 'RESTful API', icon: <img src={api} alt="API" style={{ width: 80, height: 68 }} /> },
  { name: 'MongoDB', icon: <DiMongodb color="#4DB33D" /> },
  { name: 'MySQL', icon: <DiMysql color="#00758F" /> },
  { name: 'PostgreSQL', icon: <DiPostgresql color="#336791" /> },
  { name: 'WCAG 2.1 & 2.2', icon: <img src={wcag} alt="WCAG" style={{ width: 80, height: 68 }} /> },
  { name: 'SEO', icon: <img src={seo} alt="SEO" style={{ width: 80, height: 76 }} /> },
  { name: 'Git', icon: <DiGit color="#f34f29" /> },
  { name: 'GitHub', icon: <DiGithubBadge color="#000" /> },
  { name: 'Bootstrap', icon: <DiBootstrap color="#563d7c" /> },
  { name: 'Material-UI', icon: <img src={mui} alt="Material UI" style={{ width: 80, height: 68 }} /> },
  { name: 'Visual Studio Code', icon: <DiVisualstudio color="#007ACC" /> },
  { name: 'Photoshop', icon: <DiPhotoshop color="#31A8FF" /> },
  { name: 'Chrome DevTools', icon: <DiChrome color="#4285F4" /> },
  { name: 'jQuery', icon: <DiJqueryLogo color="#0769AD" /> },
  { name: 'NPM', icon: <DiNpm color="#CB3837" /> }
];

export default function Skills() {
  return (
   <Box className="skills-section">
  <Container maxWidth="lg">
    <Typography
          gutterBottom
          sx={{ color: '#0d0d0d', fontWeight: 'bold', textAlign: 'center' }} className="skills-title">
            <h2>Skills & Tools</h2>
      
    </Typography>
    <Grid container spacing={2} className="skills-grid">
      {skills.map((skill, index) => (
        <Grid item xs={6} sm={4} md={3} key={index}>
          <div className="skill-card">
            <span className="icon">{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        </Grid>
      ))}

       {skillIcons.map((skill, index) => (
        <Grid item xs={6} sm={4} md={3} key={index}>
          <div className="skill-card">
            <span className="icon">{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>

  );
}
