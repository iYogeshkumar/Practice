import logo from './logo.svg';
import './App.css';

import { Fetchusingaxios } from './Components/Fetchdata/Fetchusingaxios';
import Fetchgituser from './Components/Fetchdata/Fetchgituser';
import Counterusereducer from './Components/Usereducer/Counterusereducer';

function App() {
  
  return (
    <div className="App">
      {/* <Listname/> */}
      {/* <NameList/> */}
      {/* <Counterprev/> */}
      {/* <Fetchusingaxios/> */}
      {/* <Fetchgituser/> */}
      <Counterusereducer/>
      
    </div>
  );
}

export default App;
