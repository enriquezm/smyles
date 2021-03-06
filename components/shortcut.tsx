import { Context } from './globalState';
import React, { useContext } from 'react';
import { color, font } from '../theme';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  cursor: ${props => props.isDisabled ? 'not-allowed' : 'pointer'};
  margin-bottom: 32px;
  width: 100px;

  p {
    padding: 4px;
    border: 1px dashed transparent;
    transition: border 0.3s;
  } 

  &:hover {
    p {
      border: 1px dashed var(--yellow);
    }
  }

  &:active {
    p {
      border: 1px dashed var(--pink)
    }
  }
`;

const Title = styled.p`
  color: ${props => props.isDisabled ? color.gray : `var(--yellow)`};
  font-size: ${font.size.md};
  margin-top: 8px;
`;

type Props = {
  type?: string;
  heading: string;
  content: any;
  isDisabled?: boolean;
  children: React.ReactNode;
  colorOverride?: string;
};

const Shortcut = (props: Props) => {
  const [ activeApps, setActiveApps ] = useContext(Context);

  const handleClick = () => {
      if (windowIsNotActive()) {
        const updatedActiveApps = [...activeApps, {
          type: props.type,
          heading: props.heading,
          content: props.content,
        }];
        setActiveApps(updatedActiveApps);
      }
  }

  const windowIsNotActive = (): boolean => {
    return !activeApps.some(app => app.heading === props.heading);
  }

  return (
    <>
      <Container
        isDisabled={props.isDisabled}
        onClick={handleClick}>
        {props.children}
        <Title isDisabled={props.isDisabled}>
          {props.heading}
        </Title>
      </Container>
    </>
  );
};

export default Shortcut;