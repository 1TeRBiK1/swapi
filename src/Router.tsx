import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Profile from "./Pages/Profile";
import Main from "./Pages/Main";
import Header from "./Components/Header/Header";

function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="*"
          element={
            <div>
              no found <Link to={"/"}>Back to Start page</Link>
            </div>
          }
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default Router;
