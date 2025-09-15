import React from 'react';
import { Col, Input, InputRow } from '@styles/globalStyles';
import { useTyper } from '../hooks';
import useTranslate from '../hooks/useTranslate';
import { useGlobalContext } from '@core/states';

const SearchFormComp: React.FC = () => {
  const { searchForm, lang, setSearchType, setSearchForm } = useGlobalContext();

  return (
    <InputRow>
      <Col>
        <Input
          name='query'
          placeholder={`${useTranslate('INPUT_PLACEHOLDER_TXT', lang)}...`}
          value={searchForm.query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            useTyper(e, searchForm, setSearchForm)
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
            setSearchType('Images');
            setSearchForm({ ...searchForm, type: 'Images' });
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
            setSearchType('Videos');
            setSearchForm({ ...searchForm, type: 'Videos' });
          }}
        />
        {useTranslate('VIDEOS', lang)}
      </Col>
    </InputRow>
  );
};

export default SearchFormComp;
