'use client';
import { typer } from '../../functions';
import { useAppDispatch, useAppSelector } from '../../redux/app';
import { getSearchForm, setSearchForm } from '../../redux/reducers/searchForm';
import { setSearchType } from '../../redux/reducers/searchType';
import { Col, Input, InputRow } from 'styles/globalStyles';
import React from 'react';
import { NextPage } from 'next';

const SearchFormComp: NextPage = () => {
  const searchForm = useAppSelector(getSearchForm);

  const dispatch = useAppDispatch();

  return (
    <InputRow display='grid' width={['100%', '40%']} m='0 auto'>
      <Col
        mt={30}
        display={['grid', 'auto']}
        width={['100%', '100%']}
        m={['margin 0 auto', 'auto']}
      >
        <Input
          name='query'
          placeholder={'Type here'}
          value={searchForm.query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            typer(e, searchForm, dispatch);
          }}
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
