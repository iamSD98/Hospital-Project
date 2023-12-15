import Routing from "./Routing/Routing";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <header className="App-header">
          <Routing />
        </header>
      </div>
    </Router>
  );
}

export default App;
