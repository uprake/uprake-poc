import React, { CSSProperties, useEffect, useState } from 'react';

function VerticalMenu() {
  const [active, setActive] = useState(false);
  const y1 = '60';
  const y2 = '120';
  //   const y3 = '80';

  const style: Record<string, CSSProperties> = {
    root: {
      width: '100px',
      border: '1px solid',
      margin: '10px ',
      //   display: 'flex',
    },
    circular: {
      width: '30px',
      height: '30px',
      borderRadius: '100%',
      background: 'khakhi',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '2px solid ',
      padding: '5px',
      margin: '10px auto ',
    },
    button: {
      width: '30px',
      height: '30px',
      borderRadius: '100%',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '5px',
    },
    item: {
      width: '30px',
      height: '30px',
      borderRadius: '100%',
      background: 'khakhi',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '2px solid ',
      padding: '5px',
      margin: '10px auto ',
      //   transform: `${active ? `translate(${0}px, ${y1}px)` : ''}`,
      transition: 'transform 0.5s, top 0.5s',
      position: 'absolute',
    },
    mpr: {
      transform: `${active ? `translate(${0}px, ${y1}px)` : ''}`,
    },
    ss: {
      transform: `${active ? `translate(${0}px, ${y2}px)` : ''}`,
    },
  };
  useEffect(() => {
    console.log(active);
  }, [active]);
  return (
    <div style={style.root}>
      <button style={style.circular} onClick={() => setActive(!active)}>
        Click
      </button>
      <div style={{ ...style.item, ...style.item }}>TBR</div>
      <div style={{ ...style.item, ...style.mpr }}>MPR</div>
      <div style={{ ...style.item, ...style.ss }}>SS</div>
    </div>
  );
}

export default VerticalMenu;
