import styled from 'styled-components';

export const ImageCol = styled.section`
  padding: 0;
  overflow: hidden;
  margin: 10px;
  border-radius: 20%;
`;

export const Modal = styled.div`
  position: fixed;
  padding: 10px 62px 0 62px;
  left: 0;
  top: 0;
  overflow: hidden;
  width: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);

  @media (max-width: 1020px) {
    padding: 10px;
  }
`;

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 0 0 0 0;
  width: 100%;
  height: 100%;
  max-width: 1300px;
`;

export const CloseLink = styled.a`
  font-size: 30px;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #ff0000;
  }
`;

export const CloseLinkContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
