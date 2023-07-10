import './App.css';
import data from './components/data.json';
import SortableTable from './components/SortableTable.js';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
       <SortableTable data={data}/>
    </div>
  );
}

export default App;
