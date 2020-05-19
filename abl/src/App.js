import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Alert from './components/layout/Alert';
import Navbar from './components/layout/Navbar';
import BookState from './context/books/BookState';
import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <BookState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="w-9/12 mx-auto">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </BookState>
  );
};

export default App;
