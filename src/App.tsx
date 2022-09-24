import { BackgroundImage, Button, Center, Image, Modal, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';
import './App.css';

function App() {

  const time = new Date();
  time.setSeconds(time.getSeconds() + 100);
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({expiryTimestamp: time, onExpire: () => setOpened(true)});


  const HOLE = '/WAM_Hole.png'
  const MOLE = '/WAM_Mole.png'

  const [pic, setPic] = useState<string[]>([HOLE,HOLE,HOLE,HOLE,HOLE,HOLE,HOLE,HOLE,HOLE,HOLE,HOLE,HOLE]);
  const [score, setScore] = useState<number>(0)
  const [opened, setOpened] = useState(false);

  const rowElem1 = [0, 1, 2, 3]
  const rowElem2 = [4, 5, 6, 7]
  const rowElem3 = [8, 9, 10, 11]

  function randomNumberInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    var newArray = [HOLE,HOLE,HOLE,HOLE,HOLE,HOLE,HOLE,HOLE,HOLE,HOLE,HOLE,HOLE]
    function updateValue(){
      let guessNumber = randomNumberInRange(0, 11)
      newArray[guessNumber] = MOLE
      setPic(newArray)
    }
    const interval = setInterval(updateValue, 3000);
    return () => clearInterval(interval);
  },[pic])

  const onArrayClick = (event: any) => {
    if(event.target.src === ("http://localhost:3000" + MOLE)) {
      console.log("Success");
      setScore(oldvalue => oldvalue + 1)
    } else {
      console.log("NO");
    }
  }

  const rowElements1 = rowElem1.map((element, index) => (
      <td height={150} onClick={onArrayClick} key={"Data"+element}><Image radius="xs" width={200} height={pic[element] === MOLE ? 150 : 50} src={process.env.PUBLIC_URL + pic[element]} /></td>
  ));

  const rowElements2 = rowElem2.map((element, index) => (
      <td height={150}  onClick={onArrayClick} key={"Data"+element}><Image radius="xs" width={200} height={pic[element] === MOLE ? 150 : 50} src={process.env.PUBLIC_URL + pic[element]} /></td>
  ));

  const rowElements3 = rowElem3.map((element, index) => (
    <td  height={150} onClick={onArrayClick} key={"Data"+element}><Image radius="xs" width={200} height={pic[element] === MOLE ? 150 : 50} src={process.env.PUBLIC_URL + pic[element]} /></td>
  ));


  return (
      <BackgroundImage
      src={process.env.PUBLIC_URL + '/WAM_bg.jpg'}
      style={{height: window.innerHeight, cursor:'url(http://localhost:3000/WAM_Hammer.png),auto'}}
      >
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Introduce yourself!"
        >
          <table>
            <tbody>
              <tr>
              </tr>
            </tbody>
          </table>
          <Button onClick={() => {
            setScore(0)
            restart(time)
            setOpened(false)
          }} >Restart</Button>
        </Modal>
        <div style={{padding: '0px'}}>
          <Text align="left" size={24} weight="bold" color="red" >Score</Text>
          <Text align="left" weight={700} size={30} >{score}</Text>
          <Text align="center" size={24} weight="bold" color="red" ><span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span></Text>
        </div>
        <Center>
        <table>
          <tbody>
            <tr key={"boardIndex1"}>
              {rowElements1}
            </tr>
            <tr key={"boardIndex2"}>
              {rowElements2}
            </tr>
            <tr key={"boardIndex3"}>
              {rowElements3}
            </tr>
          </tbody>
        </table>
        </Center>
      </BackgroundImage>
  );
}

export default App;
