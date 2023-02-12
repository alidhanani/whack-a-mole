import { BackgroundImage } from '@mantine/core';
import React from 'react';

import { BACKGROUND, Cursor } from '../../constant/Constant';

const BoardBackground = (props: { Data: JSX.Element }) => {
  return (
    <BackgroundImage
      src={'' + BACKGROUND}
      style={{ height: window.innerHeight, cursor: `url(${Cursor}), pointer;` }}
    >
      {props.Data}
    </BackgroundImage>
  );
};

export default BoardBackground;
