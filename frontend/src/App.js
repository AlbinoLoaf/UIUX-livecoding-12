import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Tweet from './components/Tweet.js';


function App() {
  return (
    <div className="App">
      <div style={{width:'25%'}}>
        <Tweet/>
      </div>
    </div>
  );
}

export default App;
