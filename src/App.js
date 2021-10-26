import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './componenant/Navbar'
import { HomePage } from './pages/Home'
function App() {
  return (
    <div className="App">

      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
