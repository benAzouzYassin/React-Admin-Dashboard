import { Box } from '@mui/material';
import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import { PagesContextProvider } from "./context/PagesContext"
import MainDashboard from './pages/Dashboard/MainDashboard/MainDashboard';
import RightBar from './pages/Dashboard/rightBar/RightBar';
import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Orders from './pages/Orders/Orders';
import Customers from './pages/Customers/Customers';
import Products from './pages/Products/Products';

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false)
  const toggleSideBar = () => setSidebarVisible(prev => !prev)
  const location = useLocation()
  const pageGridClassName = location.pathname != "/" && location.pathname != "/Dashboard" ? "lg:grid-cols-[11rem_auto_10rem]" : "lg:grid-cols-[11rem_auto_20rem]"
  return (

    <PagesContextProvider>

      <Box className={`App__glass  lg:grid pt-10 flex flex-col  bg-gradient lg:flex-row items-center lg:items-start ${pageGridClassName}`}>
        <Sidebar isVisible={sidebarVisible} toggleSideBar={toggleSideBar} />

        <Routes>
          <Route path='/dashboard' element={<><MainDashboard toggleSideBar={toggleSideBar} /><RightBar /></>} />
          <Route path='/' element={<><MainDashboard toggleSideBar={toggleSideBar} /><RightBar /></>} />
          <Route path='/orders' element={<Orders toggleSideBar={toggleSideBar} />} />
          <Route path='/customers' element={<Customers toggleSideBar={toggleSideBar} />} />
          <Route path='/products' element={<Products toggleSideBar={toggleSideBar} />} />
          <Route path='*' element={<h1>not found</h1>} />
        </Routes>


      </Box>

    </PagesContextProvider>
  );
}

export default App;
