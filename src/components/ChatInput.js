import Image from 'next/image';
import icon from '/public/icons/inputIcon.png';
const SidebarInput = () => {
  return (
    <div>
      <div className="relative">
        <label for="Search" className="sr-only">
          {' '}
          Search{' '}
        </label>

        <input type="text" id="Search" placeholder="Search for..." className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm" />

        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button type="button" className="text-gray-600 hover:text-gray-700">
            <span className="sr-only">Search</span>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </span>
      </div>
      <div>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm"> {`>`} </span>
          </div>
          <input type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="" />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <Image src={icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarInput;
