export const getCurrentTimeStamp = () => {
  const video = document.getElementsByTagName('video')[0];

  const currTime = video?.currentTime ?? 0;
  console.log(currTime);
  return currTime;
};

export const skipVideoToTime = (time: any) => {
  const video = document.getElementsByTagName('video')[0];
  console.log(time);
  video.currentTime = time;
};
