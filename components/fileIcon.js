import styled from 'styled-components';

const Container = styled.svg`
  &:hover {
    transform: translateY(-2px);
    transition: transform 0.3s;
  }
`; 

const FileIcon = () => {
  return (
    <Container width="50" height="50" viewBox="0 0 64 73" fill="none">
      <path d="M4 1.5H60C61.3807 1.5 62.5 2.61929 62.5 4L62.5 69C62.5 70.3807 61.3807 71.5 60 71.5H4C2.61929 71.5 1.5 70.3807 1.5 69L1.5 49.7985L1.5 44.1395L1.5 4C1.5 2.61929 2.61929 1.5 4 1.5Z" fill="#F3F3F3" stroke="black" strokeWidth="3"/>
      <line x1="11" y1="16.5" x2="52" y2="16.5" stroke="#CECECE" strokeWidth="3"/>
      <line x1="11" y1="27.5" x2="52" y2="27.5" stroke="#CECECE" strokeWidth="3"/>
      <line x1="11" y1="38.5" x2="52" y2="38.5" stroke="#CECECE" strokeWidth="3"/>
      <line x1="11" y1="49.5" x2="32" y2="49.5" stroke="#CECECE" strokeWidth="3"/>
    </Container>
  );
}

export default FileIcon;