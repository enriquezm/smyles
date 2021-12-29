import styled from 'styled-components';
import { font, color } from '../theme';
import Link from 'next/link';
import { ExternalLink } from 'react-feather';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-bottom: 32px;
  width: 100px;

  p {
    padding: 4px;
    border: 1px dashed transparent;
    transition: border 0.3s;
  } 

  &:hover {
    p {
      border: 1px dashed var(--yellow);
    }
  }

  &:active {
    p {
      border: 1px dashed var(--pink)
    }
  }
`;

const Title = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--yellow);
  font-size: ${font.size.md};
  margin-top: 8px;
`;

type Props = {
  children: React.ReactNode;
  title: string;
  href: string;
};

const OutclickShortcut = (props: Props) => (
  <>
    <Link href={props.href} passHref>
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