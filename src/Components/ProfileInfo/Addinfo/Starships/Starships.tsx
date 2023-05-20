import { Card, Col, Row } from "antd";
import { useAppSelector } from "../../../../Store/hooks";
import Loading from "../../../Loading";
import styles from "./index.module.scss";

const Starships = () => {
  const { error, loading, info } = useAppSelector(
    (state) => state.profile.addInfo.starships
  );

  return (
    <>
      <Row justify="center" style={{ fontSize: 20 }}>
        <h2>Starships: </h2>
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
                    className={styles.starshipsCard}
                  >
                    <div>Name: {e.name}</div>
                    <div>Cargo capacity: {e.cargo_capacity}</div>
                    <div>Consumables: {e.consumables}</div>
                    <div>Cost in credits: {e.cost_in_credits}</div>
                    <div>Crew: {e.crew}</div>
                    <div>Length: {e.length}</div>
                    <div>Manufacturer: {e.manufacturer}</div>
                    <div>
                      Max atmosphering speed: {e.max_atmosphering_speed}
                    </div>
                    <div>Model: {e.model}</div>
                    <div>Passengers: {e.passengers}</div>
                  </Card>
                </Col>
              ))
            : "No starships"}
        </Row>
      )}
    </>
  );
};

export default Starships;
