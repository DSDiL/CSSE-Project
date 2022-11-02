import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {

  return (
    <Menu>
      <a className="" href="/">
        Register Here
      </a>

      <a className="" href="/fgid">
        Generate QR Code
      </a>

    </Menu>
  );
};