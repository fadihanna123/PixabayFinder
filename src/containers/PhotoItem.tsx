import React, { useEffect } from 'react';
import sal from 'sal.js';
import ReactGA from 'react-ga4';

// Components
import Loader from '@ui/Loader';
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
    ReactGA.event({
      category: 'User Interaction',
      action: 'Clicked Button',
      label: 'Toggle image preview',
    });
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
    <section className='imageCol'>
      {item?.webformatURL && (
        <img
          className='imgItem'
          aria-label={searchForm.query}
          src={item.webformatURL}
          alt={searchForm.query}
          onClick={() => toggleImagePreviewer(item)}
          onLoad={() => setMediaLoading(false)}
          style={{
            width: '100%',
            display: mediaLoading ? 'none' : 'block',
          }}
        />
      )}
      {toggler && (
        <div className='modal'>
          <div className='modalContent'>
            {image && (
              <>
                <div className='closePreviewerBtnContainer'>
                  <button
                    className='closePreviewerBtn'
                    onClick={(e) => {
                      e.preventDefault();
                      hideImagePreviewer(toggler);
                    }}
                  >
                    X
                  </button>
                </div>
                <img
                  className='modalImg'
                  width='500'
                  height='500'
                  alt='preview'
                  src={image}
                />
              </>
            )}
          </div>
        </div>
      )}
      <br />
    </section>
  );
};

export default PhotoItem;
