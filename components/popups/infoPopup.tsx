import styled from 'styled-components';
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

// TODO: abstract general icon button styles
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  padding: 4px;
  cursor: pointer;
  border: 1px dashed transparent;

  svg {
    stroke: var(--yellow);
  }

  &:hover {
    transition: border 0.3s;
    border: 1px dashed var(--yellow);
  }

  &:active {
    border: 1px dashed var(--pink);

    svg {
      stroke: var(--pink);
    }
  }
`;

const InfoPopup = ({ heading, children }) => {
  return (
    <Container>
      <Header>
        <h2>{ heading }</h2>
        <Button>
          <X size={24} />
        </Button>
      </Header>
      { children }
    </Container>
  );
}

export default InfoPopup;