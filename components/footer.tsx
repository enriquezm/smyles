import Emoji from './emoji';
import { GitHub, Linkedin } from 'react-feather';
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
  display: flex;
  gap: 8px;
  padding: 4px;
  font-size: ${font.size.sm};
`;

const Footer = () => {
  return (
    <Container>
      <span>Made with <Emoji symbol="☕"/> {`&`} <Emoji symbol="💜"/> by <Link href="https://www.linkedin.com/in/mylesenriquez/"><a>myles</a></Link></span>
      <Tray>
        <Link href="https://github.com/enriquezm">
          <a><GitHub size={12}/></a>
        </Link>
        <Link href="https://www.linkedin.com/in/mylesenriquez/">
          <a><Linkedin size={12}/></a>
        </Link>
      </Tray>
    </Container>
  );
};

export default Footer;