import "./styles.css";
import {
BrowserRouter as Router,
Route,
Switch,
Link
} from "react-router-dom"

function Home() {
return (
<div> Home </div>
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
