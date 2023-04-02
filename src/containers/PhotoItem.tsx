import 'styles/main.css';

import { HitsOfList, SearchForm } from 'models';
import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { useAppDispatch, useAppSelector } from 'redux/app';
import { getImage, setImage } from 'redux/reducers/image';
import { getSearchForm } from 'redux/reducers/searchForm';
import { getToggler, setToggler } from 'redux/reducers/toggler';
import sal from 'sal.js';
import { ImageCol, Img, Modal, ModalContent } from 'styles';

const PhotoItem: React.FC<{
  item: HitsOfList;
}> = ({ item }: { item: HitsOfList }) => {
  const toggler: boolean = useAppSelector(getToggler);

  const searchForm: SearchForm = useAppSelector(getSearchForm);

  const image: string = useAppSelector(getImage);

  const dispatch = useAppDispatch();

  /**
   * Hide image previewer.
   *
   * @function hideImagePreviewer
   * @param { boolean } toggler
   * @param { Dispatch<any> } dispatch
   * @returns { object }
   */
  const hideImagePreviewer = (
    toggler: boolean,
    dispatch: Dispatch<any>
  ): object => dispatch(setToggler(!toggler));

  /**
   * Hide image previewer.
   *
   * @function toggleImagePreviewer
   * @param { HitsOfList } item
   * @param { Dispatch<any> } dispatch
   * @returns { void }
   */
  const toggleImagePreviewer = (
    item: HitsOfList,
    dispatch: Dispatch<any>
  ): void => {
    dispatch(setToggler(true));
    dispatch(setImage(item.webformatURL));
  };

  useEffect(() => {
    sal();
  }, []);

  return (
    <ImageCol
      data-sal='zoom-in'
      p={0}
      overflow='hidden'
      border='1px solid'
      borderColor='#000'
      borderRadius='20%'
      m={10}
    >
      {item.webformatURL && (
        <>
          <Img
            aria-label={searchForm.query}
            maxWidth='100%'
            height='100%'
            src={item.webformatURL}
            alt={searchForm.query}
            onClick={() => toggleImagePreviewer(item, dispatch)}
            loading='lazy'
          />
        </>
      )}

      {toggler && (
        <Modal
          position='fixed'
          padding={[10, 62, 0, 62]}
          left='0'
          top='0'
          overflow='hidden'
          width={1}
          className='modal'
          color='white'
          onClick={() => hideImagePreviewer(toggler, dispatch)}
        >
          <ModalContent
            position='relative'
            display='flex'
            justifyContent='center'
            margin='auto'
            padding={[0, 0, 0, 0]}
            width='100%'
            height='100%'
            maxWidth='1200px'
          >
            {image && <img src={image} />}
          </ModalContent>
        </Modal>
      )}
      <br />
    </ImageCol>
  );
};

export default PhotoItem;
