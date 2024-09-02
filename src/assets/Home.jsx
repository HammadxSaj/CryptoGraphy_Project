import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';
import Body from './Body';
import Messages from './Messages';
import Decrypt from './Decrypt';
import MainPage from './MainPage';

const Home = () => {
  const [activeComponent, setActiveComponent] = useState('home'); // Set initial component to 'home'

  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <Body />;
      case 'messages':
        return <Messages />;
      case 'decrypt':
        return <Decrypt />;
      case 'logout':
        return <MainPage />;
      default:
        return <Body />;
    }
  };

  return (
    <Box>
      {/* Conditionally render Header and Sidebar */}
      {activeComponent !== 'logout' && <Header />}
      {activeComponent !== 'logout' && <Sidebar setActiveComponent={setActiveComponent} />}
      {renderComponent()}
    </Box>
  );
};

export default Home;
