// import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ClassDetails from './Pages/Home/ClassDetails/ClassDetails';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/classDetails">
            <ClassDetails />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
