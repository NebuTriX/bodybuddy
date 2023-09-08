import React from 'react';
import { Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';

const App = () => {
  return (
    <Box Width="400px">
        Navbar
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </Box>
  )
}

export default App