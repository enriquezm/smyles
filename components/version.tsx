import Emoji from './emoji';
import { font, color } from '../theme';
import styled from 'styled-components';

const Container = styled.p`
  font-size: ${font.size.sm};
  color: ${color.yellow};
`;

const Version = () => (
  <Container>{`running ver2.0.0 `}<Emoji symbol="🎉"/></Container>
);

export default Version;