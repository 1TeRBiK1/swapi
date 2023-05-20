import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { useEffect } from "react";
import { getProfile } from "../../Store/Profile/profileActionCreator";
import ProfileCard from "../../Components/ProfileInfo";
import { Row } from "antd";
import Loading from "../../Components/Loading";

const Profile = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const { error, loading, info } = useAppSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getProfile(id ?? "1"));
  }, [id]);

  return (
    <>
      {error ? "Something was wrong" : null}
      {loading ? (
        <Row justify="center" style={{ marginTop: "20px" }}>
          <Loading />
        </Row>
      ) : (
        <ProfileCard info={info} />
      )}
    </>
  );
};

export default Profile;
