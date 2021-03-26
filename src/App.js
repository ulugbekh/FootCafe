import LeftBlock from './containers/left-block/'
import { Switch , Route, BrowserRouter as Router } from 'react-router-dom'
import './app.scss'
import {
  PageOne,
  PageTwo,
  PageThere
} from './page/index'


function App() {
  return (
    <div className="App">
      <Router>
      <LeftBlock/>
      
        <Switch>
          <Route   path="/PageOne/" component={PageOne}/>
          <Route   path="/PageTwo" component={PageTwo}/>
          <Route   path="/PageThere" component={PageThere}/>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
