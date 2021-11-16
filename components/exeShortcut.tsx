import { color, font } from '../theme';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  cursor: ${props => props.isDisabled ? 'not-allowed' : 'pointer'};
  margin-bottom: 20px;
  width: 100px;
`;

const Title = styled.p`
  color: ${props => props.isDisabled ? color.gray : (props.colorOverride ? props.colorOverride : color.white)};
  font-size: ${font.size.md};
  margin: 0;
`;

const ExeShortcut = (props) => {
  const handleClick = () => {
    console.log('clicked');
    // todo: update array of exe apps and enable current selected one
  }

  return (
    <>
      <Container
        isDisabled={props.isDisabled}
        onClick={handleClick}>
        {props.children}
        <Title 
          isDisabled={props.isDisabled}
          colorOverride={props.colorOverride}
        >{
          props.title}
        </Title>
      </Container>
    </>
  );
};

export default ExeShortcut;