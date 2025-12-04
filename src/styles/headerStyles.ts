import styled from 'styled-components';

export const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-style: italic;
  background: linear-gradient(300deg, #7c3aed 10%, #a78bfa 50%, #c4b5fd 0%);
  border-radius: 30px;

  h1,
  i {
    background: transparent;
  }
`;

export const LangSwitcher = styled.select`
  float: right;
  border: 0;
  margin: 10px;
  font-size: 1rem;
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
