import { useContext } from 'react';
import { Context } from './globalState';
import { X } from 'react-feather';
import styled from 'styled-components';
import { color } from '../theme';
import IconButton from './styles/IconButton';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid var(--purple);
  width: ${props => props.wide ? '800px' : '600px'};
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #180E3C;
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
  color: var(--turquoise);
`;

const Content = styled.div`
  width: 100%;
  max-height: 400px;
  padding: 8px;
  overflow-y: auto;
  background-color: var(--black); 
  color: var(--white);

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
    margin-bottom: 16px;
  }
`;

type Props = {
  heading: string;
  children: any;
  id?: string;
  wide?: boolean;
};

const Window = (props: Props) => {
  const [activeApps, setActiveApps] = useContext(Context);

  const handleClick = () => {
    const updatedActiveApps = activeApps.filter((window) => window.heading !== props.heading);
    setActiveApps(updatedActiveApps);
  }

  return (
    <Container>
      <Header>
        <Title>{props.heading}</Title>
        <IconButton
          onClick={handleClick}
        >
          <X size={24} />
        </IconButton>
      </Header>
      <Content> 
        { props.children }
      </Content>
    </Container>
  );
}

export default Window;
