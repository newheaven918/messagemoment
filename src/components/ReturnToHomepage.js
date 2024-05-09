import Link from 'next/link';

const ReturnToHomepage = ({ text = 'Return to Homepage' }) => {
  return (
    <div>
      <Link href="/">
        <button className={`bg-blue shadow w-[236px] h-[46px] hover:bg-opacity-80 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded-md font-jetBrain text-[14px] lg:text-[15px] font-bold`} type="button">
          {text}
        </button>
      </Link>
    </div>
  );
};

export default ReturnToHomepage;
