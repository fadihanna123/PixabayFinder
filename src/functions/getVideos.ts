import { request } from "api";
import { Flip, toast } from "react-toastify";
import { Dispatch } from "redux";
import { setLoading } from "redux/actions";
import { IList } from "typings";
import { PixabayKey } from "utils/envs";

export const getVideos = async (
  val: string,
  dispatch: Dispatch<any>
): Promise<any> => {
  dispatch(setLoading(true));
  try {
    const endPoint = `/videos?key=${PixabayKey}&q=${val}`;
    const data = await request.get<IList>(endPoint);
    return data;
  } catch (err) {
    toast.error((err as Error).message, { transition: Flip });
  } finally {
    dispatch(setLoading(false));
  }
};
