import { Image} from '@mantine/core';
import { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';
import './Main.css';
import Board from './Board';
import { HOLE, MOLE} from './Constant';
import { Score } from "./Score";
import Screenlabel from './Screenlabel';
import WAM_Hammer from './WAM_Hammer.png'
import BoardBackground from './BoardBackground';
import Prompt from './Prompt';

function Main() {

  const time = new Date();
  time.setSeconds(time.getSeconds() + 119);
  const {
    minutes,
    seconds,
    restart,
  } = useTimer({expiryTimestamp: time, onExpire: () => {
    setOpened(true)
    const pushValue: Score = {
      name: name,
      value: score
    }
    setScoreArray(preValue => [...preValue!, pushValue])
  }});


  const [pic, setPic] = useState<string[]>([HOLE,HOLE,HOLE,HOLE,HOLE,HOLE,HOLE,HOLE,HOLE,HOLE,HOLE,HOLE]);
  const [name, setName] = useState("")
  const [score, setScore] = useState<number>(0)
  const [opened, setOpened] = useState(false);
  const [openedInit, setOpenedInit] = useState(true);
  const [scoreArray, setScoreArray] = useState<Score[]>([{
    name: "Ali",
    value: 23
  }]);

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
    const interval = setInterval(updateValue, 500);
    return () => clearInterval(interval);
  },[pic])

  const onArrayClick = (event: any) => {
    if(event.target.src === ("http://localhost:3000" + MOLE)) {
      setScore(oldvalue => oldvalue + 1)
    }
  }

  const rowElements1 = rowElem1.map((element, index) => (
      <td style={{height: window.innerHeight / 5, width: window.innerWidth / 6,  paddingBottom: "20px"}} height={150} onClick={onArrayClick} key={"Data"+element}><Image radius="xs" width={200} height={pic[element] === MOLE ? 150 : 50} src={process.env.PUBLIC_URL + pic[element]} /></td>
  ));

  const rowElements2 = rowElem2.map((element, index) => (
      <td style={{height: window.innerHeight / 5, width: window.innerWidth / 6, paddingBottom: "20px"}} height={150}  onClick={onArrayClick} key={"Data"+element}><Image radius="xs" width={200} height={pic[element] === MOLE ? 150 : 50} src={process.env.PUBLIC_URL + pic[element]} /></td>
  ));

  const rowElements3 = rowElem3.map((element, index) => (
    <td style={{height: window.innerHeight / 5, width: window.innerWidth / 6,  paddingBottom: "20px"}} height={150} onClick={onArrayClick} key={"Data"+element}><Image radius="xs" width={200} height={pic[element] === MOLE ? 150 : 50} src={process.env.PUBLIC_URL + pic[element]} /></td>
  ));


  return (
      <BoardBackground Data={
        <>
          <Prompt FinalModalOpen={opened} FinalOnClose={() => setOpened(false)} FinalModalOnPress={() => {
              setOpened(false)
              setOpenedInit(true)
            }} Data={scoreArray.sort((a,b) => a.value - b.value).reverse().slice(0, 9)!} InitModal={openedInit} InitClose={() => setOpenedInit(false)} InitButtonPress={() => {
              setScore(0);
              restart(time);
              setOpenedInit(false);
              } } onTextChange={(event: any) => setName(event.target.value)} ButtonDisable={name === "" ? true : false} />
          <Screenlabel Score={score} Time={[minutes, seconds]} />
          <Board Cursor={WAM_Hammer} Data={[rowElements1, rowElements2, rowElements3]} />
        </>
      }/>
  );
}

export default Main;