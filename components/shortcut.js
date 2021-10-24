import { useState} from 'react';
import { v4 as uuid4 } from 'uuid';

import Window from './window';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  cursor: pointer;
  margin-bottom: 20px;
`;

const Title = styled.p`
  color: ${props => props.theme.color.white};
  font-size: ${props => props.theme.fontSize.md};
`;

const Shortcut = (props) => {
  const [ isClicked, setIsClicked ] = useState(false);
  const [ id, setId ] = useState(null);

  const handleClick = () => {
      setIsClicked(true);
      setId(uuid4());
  }

  return (
    <>
      <Container onClick={handleClick}>
        {props.children}
        <Title>{props.title}</Title>
      </Container>

      {
        isClicked && <Window key={id} id={id} title={props.title}>{props.content}</Window>
      }
    </>
  );
};

export default Shortcut;
