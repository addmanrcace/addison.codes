import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BookState from './context/books/BookState';
import AlertState from './context/alert/AlertState';
import AuthState from './context/auth/AuthState';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <BookState>
        <AlertState>
          <Router>
            <div className="App bg-gray-300 flex flex-col min-h-screen">
              <Navbar />
              <div className="w-9/12 mx-auto flex-grow">
                <Alert />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                </Switch>
              </div>
              <Footer />
            </div>
          </Router>
        </AlertState>
      </BookState>
    </AuthState>
  );
};

export default App;
