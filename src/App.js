import Homepage  from "./component/homepage/homepage";
import Register from "./component/register/register";
import Login from "./component/login-UI/login";
import '../src/App.css';
import { BrowserRouter as Router , Switch , Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
        <Route path="/"><Homepage/></Route>
        <Route path="/register"><Register/></Route>
        <Route path="/login"><Login/></Route>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
