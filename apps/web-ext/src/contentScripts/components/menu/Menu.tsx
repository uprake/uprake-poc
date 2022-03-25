import React, { useEffect, useState } from 'react';
import { Rnd } from 'react-rnd';
import { tw } from 'twind';
import { IFrame } from '~/contentScripts/components/points/IFrame';
import Points from '~/contentScripts/components/points/Points';
import { style } from '../../views/style';
import Button from '../buttons/Button';
import { menuStyle } from './menu.style';

function Menu({ isEditable }: any) {
  const [videoEl, setVideoEl] = useState<HTMLElement>();

  const [x, setX] = useState<any>(0);
  const [y, setY] = useState<any>(0);

  const [editorType, setEditorType] = useState<any>('tbr');

  useEffect(() => {
    document.onmousemove = (e) => {
      setX(e.clientX);
      setY(e.clientY);
    };
  }, []);

  // useEffect(() => {

  return (
    <div>
      {isEditable ? (
        <Rnd
          style={menuStyle.root}
          default={{
            x: x,
            y: y,
            width: 300,
            height: 300,
          }}
        >
          <div>
            <div className={tw`bg-blue-400`}>
              <Button title="TBR"></Button>
              <Button title="MPR"></Button>
              <Button title="SS"></Button>
            </div>
            <div>
              <IFrame style={style.trackPad}>
                <Points type={editorType} />
              </IFrame>
              <input type="text" placeholder="type here ...." />
            </div>
          </div>
        </Rnd>
      ) : (
        ''
      )}
    </div>
  );
}

export default Menu;
