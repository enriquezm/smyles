import styled from 'styled-components';

const IconButton = styled.button`
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

export default IconButton;