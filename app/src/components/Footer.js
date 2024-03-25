import React, { FC, ReactElement } from "react";
import { AppBar, Box, Button, IconButton, Container, Grid, Toolbar, Typography } from "@mui/material";
import PageviewIcon from '@mui/icons-material/Pageview';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import PersonIcon from '@mui/icons-material/Person';

export default function Footer() {
  return (
    <AppBar position="fixed" color="default" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <IconButton color="inherit">
              <HomeIcon  />
            </IconButton>
            <Typography variant="body2" align="center">홈</Typography>
          </Grid>
          <Grid item>
            <IconButton color="inherit">
              <PageviewIcon  />
            </IconButton>
            <Typography variant="body2" align="center">포카찾기</Typography>
          </Grid>
          <Grid item>
            <IconButton color="inherit">
              <BuildIcon  />
            </IconButton>
            <Typography variant="body2" align="center">빠른구매</Typography>
          </Grid>
          <Grid item>
            <IconButton color="inherit">
              <LocalGroceryStoreIcon  />
            </IconButton>
            <Typography variant="body2" align="center">스토어</Typography>
          </Grid>
          <Grid item>
            <IconButton color="inherit">
              <PersonIcon  />
            </IconButton>
            <Typography variant="body2" align="center">내 정보</Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
