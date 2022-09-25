import FinalModal from "./FinalModal";
import InitalModal from "./InitalModal";
 
const Prompt = (props: { FinalModalOpen: boolean; FinalOnClose: any; FinalModalOnPress: any; Data: any[]; InitModal: boolean; InitClose: ()=> void; InitButtonPress: ()=> void; onTextChange: any; ButtonDisable: any}) => {
    return (
        <>
            <InitalModal IsOpen={props.InitModal} onClose={props.InitClose} OnButtonPress={props.InitButtonPress} onTextChange={props.onTextChange} buttonDisable={props.ButtonDisable} />
            <FinalModal IsOpen={props.FinalModalOpen} onClose={props.FinalOnClose} OnButtonPress={props.FinalModalOnPress} ShowData={props.Data} />
        </>
     );
  };
  
  export default Prompt;