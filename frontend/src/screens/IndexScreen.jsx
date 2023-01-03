import React from 'react';
import FooterComponent from '../components/FooterComponent';
import MetaComponent from '../components/MetaComponent';
import HeaderComponent from '../components/HeaderComponent';
import IndexComponent from '../components/IndexComponent';




function IndexScreen() {
  return (
    <div>
      <MetaComponent />
      <HeaderComponent />
      <IndexComponent/>
      <FooterComponent />
    </div>
      
    
  )
}

export default IndexScreen;