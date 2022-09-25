import { Group } from "@mantine/core";
 
const Screenlabel = (props: { Score: number; Time: number}) => {
    return (
        <Group position="apart" style={{padding: "10px"}}>
        <div className="scoreboard">
          <h2 className='scoreLabel'>Score</h2>
          <h1>{props.Score}</h1>
        </div>
        <h2 className='timer' >Time: <span>{props.Time}</span></h2>
      </Group>
     );
  };
  
  export default Screenlabel;