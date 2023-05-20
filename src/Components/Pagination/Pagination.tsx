import type { PaginationProps } from "antd";
import { Pagination } from "antd";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { setPageNumber } from "../../Store/People/peopleSlice";

const PaginationMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const pageNumber = useAppSelector((state) => state.people.pageNumber);
  const count = useAppSelector((state) => state.people.data.count);

  const onChange: PaginationProps["onChange"] = (page) => {
    dispatch(setPageNumber(page));
  };

  return (
    <Pagination
      current={pageNumber}
      onChange={onChange}
      hideOnSinglePage={true}
      defaultPageSize={10}
      total={count}
      responsive={true}
      pageSizeOptions={[]}
    />
  );
};

export default PaginationMenu;
