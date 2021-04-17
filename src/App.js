import logo from './logo.svg';
import { Route, Switch } from "react-router-dom";
import './css/bootstrap.css';
import './css/font-awesome.css';
import './style.css';
import Footer from './component/footer'
import Header from './component/header'
import About from './component/about'
import Contact from './component/contact'
import Main from './component/Main'
import ProductList from './component/productlist'
function App() {
  return (
    <div className="App">
      {/* <Header/> */}
    
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact  path="/about" component={About}/>

      </Switch>
      <ProductList/>
     <Footer/>
    </div>
  );
}

export default App;
