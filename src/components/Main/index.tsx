import React from 'react';
import ProfilePage from '../ProfilePage';
import {
  Container,
  Header,
  ProfileInfo,
} from './styles';
import GlobalStyles from '../../styles/GlobalStyles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <ProfileInfo>
          <strong>Manada</strong>
        </ProfileInfo>
      </Header>
      <ProfilePage />
      <GlobalStyles />
    </Container>
  );
};

export default Main;
