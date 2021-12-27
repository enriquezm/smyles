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
  color: var(--yellow);
  font-size: ${font.size.md};
  margin: 0;

  span {
    display: flex;
    align-items: center;
  }
`;

type Props = {
  children: React.ReactNode;
  title: string;
};

const OutclickShortcut = (props: Props) => (
  <>
    <Link href="https://github.com/enriquezm" passHref>
      <Container>
        {props.children}
        <Title>
          <span>{props.title}</span>
          <span><ExternalLink color="#E6FF4A" size={14}/></span>
        </Title>
      </Container>
    </Link>
  </>
);

export default OutclickShortcut;