import React, { useEffect } from 'react';
import sal from 'sal.js';

// Components
import Loader from '@ui/Loader';
import { setMediaLoading } from '@redux/reducers/mediaLoading';
import useReduxConsts from '@hooks/useReduxConsts';
import { setImage } from '@redux/reducers/image';
import { setToggler } from '@redux/reducers/toggler';
import {
  ImageCol,
  Modal,
  ModalContent,
  CloseLink,
  CloseLinkContainer,
} from '@core/styles/photoItemStyles';
import { ImgItem, ModalImg } from '@core/styles/listStyles';

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
  const hideImagePreviewer = (toggler: boolean, dispatch: any): object =>
    dispatch(setToggler(!toggler));

  /**
   * Hide image previewer.
   * @function toggleImagePreviewer
   * @param { HitsOfList } item
   * @param { Dispatch<any> } dispatch
   * @returns { void }
   */
  const toggleImagePreviewer = (item: HitsOfList, dispatch: any): void => {
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
    <ImageCol>
      {item?.webformatURL && (
        <ImgItem
          aria-label={searchForm.query}
          src={item.webformatURL}
          alt={searchForm.query}
          onClick={() => toggleImagePreviewer(item, dispatch)}
          style={{
            width: '100%',
            display: mediaLoading ? 'none' : 'block',
          }}
          onLoad={() => dispatch(setMediaLoading(false))}
        />
      )}
      {toggler && (
        <Modal className='modal' color='white'>
          <ModalContent>
            {image && (
              <>
                <CloseLinkContainer>
                  <CloseLink
                    href='#'
                    onClick={() => hideImagePreviewer(toggler, dispatch)}
                  >
                    X
                  </CloseLink>
                </CloseLinkContainer>
                <ModalImg width='500' height='500' alt='preview' src={image} />
              </>
            )}
          </ModalContent>
        </Modal>
      )}
      <br />
    </ImageCol>
  );
};

export default PhotoItem;
