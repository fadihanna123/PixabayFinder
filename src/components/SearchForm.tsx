import axios from "axios";
import { useRecoilState } from "recoil";
import { errorState, listState, loadingState, searchFormState } from "States";
import styled from "styled-components";

const SearchForm = () => {
  const [, setLoading] = useRecoilState(loadingState);
  const [, setList] = useRecoilState(listState);
  const [, setError] = useRecoilState(errorState);
  const [searchForm, setSearchForm] = useRecoilState(searchFormState);

  const GetImages = async (image: string) => {
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
  ) => {
    setSearchForm &&
      setSearchForm({
        ...searchForm,
        [e.target.name]: e.target.value,
      });
    GetImages(e.target.value);
  };

  return (
    <>
      <InputRow>
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
    </>
  );
};

export default SearchForm;

const InputRow = styled.div`
  display: grid;
  width: 40%;
  margin: 0 auto;
  transition: 0.3s;

  @media (max-width: 1900px) {
    width: 100%;
  }
`;

const Col = styled.div`
  margin-top: 30px;
  transition: 0.3s;

  @media (min-width: 900px) and (max-width: 1900px) {
    display: grid;
    width: 50%;
    margin: 0 auto;
  }
`;

const Input = styled.input`
  display: block;
  width: 100%;
  min-height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid gray;
  appearance: none;
  border-radius: 0.25rem;
  margin-bottom: 10px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: 0.3s;

  &:focus {
    border-color: #0275d8;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px lightblue;
    outline: 0 none;
    transition: 0.3s;
  }
`;
