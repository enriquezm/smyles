import { Context, ActiveWindow } from './globalState';
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
  title: string;
  content: any;
  isDisabled?: boolean;
  children: React.ReactNode;
  colorOverride?: string;
};

const Shortcut = (props: Props) => {
  const [ activeWindows, setActiveWindows ] = useContext(Context);

  const handleClick = () => {
      if (windowIsNotActive()) {
        const updatedActiveWindows: ActiveWindow[] = [...activeWindows, {
          title: props.title,
          content: props.content,
        }];
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
        <Title isDisabled={props.isDisabled}>
          {props.title}
        </Title>
      </Container>
    </>
  );
};

export default Shortcut;