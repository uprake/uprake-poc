import { tw } from 'twind/style';
import './React.module.css';

/* eslint-disable-next-line */
export interface ReactProps {}

export function React(props: ReactProps) {
  console.log('hi console');
  return (
    <div>
      <div className={tw`text-h1`}>Welcome to React!</div>
      <button className={tw('hover:bg-blue-400')}>Button</button>
    </div>
  );
}

export default React;
