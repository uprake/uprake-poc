export const getCurrentTimeStamp = () => {
  const video = document.getElementsByTagName('video')[0];

  const currTime = video?.currentTime ?? 0;
  // console.log(currTime);
  return currTime;
};

export const skipVideoToTime = (time: any) => {
  const video = document.getElementsByTagName('video')[0];
  // console.log(time);
  video.currentTime = time;
  //   video.play();
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
