import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutAuth from "./layout/LayoutAuth";
import AddPost from "./pages/app/AddPost";
import Explore from "./pages/app/Explore";
import Feed from "./pages/app/Feed";
import Profile from "./pages/app/Profile";
import ProtectedRoute from "./pages/app/ProtectedRoute";
import ChangePassword from "./pages/login/ChangePassword";
import ConfirmAccount from "./pages/login/ConfirmAccount";
import ForgotPassword from "./pages/login/ForgotPassword";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Login */}
          <Route path="/" element={<LayoutAuth />}>
            <Route index element={<Login />} />
            <Route path="confirm/:token" element={<ConfirmAccount />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="change-password/:token" element={<ChangePassword />} />
          </Route>

          {/* App */}

          <Route path="/app" element={<ProtectedRoute />}>
            <Route index element={<Feed />} />
            <Route path="explore" element={<Explore />} />
            <Route path="profile" element={<Profile />} />
            <Route path="add-post" element={<AddPost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
