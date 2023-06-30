import { RouterProvider } from 'react-router-dom';
import { PlayerContext } from '../context/PlayerContext';
import router from '../router/router';
import { useState } from 'react';
import { Box } from '@mui/material';

const App = () => {
  const [name, setName] = useState('');

  return (
    <PlayerContext.Provider value={{ name, setName }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        sx={{ backgroundColor: '#bde0fe' }}>
        <RouterProvider router={router} />
      </Box>
    </PlayerContext.Provider>
  );
};

export default App;
