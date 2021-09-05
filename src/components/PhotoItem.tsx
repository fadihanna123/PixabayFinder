import sal from "sal.js";
import styled from "@emotion/styled";
import { space, layout, border } from "styled-system";
import FsLightbox from "fslightbox-react";
import { useState } from "react";

const ImageItem = ({
  item,
}: {
  item: { largeImageURL: string; webformatURL: string };
}) => {
  sal();
  const [toggler, setToggler] = useState(false);

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
      <Img
        aria-label=""
        maxWidth="100%"
        height="100%"
        src={item.webformatURL}
        alt=""
        onClick={() => setToggler(!toggler)}
      />
      <FsLightbox toggler={toggler} sources={[item.largeImageURL]} />
    </ImageCol>
  );
};

export default ImageItem;

const ImageCol = styled("section")(layout, space, border);

const Img = styled("img")(layout, space);
