import { SearchForm } from "models";
import { Dispatch } from "redux";
import { setSearchForm } from "redux/actions";

export const typer = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    searchForm: SearchForm,
    dispatch: Dispatch<any>
) => {
    dispatch(
        setSearchForm &&
            setSearchForm({
                ...searchForm,
                [e.target.name]: e.target.value,
            })
    );
};
