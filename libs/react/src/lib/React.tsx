
import { tw } from 'twind/style';
import './React.module.css';

/* eslint-disable-next-line */
export interface ReactProps {
}

export function React(props: ReactProps) {

  return (
    <div>
      <h1 className={tw`text-2xl`}>Welcome to React!</h1>
      <button className={tw( 'hover:bg-blue-400')}>Button</button>
    </div>
  );
}

export default React;
