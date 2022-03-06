import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import Login from "./components/login";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import EventHandling from "./components/eventhandling";
import Gallery from "./components/gallery";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { green } from "@mui/material/colors";
import ListProducts from "./components/listproduct";
import Signup from "./components/signup";
import AddProduct from "./components/addproducts";
import ManageProduct from "./components/manageproduct";
import { UserProvider } from "./userContext";
import Chat from "./components/chat";

function App() {
  const [darktheme, setDarktheme] = useState(false);
  
  const themeB = createTheme({
    palette:{
    // secondary: {
    //   main: "#1adb77",
    //   light:"#7111ee",
    //   dark:"#1e5338"
    // ,
    mode:"dark",
    background:{
      paper:"#700df1"}
    // success:{
    //   main:"#7111ee",
    //   dark:"#7111ee"
    // }
      // background: {
      //   paper: "#53421e",
      // },
    },
  });

  const themeA = createTheme({
    palette: {
      mode: "light",
      success: {
        main: "#00ffb3",
        dark: "#ccad00",
      },
      // secondary: {
      //   main: "#1adb77",
      //   light:"#7111ee",
      //   dark:"#1e5338"
      // ,
      // secondary: {
      //   main: #aaaaaa,
      //   light:"#00ffb3",
      //   dark:"#ccad00"
      // ,
    },
  
  });

  return (
    <div>
      <UserProvider>
      <ThemeProvider theme={darktheme ? themeB : themeA}>
        <BrowserRouter>
          <Header darktheme={darktheme} setDarktheme={setDarktheme}></Header>
          {/* <Link to="/login">Login Now</Link>
        <Link to="/home">Go to Home</Link> */}

          <Routes>
            <Route element={<Home></Home>} path="/home" />
            <Route element={<Login />} path="/login" />
            <Route element={<EventHandling />} path="/event" />
            <Route element={<Gallery />} path="/gallery" />
            <Route element={<ListProducts></ListProducts>} path="/products"/>
            <Route element={<Signup></Signup>} path="/Signup" />
            <Route element={<AddProduct></AddProduct>} path="/addproduct" />
            <Route element={<ManageProduct/>} path="/manage" />
            <Route element={<Chat></Chat>} path="/chat" />
            
          </Routes>
        </BrowserRouter>
        {/* <ListProducts /> */}
      </ThemeProvider>
    </UserProvider>
    </div>
  );
}
export default App;

