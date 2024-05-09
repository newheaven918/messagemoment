import QRCode from 'react-qr-code';

function QRCodeComponent({ generatedLink, classes }) {
  return (
    <div className={`${classes}`}>
      <QRCode className="bg-white rounded-[10px] p-5 mx-auto w-[260px] h-[260px]" value={generatedLink} />
    </div>
  );
}

export default QRCodeComponent;
