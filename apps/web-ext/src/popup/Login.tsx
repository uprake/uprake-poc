import React, { useState } from 'react';

function Login() {
  const [user, setUser] = useState(null);
  return (
    <div>
      <h2>Login</h2>
      <button>Login</button>
      {user ? <button>Logout</button> : ''}
    </div>
  );
}

export default Login;
