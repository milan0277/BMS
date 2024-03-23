import Loginform from './compnent/Loginform';
import CustomerList from './compnent/Customerlist';
import Customertable from './compnent/CustomerTable';
import Bill from './compnent/Billgenerator';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Loginform/>}></Route>
      <Route exact path='/CT' element={<Customertable/>}></Route>
      <Route exact path='/CL' element={<CustomerList/>}></Route>
      <Route exact path='/Bill' element={<Bill/>}></Route>

    </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
