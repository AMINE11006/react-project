import React from 'react';
import Home from './component/home';
import Product from './component/Product';
import Sport from './component/Sport';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter, Link, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand><img src="logo.jpg" alt="logo" style={{height: "50px", width: "50px"}}></img></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link><Link to="/" style={{textDecoration: "none"}}>Home</Link></Nav.Link>
      <Nav.Link><Link to="/Sport" style={{textDecoration: "none"}}>More Sport</Link></Nav.Link>
      <Nav.Link><Link to="/Product" style={{textDecoration: "none"}}>Product</Link></Nav.Link>
    </Nav>
  </Navbar>
    <Route path="/" exact component={Home}/>
      <Route path="/Sport" component={Sport}/>
      <Route path="/Product" component={Product}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
