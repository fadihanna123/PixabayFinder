import styled from 'styled-components';

export const SearchSectionWrapper = styled.section`
  width: 100%;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  background: linear-gradient(
    135deg,
    rgba(79, 70, 229, 0.1) 10%,
    rgba(124, 58, 237, 0.1) 50%,
    rgba(167, 139, 250, 0.1) 100%
  );
  font-size: 1.25rem;
  margin: 2rem 0;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
  overflow: hidden;
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  color: #fff;
  font-style: italic;
  margin-bottom: 1.5rem;
  font-weight: 700;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: 1s ease-out 0s 1 slideInFromLeft;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
  max-width: 700px;
  line-height: 1.6;
`;

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
`;
