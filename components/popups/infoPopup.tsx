import { Context } from '../../components/globalState';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import IconButton from '../styles/IconButton';
import { X } from 'react-feather';
import { isMobileExperience } from '../../utilities/experience';

const Container = styled.div`
  border: 3px solid var(--purple);
  background-color: var(--black);
  color: var(--white);
  padding: ${props => props.isMobileExperience ? '8px' : '32px'};
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
  border-bottom: 3px solid var(--purple);
  
  h2 {
    font-weight: 400;
    font-size: 16px;
  }
`;

const Content = styled.div`
  max-height: 400px;
  overflow-y: auto;
  padding: 20px 0;
`;

const ProgressIndicator = styled.progress`
  width: 100%;
  height: 4px;
  appearance: none;
  border: none;
  background-color: transparent;

  &::-webkit-progress-bar {
    background-color: transparent;
  }

  &::-webkit-progress-value,
  &::-moz-progress-bar {
    background-color: var(--pink);
  } 
`;

type Props = {
  heading: string;
  content: string;
}

const InfoPopup = ({ heading, content }: Props) => {
  const [activeApps, setActiveApps] = useContext(Context);
  const [progressValue, setProgressValue] = useState(0);

  const handleClick = () => {
    const updatedActiveApps = activeApps.filter((window) => window.heading !== heading);
    setActiveApps(updatedActiveApps);
  }

  const handleOnScroll = (e) => {
    // TODO: work in progress bar indicator
    console.log(e.target);
  }

  return (
      <Container isMobileExperience={ isMobileExperience() }>
        <Header>
          <h2>{ heading }</h2>
          <IconButton onClick={handleClick}>
            <X size={24} />
          </IconButton>
        </Header>
        <ProgressIndicator value={progressValue} />
        <Content dangerouslySetInnerHTML={{__html: content}} onScroll={handleOnScroll}/> 
      </Container>
  );
}

export default InfoPopup;