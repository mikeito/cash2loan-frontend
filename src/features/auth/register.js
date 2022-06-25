import { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { axiosRegister } from "../../app/utils/axios/allRequests"

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [confpwd, setConfPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  let isLoading = true;

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, name, pwd, confpwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pwd !== confpwd) {
      setErrMsg("Passwords don't match.")
      return;
    }

    try {
      // const userData = await register({ user, pwd }).unwrap();
      // await register({ email: user, name: name, password: pwd }).unwrap();
      // await axiosRegister({ email: user, name: name, password: pwd })
      // dispatch(setCredentials({ ...userData, user }));
      setUser("");
      setPwd("");
      navigate("/login");
    } catch (err) {
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setErrMsg("No Server Response");
        console.log([err]);
      } else if (err.originalStatus === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.originalStatus === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  const handleUserInput = (e) => setUser(e.target.value);

  const handleNameInput = (e) => setName(e.target.value);

  const handlePwdInput = (e) => setPwd(e.target.value);

  const handleConfPwdInput = (e) => setConfPwd(e.target.value);

  const content = isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create an account to join us
          </h2>
          <p class="my-4 text-center text-sm text-gray-600">
            Or
            <Link
              to="/login"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
                {" "}
              Log into the app
            </Link>
          </p>
          <p ref={errRef} className={errMsg ? "block text-center text-red-600 font-bold" : "hidden"}>{errMsg}</p>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md space-y-3">
          <div>
              <label for="name" className="text-gray-800">
                User Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                ref={userRef}
                value={name}
                onChange={handleNameInput}
                required
                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="User Name"
              />
            </div>
            <div>
              <label for="email-address" className="text-gray-800">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                value={user}
                onChange={handleUserInput}
                required
                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label for="password" className="text-gray-800">
                Password
              </label>
              <input
                id="password"
                type="password"
                onChange={handlePwdInput}
                value={pwd}
                required
                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label for="confpassword" className="text-gray-800">
                Confirm Password
              </label>
              <input
                id="confpassword"
                type="password"
                onChange={handleConfPwdInput}
                value={confpwd}
                required
                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
              />
            </div>
          </div>


          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return content;
};
export default Login;
