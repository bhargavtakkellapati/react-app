import './App.css';
import Counter from './components/Counter'
import Timer from './components/Calculation';
import Useref from './components/Useref';
import UseLayoutEffect from './components/UseLayoutEffect';
import UseMemo from './components/UseMemo';
import UseCallBack from'./components/ClickCounter';
import Registration from './components/Registration';
import Users from './components/Users';
import RazorpayButton from './components/RazorpayButton';
import RegistrationTable from './components/RegistrationTable'
import RegistrationForm from './components/RegistrationForm';
import { RegistrationContext } from './components/RegistrationContext';
import RegistrationApiContext from './components/RegistrationApiContext';




function App() {
  return (
    <div className="App">
      <h1>bhargav</h1>

      {/* <Counter/>
      <Timer/>
      <Useref/>
      < UseLayoutEffect/>
      {/* <UseMemo/> */}
      {/* <UseCallBack/> */} 
      {/* <Registration/> */}
      <Users/>
      {/* <RazorpayButton/> */}
      {/* <RegistrationForm/>
    <RegistrationTable/>
    <RegistrationContext/> */}
    {/* <RegistrationApiContext/> */}

      
    </div>
  );
}

export default App;
