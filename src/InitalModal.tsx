import { Modal, Button, TextInput } from "@mantine/core";

 
const InitalModal = (props: { IsOpen: boolean; onClose: () => void; OnButtonPress: () => void; onTextChange: any, buttonDisable: boolean}) => {
    return (
        <Modal
          opened={props.IsOpen}
          onClose={props.onClose}
          title="Welcome"
          withCloseButton={false}
          closeOnClickOutside={false}
          closeOnEscape={false}
        >
            <TextInput
            placeholder="Your name"
            label="Full name"
            onChange={props.onTextChange}
            withAsterisk
            />  
            <Button disabled={props.buttonDisable} onClick={props.OnButtonPress} >Start</Button>
        </Modal>
     );
  };
  
  export default InitalModal;