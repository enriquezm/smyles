import { Context } from '../../components/globalState';
import { useContext } from 'react';
import styled from 'styled-components';
import IconButton from '../styles/IconButton';
import { X } from 'react-feather';

const Container = styled.div`
  border: 3px solid var(--purple);
  background-color: var(--black);
  color: var(--white);
  padding: 32px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  line-height: 24px;

  p {
    margin-bottom: 16px;
  }
`;

const Header = styled.header`
  color: var(--turquoise);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  
  h2 {
    font-weight: 400;
    font-size: 16px;
  }
`;

type Props = {
  heading: string;
  children: React.ReactNode;
}

const InfoPopup = ({ heading, children }: Props) => {
  const [activeApps, setActiveApps] = useContext(Context);

  const handleClick = () => {
    const updatedActiveApps = activeApps.filter((window) => window.heading !== heading);
    setActiveApps(updatedActiveApps);
  }

  return (
    <Container>
      <Header>
        <h2>{ heading }</h2>
        <IconButton onClick={handleClick}>
          <X size={24} />
        </IconButton>
      </Header>
      { children }
    </Container>
  );
}

export default InfoPopup;