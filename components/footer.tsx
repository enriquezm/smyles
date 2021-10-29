import { useContext, useState } from 'react';
import { Context } from './store';
import Emoji from './emoji';
import { GitHub, Linkedin } from 'react-feather';
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
`;

const TasksContainer = styled.span`
  display: flex;
`;

const ActiveTask = styled.span`
  display: flex;
  align-items: center;
  color: ${color.black};
  background-color: ${color.white};
  min-width: 150px;
  padding: 0 4px;
`;

const Tray = styled.span`
  display: flex;
  gap: 8px;
  padding: 4px;
  font-size: ${font.size.sm};
`;

const Footer = () => {
  const [activeWindows, setActiveWindows] = useContext(Context);

  return (
    <Container>
      {/* <span>Made with <Emoji symbol="☕"/> {`&`} <Emoji symbol="💜"/> by <Link href={state.links.linkedin}><a>{state.site.name}</a></Link></span> */}
      <TasksContainer>
        {
          activeWindows.about && <ActiveTask>about_me.txt</ActiveTask>
        }
      </TasksContainer>
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