import { Card } from "antd";
import { Profile } from "../../Store/People/peopleSlice";

interface PeopleCardProps {
  info: Profile;
}

const PeopleCard: React.FC<PeopleCardProps> = ({ info }) => {
  return (
    <Card title={info.name} bordered={true} style={{ minWidth: 300 }} hoverable>
      <div>Birth year: {info.birth_year}</div>
      <div>Eye color: {info.eye_color}</div>
      <div>Gender: {info.gender}</div>
      <div>Hair color: {info.hair_color}</div>
      <div>Height: {info.height} cm</div>
      <div>Mass: {info.mass} kg</div>
      <div>Skin color: {info.skin_color}</div>
    </Card>
  );
};

export default PeopleCard;
