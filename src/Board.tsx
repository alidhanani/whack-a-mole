import { Center } from "@mantine/core";
 
const Board = (props: { Cursor: string; Data: any[]}) => {
    return (
        <Center>
        <table style={{cursor: "url("+process.env.PUBLIC_URL +props.Cursor+ "), auto"}}>
          <tbody>
            {
              props.Data.map((value, index) => (
                <tr className='board' key={"boardIndex"+index}>
                  {value}
                </tr>
              ))
            }
          </tbody>
        </table>
        </Center>
     );
  };
  
  export default Board;