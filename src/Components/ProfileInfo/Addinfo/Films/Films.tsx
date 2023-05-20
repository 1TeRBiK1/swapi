import { Card, Col, Row } from "antd";
import { useAppSelector } from "../../../../Store/hooks";
import Loading from "../../../Loading";
import styles from "./index.module.scss";

const Films = () => {
  const { error, loading, info } = useAppSelector(
    (state) => state.profile.addInfo.films
  );

  return (
    <>
      <Row justify="center" style={{ fontSize: 20 }}>
        <h2>Films: </h2>
      </Row>
      {error ? "Something was wrong with Films" : null}
      {loading ? (
        <Row justify="center" style={{ marginTop: "20px" }}>
          <Loading />
        </Row>
      ) : (
        <Row justify="center" style={{ marginTop: "20px" }}>
          {info.length > 0
            ? info.map((e) => (
                <Col lg={24} xl={12}>
                  <Card
                    key={e.title}
                    bordered={true}
                    className={styles.filmCard}
                  >
                    <div>Title: {e.title}</div>
                    <div>Episode ID: {e.episode_id}</div>
                    <div>Opening crawl: {e.opening_crawl}</div>
                    <div>Director: {e.director}</div>
                    <div>Producer: {e.producer}</div>
                    <div>Release date: {e.release_date}</div>
                  </Card>
                </Col>
              ))
            : "No films"}
        </Row>
      )}
    </>
  );
};

export default Films;
