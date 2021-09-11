import "styles/main.css";

import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import sal from "sal.js";
import { imagePreviewerState, searchFormState, togglerState } from "states";
import {
  background,
  border,
  flexbox,
  layout,
  position,
  space,
} from "styled-system";

const ImageItem: React.FC<{
  item: { largeImageURL: string; webformatURL: string };
}> = ({ item }: { item: { largeImageURL: string; webformatURL: string } }) => {
  const [toggler, setToggler] = useRecoilState(togglerState);
  const [searchForm] = useRecoilState(searchFormState);
  const [image, setImage] = useRecoilState(imagePreviewerState);

  sal();

  const toggleImagePreviewer = (imgUrl: string): void => {
    setToggler(true);
    setImage(imgUrl);
  };

  const hideImagePreviewer = (): void => {
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
    >
      <Img
        aria-label={searchForm.query}
        maxWidth="100%"
        height="100%"
        src={item.webformatURL}
        alt={searchForm.query}
        loading="lazy"
        onClick={() => toggleImagePreviewer(item.webformatURL)}
      />
      {toggler && (
        <Modal
          position="fixed"
          padding={[10, 62, 0, 62]}
          left="0"
          top="0"
          overflow="hidden"
          width={1}
          className="modal"
          color="white"
          onClick={hideImagePreviewer}
        >
          <ModalContent
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            margin="auto"
            padding={[0, 0, 0, 0]}
            width="100%"
            height="100%"
            maxWidth="1200px"
          >
            <img src={image} alt={searchForm.query} />
          </ModalContent>
        </Modal>
      )}
      <br />
    </ImageCol>
  );
};

export default ImageItem;

const ImageCol = styled("section")(layout, space, border);

const Img = styled("img")(layout, space);

const Modal = styled("div")(position, space, layout);

const ModalContent = styled("div")(
  position,
  space,
  layout,
  background,
  flexbox
);
