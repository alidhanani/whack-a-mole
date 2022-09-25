import { Modal, Button } from "@mantine/core";
import { Score } from "./Score";

 
const FinalModal = (props: { IsOpen: boolean; onClose: () => void; OnButtonPress: () => void; ShowData: Score[]}) => {
    return (
        <Modal
          opened={props.IsOpen}
          onClose={props.onClose}
          title="Time Out"
          withCloseButton={false}
          closeOnClickOutside={false}
          closeOnEscape={false}
        >
          <table>
          <thead>
            <tr>
              <th>Guest</th>
              <th>Score</th>
            </tr>
          </thead>
            <tbody>
            {
                props.ShowData.map((value: Score) => (
                    <tr>
                    <td>{value.name}</td>
                    <td>{value.value}</td>
                    </tr>
                ))
            }
            </tbody>
          </table>
          <Button onClick={props.OnButtonPress} >Restart</Button>
        </Modal>
     );
  };
  
  export default FinalModal;