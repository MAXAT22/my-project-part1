import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function Hero() {
    return (
        <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            DUBAI BOOKS
          </Typography>
          <Typography variant="h5" align="center" color="blue" paragraph>
           Welcome to Dubai books. Here you will have access 
           to 1000 books of different types and genres. You can 
           buy and read them from the comfort of your home. Just be part of Dubai books
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={4}
            justifyContent="center"
          >
            <Button variant="contained">Be a part</Button>
            <Button variant="contained">More info</Button>
            <Button variant="contained">Subscribe</Button>
            <Button variant="contained">Lets start</Button>
          </Stack>
        </Container>
      </Box>
    )
};

export default Hero;