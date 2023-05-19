import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const DETECTORS = "GitHub";
const CHOISE_PC = "Swapi API";

const NAV_MENU = [
  { name: CHOISE_PC, url: "/" },
  { name: DETECTORS, url: "/profile" },
];

const Menu: React.FC = () => {
  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles.nav}>
          {NAV_MENU.map((el, index) => (
            <li onClick={() => {}} key={index}>
              <Link to={el.url} className={styles.item}>
                {el?.name}
              </Link>
            </li>
          ))}
          <li className={styles.item}></li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
