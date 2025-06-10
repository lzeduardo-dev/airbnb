import { Link } from "react-router-dom";

const Header = ({ user }) => {
  console.log(user);

  return (
    <header className="shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-8 py-4 max-w-6xl mx-auto ">
        <div className="flex items-center">
          <Link to="/">
            <p className=" text-rose-500 text-2xl font-bold">Homy</p>
          </Link>
        </div>

        <div className=" hidden lg:flex items-center gap-4 border-gray-300 border-1 rounded-full py-2 pr-4 pl-6 shadow-md">
          <p className="pr-4 border-r border-r-gray-300">Qualquer lugar</p>
          <p className="pr-4 border-r border-r-gray-300">Qualquer semana</p>
          <p className="pr-4 border-r border-r-gray-300">Hóspedes</p>
          <div className="bg-rose-500 rounded-full p-1 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 hover:cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
        <Link to="/account/profile">
          <div className="flex items-center gap-4 border-gray-300 border-1 rounded-full pr-4 pl-6 py-2 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>

            {user ? (
              <p className=" max-w-20 truncate text-gray-600">{user.name}</p>
            ) : (
              <></>
            )}
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
