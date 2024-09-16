import styled from 'styled-components';

export const LangSwitcher = styled.select`
  float: right;
  border: 0;
  margin: 0;
  font-size: 1rem;
  /* Custom dropdown styling */
  padding: 0.5rem 1rem;
  box-shadow:
    inset 0 1px 0 hsla(0, 0%, 100%, 0.1),
    0 0 0 1px hsla(230, 13%, 9%, 0.02),
    0 0.3px 0.4px hsla(230, 13%, 9%, 0.025),
    0 1px 3px -1px hsla(230, 13%, 9%, 0.2),
    0 3.5px 6px hsla(230, 13%, 9%, 0.12);
  border-radius: 0.375em;
  transition: box-shadow 0.2s;
  user-select: none;
`;
