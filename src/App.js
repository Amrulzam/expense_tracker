
import './App.css';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncExp} from './components/IncomeExpence';
import {History} from './components/TransectionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import {Car} from './components/Sample';


function App() {

  return (

    //<Car />

    <GlobalProvider>
      <Header />

      <div className="container">
        <Balance />
        <IncExp />
        <History />
        <AddTransaction />
      </div>
    </GlobalProvider>

  );
}



export default App;


