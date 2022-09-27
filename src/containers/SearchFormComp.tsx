import { useDispatch, useSelector } from 'react-redux';
import { getSearchForm, setSearchForm } from 'redux/reducers/searchForm';
import { getSearchType, setSearchType } from 'redux/reducers/searchType';
import { Col, Input, InputRow } from 'styles/globalStyles';

const SearchFormComp: React.FC = () => {
  const searchForm = useSelector(getSearchForm);

  const searchType = useSelector(getSearchType);

  const dispatch = useDispatch();

  return (
    <InputRow
      data-sal='zoom-in'
      display='grid'
      width={['100%', '40%']}
      m='0 auto'
    >
      <Col
        mt={30}
        display={['grid', 'auto']}
        width={['100%', '100%']}
        m={['margin 0 auto', 'auto']}
      >
        <Input
          id='query'
          name='query'
          placeholder={searchType !== '' ? 'Type here' : ''}
          value={searchForm.query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(
              setSearchForm({
                ...searchForm,
                [e.target.name]: e.target.value,
              })
            );
          }}
        />
      </Col>
      <Col>
        <input
          type='radio'
          className='m-2'
          name='searchType'
          value={searchForm.type}
          onChange={() => {
            dispatch(setSearchType('Images'));
            dispatch(setSearchForm({ ...searchForm, type: 'Images' }));
          }}
          checked
        />
        Images
        <input
          type='radio'
          className='m-2'
          name='searchType'
          value={searchForm.type}
          onChange={() => {
            dispatch(setSearchType('Videos'));
            dispatch(setSearchForm({ ...searchForm, type: 'Videos' }));
          }}
        />
        Videos(soon)
      </Col>
    </InputRow>
  );
};

export default SearchFormComp;
