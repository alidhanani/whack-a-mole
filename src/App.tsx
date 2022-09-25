import { BackgroundImage, Image} from '@mantine/core';
import { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';
import './App.css';
import Board from './Board';
import FinalModal from './FinalModal';
import InitalModal from './InitalModal';
import { Score } from "./Score";
import Screenlabel from './Screenlabel';

function App() {

  const time = new Date();
  time.setSeconds(time.getSeconds() + 59);
  const {
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


  const HOLE = '/WAM_Hole.png'
  const MOLE = '/WAM_Mole.png'
  const Cursor = '/WAM_Hammer.png'

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
    if(event.target.src === ("https://whack-a-mole-webgame.herokuapp.com" + MOLE)) {
      console.log("Success");
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
      <BackgroundImage
        src={process.env.PUBLIC_URL + '/WAM_bg.jpg'}
        style={{height: window.innerHeight}}
      >
        <InitalModal IsOpen={openedInit} onClose={() => setOpenedInit(false)} OnButtonPress={() => {
        setScore(0);
        restart(time);
        setOpenedInit(false);
        } } onTextChange={(event: any) => setName(event.target.value)} buttonDisable={name === "" ? true : false} />
        <FinalModal IsOpen={opened} onClose={() => setOpened(false)} OnButtonPress={() => {
            setOpened(false)
            setOpenedInit(true)
          }} ShowData={scoreArray.sort((a,b) => a.value - b.value).reverse().slice(0, 9)!} />
        <Screenlabel Score={score} Time={seconds} />
        <Board Cursor={Cursor} Data={[rowElements1, rowElements2, rowElements3]} />
      </BackgroundImage>
  );
}

export default App;
