import { Input } from "antd";
import { useAppDispatch } from "../../Store/hooks";
import { getPeople } from "../../Store/People/peopleActionCreator";

const { Search } = Input;

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const onSearch = (value: string) => dispatch(getPeople(value));

  return <Search placeholder="Input name" onSearch={onSearch} enterButton />;
};

export default SearchInput;
