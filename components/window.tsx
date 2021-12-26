import { useState, useContext } from 'react';
import { Context, ActiveWindow } from './store';
import Draggable from 'react-draggable';
import { X } from 'react-feather';
import styled from 'styled-components';
import { color } from '../theme';

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid var(--purple);
  width: ${props => props.wide ? '800px' : '400px'};
  max-height: 300px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--black);
  color: var(--white);
  width: 100%;
  position: sticky;
  top: 0;
  border-bottom: 3px solid var(--black);
  cursor: grab;
  padding: 4px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  color: var(--black);
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
  background-color: var(--white); 

  &::-webkit-scrollbar {
    background-color: ${color.white};
    border-left: 3px solid black;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${color.turquoise};
  }

  &::-webkit-scrollbar-button {
    background-color: ${color.black};
  }

  // TODO: abstract out into token
  p {
    font-size: 14px;
    line-height: 19px;
  }
`;

type Props = {
  title: string;
  children: any;
  id?: string;
  wide?: boolean;
};

const Window = (props: Props) => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeWindows, setActiveWindows] = useContext(Context);

  const handleClick = () => {
    setIsVisible(false);

    const updatedActiveWindows: ActiveWindow[] = activeWindows.filter((window: ActiveWindow) => window.title !== props.title);
    setActiveWindows(updatedActiveWindows);
  }

  return (
    <>
      { isVisible &&
        <Draggable
          bounds="body"
          defaultPosition={{x: 300, y: 0}}
        >
          <Container wide={props.wide}>
            <Header>
              <Title>{props.title}</Title>
              <ExitButton
                onClick={handleClick}
              >
                <X size={16} />
              </ExitButton>
            </Header>
            <Content> 
              { props.children }
            </Content>
          </Container>
        </Draggable>
      }
    </>
  );
}

export default Window;
