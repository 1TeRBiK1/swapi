import { Button, Card, Input, InputRef, Row } from "antd";
import { Profile } from "../../Store/People/peopleSlice";
import { useAppDispatch } from "../../Store/hooks";
import {
  getFilms,
  getSpecial,
  getStarships,
  getVehicles,
} from "../../Store/Profile/profileActionCreator";
import { useEffect, useRef, useState } from "react";
import AddInfo from "./Addinfo";
import { EditOutlined } from "@ant-design/icons";
import styles from "./index.module.scss";
import { setProperty } from "../../Store/Profile/profileSlice";

interface ProfileCardProps {
  info: Profile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ info }) => {
  const dispatch = useAppDispatch();

  const inputRef = useRef<InputRef>(null);

  const [value, setValue] = useState<string>("");

  const [openInput, setOpenInput] = useState<boolean>(false);
  const [key, setKey] = useState<string>("");

  const createForm = (key: string, value: string) => () => {
    setOpenInput(true);
    setKey(key);
    setValue(value);
  };

  const changeValue = (state: string, newValue: string) => {
    dispatch(setProperty({ key: state as keyof Profile, newValue: newValue }));
  };

  const submitForm = () => {
    changeValue(key, value);
    setOpenInput(false);
  };

  useEffect(() => {
    dispatch(getFilms(info.films));
    dispatch(getSpecial(info.species));
    dispatch(getVehicles(info.vehicles));
    dispatch(getStarships(info.starships));
  }, []);

  useEffect(() => {
    if (inputRef.current)
      inputRef.current!.focus({
        cursor: "end",
      });
  }, [openInput]);

  return (
    <>
      <Row justify="center">
        <h1>{info.name}</h1>
      </Row>
      <Row justify="center" style={{ fontSize: 25 }}>
        Main info:
      </Row>
      <Row justify="center">
        <Card
          bordered={true}
          style={{ minWidth: 300, maxWidth: 600, fontSize: 25 }}
        >
          {openInput ? (
            <>
              <Input
                ref={inputRef}
                defaultValue={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <Button type="primary" onClick={submitForm}>
                Submit
              </Button>
            </>
          ) : null}
          <div className={styles.mainInfo}>
            Birth year: {info.birth_year}
            <EditOutlined
              className={styles.edit}
              onClick={createForm("birth_year", info.birth_year)}
            />
          </div>
          <div className={styles.mainInfo}>
            Eye color: {info.eye_color}
            <EditOutlined
              className={styles.edit}
              onClick={createForm("eye_color", info.eye_color)}
            />
          </div>
          <div className={styles.mainInfo}>
            Gender: {info.gender}
            <EditOutlined
              className={styles.edit}
              onClick={createForm("gender", info.gender)}
            />
          </div>
          <div className={styles.mainInfo}>
            Hair color: {info.hair_color}
            <EditOutlined
              className={styles.edit}
              onClick={createForm("hair_color", info.hair_color)}
            />
          </div>
          <div className={styles.mainInfo}>
            Height: {info.height} cm{" "}
            <EditOutlined
              className={styles.edit}
              onClick={createForm("height", info.height)}
            />
          </div>
          <div className={styles.mainInfo}>
            Mass: {info.mass} kg{" "}
            <EditOutlined
              className={styles.edit}
              onClick={createForm("mass", info.mass)}
            />
          </div>
          <div className={styles.mainInfo}>
            Skin color: {info.skin_color}{" "}
            <EditOutlined
              className={styles.edit}
              onClick={createForm("skin_color", info.skin_color)}
            />
          </div>
        </Card>
      </Row>
      <AddInfo />
    </>
  );
};

export default ProfileCard;
