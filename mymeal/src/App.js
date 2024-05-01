import './App.css'; 
import Componentc from './context/Componentc';
import { Userprovider } from './context/Usercontext';

function App2() {
  return (
    <div className="App">

    <Userprovider value="hiten"> 
    <Componentc />
    </Userprovider>
    
    </div>
  );
}

export default App2;
