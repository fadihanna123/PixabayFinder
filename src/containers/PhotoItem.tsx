import "styles/main.css";

import { hideImagePreviewer, toggleImagePreviewer } from "functions";
import { HitsOfList, ImageReducerTypes, SearchForm, SearchFormReducerTypes, TogglerReducerTypes } from "models";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import sal from "sal.js";
import { ImageCol, Img, Modal, ModalContent } from "styles";

const PhotoItem: React.FC<{
    item: HitsOfList;
}> = ({ item }: { item: HitsOfList }) => {
    const toggler: boolean = useSelector(
        (state: TogglerReducerTypes) => state.togglerReducer
    );

    const searchForm: SearchForm = useSelector(
        (state: SearchFormReducerTypes) => state.searchFormReducer
    );

    const image: string = useSelector(
        (state: ImageReducerTypes) => state.imageReducer
    );

    const dispatch = useDispatch();

    useEffect(() => {
        sal();
    }, []);

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
            {item.webformatURL && (
                <>
                    <Img
                        aria-label={searchForm.query}
                        maxWidth="100%"
                        height="100%"
                        src={item.webformatURL}
                        alt={searchForm.query}
                        onClick={() => toggleImagePreviewer(item, dispatch)}
                        loading="lazy"
                    />
                </>
            )}

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
                    onClick={() => hideImagePreviewer(toggler, dispatch)}
                >
                    <ModalContent
                        position="relative"
                        display="flex"
                        justifyContent="center"
                        margin="auto"
                        padding={[0, 0, 0, 0]}
                        width="100%"
                        height="100%"
                        maxWidth="1200px"
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
