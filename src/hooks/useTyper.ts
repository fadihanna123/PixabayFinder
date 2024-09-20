import React from 'react';
import { setSearchForm } from '../redux/reducers';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Handle search-form values.
 * @param { React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> } e - Event
 * @param { SearchForm } searchForm - Search form values
 * @param { any } dispatch - Dispatch
 * @returns { void } Void
 * @example  typer(e, { query: "Cat"; type: "Images" }, dispatch);
 */
export const useTyper = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  searchForm: SearchForm,
  dispatch: any
): void => {
  dispatch(
    setSearchForm({
      ...searchForm,
      [e.target.name]: e.target.value,
    })
  );
};

export default useTyper;
