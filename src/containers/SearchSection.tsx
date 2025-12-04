import React from 'react';
import SearchFormComp from './SearchFormComp';
import {
  SearchSectionWrapper,
  HeroTitle,
  HeroSubtitle,
  SearchContainer,
} from '@styles/searchSectionStyles';
import { useGlobalContext } from '@core/states';
import useTranslate from '@core/hooks/useTranslate';

const SearchSection = () => {
  const { lang } = useGlobalContext();

  return (
    <SearchSectionWrapper>
      <HeroTitle>{useTranslate('SECTION_TITLE', lang)}</HeroTitle>
      <HeroSubtitle>{useTranslate('SECTION_TEXT', lang)}</HeroSubtitle>
      <SearchContainer>
        <SearchFormComp />
      </SearchContainer>
    </SearchSectionWrapper>
  );
};

export default SearchSection;
