import React from 'react'
import Hello from './Hello';
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

export const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
  </div>
);