import styled from 'styled-components';

export const MainFooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 3rem;
  font-style: italic;
  background: linear-gradient(to right, #7c3aed, #a78bfa, #c4b5fd);
  border-radius: 30px;

  h1,
  i {
    background: transparent;
  }

  i {
    font-size: 2rem;
    margin: 0.67em 0;
  }

  @media (max-width: 1020px) {
    font-size: 1rem;
    flex-direction: column-reverse;
  }
`;
