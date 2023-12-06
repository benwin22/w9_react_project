import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
// new adds
import { FirebaseAppProvider } from 'reactfire';
import 'firebase/auth';

//internal imports
import { Home, Shop, Cart, Auth } from './components'; 
import './index.css';
import { theme } from './Theme/themes';
// new adds
import { firebaseConfig } from './firebaseConfig';
// added line 18 below
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}> 
      <ThemeProvider theme={ theme }>
        <Router>
          <Routes>
            <Route path='/' element = {<Home title = {"4x4Runner Shop"}/>}/>
            <Route path='/auth' element = {<Auth title = {"4x4Runner Shop"}/>}/>
            <Route path='/shop' element = {<Shop />} />
            <Route path='/cart' element = {<Cart />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </FirebaseAppProvider>
  </React.StrictMode>,
)
