import styled from "@emotion/styled";
import FsLightbox from "fslightbox-react";
import { FC } from "react";
import { useRecoilState } from "recoil";
import sal from "sal.js";
import { searchFormState, togglerState } from "states";
import { border, layout, space } from "styled-system";

const ImageItem: FC<{
  item: { largeImageURL: string; webformatURL: string };
}> = ({ item }: { item: { largeImageURL: string; webformatURL: string } }) => {
  const [toggler, setToggler] = useRecoilState(togglerState);
  const [searchForm] = useRecoilState(searchFormState);
  sal();

  const toggleImagePreviewer = () => {
    setToggler(!toggler);
  };

  return (
    <ImageCol
      data-sal="zoom-in"
      p={0}
      overflow="hidden"
      border="1px solid"
      borderColor="#000"
      borderRadius="50%"
      m={10}
      onClick={toggleImagePreviewer}
    >
      <Img
        aria-label={searchForm.query}
        maxWidth="100%"
        height="100%"
        src={item.webformatURL}
        alt={searchForm.query}
        onClick={toggleImagePreviewer}
        loading="lazy"
      />
      <FsLightbox toggler={toggler} sources={[item.largeImageURL]} />
    </ImageCol>
  );
};

export default ImageItem;

const ImageCol = styled("section")(layout, space, border);

const Img = styled("img")(layout, space);
