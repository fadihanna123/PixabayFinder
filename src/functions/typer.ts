import { Dispatch } from "redux";
import { setSearchForm } from "redux/actions";
import { SearchForm } from "typings";

export const typer = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  searchForm: SearchForm,
  dispatch: Dispatch<any>
): void => {
  dispatch(
    setSearchForm &&
      setSearchForm({
        ...searchForm,
        [e.target.name]: e.target.value,
      })
  );
};
