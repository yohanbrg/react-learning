import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

import TablePlayground from './pages/TablePlayground';
import ApiInteraction from './pages/ApiInteraction'; 

class App extends Component{

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/table-playground">Table Playground</Link>
                            </li>
                            <li>
                                <Link to="/api-interaction">Api Interaction</Link>
                            </li>
                        </ul>
                    <hr/>
                        <Route path="/" />
                        <Route path="/table-playground" component={TablePlayground} />
                        <Route path="/api-interaction" component={ApiInteraction} />
                    </div>
                </div>
            </Router>
        );
    }

}

export default App;
