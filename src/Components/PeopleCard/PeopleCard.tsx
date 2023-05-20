import { Card } from "antd";
import { People } from "../../Store/People/peopleSlice";

interface PeopleCardProps {
  info: People;
}

const PeopleCard: React.FC<PeopleCardProps> = ({ info }) => {
  return (
    <Card title={info.name} bordered={true} style={{ width: 320 }} hoverable>
      <div>Birth year: {info.birth_year}</div>
      <div>Eye color: {info.eye_color}</div>
      <div>Gender: {info.gender}</div>
      <div>Hair color: {info.hair_color}</div>
      <div>Height: {info.height} cm</div>
      <div>Mass: {info.mass} kg</div>
      <div>Skin color: {info.skin_color}</div>
      {/* <div>
        Species:
        {info.species.map((e) => (
          <>
            <span>{e}</span>
            <br />
          </>
        ))}
      </div>
      <div>
        Starships:
        {info.starships.map((e) => (
          <>
            <span>{e}</span>
            <br />
          </>
        ))}
      </div>
      <div>Url: {info.url}</div>
      <div>Homeworld: {info.homeworld}</div>
      <div>
        Vehicles:
        {info.vehicles.map((e) => (
          <>
            <span>{e}</span>
            <br />
          </>
        ))}
      </div>
      <div>
        Films:
        {info.films.map((e) => (
          <>
            <span>{e}</span>
            <br />
          </>
        ))}
      </div>
      <div>Created: {info.created}</div>
      <div>Edited: {info.edited}</div> */}
    </Card>
  );
};

export default PeopleCard;
