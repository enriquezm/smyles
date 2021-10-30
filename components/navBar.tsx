import styled from 'styled-components';
import { color, font } from '../theme';
import Greeting from './greeting';
import Emoji from './emoji';

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

const Version = styled.p`
  font-size: ${font.size.sm};
  color: ${color.yellow};
`;

const NavBar = () => {

  return (
    <Container>
      <Greeting />
      <Version>{`You're running ver1.1.0 `}<Emoji symbol="🎉"/></Version>
    </Container>
  );
};

export default NavBar;