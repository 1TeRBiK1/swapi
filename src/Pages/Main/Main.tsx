import { Col, Empty, Row } from "antd";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { useEffect } from "react";
import { getPeople } from "../../Store/People/peopleActionCreator";
import PeopleCard from "../../Components/PeopleCard";
import SearchInput from "../../Components/SearchInput";
import Loading from "../../Components/Loading";
import PaginationMenu from "../../Components/Pagination";
import { Link } from "react-router-dom";

const Main = () => {
  const dispatch = useAppDispatch();

  const people = useAppSelector((state) => state.people.data.results);
  const { loading, pageNumber, search, error } = useAppSelector(
    (state) => state.people
  );

  useEffect(() => {
    dispatch(getPeople(search, pageNumber));
  }, [pageNumber]);

  return (
    <>
      <Row justify="center">
        <Col xl={6} lg={8}>
          <SearchInput />
        </Col>
      </Row>
      {error ? <Row>Something was wrong</Row> : null}
      {loading ? (
        <Row justify="center" style={{ marginTop: "20px" }}>
          <Loading />
        </Row>
      ) : (
        <>
          <Row justify="center">
            {people.length > 0 ? (
              people.map((info) => (
                <Col
                  lg={4}
                  xl={3}
                  offset={1}
                  style={{ marginTop: "20px", marginRight: "20px" }}
                >
                  <Link to={`/profile/${info.url.split("/").at(-2)}`}>
                    <PeopleCard info={info} />
                  </Link>
                </Col>
              ))
            ) : (
              <Empty style={{ marginTop: 10 }} />
            )}
          </Row>
          <Row justify="center" style={{ marginTop: "50px" }}>
            <Col>
              <PaginationMenu />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default Main;
