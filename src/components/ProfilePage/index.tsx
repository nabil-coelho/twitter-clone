import React from 'react';
import Feed from '../Feed';
import { 
  Container,
   Banner,
   Avatar,
   ProfileData,
   LocationIcon,
   CakeIcon,
   Followage,
   EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Nabil</h1>
        <h2>@jaoonabil</h2>
      <p> querendo ser um dev <a href="/#">@Rocketseat</a> </p>
      <ul>
        <li>
          <LocationIcon />
          posse
          Brasil
        </li>
        
        <li>
          <CakeIcon />
          Nacido(a)em 4 de agosto de 2007
        </li>
      </ul>
      <Followage>
        <span>
           <strong>133 </strong>seguindo
        </span>
        <span>
           <strong>97 </strong>seguidores
        </span>
      </Followage>
      </ProfileData>

        <Feed/>
    </Container>
  )
}

export default ProfilePage;