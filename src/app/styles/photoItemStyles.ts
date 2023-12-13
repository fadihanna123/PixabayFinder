'use client';
import styled from '@emotion/styled';
import {
  background,
  border,
  flexbox,
  layout,
  position,
  space,
} from 'styled-system';

export const ImageCol = styled('section')(layout, space, border);

export const Modal = styled('div')(position, space, layout);

export const ModalContent = styled('div')(
  position,
  space,
  layout,
  background,
  flexbox
);
