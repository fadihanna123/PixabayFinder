import React from 'react';
import SearchFormComp from './SearchFormComp';
import { useGlobalContext } from '@core/states';
import useTranslate from '@core/hooks/useTranslate';

const SearchSection = () => {
  const { lang } = useGlobalContext();

  return (
    <section className='searchSectionWrapper'>
      <h1 className='heroTitle'>{useTranslate('SECTION_TITLE', lang)}</h1>
      <p className='heroSubtitle'>{useTranslate('SECTION_TEXT', lang)}</p>
      <div className='searchContainer'>
        <SearchFormComp />
      </div>
    </section>
  );
};

export default SearchSection;
