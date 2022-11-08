import { observer } from 'mobx-react';
import './App.css';
import { Counter } from './components/Counter';
import { CounterStore} from './store/CounterStore'

export const myCounter = new CounterStore();

export const App = observer(() => {
  return (
    <div className="App">
      <Counter counter ={myCounter}/>
    </div>
  );
})

export default App;
