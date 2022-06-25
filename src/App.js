import logo from "./logo.svg";
import { Routes, Route } from 'react-router-dom'
import Layout from "./components/layout";
import Public from "./components/public";
import Login from "./features/auth/login";
import Register from "./features/auth/register";
import AddPost from "./features/posts/addPost";
import Welcome from "./features/auth/welcome";
import RequireAuth from "./features/auth/requireAuth";
import SinglePostPage from "./features/posts/singlePost";
// import EditPostForm from "./features/posts/editPost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="addpost" element={<AddPost />} />
        <Route path="post/:id" element={<SinglePostPage />} />
        {/* <Route path="post/edit/:id" element={<EditPostForm />} /> */}

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="welcome" element={<Welcome />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
