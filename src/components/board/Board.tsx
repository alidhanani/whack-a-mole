import { Center } from '@mantine/core';
import React from 'react';

const Board = (props: { Cursor: string; Data: any[] }) => {
  return (
    <Center>
      <table style={{ cursor: `url(${props.Cursor}), pointer;` }}>
        <tbody>
          {props.Data.map((value, index) => (
            <tr className='board' key={'boardIndex' + index}>
              {value}
            </tr>
          ))}
        </tbody>
      </table>
    </Center>
  );
};

export default Board;
