import { Context, ActiveWindow } from './store';
import { useState, useContext } from 'react';
import { v4 as uuid4 } from 'uuid';
import { color, font } from '../theme';
import Window from './window';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  cursor: ${props => props.isDisabled ? 'not-allowed' : 'pointer'};
  margin-bottom: 20px;
  width: 100px;
`;

const Title = styled.p`
  color: ${props => props.isDisabled ? color.gray : (props.colorOverride ? props.colorOverride : color.white)};
  font-size: ${font.size.md};
  margin: 0;
`;

const Shortcut = (props) => {
  const [ isClicked, setIsClicked ] = useState(false);
  const [ keyId, setkeyId ] = useState(null);
  const [ activeWindows, setActiveWindows ] = useContext(Context);

  const handleClick = () => {
      setIsClicked(true);
      setkeyId(uuid4());

      if (windowIsNotActive()) {
        const updatedActiveWindows: ActiveWindow[] = [...activeWindows, { title: props.title}];
        setActiveWindows(updatedActiveWindows);
      }
  }

  const windowIsNotActive = (): boolean => {
    return !activeWindows.some(window => window.title === props.title);
  }

  return (
    <>
      <Container
        isDisabled={props.isDisabled}
        onClick={handleClick}>
        {props.children}
        <Title 
          isDisabled={props.isDisabled}
          colorOverride={props.colorOverride}
        >{props.title}</Title>
      </Container>

      {
        !props.isDisabled && isClicked && <Window key={keyId} title={props.title}>{props.content}</Window>
      }
    </>
  );
};

export default Shortcut;
