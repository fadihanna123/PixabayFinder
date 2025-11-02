import React from 'react';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Handle search-form values.
 * @param { React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> } e - Event
 * @param { SearchForm } searchForm - Search form values
 * @returns { void } Void
 * @example  typer(e, { query: "Cat"; type: "Images" }, dispatch);
 */
export const useTyper = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  searchForm: SearchForm,
  setSearchForm: (searchForm: SearchForm) => void
): void => {
  setSearchForm({
    ...searchForm,
    [e.target.name]: e.target.value,
  });
};

export default useTyper;
