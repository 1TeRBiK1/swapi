import Menu from "./Menu";
import { Col, Row } from "antd";
import styles from "./index.module.scss";

function Header() {
  return (
    <>
      <Row className={styles.header}>
        <Col span={10} offset={4}>
          <Menu />
        </Col>
      </Row>
    </>
  );
}

export default Header;
