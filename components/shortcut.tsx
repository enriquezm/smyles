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
`;

const Title = styled.p`
  color: ${props => props.isDisabled ? color.gray : `var(--yellow)`};
  font-size: ${font.size.md};
  margin-top: 8px;
`;

type Props = {
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