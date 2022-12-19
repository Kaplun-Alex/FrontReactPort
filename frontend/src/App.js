import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainScreen from './screens/MainScreen';




function App() {
  return (
    <Routes>
      <Route path='/home' element={<MainScreen />} />
    </Routes>
  )
}

export default App;
