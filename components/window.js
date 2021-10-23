import Draggable from 'react-draggable';
import { X } from 'react-feather';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 6px solid black;
  max-width: 500px;
  max-height: 300px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #a4ffd9;
  width: 100%;
  position: sticky;
  top: 0;
  border-bottom: 6px solid black;
  cursor: grab;
  padding: 4px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
`;

const ExitButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
`;

const Content = styled.div`
  width: 100%;
  padding: 8px;
  overflow-y: scroll;
  background-color: #fff;

  &::-webkit-scrollbar {
    background-color: #fff;
    border-left: 6px solid black;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000;
  }

  &::-webkit-scrollbar-button {
    background-color: #000;
  }

  // TODO: abstract out into token
  p {
    font-size: 14px;
    line-height: 19px;
  }
`;

const Window = (props) => {
  const handleClick = (e) => {
    const buttonElement = e.target.parentNode;
    const nodeId = buttonElement.dataset.id;
    const containerElement = document.getElementById(nodeId);
    containerElement.remove();
  }

  return (
    <Draggable
      bounds="body"
      positionOffset={{x: '50%', y: '50%'}}
    >
      <Container id={props.id}>
        <Header>
          <Title>{props.title}</Title>
          <ExitButton 
            onClick={handleClick}
            data-id={props.id}
          >
            <X size={16} />
          </ExitButton>
        </Header>
        <Content> 
          { props.children }
        </Content>
      </Container>
    </Draggable>
  );
}

export default Window;
