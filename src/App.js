import "./styles.css";
import {
BrowserRouter as Router,
Route,
Switch,
Link
} from "react-router-dom"

const Home = () => {
return (
<div> Home2 </div>
)
}

export default function App() {
  return (
    <div className="App">
      <Router>
         <Switch>
           <Route path="/">
              <Home/>
           </Route>
         </Switch>
      </Router>
    </div>
  );
}
