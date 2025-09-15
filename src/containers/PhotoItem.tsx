import React, { useEffect } from 'react';
import sal from 'sal.js';

// Components
import Loader from '@ui/Loader';
import {
  ImageCol,
  Modal,
  ModalContent,
  CloseLink,
  CloseLinkContainer,
} from '@core/styles/photoItemStyles';
import { ImgItem, ModalImg } from '@core/styles/listStyles';
import { useGlobalContext } from '@core/states';

const PhotoItem: React.FC<{
  item: HitsOfList;
}> = ({ item }: { item: HitsOfList }) => {
  const {
    image,
    mediaLoading,
    searchForm,
    toggler,
    setToggler,
    setImage,
    setMediaLoading,
  } = useGlobalContext();

  /**
   * Hide image previewer.
   * @function hideImagePreviewer
   * @param { boolean } toggler
   * @returns { void }
   */
  const hideImagePreviewer = (toggler: boolean): void => setToggler(!toggler);

  /**
   * Hide image previewer.
   * @function toggleImagePreviewer
   * @param { HitsOfList } item
   * @returns { void }
   */
  const toggleImagePreviewer = (item: HitsOfList): void => {
    setToggler(true);
    setImage(item.webformatURL);
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
          onClick={() => toggleImagePreviewer(item)}
          style={{
            width: '100%',
            display: mediaLoading ? 'none' : 'block',
          }}
          onLoad={() => setMediaLoading(false)}
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
                    onClick={() => hideImagePreviewer(toggler)}
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
