
import './assets/css/App.css';
import { Component } from 'react';
import { Route, Switch } from 'react-router';
import DetalleProducto from './components/DetalleProducto';
import Where from './components/Where';
import Home from './components/Home';
import Product from './components/Product';


//rutas y hacerlo class

class App extends Component{

  
  render(){
    return(
      //rutas
      <Switch>
      <Route exact path="/" component={Home} ></Route>
      <Route exact path="/home" component={Home} ></Route>
      <Route exact path="/where" component={Where} ></Route>
      <Route exact path="/products" component={Product} ></Route>
      <Route exact path="/products/:id" component={DetalleProducto} ></Route>
      </Switch>
    )
  }

}


export default App;
