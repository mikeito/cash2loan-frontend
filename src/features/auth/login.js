import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { login } from "../../app/utils/axios/allRequests";

import { useMutation } from "react-query";
import userStore from "../../app/store/userStore";
import { storage } from "../../app/utils/local";
import Loading from "../../components/loading";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  // const { mutateAsync, isLoading } = useMutation(login)
  const set_user = userStore((state) => state.setUser);
  const navigate = useNavigate();

  // let isLoading = false;

  const loginMutation = useMutation(login, {
    onSuccess: ({ data }) => {
      storage.setToken(data.access_token);
      storage.setRefreshToken(data.refresh_token);
      set_user(data.user);
      console.log("Logggiiiiiiig");
      console.log(data);
      navigate("/");
    },
    onError: ({response}) => {
      if (!response?.data.status) {
        setErrMsg("No Server Response");
      } else if (response?.data.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (response?.data.status === 401) {
        setErrMsg("Unauthorized. Wrong email or password");
      } else {
        setErrMsg("Login Failed");
      }

    }
  });

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.info("Posting data", [user, pwd]);

    const formData = new FormData();
    formData.append("email", user);
    formData.append("password", pwd);
    loginMutation.mutate(formData);

    try {
      loginMutation.mutate(formData);
      setUser("");
      setPwd("");
    } catch (err) {
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setErrMsg("No Server Response");
      } else if (err.originalStatus === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.originalStatus === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  const handleUserInput = (e) => setUser(e.target.value);

  const handlePwdInput = (e) => setPwd(e.target.value);

  const content = loginMutation.isLoading ? (
    <Loading />
  ) : (
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Or
            <Link
              to="/register"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              {" "}
              Register into the app
            </Link>
          </p>
          <p
            ref={errRef}
            className={
              errMsg ? "block text-center text-red-600 font-bold" : "hidden"
            }
          >
            {errMsg}
          </p>{" "}
        </div>
        <form
          class="mt-8 space-y-6"
          action="#"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                ref={userRef}
                value={user}
                onChange={handleUserInput}
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label for="password" class="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={handlePwdInput}
                value={pwd}
                autocomplete="current-password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                {" "}
                Remember me{" "}
              </label>
            </div>

            <div class="text-sm">
              <a
                href="#"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                {" "}
                Forgot your password?{" "}
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return content;
};
export default Login;
