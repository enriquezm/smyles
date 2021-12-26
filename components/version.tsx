import Emoji from './emoji';
import styled from 'styled-components';

const Container = styled.p`
  font-size: 16px;
  color: var(--yellow);
`;

const Version = () => (
  <Container>{`running ver2.0.0 `}<Emoji symbol="🎉"/></Container>
);

export default Version;