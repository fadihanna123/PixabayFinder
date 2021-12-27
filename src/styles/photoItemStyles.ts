import styled from "@emotion/styled";
import {
  layout,
  space,
  border,
  position,
  background,
  flexbox,
} from "styled-system";

export const ImageCol = styled("section")(layout, space, border);

export const Img = styled("img")(layout, space);

export const Modal = styled("div")(position, space, layout);

export const ModalContent = styled("div")(
  position,
  space,
  layout,
  background,
  flexbox
);
