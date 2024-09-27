import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Board">
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

function Square() {
  return <button className="square">X</button>
}

export default App;
