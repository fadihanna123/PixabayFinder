import axios from "axios";
import { Flip, toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { listState, loadingState, searchFormState } from "states";
import { Col, Input, InputRow } from "styles";
import { debounce } from "ts-debounce";
import { IList } from "typings";
import { PixabayKey } from "utils";

const SearchForm: React.FC = () => {
  const [, setLoading] = useRecoilState(loadingState);
  const [, setList] = useRecoilState(listState);
  const [searchForm, setSearchForm] = useRecoilState(searchFormState);

  const GetImages = async (imageVal: string): Promise<void> => {
    try {
      setLoading(true);

      const endPoint = `?key=${PixabayKey}&q=${imageVal}&image_type=photo&pretty=true`;

      const { data } = await axios.get<IList>(endPoint);
      setList(data);
    } catch (err) {
      toast.error((err as Error).message, { transition: Flip });
    } finally {
      setLoading(false);
    }
  };

  const typer = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setSearchForm &&
      setSearchForm({
        ...searchForm,
        [e.target.name]: e.target.value,
      });

    debounce<any>(GetImages(e.target.value), 1500);
  };

  return (
    <InputRow
      data-sal="zoom-in"
      display="grid"
      width={["100%", "40%"]}
      m="0 auto"
    >
      <Col
        mt={30}
        display={["grid", "auto"]}
        width={["100%", "100%"]}
        m={["margin 0 auto", "auto"]}
      >
        <Input
          id="query"
          name="query"
          placeholder="Type here"
          value={searchForm.query}
          onChange={typer}
        />
      </Col>
    </InputRow>
  );
};

export default SearchForm;
