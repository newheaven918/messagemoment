import Script from 'next/script';
// import { useEffect } from 'react';

const CloudflareTurnstile = () => {
  // useEffect(() => {
  // const turnstileCallbackFunction = function () {
  //   const turnstileOptions = {
  //     sitekey: '0x4AAAAAAAKTDe6f-KqwG_iW',
  //     callback: function (token) {
  //       console.log(`Challenge Success: ${token}`);
  //     }
  //   };
  //   turnstile.render('#container', turnstileOptions);
  // };
  // if (typeof window !== 'undefined') {
  //   // Ensure that the script is executed only on the client-side
  //   turnstileCallbackFunction();
  // }
  // handleRequest();
  // }, []);

  // async function handleRequest() {
  //   // ... Receive token
  //   let formData = new FormData();
  //   formData.append('secret', '0x4AAAAAAAKTDSyhuU031Yiu_t6ul2yiZEQ');
  //   formData.append('response', 'Yr0ZI52XyuemPfjG4HapRhI6X65szExcjRLPPYwb');

  //   await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
  //     body: formData,
  //     method: 'POST'
  //   });
  //   // ...
  // }

  return (
    <>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></Script>
      <div className="cf-turnstile" data-sitekey="0x4AAAAAAAKTDe6f-KqwG_iW" data-theme="light" data-callback="javascriptCallback"></div>
      {/* <div id="container"></div> */}
    </>
  );
};

export default CloudflareTurnstile;
