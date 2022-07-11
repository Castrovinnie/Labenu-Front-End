import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={"Ricardo_Travasus"}
          fotoUsuario={"https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_960_720.jpg"}
          fotoPost={"https://cdn.pixabay.com/photo/2019/10/15/20/10/flag-4552833_960_720.jpg"}
        />

        <Post
          nomeUsuario={"Mariana_Moreira"}
          fotoUsuario={"https://cdn.pixabay.com/photo/2015/03/03/18/58/woman-657753_960_720.jpg"}
          fotoPost={"https://cdn.pixabay.com/photo/2017/11/10/08/10/mother-2935723_960_720.jpg"}
        />

        <Post
          nomeUsuario={"A_Paulinha"}
          fotoUsuario={"https://cdn.pixabay.com/photo/2016/04/26/22/31/bride-1355473_960_720.jpg"}
          fotoPost={"https://cdn.pixabay.com/photo/2022/03/31/18/05/siblings-7103506_960_720.jpg"}
        />
      </MainContainer>
    );
  }
}

export default App;
