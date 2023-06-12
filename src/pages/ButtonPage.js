import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';



function ButtonPage() {
  const handleClick = () => {};


  return (
    <div>
      <div>
        <Button secondary rounded onClick={handleClick}>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger >
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary >
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;/*import { GoBell } from 'react-icons/go';
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