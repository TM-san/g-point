import React from "react";
import { Box } from "@mui/material";
import {Route,Routes} from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import MapPage from "./components/Pages/MapPage";
import SchedulePage from "./components/Pages/SchedulePage";
import Header from "./components/Templates/Header";
import Footer from "./components/Templates/Footer";


const App = ()=>{
    return (
        <Box>
            <Header/>
            <Box sx={{position:"fixed"}}>
                <Box sx={{height:63}}></Box>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/map" element={<MapPage/>} />
                    <Route path="/schedule" element={<SchedulePage/>} />
                </Routes>
                <Box sx={{height:63}}></Box>
            </Box>
            <Footer/>
        </Box>
    );
}


export default App;
