import Layout from "app/Layout";
import axios from "axios";
import { getImages, getVideos } from "functions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import sal from "sal.js";
import { SearchFormReducerTypes } from "typings";
import { PixabayBaseURL } from "utils/envs";
import { setImgList, setVideoList } from "redux/actions";

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

    getImages(searchForm.query, dispatch).then((data) =>
      dispatch(setImgList(data))
    );

    getVideos(searchForm.query, dispatch).then((data) =>
      dispatch(setVideoList(data))
    );
  }, [dispatch, searchForm.query]);

  return <Layout />;
};

export default App;
