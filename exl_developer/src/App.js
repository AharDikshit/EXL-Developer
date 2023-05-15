import logo from './logo.svg';
import './App.css';
import SearchData from './EXL/SearchData';
import axios from 'axios';

function App() {
  const data= axios.fetch("https://dummyjson.com/products")
  return (
    <div className="App">
      <header className="App-header">
        <h1>Table data</h1>
        <SearchData data={data} />
      </header>
    </div>
  );
}

export default App;
