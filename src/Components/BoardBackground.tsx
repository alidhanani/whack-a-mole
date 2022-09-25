import { BackgroundImage } from "@mantine/core";
import { BACKGROUND, Cursor } from "./Constant";
 
const BoardBackground = (props: { Data: any;}) => {
    return (
        <BackgroundImage
            src={process.env.PUBLIC_URL + BACKGROUND}
            style={{height: window.innerHeight, cursor: `url(${Cursor}), pointer;`}}
        >
            {props.Data}
        </BackgroundImage>
     );
  };
  
  export default BoardBackground;