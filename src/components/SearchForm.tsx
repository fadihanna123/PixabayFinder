import axios from "axios";
import { Flip, toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { listState, loadingState, searchFormState } from "States";
import { Col, Input, InputRow } from "styles";
import { debounce } from "ts-debounce";

const SearchForm = () => {
  const [, setLoading] = useRecoilState(loadingState);
  const [, setList] = useRecoilState(listState);
  const [searchForm, setSearchForm] = useRecoilState(searchFormState);

  const GetImages = async (image: string): Promise<void> => {
    try {
      setLoading(true);

      const { data } = await axios({
        url: "?key=x&q=" + image + "&image_type=photo&pretty=true",
      });
      setList(data);
    } catch (err) {
      toast((err as Error).message, { transition: Flip, type: "error" });
    } finally {
      setLoading(true);
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
    <InputRow data-sal="zoom-in">
      <Col>
        <Input
          id="query"
          name="query"
          placeholder="Type here"
          value={searchForm.query}
          onChange={typer}
          list="bros"
        />
      </Col>
    </InputRow>
  );
};

export default SearchForm;
