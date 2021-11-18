import styled from 'styled-components';
import { color } from '../theme';
import Greeting from './greeting'

const Container = styled.div`
  padding: 8px;
  border-bottom: ${props => props.theme.border.md} solid ${color.black400};
  margin-bottom: 20px;
  color: ${color.white};
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
`;

const Logo = styled.div`
  font-family: 'Press Start 2P', cursive;
`;

const NavBar = () => {
  return (
    <Container>
      <Logo>Smyles_OS</Logo>
      <Greeting />
    </Container>
  );
};

export default NavBar;