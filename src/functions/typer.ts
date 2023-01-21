import { SearchForm } from 'models';
import { Dispatch } from 'redux';
import { setSearchForm } from 'redux/reducers/searchForm';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Handle search-form values.
 *
 * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - Event
 * @param {SearchForm} searchForm - Search form values
 * @param {Dispatch<any>} dispatch - Dispatch
 * @returns Void
 */
export const typer = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  searchForm: SearchForm,
  dispatch: Dispatch<any>
) => {
  dispatch(
    setSearchForm({
      ...searchForm,
      [e.target.name]: e.target.value,
    })
  );
};
