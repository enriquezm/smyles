import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  cursor: pointer;
`;

const Title = styled.p`
  color: ${props => props.theme.color.white};
  font-size: ${props => props.theme.fontSize.md};
`;

const Shortcut = (props) => {
  let component = null;

  const handleClick = (e) => {
    const id = 'testID';
    component = true ? <Window id={id}>Test</Window> : '';
  };

  return (
    <>
    <Container onClick={handleClick}>
      {props.children}
      <Title>{props.title}</Title>
    </Container>

    {component}
    </>
  );
};

export default Shortcut;
