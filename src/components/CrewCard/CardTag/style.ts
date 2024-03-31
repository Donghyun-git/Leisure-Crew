import styled from 'styled-components';

export const TagWrapper = styled.div`
  width: fit-content;
  height: fit-content;

  margin: 0.5rem 0.25rem;
  padding: 0.25rem 0.5rem;

  border-radius: 0.5rem;
  background: var(--orange-700);
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.15) inset,
    -1px -1px 2px 0px rgba(255, 255, 255, 0.25) inset;

  color: var(--white);

  &:first-child {
    margin-left: 0.5rem;
  }
`;
