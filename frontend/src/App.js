import logo from './logo.svg';
import shark from './assets/shark_fin.png';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <img src={shark} alt='shark' style={{height: '200px', width: '200px'}}/>
      <p style={{fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', fontFamily: 'UhBeeBEOJJI', margin: '0'}}>상어 밥 주는중...🐟</p>
    </div>
    </>
  );
}

export default App;
