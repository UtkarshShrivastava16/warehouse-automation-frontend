import logo from './logo.svg';
import './App.css';
import ImageUploader from './ImageUploader.js';


function App() {

  return (
    <div className="App">
      
      <header className="App-header">
        <h1>Warehouse Automation</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <ImageUploader />
      </header> 
    </div>
  );
}

export default App;
