import React from 'react';

import Feed from '../Feed';
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar>
          <img
            src={require('../../assets/avatar.png')}
            alt="Avatar"
          />
        </Avatar>
      </Banner>
      <ProfileData>
        <EditButton outlined>Set up profile</EditButton>

        <h1>Elton Lazzarin</h1>
        <h2>@elton_lazzarin</h2>

        {/* <Followage>
          <span>
            <strong>98 </strong>
            Following
          </span>
          <span>
            <strong>322 </strong>Followers
          </span>
        </Followage> */}
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
