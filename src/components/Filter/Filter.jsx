// import { nanoid } from "nanoid";
import { FilterTitle, FilterInput } from "./Filter.styled";
import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from '../../redux/filterSlice';
import { selectFilterValue } from 'redux/selectors';

  const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  const filterInputHandler = event => {
    const inputValue = event.target.value;
    dispatch(setFilterValue(inputValue));
    };
  
    return (
    <div>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={filterInputHandler}
        title="Search field"
        required
      />
    </div>
  );
};

export default Filter;