import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from "./components/Calendar";
import { EventProvider } from "./context/EventContext";


function App() {
  return (
    <div className="container mt-4">
      <Calendar />
    </div>
  );
}

export default App;
