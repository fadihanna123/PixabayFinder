import React from 'react';
import { Dispatch } from 'redux';
import { setSearchForm } from '../redux/reducers/searchForm';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Handle search-form values.
 * @function typer
 * @param { React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> } e - Event
 * @param { SearchForm } searchForm - Search form values
 * @param { Dispatch<any> } dispatch - Dispatch
 * @returns { void } Void
 * @example  typer(e, { query: "Cat"; type: "Images" }, dispatch);
 */
export const typer = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  searchForm: SearchForm,
  dispatch: Dispatch<any>
): void => {
  dispatch(
    setSearchForm({
      ...searchForm,
      [e.target.name]: e.target.value,
    })
  );
};
