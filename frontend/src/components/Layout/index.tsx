import React from 'react';
import Main from '../Main';
import { Container, Wrapper } from './styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>
        {/* <ProfilePage /> */}
        {/* <MenuBar /> */}
        {/* <Main /> */}
        {/* <SideBar /> */}
      </Wrapper>
    </Container>
  );
};

export default Layout;
