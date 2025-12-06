import React from 'react';
import { useTyper } from '../hooks';
import useTranslate from '../hooks/useTranslate';
import { useGlobalContext } from '@core/states';

const SearchFormComp: React.FC = () => {
  const { searchForm, lang, setSearchType, setSearchForm } = useGlobalContext();

  return (
    <section className='inputRow'>
      <section className='col'>
        <input
          className='input'
          name='query'
          type='search'
          placeholder={`${useTranslate('INPUT_PLACEHOLDER_TXT', lang)}...`}
          value={searchForm.query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            useTyper(e, searchForm, setSearchForm)
          }
        />
      </section>
      <section className='col'>
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
      </section>
    </section>
  );
};

export default SearchFormComp;
