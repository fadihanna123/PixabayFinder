import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { setImage } from '../redux/reducers/image';
import { setToggler } from '../redux/reducers/toggler';
import sal from 'sal.js';
import { Loader } from '../ui';
import { ImageCol, Modal, ModalContent } from '../styles';
import { setMediaLoading } from '../redux/reducers';
import useReduxConsts from '../hooks/useReduxConsts';

const PhotoItem: React.FC<{
  item: HitsOfList;
}> = ({ item }: { item: HitsOfList }) => {
  const { image, mediaLoading, searchForm, toggler, dispatch } =
    useReduxConsts();

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
