import { BackgroundImage, Center, Image, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const HOLE = '/WAM_Hole.png'
  const MOLE = '/WAM_Mole.png'

  const [pic, setPic] = useState<string[]>([HOLE,HOLE,HOLE,HOLE,HOLE,HOLE,HOLE,HOLE,HOLE,HOLE,HOLE,HOLE]);
  const [score, setScore] = useState<number>(0)

  const rowElem1 = [0, 1, 2, 3]
  const rowElem2 = [4, 5, 6, 7]
  const rowElem3 = [8, 9, 10, 11]

  function randomNumberInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateValue = () => {
    let guessNumber = randomNumberInRange(0, 11)
    var newArray = [HOLE,HOLE,HOLE,HOLE,HOLE,HOLE,HOLE,HOLE,HOLE,HOLE,HOLE,HOLE]
    newArray[guessNumber] = MOLE
    setPic(newArray)
  }

  useEffect(() => {
    setInterval(
      updateValue,
      2000
    );
  },[pic, updateValue])

  const onArrayClick = (event: any) => {
    if(event.target.src === ("http://localhost:3000" + MOLE)) {
      console.log("Success");
      setScore(oldvalue => oldvalue + 1)
    } else {
      console.log("NO");
    }
  }

  const rowElements1 = rowElem1.map((element, index) => (
      <td onClick={onArrayClick} key={"Data"+element}><Image radius="xs" width={200} height={50} src={process.env.PUBLIC_URL + pic[element]} /></td>
  ));

  const rowElements2 = rowElem2.map((element, index) => (
      <td onClick={onArrayClick} key={"Data"+element}><Image radius="xs" width={200} height={50} src={process.env.PUBLIC_URL + pic[element]} /></td>
  ));

  const rowElements3 = rowElem3.map((element, index) => (
    <td onClick={onArrayClick} key={"Data"+element}><Image radius="xs" width={200} height={50} src={process.env.PUBLIC_URL + pic[element]} /></td>
  ));


  return (
      <BackgroundImage
      src={process.env.PUBLIC_URL + '/WAM_bg.jpg'}
      style={{height: window.innerHeight}}
      >
        <Text>Success Score:{score}</Text>
        <Center>
        <table style={{paddingTop: window.innerHeight / 5}}>
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
