import { Link } from "react-router-dom";

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
          <div className="bg-red-500 w-full md:w-3/4">
            <div
              className="flex flex-col mx-auto 
                    space-y-4"
            >
              {/* left content */}
              <div>
                <div class="flex flex-row bg-slate-100 rounded-xl md:p-0 dark:bg-slate-800">
                  <div className="flex flex-row shrink w-4/5">
                  <img
                    class="w-28 h-28 md:w-48 rounded-lg"
                    src="images/man.jpg"
                    alt=""
                  />
                  <div class="my-auto text-left ml-2 space-y-1">
                    <h2 className="text-lg font-bold">Our final sprint</h2>
                    
                      <div class="text-sm font-normal"> {/* truncate */}
                        If time is most precious, this collection of lifehacks
                        is so so precious. Be more productive and optimize your
                        life.
                      </div>
                  </div>
                  </div>
                  <div className="flex-none w-1/5 justify-end">
                  <button className="py-2 px-8 rounded-md font-medium text-black border border-gray-200 bg-white hover:bg-slate-400">
                    Button
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right content */}
          <div className="bg-green-500 w-1/4 flex flex-col hidden md:block">  {/* add pt-6 */} 
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
