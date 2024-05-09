import Link from 'next/link';

const CookiesMore = () => {
  return (
    <div className="border border-light-gray border-solid pb-2 px-4 rounded-md my-4 ">
      <h5 className="text-blue text-[17px] leading-6 font-medium py-[10px]">More Information</h5>
      <p className="text-[15px] max-lg:text-[13px] pr-8 font-jetBrain leading-[23px] font-normal text-justify pb-3">
        For any queries in relation to our policy on cookies and your choices, please{' '}
        <Link href="/contact" className="underline">
          Contact Us
        </Link>
        .
      </p>
    </div>
  );
};

export default CookiesMore;
