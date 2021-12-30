import { useContext } from 'react';
import { Context } from './globalState';
import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--black);
  color: var(--white);
  padding: 0 40px;
  font-size: 12px;
  min-height: 25px;
`;

const ActiveWindowsTray = styled.span`
  display: flex;
`;

const ActiveWindowBar = styled.span`
  display: flex;
  align-items: center;
  background-color: var(--purple);
  border-right: 3px solid var(--yellow); 
  color: var(--black);
  font-size: 12px; 
  min-width: 150px;
  padding: 0 4px;
`;

const Footer = () => {
  const [activeApps] = useContext(Context);

  const allActiveApps = activeApps.map((app) => (<ActiveWindowBar key={app.id}>{app.heading}</ActiveWindowBar>));

  return (
    <Container>
      <ActiveWindowsTray>
        { allActiveApps }
      </ActiveWindowsTray>
    </Container>
  );
};

export default Footer;