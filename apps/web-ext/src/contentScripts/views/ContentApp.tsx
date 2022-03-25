import { style } from './style';

import Menu from './menu/Menu';
import VerticalMenu from './menu/VerticalMenu';
import { IFrame } from '../components/points/IFrame';
import Points from '../components/points/Points';

export const ContentApp = () => {
  return (
    <>
      <div></div>
      <Menu />
      <IFrame style={style.trackPad}>
        <Points />
      </IFrame>
      {/* <VerticalMenu></VerticalMenu> */}
    </>
  );
};
