// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
// import Home from './components/home';
// import About from './components/about';
// import login from './components/login';
// import Login from './components/login';
// import ContactUs from './components/Contactus'
// import Header from './components/header';
// import Eventandling from './components/eventhandling';
// import Gallery from './components/gallery';
// import Updateimage from './components/updateimage';
// import { createTheme, ThemeProvider } from '@mui/material';
// import { useState } from 'react';

// function App() {
//   const [darktheme, setDarktheme] =useState(false);

//   const themeA = createTheme({
//     palette:{
//       mode:"dark",
//       background:{
//         paper:"#842fcad0"
//       },
//     },
//   });


//   const themeB = createTheme({
//     palette: {
//       mode: "dark",
//       background: {
//         paper: "#555555",
//       },
//     },
//   });


//   return (
    
// <div>     
// <ThemeProvider theme={themeA= darktheme ? themeB : themeA}>
// <BrowserRouter>
// <Header darktheme={darktheme} setDarktheme={setDarktheme}></Header>

//  <Routes>
//    <Route element={ <Home></Home>} path="/home"/>
//    <Route element={ <Login></Login>} path="/login"/> 
//    <Route element={ <About></About>} path="/about"/>
//    <Route element={ <ContactUs></ContactUs>} path="/contactus"/> 
//    <Route element={<Eventandling></Eventandling>} path="/event"/> 
//    <Route element={<Gallery></Gallery>} path="/gallery"/>
//    {/* <Route element={<Updateimage></Updateimage>} path="/updateimage"/> */}
//  </Routes>
// </BrowserRouter>
// </ThemeProvider>
//   </div>
//   );
// }
// export default App;