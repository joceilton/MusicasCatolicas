import "./styles.css";
import {
BrowserRouter as Router,
Route,
Switch,
Link
}

const Home = () => {
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
