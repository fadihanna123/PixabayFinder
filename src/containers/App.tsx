import Layout from "app/Layout";
import axios from "axios";
import { getImages, getVideos } from "functions";
import { IList, SearchFormReducerTypes } from "models";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flip, toast } from "react-toastify";
import { setImgList, setLoading, setVideoList } from "redux/actions";
import sal from "sal.js";
import { PixabayBaseURL } from "utils/envs";

const globalHeader: string = "application/json";

axios.defaults.baseURL = PixabayBaseURL;
axios.defaults.headers.common["Content-Type"] = globalHeader;

const App: React.FC = () => {
    const searchForm = useSelector(
        (state: SearchFormReducerTypes) => state.searchFormReducer
    );

    const dispatch = useDispatch();

    useEffect(() => {
        let isSubscribed: boolean = true;

        sal();

        getImages(searchForm.query)
            .then((data: Promise<void | IList[]>) => {
                if (isSubscribed) {
                    dispatch(setLoading(true));
                    dispatch(setImgList(data));
                } else {
                    return null;
                }
            })
            .catch((err: Error) =>
                isSubscribed
                    ? toast.error((err as Error).message, { transition: Flip })
                    : null
            )
            .finally(() => (isSubscribed ? dispatch(setLoading(false)) : null));

        getVideos(searchForm.query)
            .then((data: Promise<void | IList[]>) => {
                if (isSubscribed) {
                    dispatch(setLoading(true));
                    dispatch(setVideoList(data));
                } else {
                    return null;
                }
            })
            .catch((err: Error) =>
                isSubscribed
                    ? toast.error((err as Error).message, { transition: Flip })
                    : null
            )
            .finally(() => (isSubscribed ? dispatch(setLoading(false)) : null));

        return () => {
            isSubscribed = false;
        };
    }, [dispatch, searchForm.query]);

    return <Layout />;
};

export default App;
