import React from 'react';
import {
    Stepper,
    Step,
    StepLabel,
    StepContent,
    Typography,
    Box,
    Container,
    Button
} from '@mui/material';



const experienceData = [
    {
        title: 'Web Developer - Corporate Mentor Program Assistant, ',
        company: 'Wayne State University - Mike Ilitch School of Business - Detroit, MI',
        date: 'Jun 2024 – Jun 2025',
        description:
            'Led development and maintenance of accessible, SEO-optimized mentorship websites using HTML, CSS, and JavaScript, enhancing UX, performance, and compliance with WCAG standards. Collected and analyzed engagement data using Excel and Google Sheet to improve mentor-mentee matching, inform program strategy, and drive visibility for university mentoring programs.',
    },
    {
        title: 'Student Assistant ',
        company: 'Wayne State University - Mike Ilitch School of Business.',
        date: '2018 – 2021',
        description:
            'Performed data analysis and created reports to support event coordination, outreach, and marketing initiatives. Provided administrative support by managing schedules and assisting students, faculty, and staff to ensure smooth daily operations.',
    },
    {
        title: 'Software Developer',
        company: 'Coditas',
        date: 'Jan 2020 – Jun 2021',
        description:
            'Developed responsive, high-performance web applications using React, TypeScript, SASS/CSS, and RESTful APIs, translating Figma and Adobe XD designs into scalable, pixel-perfect UI components. Collaborated with Agile teams to integrate CMS platforms like Strapi and WordPress, optimize SEO and performance (35–45% Lighthouse improvement), conduct testing, and maintain clean, version-controlled code using Git.',
    },
     {
        title: 'Sr. Web Developer / Team Lead',
        company: 'Maxxton',
        date: 'Aug 2016 – Dec 2019',
        description:
            'Collected and synthesized client requirements to guide the front-end development of a CMS using ReactJS, ensuring UI consistency and cross-browser compatibility. Led a team of developers through the Newyse CMS redesign, applied SEO strategies to increase traffic by 40%, and performed thorough testing to validate functionality.',
    },
      {
        title: 'Front-End Developer',
        company: 'Nubiz Solutions',
        date: 'Dec 2015 – Aug 2016 ',
        description:
            'Supported UI development using HTML, CSS, and JavaScript. Transformed wireframes into interactive, accessible interfaces.',
    },
       {
        title: 'Web Designer/ Developer',
        company: 'Nubiz Solutions',
        date: 'Jul 2015 – Nov 2015',
        description:'Developed responsive websites for mobile and desktop platforms using HTML, CSS, Bootstrap, and JavaScript. Implemented custom eCommerce features that enhanced user experience and streamlined order management processes.',
    },
         {
        title: 'Pandora IT Solutions',
        company: 'Web Developer',
        date: 'Jul 2015 – Nov 2015',
        description:'Converted PSD files to responsive HTML, ensuring seamless design across multiple devices. Integrated form processing with PHP to enhance website functionality and user interaction.',
    },
];

export default function Experience() {
    return (
        <Box sx={{ py: 4, bgcolor: '#f2f0ed' }} className="Experience-section" id="Experience">
            <Container>
                <Typography

                    gutterBottom
                    sx={{ color: '#0d0d0d', fontWeight: 'bold', textAlign: 'center' }}
                >
                    <h2>Experience</h2>
                </Typography>
                {/* Download Resume Button */}
                <Box textAlign="center" mt={2} mb={4}>
                    <Button
                        variant="outlined"
                        href="/resume.pdf"
                        download
                        sx={{
                            textTransform: 'none',
                            bgcolor: '#0D0D0D',
                            color: '#ffffff',
                            '&:hover': {
                                color: '#0D0D0D',
                                bgcolor: '#ffffff',
                                borderColor: '#0D0D0D',
                            },
                        }}
                    >
                        Download Resume
                    </Button>

                </Box>

                <Stepper
                    orientation="vertical"
                    activeStep={0}
                    sx={{
                        '& .MuiStepIcon-root': {
                            color: '#000000', // Default icon color for all steps
                        },
                        '& .MuiStepIcon-root.Mui-active': {
                            color: '#000000', // Prevent blue color on active step
                        },
                        '& .MuiStepLabel-label': {
                            color: '#000000', // Make all titles black
                        },
                        '& .MuiStepLabel-label.Mui-active': {
                            color: '#000000', // Ensure active step label is black
                            fontWeight: 600,
                        },
                    }}
                >
                    {experienceData.map((exp, index) => (
                        <Step key={index} expanded>
                            <StepLabel
                                optional={
                                    <Typography variant="caption" sx={{ color: '#000000' }}>
                                        {exp.date}
                                    </Typography>
                                }
                            >
                                <Typography variant="h6" sx={{ fontWeight: 600, color: '#000000' }}>
                                    {exp.title}
                                </Typography>
                            </StepLabel>
                            <StepContent>
                                <Typography variant="subtitle2" sx={{ color: '#000000' }}>
                                    {exp.company}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#000000', mt: 1 }}>
                                    {exp.description}
                                </Typography>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
            </Container>
        </Box>
    );
}
