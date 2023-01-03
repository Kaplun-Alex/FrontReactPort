import React from 'react';
import { Route, Routes } from 'react-router-dom';
import IndexScreen from './screens/IndexScreen';
import MainScreen from './screens/MainScreen';




function App() {
  return (
    <Routes>
      <Route path='/home' element={<MainScreen />} />
      <Route path='' element={<IndexScreen />} />
    </Routes>
  )
}

export default App;
