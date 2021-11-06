import React from 'react';

import StickyBox from 'react-sticky-box'
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';
import { 
  Container,
   SearchWrapper,
   SearchInput,
   SearchIcon,
   Boty,
 } from './styles';

const SideBar: React.FC = () => {
  return(
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar twitter"/>
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
      <Boty>
     <List 
     title="talvez voce curta "
     elements={[
       <FollowSuggestion 
       name = "luîs letce"
       nickname ="@oluistres"
      />,       
       <FollowSuggestion 
       name = "necktzz"
       nickname ="@necktzz"
       />,       
       <FollowSuggestion 
       name = "M I S T I C O"
       nickname ="@miticojovem"
       />,
     ]}
     />
     <List 
     title="talvez voce curta "
     elements={[
       <News />,
       <News />,
       <News />,
     ]}
     /><List 
     title="talvez voce curta "
     elements={[
       <News />,
       <News />,
       <News />,
     ]}
     /><List 
     title="talvez voce curta "
     elements={[
       <News />,
       <News />,
       <News />,
     ]}
     /><List 
     title="talvez voce curta "
     elements={[
       <News />,
       <News />,
       <News />,
     ]}
     />
     
    </Boty>
      </StickyBox>
    


    </Container>
  );
}

export default SideBar;