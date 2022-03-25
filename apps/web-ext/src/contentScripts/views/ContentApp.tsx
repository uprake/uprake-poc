import { IFrame } from '../components/points/IFrame';
import Points from '../components/points/Points';
import { style } from './style';

export const ContentApp = () => {
  return (
    <IFrame style={style.trackPad}>
      <Points />
    </IFrame>
  );
};
