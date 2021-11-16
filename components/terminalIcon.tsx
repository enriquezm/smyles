import styled from 'styled-components';

const Container = styled.svg`
  &:hover {
    transform: translateY(-2px);
    transition: transform 0.3s;
  }
`; 

const TerminalIcon = () => {
  return (
    <Container width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 1.5H46C47.3807 1.5 48.5 2.61929 48.5 4L48.5 46C48.5 47.3807 47.3807 48.5 46 48.5H4C2.61929 48.5 1.5 47.3807 1.5 46L1.5 34.1085L1.5 30.2326L1.5 4C1.5 2.61929 2.61929 1.5 4 1.5Z" fill="black" stroke="black" strokeWidth="3"/>
    <path d="M7.5 11L12 14L7.5 16" stroke="#25FFCB" strokeLinecap="round" strokeLinejoin="round"/>
    </Container>
  );
}

export default TerminalIcon;