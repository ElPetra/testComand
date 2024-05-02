import './App.css';
import Header from './components/Header/Header';
import { CardContainer } from './components/CardContainer/CardContainer';
import {News} from './components/News/News';
function App() {
  return (
    <div>
      <Header/>
      <CardContainer/> 
 	  <News/>
    </div>
  )
}

export default App;
