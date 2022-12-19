import React from 'react';
import FooterComponent from '../components/FooterComponent';
import MetaComponent from '../components/MetaComponent';
import HeaderComponent from '../components/HeaderComponent';
import ContentComponent from '../components/ContentComponent';


function MainScreen() {
  return (
    <div>
      <MetaComponent />
      <HeaderComponent />
      <ContentComponent/>
      <FooterComponent />
    </div>
      
    
  )
}

export default MainScreen;