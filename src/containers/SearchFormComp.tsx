import { typer } from "functions";
import { SearchFormReducerTypes, SearchTypeReducerTypes } from "models/redux";
import { useDispatch, useSelector } from "react-redux";
import { setSearchForm, setSearchType } from "redux/actions";
import { Col, Input, InputRow } from "styles/globalStyles";

const SearchFormComp: React.FC = () => {
  const searchForm = useSelector(
    (state: SearchFormReducerTypes) => state.searchFormReducer
  );

  const searchType = useSelector(
    (state: SearchTypeReducerTypes) => state.searchTypeReducer
  );

  const dispatch = useDispatch();

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
          placeholder={searchType !== "" ? "Type here" : ""}
          value={searchForm.query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            typer(e, searchForm, dispatch);
          }}
        />
      </Col>
      <Col>
        <input
          type="radio"
          className="m-2"
          name="searchType"
          value={searchForm.type}
          style={{ margin: "10px" }}
          onChange={() => {
            dispatch(setSearchType("Images"));
            dispatch(setSearchForm({ ...searchForm, type: "Images" }));
          }}
        />
        Images
        <input
          type="radio"
          className="m-2"
          name="searchType"
          value={searchForm.type}
          style={{ margin: "10px" }}
          onChange={() => {
            dispatch(setSearchType("Videos"));
            dispatch(setSearchForm({ ...searchForm, type: "Videos" }));
          }}
        />
        Videos(soon)
      </Col>
    </InputRow>
  );
};

export default SearchFormComp;
