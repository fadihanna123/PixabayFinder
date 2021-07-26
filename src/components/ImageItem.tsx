import sal from "sal.js";
import styled from "@emotion/styled";
import { space, layout, border } from "styled-system";

const ImageItem = ({
  item,
}: {
  item: { largeImageURL: string; webformatURL: string };
}) => {
  sal();

  return (
    <ImageCol
      data-sal="zoom-in"
      p={0}
      overflow="hidden"
      border="1px solid"
      borderColor="#000"
      borderRadius="50%"
      m={10}
    >
      <a data-lightbox="mygallery" href={item.largeImageURL}>
        <Img maxWidth="100%" height="100%" src={item.webformatURL} alt="" />
      </a>
    </ImageCol>
  );
};

export default ImageItem;

const ImageCol = styled("section")(layout, space, border);

const Img = styled("img")(layout, space);
