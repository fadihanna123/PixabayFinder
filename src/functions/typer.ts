import { SearchForm } from 'models';
import { Dispatch } from 'redux';
import { setSearchForm } from 'redux/actions';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Handle search-form values.
 *
 * @param e - Event
 * @param searchForm - Search form values
 * @param dispatch - Dispatch
 * @returns Void
 */

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
