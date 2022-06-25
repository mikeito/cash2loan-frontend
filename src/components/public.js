import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostList from "../features/posts/postList";

const Public = () => {


  const content = (
    <section className="public">
      {/* <header>
                <h1>Welcome to Repair Store!</h1>
            </header> */}
      <main className="md:container mx-auto">
        {/* top  */}
        <section className="w-full md:w-3/4 my-7">
          <div className="flex flex-col space-y-7">
            <h2 className="text-gray-700 text-2xl font-bold">Topics</h2>
            <p class="text-base text-gray-600 text-justify font-normal">
              Follow your favorite topics to be the first to learn about the
              newest product arrivals in that space. You'll get the most out of
              Product Hunt if you follow at least three, with notifications
              about new launches every time you visit.
            </p>

            <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row items-center justify-between">
              {/* search bar */}
              <div class="relative w-full md:w-56">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search topics"
                  required
                />
              </div>

              {/* select tag */}
              <div className="w-full md:w-56">
                <button
                  id="dropdownDefault"
                  data-dropdown-toggle="dropdown"
                  class="text-black w-full border-2 border-gray-100 bg-white focus:outline-none font-normal rounded-md text-sm px-4 py-2.5 text-center inline-flex items-center"
                  type="button"
                >
                  Dropdown button{" "}
                  <svg
                    class="w-4 h-4 ml-96 md:ml-14"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {/* Dropdown menu */}
                <div
                  id="dropdown"
                  class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    class="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefault"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* real content */}
        <section className="flex flex-row gap-3">
          <div className="w-full md:w-3/4">
            <div
              className="flex flex-col mx-auto 
                    space-y-4"
            >
              {/* left content */}
              <div>

                {/* post content div */}
                <PostList />
                {/* {isLoading
                ?
                <div class="text-center">
                    <svg role="status" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                </div>
                :
                isError ?
                <div className="text-red-600 font-extrabold">{ error }</div>
                :
                isSuccess ?
                <PostList posts={data} />
                : ''
              } */}

              </div>
            </div>
          </div>
          {/* right content */}
          <div className="w-1/4 flex flex-col hidden md:block">  {/* add pt-6 */} 
            <h2 className="text-base uppercase text-gray-500">
              trending stories
            </h2>
            <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-2 items-center">
              <img class="w-16 h-16 rounded-lg" src="images/man.jpg" alt="" />
              <div className="flex flex-col">
                <p className="text-md text-black">How i tamed panic</p>
                <p className="text-sm text-gray-500">26 min read</p>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <img class="w-16 h-16 rounded-lg" src="images/man.jpg" alt="" />
              <div className="flex flex-col">
                <p className="text-md text-black">How i tamed panic</p>
                <p className="text-sm text-gray-500">26 min read</p>
              </div>
            </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
  return content;
};
export default Public;
