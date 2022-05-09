import React from 'react';
import Navbar from './Navbar';
import Header from './header';
import Footer from './footer'
import { Container } from 'reactstrap';


const MainLayout = (props) => {

  return (
    <React.Fragment>
     <Header {...props}/>
     <Container>
      {props.children}
     </Container>
    </React.Fragment>
  );
};

export default MainLayout;