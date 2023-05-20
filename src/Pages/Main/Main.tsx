import { Col, Row, Space } from "antd";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { useEffect } from "react";
import { getPeople } from "../../Store/People/peopleActionCreator";
import PeopleCard from "../../Components/PeopleCard";
import SearchInput from "../../Components/SearchInput";
import Loading from "../../Components/Loading";
import PaginationMenu from "../../Components/Pagination";

const Main = () => {
  const dispatch = useAppDispatch();

  const people = useAppSelector((state) => state.people.data.results);
  const { loading, pageNumber, search } = useAppSelector(
    (state) => state.people
  );

  useEffect(() => {
    dispatch(getPeople(search, pageNumber));
  }, [pageNumber]);

  return (
    <>
      <Row justify="center">
        <Col span={6}>
          <SearchInput />
        </Col>
      </Row>
      {loading ? (
        <Row justify="center" style={{ marginTop: "20px" }}>
          <Loading />
        </Row>
      ) : (
        <>
          <Row justify="center">
            {people.length > 0
              ? people.map((info) => (
                  <Col
                    span={3}
                    offset={1}
                    style={{ marginTop: "20px", marginRight: "20px" }}
                  >
                    <PeopleCard info={info} />
                  </Col>
                ))
              : `Not Found ${search}`}
          </Row>
          <Row justify="center" style={{ marginTop: "50px" }}>
            <PaginationMenu />
          </Row>
        </>
      )}
    </>
  );
};

export default Main;
