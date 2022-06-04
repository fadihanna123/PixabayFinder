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
        sal();

        getImages(searchForm.query)
            .then((data: Promise<void | IList[]>) => {
                dispatch(setLoading(true));
                dispatch(setImgList(data));
            })
            .catch((err) =>
                toast.error((err as Error).message, { transition: Flip })
            )
            .finally(() => dispatch(setLoading(false)));

        getVideos(searchForm.query)
            .then((data: Promise<void | IList[]>) => {
                dispatch(setLoading(true));
                dispatch(setVideoList(data));
            })
            .catch((err) =>
                toast.error((err as Error).message, { transition: Flip })
            )
            .finally(() => dispatch(setLoading(false)));
    }, [dispatch, searchForm.query]);

    return <Layout />;
};

export default App;
