import { Button, Modal, Table } from '@mantine/core';
import React from 'react';

import { Score } from 'src/modal/Score';

const FinalModal = (props: {
  IsOpen: boolean;
  onClose: () => void;
  OnButtonPress: () => void;
  ShowData: Score[];
}) => {
  return (
    <Modal
      opened={props.IsOpen}
      onClose={props.onClose}
      title='Time Out'
      withCloseButton={false}
      closeOnClickOutside={false}
      closeOnEscape={false}
    >
      <Table verticalSpacing='xs'>
        <thead>
          <tr>
            <th>Guest</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {props.ShowData.map((value: Score) => (
            <tr style={{ padding: '50px' }}>
              <td>{value.name}</td>
              <td>{value.value}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={props.OnButtonPress}>Restart</Button>
    </Modal>
  );
};

export default FinalModal;
