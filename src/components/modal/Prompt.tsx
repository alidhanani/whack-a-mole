import React from 'react';

import { Score } from '../../modal/Score';
import FinalModal from './FinalModal';
import InitalModal from './InitalModal';

const Prompt = (props: {
  FinalModalOpen: boolean;
  FinalOnClose: () => void;
  FinalModalOnPress: () => void;
  Data: Score[];
  InitModal: boolean;
  InitClose: () => void;
  InitButtonPress: () => void;
  onTextChange: React.ChangeEventHandler;
  ButtonDisable: boolean;
}) => {
  return (
    <>
      <InitalModal
        IsOpen={props.InitModal}
        onClose={props.InitClose}
        OnButtonPress={props.InitButtonPress}
        onTextChange={props.onTextChange}
        buttonDisable={props.ButtonDisable}
      />
      <FinalModal
        IsOpen={props.FinalModalOpen}
        onClose={props.FinalOnClose}
        OnButtonPress={props.FinalModalOnPress}
        ShowData={props.Data}
      />
    </>
  );
};

export default Prompt;
