import { setSearchForm } from '../redux/reducers/searchForm';
import { setSearchType } from '../redux/reducers/searchType';
import React from 'react';
import { Col, Input, InputRow } from '@styles/globalStyles';
import useReduxConsts from '../hooks/useReduxConsts';
import { useTyper } from '../hooks';
import useTranslate from '../hooks/useTranslate';

const SearchFormComp: React.FC = () => {
  const { dispatch, searchForm, lang } = useReduxConsts();

  return (
    <InputRow>
      <Col>
        <Input
          name='query'
          placeholder={`${useTranslate('INPUT_PLACEHOLDER_TXT', lang)}...`}
          value={searchForm.query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            useTyper(e, searchForm, dispatch)
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
        {useTranslate('IMAGES', lang)}
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
        {useTranslate('VIDEOS', lang)}
      </Col>
    </InputRow>
  );
};

export default SearchFormComp;
