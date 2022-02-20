// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './App.module.css';
import NxWelcome from './nx-welcome';

import { Route, Link } from 'react-router-dom';
import ColorGenerator from '../components/ColorGenerator';
import ColorRange from '../components/ColorRange';

export function App() {
  return (
    <>
      {/* <NxWelcome title="web" /> */}
      <ColorGenerator />
      <ColorRange />
      <div />
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        element={
          <div>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        }
      />
      <Route
        path="/page-2"
        element={
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        }
      />
      END: routes
    </>
  );
}

export default App;
