import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from 'react-router-dom'
import Layout from "./components/layout";
import Public from "./components/public";
import Login from "./features/auth/login";
import Welcome from "./features/auth/welcome";
import RequireAuth from "./features/auth/requireAuth";
import UsersList from "./features/users/usersList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="userslist" element={<UsersList />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
