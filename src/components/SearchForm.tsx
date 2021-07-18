import axios from "axios";
import { useRecoilState } from "recoil";
import { errorState, listState, loadingState, searchFormState } from "States";
import { Col, Input, InputRow } from "styles";
import { debounce } from "ts-debounce";

const SearchForm = () => {
  const [, setLoading] = useRecoilState(loadingState);
  const [, setList] = useRecoilState(listState);
  const [, setError] = useRecoilState(errorState);
  const [searchForm, setSearchForm] = useRecoilState(searchFormState);

  const GetImages = async (image: string): Promise<void> => {
    try {
      setLoading(true);

      const { data } = await axios({
        url:
          "?key=18269871-9984b5717c4bef14378a76910&q=" +
          image +
          "&image_type=photo&pretty=true",
      });
      setList(data);
    } catch (err) {
      setError(err.message);
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
