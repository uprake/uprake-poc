import { fontStyleToken, fontToken } from '@zoratrox/ui';
import { tw } from 'twind/style';
import './React.module.css';

/* eslint-disable-next-line */
export interface ReactProps {}

export function React(props: ReactProps) {
  return (
    <div>
      <div
        className={tw(
          fontToken({ family: 'sans', size: 'h1' }),
          fontStyleToken({ weight: 'bold', transform: 'capitalize' })
        )}
      >
        Welcome to React!
      </div>
      <button className={tw('hover:bg-blue-400')}>Button</button>
    </div>
  );
}

export default React;
