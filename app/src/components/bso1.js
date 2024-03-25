import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function MobileFriendlyPage() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#aed581'
    }}>
      <Typography variant="h4" align="left" gutterBottom fontWeight="bold">
        매일 업데이트되는
        <br />
        내 최애의 
        <br />
        생일 카페
      </Typography>
      <Typography variant="body2" align="center">
        전체 아티스트 수 // 등록된 이벤트 수 //
      </Typography>
      <Box
        component="form"
        sx={{
          width: '100%',
          maxWidth: 250,
          marginTop: '20px',
          backgroundColor: '#fff',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField fullWidth id="Placeholder" placeholder="그룹명, 아티스트명 입력"  color="success" focused />
      </Box>
    </Box>
  );
}
