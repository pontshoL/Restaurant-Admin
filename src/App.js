import logo from './logo.svg';
import './App.css';
import HomeAdmin from './Components/homeAdmin';
import AddMeal from './Components/AddMeal';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import Login from './Components/login';
import SignUp from './Components/signup';
import OrderList from './Components/listOfOrders';
import Dash from './dash';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
       <Routes>
          {/* <Route exact path ='/' element={<Dash />}></Route> */}
          <Route exact path ='/' element={<Login />}></Route>
          <Route exact path ='/sign-up' element={<SignUp />}></Route>
          <Route exact path ='/home' element={<HomeAdmin />}></Route>
          <Route exact path ='/addmeal' element={<AddMeal />}></Route>
          <Route exact path ='/list' element={<OrderList />}></Route>
       </Routes>
    </BrowserRouter>
</div>
  );
}

export default App;
