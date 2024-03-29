import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { useAppDispatch, useAppSelector } from '../redux/app';
import { getImage, setImage } from '../redux/reducers/image';
import { getSearchForm } from '../redux/reducers/searchForm';
import { getToggler, setToggler } from '../redux/reducers/toggler';
import sal from 'sal.js';
import {
  getMediatLoading,
  setMediaLoading,
} from '../redux/reducers/mediaLoading';
import { Loader } from '../ui';
import { ImageCol, Modal, ModalContent } from '../styles';

const PhotoItem: React.FC<{
  item: HitsOfList;
}> = ({ item }: { item: HitsOfList }) => {
  const toggler: boolean = useAppSelector(getToggler);

  const searchForm: SearchForm = useAppSelector(getSearchForm);

  const image: string = useAppSelector(getImage);
  const mediaLoading: boolean = useAppSelector(getMediatLoading);
  const dispatch = useAppDispatch();

  /**
   * Hide image previewer.
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

  if (mediaLoading) {
    return <Loader className={['spinner']} />;
  }

  return (
    <ImageCol data-sal='zoom-in'>
      {item?.webformatURL && (
        <img
          aria-label={searchForm.query}
          src={item.webformatURL}
          alt={searchForm.query}
          onClick={() => toggleImagePreviewer(item, dispatch)}
          width='500'
          height='500'
          style={{
            maxWidth: '100%',
            height: '100%',
            display: mediaLoading ? 'none' : 'block',
          }}
          onLoad={() => dispatch(setMediaLoading(false))}
        />
      )}

      {toggler && (
        <Modal
          className='modal'
          color='white'
          onClick={() => hideImagePreviewer(toggler, dispatch)}
        >
          <ModalContent>
            {image && (
              <img
                width='500'
                height='500'
                style={{ maxWidth: '100%', height: '100%' }}
                alt='preview'
                src={image}
              />
            )}
          </ModalContent>
        </Modal>
      )}
      <br />
    </ImageCol>
  );
};

export default PhotoItem;
