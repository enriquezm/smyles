import styled from 'styled-components';
import { font, color } from '../theme';
import Link from 'next/link';
import { ExternalLink } from 'react-feather';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;
  width: 100px;
`;

const Title = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${color.white};
  font-size: ${font.size.md};
  margin: 0;

  span {
    display: flex;
    align-items: center;
  }
`;

const OutclickShortcut = (props) => {

  return (
    <>
      <Link href="https://github.com/enriquezm">
        <Container>
          {props.children}
          <Title>
            <span>{props.title}</span>
            <span><ExternalLink color={color.white} size={14}/></span>
          </Title>
        </Container>
      </Link>
    </>
  );
};

export default OutclickShortcut;