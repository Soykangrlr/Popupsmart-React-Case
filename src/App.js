
import './App.css';
import Footer from './components/footer/footer';
import List from './components/list/list';
import Index from './components/todoVerticalBar';
import { useSelector } from "react-redux/es/exports";
import Name from './components/input-name/name';


function App() {
  const mode=useSelector(state=>state.mode.darkMode)
  const userName=useSelector(state=>state.name.name)
 
  return (
    <div className="App">
      {userName?<div className='row'>
      <div className='col-3' style={{backgroundColor:mode?"#34568B":"#9BB7D4" }}>
      <Index/>
      </div>
      <div className={mode?"bg-dark col-9 ":"bg-white col-9 "}>
      <List/>
      <Footer/>
      </div>
    </div>:  <Name/>}
    
    
    </div>
  );
}

export default App;
