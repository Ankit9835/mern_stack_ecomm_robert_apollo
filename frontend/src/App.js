
import React, { Component }  from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserProfilePage from './pages/user/UserProfilePage';
import UserOrdersPage from './pages/user/UserOrdersPage';
import UserCartDetailsPage from './pages/user/UserCartDetailsPage';
import ProtectedComponent from './components/ProtectedComponent';
import AdminUserPage from './pages/admin/AdminUserPage';
import AdminEditUserPage from './pages/admin/AdminEditUserPage';
import AdminCreateProductsPage from './pages/admin/AdminCreateProductsPage';
import AdminChatsPage from './pages/admin/AdminChatsPage';
import AdminEditProductsPage from './pages/admin/AdminEditProductsPage';
import AdminOrdersPage from './pages/admin/AdminOrdersPage';
import AdminOrderDetailsPage from './pages/admin/AdminOrderDetailsPage';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import RoutesWithUserChatComponent from './components/user/RoutesWithUserChatComponent';


function App() {
  return (
   <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route element={<RoutesWithUserChatComponent />}>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/product-list' element={<ProductListPage />}></Route>
          <Route path='/product-details/:id' element={<ProductDetailsPage />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/register' element={<RegisterPage />}></Route>
        </Route>
        
        <Route  element={<ProtectedComponent  />}>
            {/* User Module */}
            <Route path='/user' element={<UserProfilePage />}></Route>
            <Route path='/user/my-orders' element={<UserOrdersPage />}></Route>
            <Route path='/user/cart-details' element={<UserCartDetailsPage />}></Route>
            <Route path='/user/order-details' element={<UserOrdersPage />}></Route>
        </Route>
        
        <Route  element={<ProtectedComponent admin={true} />}>
         
          {/* Admin Module */}
          <Route path='/admin/user' element={<AdminUserPage />}></Route>
          <Route path='/admin/edit-user' element={<AdminEditUserPage />}></Route>
          <Route path='/admin/create-product' element={<AdminCreateProductsPage />}></Route>
          <Route path='/admin/edit-product' element={<AdminEditProductsPage />}></Route>
          <Route path='/admin/chats' element={<AdminChatsPage />}></Route>
          <Route path='/admin/orders' element={<AdminOrdersPage />}></Route>
          <Route path='/admin/order-details' element={<AdminOrderDetailsPage />}></Route>

        </Route>
      </Routes>
      <FooterComponent />
   </BrowserRouter>
  )
}

export default App;
