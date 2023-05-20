
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Profile from "./Pages/Profile";
import Main from "./Pages/Main";

const Router = () => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="*"
          element={
            <div>
              No found <Link to={"/"}>Back to Start page</Link>
            </div>
          }
        />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Router;
