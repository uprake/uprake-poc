import { doc } from 'prettier';
import { stringify } from 'querystring';

export const isVisible = (video: any) => {
  // check if the video in viewport
  const rect = video.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
export const getTimeInMins = (time: any) => {
  const h = Math.floor(time / 3600)
    .toString()
    .padStart(2, '0');
  const m = Math.floor((time % 3600) / 60)
    .toString()
    .padStart(2, '0');
  const s = Math.floor(time % 60)
    .toString()
    .padStart(2, '0');

  if (h === '00') {
    return m + ':' + s;
  }
  return h + ':' + m + ':' + s;
};
export const getCurrentVideo = () => {
  const videos = document.getElementsByTagName('video');
  let currentVideo;

  // Array.from(videos).forEach((video: any) => {
  //   if (video.paused == false && isVisible(video)) {
  //     return (currentVideo = video);
  //   }
  // });
  // console.log(currentVideo);
  // return currentVideo;

  // for youtube video only
  return videos[0];
};

// export const syncTimeStamps = ()=>{
//   const currentVideo = getCurrentVideo();
//   (currVideo?.currentTime);
// }

export const getUTVideoIdFromUrl = () => {
  const url = window.location.href;
  const youtube_regex =
    /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
  const utbURL = url.match(youtube_regex);
  console.log(utbURL);

  const id = utbURL ? utbURL[1] : '';
  return id;
};

export const skipVideoToTime = (time: any) => {
  const video = document.getElementsByTagName('video')[0];
  video.currentTime = time;
};
