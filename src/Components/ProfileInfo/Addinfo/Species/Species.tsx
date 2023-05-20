import { Card, Col, Row } from "antd";
import { useAppSelector } from "../../../../Store/hooks";
import Loading from "../../../Loading";
import styles from "./index.module.scss";

const Species = () => {
  const { error, loading, info } = useAppSelector(
    (state) => state.profile.addInfo.species
  );

  return (
    <>
      <Row justify="center" style={{ fontSize: 20 }}>
        <h2>Species: </h2>
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
                    key={e.name}
                    bordered={true}
                    className={styles.speciesCard}
                  >
                    <div>Name: {e.name}</div>
                    <div>Skin colors: {e.skin_colors}</div>
                    <div>Language: {e.language}</div>
                    <div>Homeworld: {e.homeworld}</div>
                    <div>Hair colors: {e.hair_colors}</div>
                    <div>Eye colors: {e.eye_colors}</div>
                    <div>Designation: {e.designation}</div>
                    <div>Classification: {e.classification}</div>
                    <div>Avarage height: {e.average_height}</div>
                    <div>Average lifespan: {e.average_lifespan}</div>
                  </Card>
                </Col>
              ))
            : "No species"}
        </Row>
      )}
    </>
  );
};

export default Species;
