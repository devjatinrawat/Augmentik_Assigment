// This is a functional component in React that returns the Navbar component
const Navbar = () => {
  return (
    <>
      {/* This is a fragment, a common pattern for a component returning multiple elements. */}
      {/* Start of the Navbar */}
      <header className="container-fluid text-black p-4">
        {/* This div contains the logo and navigation links */}
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* This is the logo section */}
          <a href="#" className="flex items-center">
            <div className="h-8 w-8 bg-cyan-500 rounded-full"></div>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Worhu
            </span>
          </a>
          {/* This is the navigation section */}
          <nav>
            <ul className="flex space-x-4">
              {/* These are the individual navigation links */}
              <li>
                <a
                  href="#"
                  className="text-cyan-500 font-semibold hover:underline"
                >
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Career
                </a>
              </li>
              {/* This is the contact button */}
              <button
                type="button"
                className="text-white bg-cyan-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2"
              >
                Contact
              </button>
            </ul>
          </nav>
        </div>
      </header>
      {/* End of the Navbar */}
    </>
  );
};

// This exports the Navbar component for use in other files
export default Navbar;
