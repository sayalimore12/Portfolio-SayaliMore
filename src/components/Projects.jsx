import React from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import '../styles/styles.scss';
import roompot from '../images/roompot-groups.jpg';
import europarks from '../images/europarks.jpg';
import castle from '../images/castle.jpg';
import mentoring from '../images/mentoring.jpg';
import codinu from '../images/codinu.jpg';
import hdfc from '../images/hdfc.jpg';
import coditas from '../images/coditas.jpg';
import tgi from '../images/TGI.jpg';
import marlin from '../images/marlin.jpg';
import bizorigins from '../images/bizorigins.jpg'

export default function Projects() {
  const projects = [
    {
      title: 'BizOrigins',
      description:
        'Developed a fully responsive website using Javascript framework-ReactJS, Tailwind CSS, and Strapi CMS. Focused on clean UI/UX design with branding consistency, SEO, and WCAG guidelines.',
      image: bizorigins,
      link: 'https://www.bizorigins.com/',
    },
    {
      title: 'Wayne State University-MISB Mentoring Program',
      description:
        'Developed university\'s mentoring website using HTML, CSS/SASS, JavaScript, applying strong UI/UX principles. Responsible for website maintenance and functionality enhancements, etc.',
      image: mentoring,
      link: 'https://ilitchbusiness.xinspire.com/',
    },
    {
      title: 'Codinu',
      description:
        'Developed the Codinu website using ReactJS, headless CMS, Material UI. Ensured responsive design, improved performance, and converted Figma-based designs into user-friendly layouts.',
      image: codinu,
      link: 'https://www.codinu.com/',
    },
    {
      title: 'HDFC',
      description:
        'Contributed in development of HDFC\'s Life Insurance module using ReactJS, Redux, Material-UI, PostgreSQL database and backend APIs integration',
      image: hdfc,
      link: 'https://www.hdfclife.com/',
    },
    {
      title: 'Coditas',
      description:
        'Improved Coditas\' internal website by implementing a responsive UI with ReactJS, TypeScript, SASS, and Bootstrap. Translate Figma prototypes into functional and polished web interfaces.',
      image: coditas,
      link: 'https://coditas.com/',
    },
    {
      title: 'TGI Sports',
      description:
        'Developed a full-featured website from scratch leveraging ReactJS, SASS, Material-UI, Strapi CMS, ExpressJS, and PostgreSQL, incorporating SEO best practices.',
      image: tgi,
      link: 'https://tgisport.com/',
    },

    {
      title: 'Marlin',
      description:
        'Engaged in the development and maintenance of products, UI improvements, requirement collection, debugging, and code optimization using ReactJS, SASS, and Bootstrap.',
      image: marlin,
      // link: 'https://your-castle-link.com',
    },
    {
      title: 'Castle Rental Platform',
      description:
        'Executed tasks such as product development, maintenance, UI optimization, requirement analysis, bug fixing, and code refinement using ReactJS, SASS, and Bootstrap.',
      image: castle,
      link: 'https://www.castleresorts.com/',
    },
    {
      title: 'Europarcs UI Redesign',
      description:
        'Worked on frontend development tasks like collecting requirements, building new products, maintaining features, improving UI, fixing bugs, and refining code. Used ReactJS, SASS, and Bootstrap.',
      image: europarks,
      link: 'https://www.europarcs.com/',
    },
    {
      title: 'Roompot',
      description:
        'Contributed to new product development, ongoing maintenance, frontend UI enhancements, requirement gathering, bug resolution, and code cleanup using ReactJS, SASS, and Bootstrap.',
      image: roompot,
      link: 'https://www.roompot.com/',
    },
  ];


  return (
    <Box sx={{ py: 10, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg"> {/* medium container to constrain width */}
        <Typography
       
          gutterBottom
          sx={{ color: '#0d0d0d', fontWeight: 'bold', textAlign: 'center' }} className='project-section'>
        <h2>Projects</h2>  
        </Typography> <br />

        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid
              item
              xs={12}
              sm={6} // 2 columns from small breakpoint and above
              key={index}
              sx={{
                display: 'flex', // stretch cards to equal height
                justifyContent: 'center',
              }}
            >
              <Card
                sx={{
                  width: 320, // fixed width for cards
                  height: 420, // fixed height for cards
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: 3,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.03)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom noWrap>
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#000000"
                    sx={{
                      display: '-webkit-box',
                      WebkitLineClamp: 5,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {project.description}
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: 'flex-end', px: 2, pb: 2 }}>
                  <Button className='buttonClick'
                    size="small"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    sx={{
                      backgroundColor: '#000000',          // your custom fill color (green here)
                      '&:hover': {
                        backgroundColor: '#ffffff',        // darker shade on hover
                        color: '#000000',
                        border: '1px solid #000000'
                      },
                    }}
                  >
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
