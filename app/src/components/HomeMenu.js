import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#aed581'),
    backgroundColor: '#aed581',
    '&:hover': {
      backgroundColor: '#7cb342',
    },
    padding: '3px 20px',
    fontSize: '1.5rem',
}));

export default function HomeMenu() {

  

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#fff'
    }}>
      <Typography variant="h6" align="left" gutterBottom fontWeight="bold">
        최애 생카 활용
      </Typography>
      <Box
        component="form"
        sx={{
          width: '100%',
          maxWidth: 300,
          marginTop: '20px'
        }}
        noValidate
        autoComplete="off"
      >
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '12px' 
        }}>
          <ColorButton variant="outlined" size="large">
            최애
            <br />
            등록
          </ColorButton>
          <ColorButton variant="outlined" size="large">
            생카
            <br />
            등록
          </ColorButton>
          <ColorButton variant="outlined" size="large">
            생카
            <br />
            주최
          </ColorButton>
        </Box>
      </Box>
    </Box>
  );
}
