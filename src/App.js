
import './App.css';

// import Login from './Components/Login'
import List from './Components/List'
// import Input2 from './Components/Input2'
import Cal from './Components/Cal'
import ValiForm from './Components/ValiForm';

function App() {
  return (
    <div className=" ">
      <div className='row'>
          <div className='col'>
          <ValiForm/>
          </div>
          <div className='col'>
          <Cal/>
          </div>
      </div>
      
      
      
      {/* <Input2/> */}
      {/* <Login/> */}
      <List/>
    </div>
  );
}

export default App;
