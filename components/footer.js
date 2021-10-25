import Emoji from './emoji';
import { GitHub } from 'react-feather';
import Link from 'next/link';
import styled from 'styled-components';
import { color, font } from '../theme';

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${color.gray};
  color: ${color.white};
  padding: 8px 40px;
  font-size: ${font.size.sm};
`;

const Tray = styled.span`
  padding: 4px;
  font-size: ${font.size.sm};
`;

const Footer = () => {
  return (
    <Container>
      <span>Made with <Emoji symbol="☕"/> {`&`} <Emoji symbol="💜"/> by myles</span>
      <Tray>
        <Link href="https://github.com/enriquezm">
          <a><GitHub size={12}/></a>
        </Link>
      </Tray>
    </Container>
  );
};

export default Footer;