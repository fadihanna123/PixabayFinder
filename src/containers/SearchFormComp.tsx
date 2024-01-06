import { useAppDispatch, useAppSelector } from '../redux/app';
import { getSearchForm, setSearchForm } from '../redux/reducers/searchForm';
import { setSearchType } from '../redux/reducers/searchType';
import React from 'react';
import { Col, Input, InputRow } from '../styles';
import { typer } from '../functions';

const SearchFormComp: React.FC = () => {
  const searchForm = useAppSelector(getSearchForm);

  const dispatch = useAppDispatch();

  return (
    <InputRow>
      <Col>
        <Input
          name='query'
          placeholder={'Type here'}
          value={searchForm.query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            typer(e, searchForm, dispatch)
          }
        />
      </Col>
      <Col>
        <input
          type='radio'
          className='m-2'
          name='searchType'
          value={searchForm.type}
          checked={searchForm.type === 'Images'}
          onChange={() => {
            dispatch(setSearchType('Images'));
            dispatch(setSearchForm({ ...searchForm, type: 'Images' }));
          }}
        />
        Images
        <input
          type='radio'
          className='m-2'
          name='searchType'
          value={searchForm.type}
          checked={searchForm.type === 'Videos'}
          onChange={() => {
            dispatch(setSearchType('Videos'));
            dispatch(setSearchForm({ ...searchForm, type: 'Videos' }));
          }}
        />
        Videos
      </Col>
    </InputRow>
  );
};

export default SearchFormComp;
