import React from 'react';
import { tw } from 'twind';

export const ScreenShot = () => {
  // const [base64Image, setBase64Image] = useState('');
  // const [fileName, setFileName] = useState('');

  const getBase64Image = () => {
    const canvas = document.createElement('canvas');
    const video = document.querySelector('video');
    const ctx = canvas.getContext('2d');

    canvas.width = video?.offsetWidth ?? 300;
    canvas.height = video?.offsetHeight ?? 300;

    if (video) ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Won't work on file:/// URLs. SecurityError: Tainted canvases may not be exported.
    var base64ImageData = canvas.toDataURL('image/jpeg');
    // setBase64Image(base64ImageData);
    const filename =
      'snap-' +
      canvas.width +
      'x' +
      canvas.height +
      '-' +
      video?.currentTime?.toFixed(2) +
      '.jpg';

    // setFileName(filename);

    downloadImage(base64ImageData, filename);
  };

  const downloadImage = (base64Data: any, fileName: any) => {
    const linkSource = base64Data;
    console.log(linkSource);
    const downloadLink = document.createElement('a');
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  const clickhandler = () => {
    getBase64Image();
    browser
  };

  return (
    <div className={tw` `}>
      <button
        className={tw`bg-gray-200 p-2 focus:outline-none focus:ring-2 rounded-md`}
        onClick={clickhandler}
      >
        Screens Shot
      </button>
    </div>
  );
};
