import { useContext } from 'react';
import { Context, ActiveWindow } from './store';
import Emoji from './emoji';
import Link from 'next/link';
import styled from 'styled-components';
import { color, font } from '../theme';

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${color.gray};
  color: ${color.white};
  padding: 0 40px;
  font-size: ${font.size.sm};
  min-height: 25px;
`;

const ActiveWindowsTray = styled.span`
  display: flex;
`;

const ActiveWindowBar = styled.span`
  display: flex;
  align-items: center;
  background-color: ${color.pink};
  border-right: 3px solid ${color.turquoise};
  color: ${color.black};
  font-size: ${font.size.md};
  min-width: 150px;
  padding: 0 4px;
`;

const ExtraInfoTray = styled.span`
  display: flex;
  gap: 8px;
  padding: 4px;
  font-size: ${font.size.sm};
`;

const Footer = () => {
  const [activeWindows] = useContext(Context);

  const allActiveWindows: ActiveWindow[] = activeWindows.map((window) => (<ActiveWindowBar key={window.title}>{window.title}</ActiveWindowBar>));

  return (
    <Container>
      <ActiveWindowsTray>
        { allActiveWindows }
      </ActiveWindowsTray>
      <ExtraInfoTray>
          Made with <Emoji symbol="☕"/> {`&`} <Emoji symbol="💜"/> by 
          <Link href="https://www.linkedin.com/in/mylesenriquez/">
            <a>
              Myles Enriquez
            </a>
          </Link>
      </ExtraInfoTray>
    </Container>
  );
};

export default Footer;