//recat y recat routes
import { useState } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { DtravesiaProvider } from '../../Context';
//estilos
import Home from '../Home';
import Login from '../Login'; 

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> }
  ])
  return routes;
}

function App() {

  return (
    <BrowserRouter  basename="/Dtravesia_menuPage">
      <DtravesiaProvider>
        <AppRoutes></AppRoutes>
      </DtravesiaProvider>
    </BrowserRouter>
  )
}

export default App
