import { BackgroundImage, Table, Image } from '@mantine/core';
import './App.css';

function App() {


  const elements = [
    {1: "id1", 2: "id2", 3: "id3", 4: "id4"},
    {1: "id5", 2: "id6", 3: "id7", 4: "id8"},
    {1: "id9", 2: "id10", 3: "id11", 4: "id12"},
  ]

  const rows = elements.map((element, index) => (
    <tr key={"boardIndex"+index}>
      <td key={element[1]}><Image radius="xs" width={200} height={50} src={process.env.PUBLIC_URL + '/WAM_Hole.png'} /></td>
      <td key={element[2]}><Image radius="xs" width={200} height={50} src={process.env.PUBLIC_URL + '/WAM_Hole.png'} /></td>
      <td key={element[3]}><Image radius="xs" width={200} height={50} src={process.env.PUBLIC_URL + '/WAM_Hole.png'} /></td>
      <td key={element[4]}><Image radius="xs" width={200} height={50} src={process.env.PUBLIC_URL + '/WAM_Hole.png'} /></td>
    </tr>
  ));

  return (
      <BackgroundImage
      src={process.env.PUBLIC_URL + '/WAM_bg.jpg'}
      style={{height: window.innerHeight}}
      >
        <Table>
          <tbody>
            {rows}
          </tbody>
        </Table>
      </BackgroundImage>
  );
}

export default App;
