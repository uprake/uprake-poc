import React from 'react';
import { tw } from 'twind';
import browser from 'webextension-polyfill';

export const ScreenShot = () => {
  const getBase64Image = () => {
    const canvas = document.createElement('canvas');

    // curentl only for youtube .
    // need to check for multiple videos
    const video = document.querySelector('video');

    if (video && video.offsetHeight && video.offsetWidth) {
      const ctx = canvas.getContext('2d');

      canvas.width = video?.offsetWidth ?? 720;
      canvas.height = video?.offsetHeight ?? 720;

      if (video) ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Won't work on file:/// URLs. SecurityError: Tainted canvases may not be exported.
      var base64ImageData = canvas.toDataURL('image/jpeg');

      const filename =
        'snap-' +
        canvas.width +
        'x' +
        canvas.height +
        '-' +
        video?.currentTime?.toFixed(2) +
        '.jpg';

      //  addd popup before download for more customization
      downloadImage(base64ImageData, filename);
    }
  };

  const downloadImage = (base64Data: any, fileName: any) => {
    const linkSource = base64Data;
    const downloadLink = document.createElement('a');
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  const clickhandler = () => {
    getBase64Image();

    browser.runtime
      .sendMessage({
        type: 'content-script',
        msg: 'content - message from content -script',
      })
      .then((res: any) => {
        // console.log(res);
      });
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
