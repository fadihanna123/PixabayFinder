import sal from "sal.js";
import styled from "styled-components";

const ImageItem = ({
  item,
  i,
}: {
  item: { largeImageURL: string; webformatURL: string };
  i: number;
}) => {
  sal();

  return (
    <ImageCol data-sal="zoom-in">
      <a data-lightbox="mygallery" href={item.largeImageURL}>
        <img src={item.webformatURL} alt="" />
      </a>
    </ImageCol>
  );
};

export default ImageItem;

const ImageCol = styled.div`
  padding: 0;
  overflow: hidden;
  border: 1px solid black;
  border-radius: 50%;
  margin: 10px;
  transition: 0.3s;

  img {
    max-width: 100%;
    height: 100%;
    transition: 0.3s;
  }
`;
