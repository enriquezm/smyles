import Link from 'next/link';
import { GitHub } from 'react-feather';
import styled from 'styled-components';
import { color } from '../theme';
import Greeting from './greeting';

const Container = styled.div`
  padding: 8px;
  border-bottom: ${props => props.theme.border.md} solid ${color.black400};
  margin-bottom: 20px;
  color: ${color.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

const NavBar = () => {

  return (
    <Container>
      <Greeting />
      <Link href="https://github.com/enriquezm">
        <a><GitHub /></a>
      </Link>
    </Container>
  );
};

export default NavBar;