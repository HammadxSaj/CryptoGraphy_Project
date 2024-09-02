import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = ({ setActiveComponent }) => {
  return (
    <Box
      sx={{
        width: '300px',
        backgroundColor: '#f4f4f4',
        height: '100vh',
        position: 'fixed',
        top: 140,
        left: 9,
        paddingTop: '20px',
      }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        Welcome, User
      </Typography>
      <List>
        <ListItem button onClick={() => setActiveComponent('home')}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={() => setActiveComponent('messages')}>
          <ListItemIcon>
            <MessageIcon />
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>
        <ListItem button onClick={() => setActiveComponent('decrypt')}>
          <ListItemIcon>
            <VpnKeyIcon />
          </ListItemIcon>
          <ListItemText primary="Decrypt" />
        </ListItem>
        <ListItem button onClick={() => setActiveComponent('logout')}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Log Out" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
