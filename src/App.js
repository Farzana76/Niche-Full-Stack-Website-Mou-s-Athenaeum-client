import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
// import NotFound from './Components/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Pay from './Components/Dashboard/Pay/Pay';
import MyOrder from './Components/Dashboard/MyOrder/MyOrder';
import Review from './Components/Dashboard/Review/Review';
import AddProduct from './Components/Admin/AddProduct/AddProduct';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import ManageAllOrders from './Components/Admin/ManageAllOrders/ManageAllOrders';
import ManageProducts from './Components/Admin/ManageProducts/ManageProducts';
import Explore from './Components/Explore/Explore';
import Purchase from './Components/Purchase/Purchase';

function App() {
  return (
    <div className="App">
        <div className="App2">
          <AuthProvider>
            <BrowserRouter>
              <Switch>
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <Route path="/home">
                  <Home></Home>
                </Route>
                <Route path="/explore">
                  <Explore></Explore>
                </Route>
                <Route path="/register">
                  <Register></Register>
                </Route>
                <Route path="/login">
                  <Login></Login>
                </Route>
                <PrivateRoute path="/dashboard">
                  <Dashboard></Dashboard>
                </PrivateRoute>
                <PrivateRoute path="/pay">
                  <Pay></Pay>
                </PrivateRoute>
                <PrivateRoute path="/myOrders/:email&&:name">
                  <MyOrder></MyOrder>
                </PrivateRoute>
                <PrivateRoute path="/review">
                  <Review></Review>
                </PrivateRoute>
                <PrivateRoute path="/addProduct">
                  <AddProduct></AddProduct>
                </PrivateRoute>
                <PrivateRoute path="/makeAdmin">
                  <MakeAdmin></MakeAdmin>
                </PrivateRoute>
                <PrivateRoute path="/manageAllOrders">
                  <ManageAllOrders></ManageAllOrders>
                </PrivateRoute>
                <PrivateRoute path="/manageProducts">
                  <ManageProducts></ManageProducts>
                </PrivateRoute>
                <PrivateRoute path="/product/:pid&&:title">
                  <Purchase></Purchase>
                </PrivateRoute>
                {/*
                <Route path="*">
                  <NotFound></NotFound>
                </Route> */}
              </Switch>
            </BrowserRouter>
          </AuthProvider>
        </div>
    </div>
  );
}

export default App;

