import Accordion from '../components/Accordion';

function AccordianPage() {
  const items = [
    {
      id: 'cwe2w',
      label:'Do i like coding',
      content:'I dont know'
    },
    {
      id: 'cwe3w',
      label:'Wait so you dont like it?',
      content:'no'
   },
   {
      id: 'cwe4w',
      label:'huh',
      content:'yeah'
   }
  ];
  return <Accordion items={items}/>;
}


export default AccordianPage;







//OLD APP
/*import { GoBell } from 'react-icons/go';
import Button from './Button';

function App() {
  return (
    <div> 
      <div>
        <Button outline success rounded >
        <GoBell />
        Click Me!!
      </Button>
      </div>
      <div>
        <Button danger outline>Buy NoW!</Button>
      </div>
      <div>
       <Button warning>Hide Ads!</Button>
      </div>
      <div>
        <Button primary outline>sumn!</Button>
      </div>
      <div>
        <Button secondary rounded>sumn!</Button>
      </div>
    </div>
  );
}

export default App;*/