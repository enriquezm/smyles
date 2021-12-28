import styled from 'styled-components';
import Version from './version';

const Container = styled.div`
  padding: 8px;
  border: 3px solid var(--purple);
  margin-bottom: 20px;
  color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  font-size: 16px;
`;

const Logo = styled.h1`
  font-size: 16px;
  font-weight: 400;
  color: var(--yellow);
`;

const NavBar = () => {
  return (
    <Container>
      <Logo>TGTC_os</Logo>
      <Version />
    </Container>
  );
};

export default NavBar;