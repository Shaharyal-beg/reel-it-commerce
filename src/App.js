import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import Dashboard from './Component/Dashboard/Dashboard';
import Landingpage from './Component/Landingpage/Landingpage';
import SidePanel from './Component/Side-Panel/SidePanel';
import ProductCatalog from './Component/Product Catalog/ProductCatalog';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route exact path='/' element={<Landingpage/>}/>
          <Route exact path='/Login' element={<Login/>}/>
          <Route exact path='Signup' element={<Signup/>}/>
          <Route path='/SidePanel' element={<SidePanel/>}>
            <Route exact path='/SidePanel/Dashboard' element={<Dashboard/>}/>
            <Route exact path='/SidePanel/ProductCatalog' element={<ProductCatalog/>}/>
          </Route>
        </Routes>
    </Router>
      </>
  );
}


export default App;