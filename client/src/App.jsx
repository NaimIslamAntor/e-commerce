import './App.css'

//import components

import Navbar from './components/Navbar';


//import pages
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
