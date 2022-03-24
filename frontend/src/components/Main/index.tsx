import React from 'react';
import ProfilePage from '../ProfilePage';
import {
  Container,
  Header,
  ProfileInfo,
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <ProfileInfo>
          <strong>Elton Lazzarin</strong>
          <span>32 Posts</span>
        </ProfileInfo>
      </Header>
      <ProfilePage />
    </Container>
  );
};

export default Main;
