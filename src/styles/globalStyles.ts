import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *
  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-size: 100%;
    transition: 0.3s all;
    color: #fff;
    background: linear-gradient(#4f46e5 100%, #7c3aed 50%);
  }

  .fslightbox-toolbar-button:nth-child(1) {
    display: none;
    transition: 0.3s;
  }

  .spinner:after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 40%;
    left: 50%;
    height: 60px;
    width: 60px;
    margin-top: -30px;
    margin-left: -30px;
    border-radius: 50%;
    border: 3px solid lightgray;
    border-top-color: #0275d8;
    animation: spinner 0.7s linear infinite;
    transition: 0.3s;
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
      transition: 0.3s;
    }
  }

  .m-2{
    margin: 10px;
    transition: 0.3s;
  }


  img
  {
    width: 100%;
    max-width: 100%;
    height: auto;
    transition: 0.3s;
  }

  @media (max-width: 1500px)
  {
    body
    {
      margin: 0;
      padding: 0;
      font-size: 100%;
      width: 100%;
    }

  }

`;

export const InputRow = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Col = styled.section`
  margin-top: 30px;
  width: 40%;
  margin: 0 auto;

  @media (max-width: 1020px) {
    display: auto;
    width: 100%;
    margin: auto;
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 35px;
  min-height: calc(1.5em + 0.75rem + 2px);
  padding: 1%;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  color: #fff;
  background-clip: padding-box;
  border: 1px solid gray;
  appearance: none;
  border: 1px solid black;
  border-radius: 8px;
  text-indent: 10px;
  margin-bottom: 15px;
  transition: all 0.5s linear;

  &:focus {
    border-color: #0275d8;
    box-shadow:
      0 1px 1px rgba(0, 0, 0, 0.075) inset,
      0 0 8px lightblue;
    outline: 0 none;
    transition: all 0.5s linear;
  }
`;
